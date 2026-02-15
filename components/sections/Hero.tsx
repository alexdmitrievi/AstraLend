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
  const motionPhaseKey = shouldUseMotion ? "motion-on" : "motion-off";
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const softEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut", delay },
        }
      : { initial: false };

  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

  const headingAnimationProps = shouldUseMotion
    ? {
        initial: { opacity: 0, y: 30, filter: "blur(8px)", clipPath: "inset(0 0 100% 0)" },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0% 0)",
        },
        transition: {
          duration: 0.95,
          delay: 0.1,
          ease: premiumEase,
        },
      }
    : {
        initial: false,
        animate: { opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" },
      };

  const dividerAnimationProps = shouldUseMotion
    ? {
        initial: { opacity: 0, scaleX: 0.3, transformOrigin: "left center" },
        animate: { opacity: 1, scaleX: 1 },
        transition: {
          duration: 0.75,
          delay: 0.45,
          ease: softEase,
        },
      }
    : { initial: false, animate: { opacity: 1, scaleX: 1 } };

  const buttonAnimationProps = (delay = 0) =>
    shouldUseMotion
      ? {
          initial: { opacity: 0, y: 14, scale: 0.985 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: {
            delay,
            duration: 0.75,
            ease: premiumEase,
          },
          whileHover: { y: -2, transition: { duration: 0.22, ease: softEase } },
          whileTap: { y: 0, scale: 0.992, transition: { duration: 0.16 } },
        }
      : { initial: false };

  const heroText = (
    <>
      <motion.div
        key={`hero-title-wrap-${motionPhaseKey}`}
        {...fadeUpProps(0)}
        className="max-w-[280px] sm:max-w-[400px] lg:max-w-[520px]"
      >
        <div
          className="text-white [&_h1]:text-white"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.82)" }}
        >
          <motion.h1
            key={`hero-title-${motionPhaseKey}`}
            {...headingAnimationProps}
            className="font-heading text-[1.5rem] font-semibold leading-[1.18] sm:text-[2.25rem] lg:text-[3.05rem] lg:leading-[1.06] xl:text-[3.3rem]"
          >
            Мебель, которая становится наследием
          </motion.h1>

          <motion.span
            key={`hero-divider-${motionPhaseKey}`}
            {...dividerAnimationProps}
            className="mt-2 block h-px w-12 bg-white/50 sm:mt-3 lg:mt-5 lg:w-24"
          />
        </div>
      </motion.div>

      <div className="flex-1 sm:hidden" />

      <motion.div
        key={`hero-cta-wrap-${motionPhaseKey}`}
        {...fadeUpProps(0.08)}
        className="mt-0 flex w-full flex-col gap-2 sm:mt-6 sm:flex-row sm:w-auto sm:gap-4 lg:mt-7 lg:gap-4"
      >
        <motion.a
          key={`hero-cta-primary-${motionPhaseKey}`}
          {...buttonAnimationProps(0.24)}
          href="#lead"
          className="focus-ring font-body inline-flex h-[40px] w-full items-center justify-center rounded-none bg-white px-5 py-3 text-[13px] font-semibold leading-none text-graphite transition hover:bg-white/90 box-border
                     sm:w-auto sm:h-[52px] sm:min-w-[160px] sm:px-6 sm:text-sm
                     lg:h-[52px] lg:min-w-[180px] lg:px-8 lg:text-[15px]"
        >
          Рассчитать проект
        </motion.a>

        <motion.a
          key={`hero-cta-secondary-${motionPhaseKey}`}
          {...buttonAnimationProps(0.34)}
          href="#portfolio"
          className="focus-ring font-body inline-flex h-[40px] w-full items-center justify-center rounded-none border border-white/50 px-5 py-3 text-[13px] font-normal leading-none text-white transition hover:bg-white/10 hover:border-white/70 box-border bg-black/20 backdrop-blur-sm
                     sm:w-auto sm:h-[52px] sm:min-w-[160px] sm:px-6 sm:text-sm
                     lg:h-[52px] lg:min-w-[180px] lg:px-8 lg:text-[15px]"
        >
          Смотреть работы
        </motion.a>
      </motion.div>
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










