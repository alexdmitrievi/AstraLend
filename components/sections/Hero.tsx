"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "../../lib/asset";
import useDesktopMotion from "../ui/useDesktopMotion";

type HeroProps = {
  heroImageSrc?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero({ heroImageSrc = "/astra_main.webp" }: HeroProps) {
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
      <div className="relative h-[100svh] min-h-[560px] lg:min-h-[720px]">
        <Image
          src={asset(heroImageSrc)}
          alt="Кресло мастерской АСТРА"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 70%" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(0,0,0,.86), rgba(0,0,0,.58) 34%, transparent 66%)",
          }}
        />

        <div className="wrap relative flex h-full flex-col justify-end pb-[72px] pt-24">
          <motion.p {...rise(0.05)} className="eyebrow text-white/70">
            Мастерская мягкой мебели · Омск · с 2005
          </motion.p>

          <motion.h1
            {...rise(0.14)}
            className="h-hero mt-6 max-w-[16ch] text-white"
          >
            Мебель, которая становится наследием
          </motion.h1>

          <motion.div
            {...rise(0.26)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
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
