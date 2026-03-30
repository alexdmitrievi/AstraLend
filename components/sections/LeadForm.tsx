"use client";

import { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues } from "../../lib/validators";
import { track } from "../../lib/track";
import useDesktopMotion from "../ui/useDesktopMotion";

type FormStatus = "idle" | "loading" | "success" | "error";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.531 5.855L0 24l6.341-1.51A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.017-1.378l-.36-.214-3.727.888.927-3.616-.235-.371A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
  </svg>
);

export default function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { isMounted, shouldAnimate } = useDesktopMotion();

  const TELEGRAM_USERNAME = "R2D2_55";
  const PHONE_RAW = "+79136263444";

  const leadEndpoint =
    process.env.NEXT_PUBLIC_LEAD_ENDPOINT ??
    "https://formsubmit.co/ajax/4e68de28843824cca972a99dd03c9caf";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      contact: "",
      consent: true,
      honeypot: "",
    },
  });

  const buildTelegramWebUrl = useCallback(
    (message?: string) => {
      const base = `https://t.me/${TELEGRAM_USERNAME}`;
      if (!message) return base;
      return `${base}?text=${encodeURIComponent(message)}`;
    },
    [TELEGRAM_USERNAME]
  );

  const telegramLink = useMemo(() => buildTelegramWebUrl(), [buildTelegramWebUrl]);
  const whatsappLink = useMemo(
    () => `https://wa.me/${PHONE_RAW.replace("+", "")}?text=${encodeURIComponent("Здравствуйте! Хочу получить каталог и расчёт стоимости.")}`,
    [PHONE_RAW]
  );

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

  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
          viewport: { once: true, amount: 0.2 },
        }
      : { initial: false };

  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

  const benefits = [
    "Договор и гарантия",
    "Собственное производство",
    "Расчёт за 1 час",
  ];

  return (
    <section id="lead" className="relative overflow-hidden bg-graphite py-16 sm:py-20 lg:py-28">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="section-header relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:items-center">

          {/* LEFT: value proposition */}
          <div>
            <motion.div {...fadeUpProps(0)} className="section-title-row mb-6">
              <div className="h-px w-10 bg-gold/70" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Бесплатный расчёт
              </span>
            </motion.div>

            <motion.h2
              {...fadeUpProps(0.08)}
              className="font-heading text-3xl font-semibold leading-[1.12] text-white sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]"
            >
              Получите каталог<br />
              <span className="text-gold">со скидкой 10%</span><br />
              и расчёт сметы за 1 час
            </motion.h2>

            <motion.p
              {...fadeUpProps(0.16)}
              className="mt-4 text-base leading-relaxed text-stone/70 lg:text-lg"
            >
              Отправим каталог в WhatsApp без звонка. Менеджер свяжется в течение рабочего дня.
            </motion.p>

            <motion.ul {...fadeUpProps(0.24)} className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-stone/80">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-medium lg:text-base">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUpProps(0.32)} className="mt-10 hidden lg:flex lg:items-center lg:gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex cursor-pointer items-center gap-3 rounded-lg border border-stone/20 bg-stone/10 px-5 py-3 text-sm font-medium text-stone/80 transition-all duration-200 hover:border-stone/40 hover:bg-stone/20 hover:text-white"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex cursor-pointer items-center gap-3 rounded-lg border border-stone/20 bg-stone/10 px-5 py-3 text-sm font-medium text-stone/80 transition-all duration-200 hover:border-stone/40 hover:bg-stone/20 hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
            </motion.div>
          </div>

          {/* RIGHT: form card */}
          <motion.div {...fadeUpProps(0.1)}>
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10">
              {/* decorative gold line */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center py-8 text-center"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <path d="M6 16L12.5 22.5L26 9.5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-graphite">Заявка принята</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal">
                      Мы отправим каталог и расчёт<br />в WhatsApp в течение рабочего дня.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="focus-ring mt-6 cursor-pointer text-sm text-ash underline underline-offset-2 transition hover:text-graphite"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit(onSubmit)}
                    aria-live="polite"
                    noValidate
                  >
                    <p className="font-heading text-[1.35rem] font-semibold leading-snug text-graphite sm:text-2xl">
                      Получить каталог<br />
                      <span className="text-walnut">со скидкой 10%</span> и расчёт<br />
                      стоимости за 1 час
                    </p>
                    <p className="mt-2 text-sm text-charcoal">
                      Отправим каталог в WhatsApp без звонка
                    </p>

                    <div className="mt-6">
                      <label htmlFor="contact" className="sr-only">Телефон</label>
                      <input
                        id="contact"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="Телефон"
                        className="focus-ring w-full rounded-lg border border-steel bg-stone/40 px-4 py-4 text-base text-graphite placeholder:text-ash/70 transition duration-200 focus:border-graphite focus:bg-white focus-visible:ring-0 lg:text-[1.05rem]"
                        {...register("contact")}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={errors.contact ? "contact-error" : undefined}
                        disabled={status === "loading"}
                      />
                      {errors.contact && (
                        <p id="contact-error" role="alert" className="mt-2 text-sm text-rose-600">
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

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="focus-ring group mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-graphite px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-60 lg:text-base"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Отправляем...
                        </>
                      ) : (
                        <>
                          Получить КП и скидку
                          <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
                      >
                        Не удалось отправить. Позвоните нам или напишите в мессенджер.
                      </motion.div>
                    )}

                    <div className="mt-4 flex items-start gap-2.5">
                      <input
                        id="consent"
                        type="checkbox"
                        className="focus-ring mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-steel bg-white accent-graphite"
                        {...register("consent")}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "consent-error" : undefined}
                        disabled={status === "loading"}
                      />
                      <label htmlFor="consent" className="cursor-pointer text-xs leading-relaxed text-ash">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a
                          href="/privacy-policy"
                          className="underline underline-offset-2 transition hover:text-graphite"
                          target="_blank"
                          rel="noreferrer"
                        >
                          политикой обработки персональных данных
                        </a>{" "}
                        в соответствии с Федеральным законом №&nbsp;152-ФЗ
                      </label>
                    </div>
                    {errors.consent && (
                      <p id="consent-error" role="alert" className="mt-1.5 text-xs text-rose-600">
                        {errors.consent.message}
                      </p>
                    )}

                    {/* mobile messenger links */}
                    <div className="mt-6 flex items-center gap-3 lg:hidden">
                      <div className="h-px flex-1 bg-steel/50" />
                      <span className="text-xs text-ash">или напишите напрямую</span>
                      <div className="h-px flex-1 bg-steel/50" />
                    </div>
                    <div className="mt-4 flex gap-3 lg:hidden">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-steel/80 bg-stone/30 py-3 text-sm font-medium text-charcoal transition-all duration-200 hover:border-graphite/40 hover:bg-stone/60"
                      >
                        <WhatsAppIcon />
                        WhatsApp
                      </a>
                      <a
                        href={telegramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-steel/80 bg-stone/30 py-3 text-sm font-medium text-charcoal transition-all duration-200 hover:border-graphite/40 hover:bg-stone/60"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                        Telegram
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
