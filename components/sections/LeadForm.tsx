"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  furnitureTypeLabels,
  furnitureTypes,
  leadSchema,
  type LeadFormValues,
} from "../../lib/validators";
import { track } from "../../lib/track";
import useDesktopMotion from "../ui/useDesktopMotion";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [usedTelegramFallback, setUsedTelegramFallback] = useState(false);
  const { isMounted, shouldAnimate } = useDesktopMotion();

  // ✅ Configure once
  const TELEGRAM_USERNAME = "R2D2_55";

  const leadEndpoint =
    process.env.NEXT_PUBLIC_LEAD_ENDPOINT ??
    "https://formsubmit.co/ajax/mebel@a-stra.ru";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      contact: "",
      furnitureType: "business",
      comment: "",
      consent: false,
      honeypot: "",
    },
  });

  const telegramMessageBuilder = useCallback((values: LeadFormValues) => {
    return [
      "Новая заявка с лендинга",
      `Имя: ${values.name}`,
      `Контакт: ${values.contact}`,
      `Тип изделия: ${furnitureTypeLabels[values.furnitureType]}`,
      `Комментарий: ${values.comment || "—"}`,
    ].join("\n");
  }, []);

  const buildTelegramWebUrl = useCallback(
    (message?: string) => {
      const base = `https://t.me/${TELEGRAM_USERNAME}`;
      if (!message) return base;
      return `${base}?text=${encodeURIComponent(message)}`;
    },
    [TELEGRAM_USERNAME]
  );

  // ✅ “World-class” UX: try app deep-link first on mobile; always fallback to web
  const openTelegram = useCallback(
    (message?: string) => {
      const webUrl = buildTelegramWebUrl(message);
      const ua =
        typeof navigator !== "undefined" ? navigator.userAgent : "";
      const isMobile =
        /Android|iPhone|iPad|iPod/i.test(ua) ||
        (typeof navigator !== "undefined" &&
          (navigator?.maxTouchPoints ?? 0) > 1 &&
          /Macintosh/i.test(ua));

      // Desktop: go straight to web (no “blocked deep-link” weirdness)
      if (!isMobile) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
        return;
      }

      // Mobile: attempt to open Telegram app, then fallback to web
      const encodedText = message ? encodeURIComponent(message) : "";
      const appUrl = message
        ? `tg://resolve?domain=${TELEGRAM_USERNAME}&text=${encodedText}`
        : `tg://resolve?domain=${TELEGRAM_USERNAME}`;

      let fallbackTimer: number | null = null;

      const cleanup = () => {
        if (fallbackTimer) window.clearTimeout(fallbackTimer);
        fallbackTimer = null;
        window.removeEventListener("pagehide", onPageHide);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };

      const onPageHide = () => cleanup();

      const onVisibilityChange = () => {
        // If app opened, page becomes hidden — cancel web fallback
        if (document.hidden) cleanup();
      };

      window.addEventListener("pagehide", onPageHide, { once: true });
      document.addEventListener("visibilitychange", onVisibilityChange);

      // Start fallback only after trying deep-link
      fallbackTimer = window.setTimeout(() => {
        cleanup();
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }, 900);

      // Use location for better deep-link success rate on iOS
      window.location.href = appUrl;
    },
    [TELEGRAM_USERNAME, buildTelegramWebUrl]
  );

  const telegramLink = useMemo(() => buildTelegramWebUrl(), [buildTelegramWebUrl]);

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("loading");
    setUsedTelegramFallback(false);
    track("lead_submit", { furnitureType: values.furnitureType });

    const telegramMessage = telegramMessageBuilder(values);

    const openTelegramFallback = () => {
      // ✅ Direct chat (not share sheet), with text prefilled
      openTelegram(telegramMessage);

      setUsedTelegramFallback(true);
      setStatus("success");
      reset();
      track("lead_fallback");
    };

    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          contact: values.contact,
          furnitureType: furnitureTypeLabels[values.furnitureType],
          comment: values.comment || "—",
          _subject: "Новая заявка с лендинга AstraLend",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      track("lead_success");
      reset();
    } catch (error) {
      console.error(error);
      track("lead_error");
      openTelegramFallback();
    }
  };

  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
          viewport: { once: true, amount: 0.3 },
        }
      : { initial: false };
  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

  return (
    <section id="lead" className="bg-cream py-16 sm:py-20 section-desktop">
      <motion.div {...fadeUpProps(0)} className="section-header">
        <div className="section-title-row">
          <div className="section-title-divider" aria-hidden="true" />
          <h2 className="section-title">Обсудим ваш проект</h2>
        </div>
      </motion.div>

      <motion.div
        {...fadeUpProps(0.1)}
        className="section-header mt-6 sm:mt-8 lg:mt-10"
      >
        <div className="space-y-6">
          <p className="text-lg text-charcoal lg:text-[1.25rem] lg:leading-relaxed">
            Ответим с вариантами материалов и стоимостью. Обычно — в течение рабочего
            дня.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Договор", "Гарантия", "Собственное производство"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-steel/70 bg-warm/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="contact-cta mt-6 md:hidden">
          <a
            href={telegramLink}
            className="telegram-button"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span>Написать в Telegram</span>
          </a>
        </div>

        <div className="contact-info-column mt-10 space-y-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form rounded-none border border-steel bg-linen p-6 lg:flex lg:h-full lg:flex-col lg:rounded-2xl lg:p-8 lg:shadow-elevated"
            aria-live="polite"
          >
            <div className="space-y-6 lg:flex-1">
              <div>
                <label className="text-charcoal text-sm" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  className="focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0 lg:h-14 lg:rounded-lg lg:py-0"
                  {...register("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-rose-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-charcoal text-sm" htmlFor="contact">
                  Телефон или мессенджер
                </label>
                <input
                  id="contact"
                  type="text"
                  placeholder="+7 999 000-00-00"
                  className="focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0 lg:h-14 lg:rounded-lg lg:py-0"
                  {...register("contact")}
                  aria-invalid={Boolean(errors.contact)}
                  aria-describedby={errors.contact ? "contact-error" : undefined}
                />
                {errors.contact && (
                  <p id="contact-error" className="mt-2 text-sm text-rose-600">
                    {errors.contact.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-charcoal text-sm" htmlFor="furnitureType">
                  Тип изделия
                </label>
                <select
                  id="furnitureType"
                  className="focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite focus-visible:border-graphite focus-visible:ring-0 lg:h-14 lg:rounded-lg lg:py-0"
                  {...register("furnitureType")}
                  aria-invalid={Boolean(errors.furnitureType)}
                  aria-describedby={
                    errors.furnitureType ? "furniture-type-error" : undefined
                  }
                >
                  {furnitureTypes.map((type) => (
                    <option key={type} value={type}>
                      {furnitureTypeLabels[type]}
                    </option>
                  ))}
                </select>
                {errors.furnitureType && (
                  <p
                    id="furniture-type-error"
                    className="mt-2 text-sm text-rose-600"
                  >
                    {errors.furnitureType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-charcoal text-sm" htmlFor="comment">
                  Комментарий (необязательно)
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  placeholder="Кратко опишите задачу или пожелания"
                  className="focus-ring mt-2 w-full resize-none rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0 lg:rounded-lg lg:py-3"
                  {...register("comment")}
                  aria-invalid={Boolean(errors.comment)}
                  aria-describedby={errors.comment ? "comment-error" : undefined}
                />
                {errors.comment && (
                  <p id="comment-error" className="mt-2 text-sm text-rose-600">
                    {errors.comment.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  className="focus-ring mt-1 h-4 w-4 rounded border-steel bg-warm text-graphite accent-graphite"
                  {...register("consent")}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <label className="text-charcoal text-sm" htmlFor="consent">
                  Я согласен(а) с политикой обработки персональных данных
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="-mt-2 text-sm text-rose-600">
                  {errors.consent.message}
                </p>
              )}

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                {...register("honeypot")}
              />
            </div>

            <div className="mt-6 space-y-6">
              <div className="space-y-3">
                <button
                  type="submit"
                  className="focus-ring w-full rounded-none border border-graphite bg-graphite px-6 py-4 text-sm font-semibold text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60 lg:rounded-lg lg:text-[length:var(--font-nav)]"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Отправляем..." : "Обсудить проект"}
                </button>

                <a
                  href={telegramLink}
                  className="telegram-button hidden w-full justify-center md:flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.460-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span>Написать в Telegram</span>
                </a>
              </div>

              {status === "success" && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {usedTelegramFallback
                    ? "Открыли Telegram с вашим сообщением. Если окно не появилось, напишите нам вручную."
                    : "Спасибо. Мы свяжемся с вами в ближайшее время."}
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Не удалось отправить. Попробуйте ещё раз или напишите в мессенджер.
                </div>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}


