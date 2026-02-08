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
        className="max-w-[480px] sm:max-w-[520px] lg:max-w-[600px]"
      >
        <div
          className="text-white text-white/80 [&_h1]:text-white"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.65)" }}
        >
          <h1 className="font-heading text-[clamp(1.75rem,6vw,2.5rem)] font-semibold leading-tight sm:text-5xl lg:text-[length:var(--font-h1)] lg:leading-[1.15] lg:tracking-[0.01em] xl:text-[4.5rem]">
            Мебель, которая становится наследием
          </h1>
          <span className="mt-4 block h-px w-20 bg-graphite/70 sm:mt-6 lg:mt-8 lg:w-32" />
          <p className="mt-4 hidden font-body text-sm uppercase tracking-[0.2em] text-beige/70 sm:block lg:text-[0.9375rem] lg:tracking-[0.08em]">
            Столярное производство полного цикла
          </p>
        </div>
      </motion.div>

      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-4 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:grid sm:grid-cols-2 sm:gap-5 sm:items-center lg:gap-5"
      >
        <a
          href="#lead"
          className="focus-ring font-body inline-flex h-[44px] w-full items-center justify-center rounded-none bg-graphite px-6 py-3 text-sm font-semibold leading-none text-white transition hover:bg-charcoal box-border shadow-elevated hover-shadow lg:hover:-translate-y-0.5
                     sm:w-full sm:h-[56px] sm:min-w-[220px] sm:px-10 sm:py-0 sm:bg-black/80 sm:hover:bg-black
                     lg:h-[60px] lg:px-[36px] lg:py-[18px] lg:text-[1.0625rem] lg:leading-none"
        >
          Рассчитать проект
        </a>

        <a
          href="#portfolio"
          className="focus-ring font-body inline-flex h-[44px] w-full items-center justify-center rounded-none border border-white/30 px-6 py-3 text-sm font-normal leading-none text-white/75 transition hover:text-white hover:border-white/50 box-border bg-transparent shadow-elevated hover-shadow lg:hover:-translate-y-0.5
                     sm:w-full sm:h-[56px] sm:min-w-[220px] sm:px-10 sm:py-0 sm:text-white/90 sm:border-white/40 sm:hover:border-white/60
                     lg:h-[60px] lg:px-[36px] lg:py-[18px] lg:text-[1.0625rem] lg:leading-none"
        >
          Смотреть работы
        </a>
      </motion.div>
    </>
  );

  return (
    <section id="hero" ref={sectionRef} className="relative w-full overflow-hidden">
      {/* MOBILE: fit to viewport, DESKTOP: taller */}
      <div className="relative min-h-[100svh] max-h-[100svh] sm:min-h-[720px] sm:max-h-none">
        
        {/* Background with image */}
        <div className="absolute inset-0 z-0">
          {/* MOBILE: image covers full area, positioned at bottom */}
          <Image
            src={heroImageSource}
            alt="Astra main"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_85%] sm:object-center sm:hidden"
          />
          {/* DESKTOP: full cover */}
          <Image
            src={heroImageSource}
            alt="Astra main"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center sm:block"
          />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* MOBILE: smooth gradient from top (where text is) into image */}
          <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 via-45% to-transparent" />
          
          {/* DESKTOP: left-side gradient for text readability */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/16 to-transparent" />
        </div>

        {/* Content container - ALIGNED WITH NAVBAR */}
        <div className="relative z-20 flex h-full min-h-[inherit] w-full flex-col justify-start 
                        px-4 pt-[calc(env(safe-area-inset-top)+80px)] pb-6
                        sm:px-6 sm:pt-24 sm:pb-16 
                        lg:px-8 lg:pt-28 lg:pb-20
                        lg:max-w-none lg:mx-0 lg:pl-[calc((100vw-80rem)/2+2rem)]">
          {heroText}
        </div>
      </div>
    </section>
  );
}