"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

/* ─── useCountUp hook ─────────────────────────────────────── */
function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { shouldAnimate } = useDesktopMotion();

  useEffect(() => {
    if (!inView) return;

    if (!shouldAnimate) {
      setCount(target);
      return;
    }

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
  }, [inView, target, duration, shouldAnimate]);

  return { count, ref };
}

/* ─── Data ────────────────────────────────────────────────── */
const metrics = [
  { target: 120, suffix: "+", label: "проектов выполнено" },
  { target: 20, suffix: "+ лет", label: "на рынке мягкой мебели" },
  { target: 47, suffix: "", label: "городов России" },
  { target: 100, suffix: "%", label: "гарантия качества" },
];

const reviews = [
  {
    name: "Светлана К.",
    city: "Омск",
    rating: 5,
    text: "Заказывали диваны и кресла для переговорной зоны нашего офиса. Всё сделали точно в срок, качество материалов выше ожиданий. Сотрудники в восторге — уютно и солидно одновременно.",
  },
  {
    name: "Дмитрий П.",
    city: "Новосибирск",
    rating: 5,
    text: "Долго выбирал мастерскую для изготовления углового дивана нестандартных размеров. АСТРА справилась идеально: учли все пожелания по ткани и форме, привезли и установили без нареканий.",
  },
  {
    name: "Марина Л.",
    city: "Москва",
    rating: 5,
    text: "Кровать с мягким изголовьем стала настоящим украшением спальни. Мастера приехали на замер, предложили несколько вариантов обивки. Результат — именно то, что я хотела видеть.",
  },
];

/* ─── Star rating ─────────────────────────────────────────── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Оценка ${count} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-walnut" : "text-steel"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Metric card ─────────────────────────────────────────── */
function MetricCard({
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
    <div className="flex flex-col items-center gap-2 px-6 py-8 text-center">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="font-heading text-5xl font-semibold leading-none tracking-tight text-graphite lg:text-6xl"
        aria-live="polite"
      >
        {count}
        {suffix}
      </span>
      <span className="font-body text-sm font-medium uppercase tracking-widest text-ash">
        {label}
      </span>
    </div>
  );
}

/* ─── Review card ─────────────────────────────────────────── */
function ReviewCard({
  name,
  city,
  rating,
  text,
}: {
  name: string;
  city: string;
  rating: number;
  text: string;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-steel/40 bg-white px-6 py-7 shadow-sm">
      <StarRating count={rating} />
      <p className="font-body text-[15px] leading-relaxed text-charcoal before:content-['«'] after:content-['»']">
        {text}
      </p>
      <footer className="mt-auto flex items-center gap-2 pt-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone font-heading text-sm font-semibold text-graphite">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-graphite">{name}</p>
          <p className="font-body text-xs text-ash">{city}</p>
        </div>
      </footer>
    </article>
  );
}

/* ─── Main section ────────────────────────────────────────── */
export default function Stats() {
  return (
    <section
      aria-label="Наши результаты и отзывы клиентов"
      className="bg-linen py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-ash">
            В цифрах
          </p>
          <h2 className="font-heading text-3xl font-semibold text-graphite lg:text-4xl">
            Мастерская А<span className="inline-block -translate-y-[0.08em] px-[0.08em]">·</span>СТРА
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="mb-14 grid grid-cols-2 divide-x divide-y divide-steel/30 overflow-hidden rounded-2xl border border-steel/30 bg-white shadow-sm lg:grid-cols-4 lg:divide-y-0">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Reviews */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
