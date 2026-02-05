"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-stone" />
        <div className="absolute inset-0 hero-texture" aria-hidden="true" />
        <div className="absolute inset-0 bg-anthracite/12" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center gap-10 px-4 py-24 text-beige sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[480px]"
        >
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Мебель, которая становится наследием
          </h1>
          <span className="mt-6 block h-px w-24 bg-graphite/70" />
          <p className="mt-6 font-body text-sm uppercase tracking-[0.2em] text-beige/70">
            Столярное производство полного цикла
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#lead"
            className="focus-ring font-body rounded-none bg-graphite px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
          >
            Рассчитать проект
          </a>
          <a
            href="#portfolio"
            className="focus-ring font-body rounded-none border border-graphite px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-graphite hover:text-white"
          >
            Смотреть работы
          </a>
        </motion.div>
      </div>
    </section>
  );
}
