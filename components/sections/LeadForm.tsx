"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues } from "../../lib/validators";
import { track } from "../../lib/track";

type FormStatus = "idle" | "loading" | "success" | "error";

type LeadFormProps = {
  /** Путь к фактуре или null, если файла ещё нет в public/. */
  textureSrc?: string | null;
};

const TELEGRAM_USERNAME = "R2D2_55";
const PHONE_RAW = "+79136263444";

const MIN_PHONE_DIGITS = 10;

const benefits = [
  "Договор и гарантия на изделие",
  "Собственное производство полного цикла",
  "Доставка и монтаж в 47 городах России",
  "20+ лет на рынке мягкой мебели",
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8L6.5 11.5L13 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LeadForm({ textureSrc = null }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  const leadEndpoint =
    process.env.NEXT_PUBLIC_LEAD_ENDPOINT ??
    "https://formsubmit.co/ajax/4e68de28843824cca972a99dd03c9caf";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      contact: "",
      // ФЗ-152: согласие подтверждает пользователь, а не галочка по умолчанию.
      consent: false,
      honeypot: "",
    },
  });

  const contactValue = watch("contact") ?? "";
  const consentValue = watch("consent") ?? false;

  const phoneDigits = useMemo(
    () => contactValue.replace(/\D/g, "").length,
    [contactValue]
  );

  const hasEnoughDigits = phoneDigits >= MIN_PHONE_DIGITS;
  const canSubmit = consentValue && hasEnoughDigits;

  const whatsappLink = `https://wa.me/${PHONE_RAW.replace("+", "")}?text=${encodeURIComponent(
    "Здравствуйте! Хочу получить каталог и расчёт стоимости."
  )}`;
  const telegramLink = `https://t.me/${TELEGRAM_USERNAME}`;

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("loading");
    track("lead_submit", {});

    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          contact: values.contact,
          _subject: "Новая заявка — каталог и расчёт сметы",
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
      setStatus("error");
    }
  };

  return (
    <section
      id="lead"
      tabIndex={-1}
      className="section-pad relative scroll-mt-24 overflow-hidden bg-graphite"
    >
      {textureSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={textureSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22]"
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(44,44,44,.9) 0%, rgba(44,44,44,.96) 100%)",
        }}
      />

      <div className="wrap relative grid items-start gap-14 lg:gap-16 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        {/* Слева: предложение */}
        <div>
          <p className="eyebrow text-white/60">Расчёт проекта</p>
          <h2 className="h-section mt-4 max-w-[18ch] text-white">
            Пришлём каталог и смету по вашим размерам
          </h2>
          <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-white/80">
            Оставьте телефон — отправим каталог в WhatsApp или Telegram, без
            звонка. Менеджер свяжется в течение рабочего дня.
          </p>

          <ul className="mt-10 border-t border-white/15">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-4 border-b border-white/15 py-4"
              >
                <span className="text-gold" aria-hidden="true">
                  <CheckIcon />
                </span>
                <span className="text-[14px] text-white/80">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-[44px] items-center border border-white/35 px-6 text-[13px] tracking-[0.08em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              WhatsApp
            </a>
            <a
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-[44px] items-center border border-white/35 px-6 text-[13px] tracking-[0.08em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              Telegram
            </a>
          </div>
        </div>

        {/* Справа: карточка формы */}
        <div className="bg-cream-light p-7 lg:p-10">
          {status === "success" ? (
            <div className="py-6">
              <h3 className="font-heading text-[26px] font-medium text-ink">
                Заявка принята
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-charcoal">
                Мы отправим каталог и расчёт в WhatsApp или Telegram в течение
                рабочего дня.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="focus-ring mt-8 text-[13px] uppercase tracking-[0.1em] text-ash underline underline-offset-4 transition-colors duration-300 hover:text-ink"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} aria-live="polite" noValidate>
              <p className="font-heading text-[24px] font-medium leading-tight text-ink">
                Каталог и смета
              </p>
              <p className="mt-2.5 text-[14px] text-ash">
                Телефон или мессенджер — на выбор.
              </p>

              <div className="mt-8">
                <label
                  htmlFor="contact"
                  className="block text-[12px] uppercase tracking-[0.16em] text-ash"
                >
                  Телефон
                </label>
                <input
                  id="contact"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 900 000-00-00"
                  className="focus-ring mt-2 w-full border-0 border-b border-steel bg-transparent px-0 py-3 text-[16px] text-ink placeholder:text-ash/60 transition-colors duration-300 focus:border-ink focus-visible:ring-0"
                  {...register("contact")}
                  aria-invalid={Boolean(errors.contact)}
                  aria-describedby={errors.contact ? "contact-error" : undefined}
                  disabled={status === "loading"}
                />
                {errors.contact && (
                  <p id="contact-error" role="alert" className="mt-2 text-[13px] text-rose-700">
                    {errors.contact.message}
                  </p>
                )}
              </div>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                {...register("honeypot")}
              />

              <div className="mt-7 flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  className="focus-ring mt-[3px] h-4 w-4 flex-shrink-0 rounded-none border border-steel bg-white accent-ink"
                  {...register("consent")}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  disabled={status === "loading"}
                />
                <label htmlFor="consent" className="text-[12px] leading-relaxed text-ash">
                  Согласен на обработку персональных данных в соответствии с{" "}
                  <Link
                    href="/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 transition-colors duration-300 hover:text-ink"
                  >
                    политикой обработки персональных данных
                  </Link>{" "}
                  и Федеральным законом №&nbsp;152-ФЗ
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" role="alert" className="mt-2 text-[12px] text-rose-700">
                  {errors.consent.message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !canSubmit}
                className="focus-ring btn btn-dark mt-7 w-full"
              >
                {status === "loading" ? "Отправляем…" : "Получить каталог и смету"}
              </button>

              <p className="mt-3 text-[12px] leading-relaxed text-ash">
                {canSubmit
                  ? "Отправим каталог в WhatsApp или Telegram — без звонка"
                  : !consentValue
                    ? "Отметьте согласие на обработку данных, чтобы отправить заявку"
                    : "Укажите номер телефона полностью"}
              </p>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-4 border border-rose-300 bg-rose-50 px-4 py-3 text-[13px] text-rose-700"
                >
                  Не удалось отправить. Позвоните нам или напишите в мессенджер.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
