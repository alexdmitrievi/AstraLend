"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { furnitureTypes, leadSchema, type LeadFormValues } from "../../lib/validators";
import { track } from "../../lib/track";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
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
      furnitureType: "Кухня",
      comment: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("loading");
    track("lead_submit", { furnitureType: values.furnitureType });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      track("lead_success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      track("lead_error");
    }
  };

  return (
    <section id="lead" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto mt-8 grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-graphite/70" aria-hidden="true" />
              <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                Обсудим ваш проект
              </h2>
            </div>
          </div>
          <p className="text-lg text-charcoal">
            Ответим с вариантами материалов и стоимостью. Обычно — в течение рабочего
            дня.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-ash">
            Договор. Гарантия. Собственное производство.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-none border border-steel bg-linen p-6"
            aria-live="polite"
          >
            <div className="space-y-6">
              <div>
                <label className="text-charcoal text-sm" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  className="focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0"
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
                  className="focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0"
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
                  className="focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite focus-visible:border-graphite focus-visible:ring-0"
                  {...register("furnitureType")}
                  aria-invalid={Boolean(errors.furnitureType)}
                  aria-describedby={
                    errors.furnitureType ? "furniture-type-error" : undefined
                  }
                >
                  {furnitureTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.furnitureType && (
                  <p id="furniture-type-error" className="mt-2 text-sm text-rose-600">
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
                  className="focus-ring mt-2 w-full resize-none rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0"
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

              <button
                type="submit"
                className="focus-ring w-full rounded-none border border-graphite bg-graphite px-6 py-4 text-sm font-semibold text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Отправляем..." : "Обсудить проект"}
              </button>

              {status === "success" && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Спасибо. Мы свяжемся с вами в ближайшее время.
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
      </div>
    </section>
  );
}
