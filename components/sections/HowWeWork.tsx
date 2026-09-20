"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

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
  { target: 120, suffix: "+", label: "проектов" },
  { target: 20, suffix: "+", label: "лет" },
  { target: 47, suffix: "", label: "городов" },
];

const steps = [
  {
    number: "01",
    title: "Заявка и обсуждение",
    description: "Обсуждаем стиль, размеры, материалы и бюджет.",
  },
  {
    number: "02",
    title: "Замер и эскиз",
    description: "Выезжаем на замер, готовим эскиз и согласовываем вариант.",
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
    description: "Доставляем по России, собираем и устанавливаем на месте.",
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
        className="block font-heading text-[40px] font-medium leading-none text-ink lg:text-[52px]"
      >
        {count}
        {suffix}
      </span>
      <span className="mt-3 block text-[12px] uppercase tracking-[0.16em] text-ash">
        {label}
      </span>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section
      id="process"
      tabIndex={-1}
      aria-label="Мастерская"
      className="section-pad scroll-mt-24 bg-cream"
    >
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Слева: заявление + цифры */}
        <div>
          <p className="eyebrow">Мастерская</p>
          <h2 className="h-section mt-4 max-w-[16ch]">
            Полный цикл под одной крышей
          </h2>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-charcoal">
            От первого эскиза до монтажа на объекте мебель ведёт одна команда:
            замер, конструкция, обивка, сборка. Производство собственное —
            поэтому размеры, обивка и сроки остаются под нашим контролем.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-steel pt-10">
            {metrics.map((metric) => (
              <Metric key={metric.label} {...metric} />
            ))}
          </div>
        </div>

        {/* Справа: 4 шага */}
        <ol className="border-t border-steel">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[54px_1fr] gap-4 border-b border-steel py-7"
            >
              <span className="font-heading text-[22px] font-medium leading-none text-walnut">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-[19px] font-medium leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
