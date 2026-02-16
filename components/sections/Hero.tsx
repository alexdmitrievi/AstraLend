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
  const shouldUseMotion = isMounted && shouldAnimate;
  const premiumEase: [number, number, number, number] = [0.2, 0.9, 0.2, 1];
  const softEase: [number, number, number, number] = [0.24, 0.88, 0.3, 1];

  const headingAnimationProps = {
    initial: { opacity: 0, y: 12, filter: "blur(3px)", clipPath: "inset(0 0 100% 0)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      clipPath: "inset(0 0 0% 0)",
    },
    transition: {
      duration: 1.45,
      delay: 0.14,
      ease: premiumEase,
    },
  };

  const dividerAnimationProps = {
    initial: { opacity: 0, scaleX: 0.3, transformOrigin: "left center" },
    animate: { opacity: 1, scaleX: 1 },
    transition: {
      duration: 1.05,
      delay: 0.72,
      ease: softEase,
    },
  };

  const heroText = (
    <>
      <div className="max-w-[280px] sm:max-w-[400px] lg:max-w-[520px]">
        <div
          className="text-white [&_h1]:text-white"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.82)" }}
        >
          {shouldUseMotion ? (
            <>
              <motion.h1
                {...headingAnimationProps}
                className="font-heading text-[1.5rem] font-semibold leading-[1.18] sm:text-[2.25rem] lg:text-[3.05rem] lg:leading-[1.06] xl:text-[3.3rem]"
              >
                Мебель, которая становится наследием
              </motion.h1>

              <motion.span
                {...dividerAnimationProps}
                className="mt-2 block h-px w-12 bg-white/50 sm:mt-3 lg:mt-5 lg:w-24"
              />
            </>
          ) : (
            <>
              <h1 className="font-heading text-[1.5rem] font-semibold leading-[1.18] sm:text-[2.25rem] lg:text-[3.05rem] lg:leading-[1.06] xl:text-[3.3rem]">
                Мебель, которая становится наследием
              </h1>
              <span className="mt-2 block h-px w-12 bg-white/50 sm:mt-3 lg:mt-5 lg:w-24" />
            </>
          )}
        </div>
      </div>

      <div className="flex-1 sm:hidden" />

      <div className="mt-0 flex w-full flex-col gap-2 sm:mt-6 sm:flex-row sm:w-auto sm:gap-4 lg:mt-7 lg:gap-4">
        <a
          href="#lead"
          className="focus-ring font-body inline-flex h-[40px] w-full items-center justify-center rounded-none bg-white px-5 py-3 text-[13px] font-semibold leading-none text-graphite transition hover:bg-white/90 box-border
                     sm:w-auto sm:h-[52px] sm:min-w-[160px] sm:px-6 sm:text-sm
                     lg:h-[52px] lg:min-w-[180px] lg:px-8 lg:text-[15px]"
        >
          Рассчитать проект
        </a>

        <a
          href="#portfolio"
          className="focus-ring font-body inline-flex h-[40px] w-full items-center justify-center rounded-none border border-white/50 px-5 py-3 text-[13px] font-normal leading-none text-white transition hover:bg-white/10 hover:border-white/70 box-border bg-black/20 backdrop-blur-sm
                     sm:w-auto sm:h-[52px] sm:min-w-[160px] sm:px-6 sm:text-sm
                     lg:h-[52px] lg:min-w-[180px] lg:px-8 lg:text-[15px]"
        >
          Смотреть работы
        </a>
      </div>
    </>
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      <div className="relative h-[100svh] min-h-[550px] sm:min-h-[650px] lg:min-h-[700px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageSource}
            alt="Кресло АСТРА"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_65%] sm:hidden"
          />

          <Image
            src={heroImageSource}
            alt="Кресло АСТРА"
            fill
            priority
            sizes="100vw"
            className="hidden sm:block object-cover object-[center_74%] lg:object-[center_72%] xl:object-[center_70%]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 via-30% to-transparent to-55%" />

          <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 via-30% to-transparent to-50%" />
        </div>

        <div
          className="relative z-20 flex h-full w-full flex-col
                     px-5 pt-16 pb-8
                     sm:px-8 sm:pt-10
                     lg:px-0 lg:pb-0
                     lg:pl-[var(--brand-left)]
                     lg:pt-[calc(var(--header-height,72px)+44px)]"
        >
          {heroText}
        </div>
      </div>
    </section>
  );
}
















