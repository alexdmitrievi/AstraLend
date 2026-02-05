"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldAnimate = useDesktopMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundOffset = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut", delay },
          viewport: { once: true, amount: 0.7 },
        }
      : { initial: false };

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-stone" />
        <motion.div
          className="absolute inset-0 hero-texture"
          style={shouldAnimate ? { y: backgroundOffset } : undefined}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-0 hero-desktop-gradient"
          style={shouldAnimate ? { y: backgroundOffset } : undefined}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-anthracite/12" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center gap-10 px-4 py-24 text-beige sm:px-6 lg:gap-14 lg:px-8 lg:py-28">
        <motion.div {...fadeUp(0)} className="max-w-[480px] lg:max-w-[560px]">
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-[68px] lg:leading-[1.04] lg:tracking-[0.01em]">
            Мебель, которая становится наследием
          </h1>
          <span className="mt-6 block h-px w-24 bg-graphite/70 lg:mt-8 lg:w-32" />
          <p className="mt-6 font-body text-sm uppercase tracking-[0.2em] text-beige/70 lg:text-[15px] lg:tracking-[0.12em]">
            Столярное производство полного цикла
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-4 lg:gap-6">
          <a
            href="#lead"
            className="focus-ring font-body rounded-none bg-graphite px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal lg:px-9 lg:py-[18px] lg:text-[16px] shadow-elevated hover-shadow lg:hover:-translate-y-0.5"
          >
            Рассчитать проект
          </a>
          <a
            href="#portfolio"
            className="focus-ring font-body rounded-none border border-graphite px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-graphite hover:text-white lg:px-9 lg:py-[18px] lg:text-[16px] shadow-elevated hover-shadow lg:hover:-translate-y-0.5"
          >
            Смотреть работы
          </a>
        </motion.div>
      </div>
    </section>
  );
}
