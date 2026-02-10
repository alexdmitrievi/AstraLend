"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

type HeroProps = {
  heroImageSrc?: string;
};

export default function Hero(props: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { isMounted, shouldAnimate } = useDesktopMotion();

  const heroImageSource = props.heroImageSrc ?? "/astra_main.png";

  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut", delay },
          viewport: { once: true, amount: 0.7 },
        }
      : { initial: false };

  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

  const heroText = (
    <>
      <motion.div
        {...fadeUpProps(0)}
        className="max-w-[280px] sm:max-w-[400px] lg:max-w-[550px]"
      >
        <div
          className="text-white [&_h1]:text-white"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.8)" }}
        >
          <h1 className="font-heading text-[1.5rem] font-semibold leading-[1.18] sm:text-[2.25rem] lg:text-[3.5rem] lg:leading-[1.1] xl:text-[4rem]">
            Мебель, которая становится наследием
          </h1>
          <span className="mt-2 block h-px w-12 bg-white/50 sm:mt-5 lg:mt-6 lg:w-24" />
        </div>
      </motion.div>

      {/* ✅ FLEX-SPACER: выталкивает кнопки вниз ТОЛЬКО на мобилке */}
      <div className="flex-1 sm:hidden" />

      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-0 flex w-full flex-col gap-2 sm:mt-6 sm:flex-row sm:w-auto sm:gap-4 lg:mt-8 lg:gap-5"
      >
        <a
          href="#lead"
          className="focus-ring font-body inline-flex h-[40px] w-full items-center justify-center rounded-none bg-white px-5 py-3 text-[13px] font-semibold leading-none text-graphite transition hover:bg-white/90 box-border
                     sm:w-auto sm:h-[52px] sm:min-w-[160px] sm:px-6 sm:text-sm
                     lg:h-[60px] lg:min-w-[200px] lg:px-10 lg:text-base"
        >
          Рассчитать проект
        </a>

        <a
          href="#portfolio"
          className="focus-ring font-body inline-flex h-[40px] w-full items-center justify-center rounded-none border border-white/50 px-5 py-3 text-[13px] font-normal leading-none text-white transition hover:bg-white/10 hover:border-white/70 box-border bg-black/20 backdrop-blur-sm
                     sm:w-auto sm:h-[52px] sm:min-w-[160px] sm:px-6 sm:text-sm
                     lg:h-[60px] lg:min-w-[200px] lg:px-10 lg:text-base"
        >
          Смотреть работы
        </a>
      </motion.div>
    </>
  );

  return (
    <section id="hero" ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="relative h-[100svh] min-h-[550px] sm:min-h-[650px] lg:min-h-[700px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          {/* MOBILE: кресло в нижней половине экрана */}
          <Image
            src={heroImageSource}
            alt="Кресло АСТРА"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_65%] sm:hidden"
          />
          {/* DESKTOP */}
          <Image
            src={heroImageSource}
            alt="Кресло АСТРА"
            fill
            priority
            sizes="100vw"
            className="hidden sm:block object-cover object-[center_20%]"
          />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* MOBILE: сильный градиент сверху, текст в верхней трети */}
          <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 via-30% to-transparent to-55%" />

          {/* DESKTOP */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 via-30% to-transparent to-50%" />
        </div>

        {/* Content */}
        <div
          className="relative z-20 flex h-full w-full flex-col
                     px-5 pt-16 pb-8
                     sm:px-8 sm:pt-10
                     lg:px-12 lg:pt-12"
        >
          {heroText}
        </div>
      </div>
    </section>
  );
}

