"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "../../lib/asset";
import useDesktopMotion from "../ui/useDesktopMotion";

type HeroProps = {
  heroImageSrc?: string;
  /** Тот же кадр в 768px — мобильному экрану полной версии не нужно. */
  heroImageMobileSrc?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero({
  heroImageSrc = "/astra_main.webp",
  heroImageMobileSrc,
}: HeroProps) {
  const { isMounted, shouldAnimate } = useDesktopMotion();
  const animated = isMounted && shouldAnimate;

  const rise = (delay: number) =>
    animated
      ? {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        }
      : {};

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Мобильный экран ниже 100svh: снизу видна кромка следующей секции —
          подсказка, что страница скроллится. */}
      <div className="relative h-[86svh] min-h-[520px] lg:h-[100svh] lg:min-h-[720px]">
        {/*
          Первый экран статичный: видео здесь нет — оно в полосе «Материалы».
          <picture> вместо next/image: при `unoptimized: true` Image отдаёт
          один src без srcset, и телефон тянул бы полноразмерный кадр (500 КБ).
        */}
        <picture>
          {heroImageMobileSrc ? (
            <source
              media="(max-width: 767px)"
              srcSet={asset(heroImageMobileSrc)}
              type="image/webp"
            />
          ) : null}
          <img
            src={asset(heroImageSrc)}
            alt="Кресло Heritage, мастерская АСТРА"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[52%_64%] lg:object-[center_70%]"
          />
        </picture>

        {/* Мобильная подложка вертикальная: текст внизу, шапка сверху */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.22) 30%, rgba(0,0,0,.62) 66%, rgba(0,0,0,.88) 100%)",
          }}
        />

        {/* Десктопная — диагональная, как в макете */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.58) 34%, rgba(0,0,0,.08) 66%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="wrap relative z-10 flex h-full flex-col justify-end pb-10 pt-24 lg:pb-[72px]">
          <motion.p
            {...rise(0.05)}
            className="max-w-[30ch] text-[11px] uppercase leading-relaxed tracking-[0.16em] text-white/80 sm:max-w-none sm:text-[12px] sm:tracking-[0.26em]"
          >
            Мастерская мягкой мебели · Омск · с 2005
          </motion.p>

          <motion.h1
            {...rise(0.14)}
            className="h-hero mt-4 max-w-[16ch] text-white lg:mt-6"
          >
            Мебель, которая становится наследием
          </motion.h1>

          <motion.div
            {...rise(0.26)}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-9"
          >
            <Link href="/#lead" className="focus-ring btn btn-light">
              Рассчитать проект
            </Link>
            <Link href="/catalog/" className="focus-ring btn btn-ghost-light">
              Смотреть каталог
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
