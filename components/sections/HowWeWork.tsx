"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

type HowWeWorkProps = {
  /** Кадр производства 4:5 или null, если файла ещё нет в public/. */
  workshopSrc?: string | null;
};

/* ─── useCountUp ──────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1400) {
  // Стартуем сразу с целевого значения: так статический HTML и режим
  // prefers-reduced-motion показывают настоящую цифру, а не ноль.
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { shouldAnimate } = useDesktopMotion();

  useEffect(() => {
    if (!inView || !shouldAnimate) return;

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, shouldAnimate, target, duration]);

  return { count, ref };
}

const metrics = [
  { target: 120, suffix: "+", label: "проектов выполнено" },
  { target: 20, suffix: "+", label: "лет на рынке" },
  { target: 47, suffix: "", label: "городов России" },
];

const steps = [
  {
    number: "01",
    title: "Заявка и обсуждение",
    description:
      "Обсуждаем стиль, размеры, материалы и бюджет — по телефону или в мессенджере.",
  },
  {
    number: "02",
    title: "Замер и эскиз",
    description:
      "Выезжаем на замер, готовим эскиз и согласовываем финальный вариант.",
  },
  {
    number: "03",
    title: "Производство",
    description:
      "Изготавливаем на собственном производстве с контролем на каждом этапе.",
  },
  {
    number: "04",
    title: "Доставка и монтаж",
    description:
      "Доставляем по всей России, аккуратно собираем и устанавливаем на месте.",
  },
];

function Metric({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div>
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="block font-heading font-medium leading-none text-ink"
        style={{ fontSize: "clamp(30px, 3.4vw, 44px)" }}
      >
        {count}
        {suffix}
      </span>
      <span className="mt-2 block text-[12px] uppercase leading-relaxed tracking-[0.1em] text-ash">
        {label}
      </span>
    </div>
  );
}

export default function HowWeWork({ workshopSrc = null }: HowWeWorkProps) {
  return (
    <section
      id="process"
      tabIndex={-1}
      aria-label="Мастерская"
      className="section-pad scroll-mt-24 bg-cream"
    >
      <div className="wrap">
        <div className="grid items-start gap-12 lg:gap-16 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          <div className="aspect-[4/5] w-full overflow-hidden bg-stone">
            {workshopSrc ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={workshopSrc}
                alt="Кадр производства мастерской АСТРА"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-[12px] uppercase tracking-[0.24em] text-charcoal">
                  фото готовится
                </span>
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow">Мастерская</p>
            <h2 className="h-section mt-4 max-w-[16ch]">
              Полный цикл под одной крышей
            </h2>
            <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-charcoal">
              Проект, каркас, обивка, доставка и монтаж — всё внутри одной
              мастерской. Поэтому мы отвечаем за результат договором и
              гарантией.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-steel pt-8">
              {metrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        </div>

        <ol className="mt-16 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))] lg:mt-[72px]">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-steel pt-5">
              <span className="mb-3.5 block font-heading text-[20px] leading-none text-walnut">
                {step.number}
              </span>
              <h3 className="font-body text-[17px] font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
