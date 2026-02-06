"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

type HeroProps = {
  heroImageSrc?: string;
};

export default function Hero({ heroImageSrc }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { isMounted, shouldAnimate } = useDesktopMotion();
  const heroImageSource = heroImageSrc ?? "/astra_main.png";
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

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={heroImageSource}
            alt="Astra main"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_70%]"
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/35 to-transparent" />
      <div className="relative z-10 text-white" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}>
        <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center gap-10 px-4 py-24 text-beige sm:px-6 lg:gap-14 lg:px-8 lg:py-28">
          <motion.div {...fadeUpProps(0)} className="max-w-[480px] lg:max-w-[560px]">
            <div
              className="text-white text-white/80 [&_h1]:text-white"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.65)" }}
            >
              <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-[length:var(--font-h1)] lg:leading-[1.05] lg:tracking-[0.01em] xl:text-[4.5rem]">
                Мебель, которая становится наследием
              </h1>
              <span className="mt-6 block h-px w-24 bg-graphite/70 lg:mt-8 lg:w-32" />
              <p className="mt-6 font-body text-sm uppercase tracking-[0.2em] text-beige/70 lg:text-[0.9375rem] lg:tracking-[0.08em]">
                Столярное производство полного цикла
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUpProps(0.1)} className="flex flex-wrap gap-4 lg:gap-6">
            <a
              href="#lead"
              className="focus-ring font-body inline-flex h-[48px] w-full items-center justify-center rounded-none bg-graphite px-6 py-3 text-sm font-semibold leading-none text-white transition hover:bg-charcoal sm:w-auto lg:h-[60px] lg:px-[36px] lg:py-[18px] lg:text-[1.0625rem] lg:leading-none shadow-elevated hover-shadow lg:hover:-translate-y-0.5 box-border"
            >
              Рассчитать проект
            </a>
            <a
              href="#portfolio"
              className="focus-ring font-body inline-flex h-[48px] w-full items-center justify-center rounded-none border border-graphite px-6 py-3 text-sm font-semibold leading-none text-graphite transition hover:bg-graphite hover:text-white sm:w-auto lg:h-[60px] lg:px-[36px] lg:py-[18px] lg:text-[1.0625rem] lg:leading-none shadow-elevated hover-shadow lg:hover:-translate-y-0.5 box-border bg-white/8 text-white border-white/30 backdrop-blur-[1px] hover:bg-white/15 hover:border-white/40 sm:bg-transparent sm:text-graphite sm:border-graphite"
            >
              Смотреть работы
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
