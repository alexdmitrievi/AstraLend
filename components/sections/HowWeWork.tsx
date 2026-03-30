"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useDesktopMotion from "../ui/useDesktopMotion";

/* ─── Step data ───────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Заявка и обсуждение",
    description:
      "Оставляете заявку или звоните — обсуждаем стиль, размеры, материалы и бюджет.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Замер и эскиз",
    description:
      "Выезжаем на замер, создаём эскиз и согласовываем финальный вариант с вами.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Производство",
    description:
      "Изготавливаем мебель на собственном производстве с контролем качества на каждом этапе.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Доставка и монтаж",
    description:
      "Доставляем по всей России, аккуратно собираем и устанавливаем на месте.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

/* ─── Step card ───────────────────────────────────────────── */
function StepCard({
  step,
  index,
  shouldAnimate,
}: {
  step: (typeof steps)[0];
  index: number;
  shouldAnimate: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-5 lg:items-center lg:text-center"
    >
      {/* Icon circle */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-graphite text-gold shadow-md lg:mx-auto">
        {step.icon}
      </div>

      {/* Number badge */}
      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-body text-[11px] font-bold text-graphite lg:right-auto lg:-top-2 lg:left-1/2 lg:-translate-x-1/2">
        {step.number}
      </span>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-semibold text-graphite">
          {step.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-charcoal/80">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main section ────────────────────────────────────────── */
export default function HowWeWork() {
  const { shouldAnimate } = useDesktopMotion();

  return (
    <section
      aria-label="Как мы работаем"
      className="bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center lg:mb-20">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Процесс
          </p>
          <h2 className="font-heading text-3xl font-semibold text-graphite lg:text-4xl">
            Как мы работаем
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-steel/50 lg:block"
            style={{ marginLeft: "2rem", marginRight: "2rem" }}
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                shouldAnimate={shouldAnimate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
