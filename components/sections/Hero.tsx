"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { asset } from "../../lib/asset";
import useDesktopMotion from "../ui/useDesktopMotion";

type HeroProps = {
  heroImageSrc?: string;
  /** Путь к фоновому видео или null, если файла ещё нет в public/. */
  videoSrc?: string | null;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero({
  heroImageSrc = "/astra_main.webp",
  videoSrc = null,
}: HeroProps) {
  const { isMounted, shouldAnimate, prefersReducedMotion } = useDesktopMotion();
  const animated = isMounted && shouldAnimate;

  const posterSrc = asset(heroImageSrc);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // При prefers-reduced-motion видео не монтируется вовсе — остаётся статичный
  // кадр. isMounted держит видео вне SSR-разметки, чтобы не было рассинхрона
  // гидратации и чтобы файл не грузился до определения предпочтений.
  const showVideo = Boolean(videoSrc) && isMounted && !prefersReducedMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React не всегда проставляет атрибут muted — без этого браузер
    // заблокирует автоплей.
    video.muted = true;

    if (isPaused) {
      video.pause();
      return;
    }

    // В Safari play() отклоняется промисом — без catch это unhandled rejection.
    const played = video.play();
    if (played && typeof played.catch === "function") {
      played.catch(() => {});
    }
  }, [showVideo, isPaused]);

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
        {/* Подложка и фолбэк: остаётся видна, пока видео грузится */}
        <Image
          src={posterSrc}
          alt="Кресло Heritage, мастерская АСТРА"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 70%" }}
        />

        {showVideo && videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 70%" }}
          />
        ) : null}

        {/* Затемнение лежит поверх видео, текст — над затемнением */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.58) 34%, rgba(0,0,0,.08) 66%, rgba(0,0,0,0) 100%)",
          }}
        />

        {showVideo ? (
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={
              isPaused ? "Воспроизвести фоновое видео" : "Остановить фоновое видео"
            }
            className="focus-ring absolute bottom-6 right-6 z-20 flex h-11 w-11 cursor-pointer items-center justify-center border border-white/40 bg-ink/40 text-[13px] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-ink/70"
          >
            <span aria-hidden="true">{isPaused ? "▶" : "❚❚"}</span>
          </button>
        ) : null}

        <div className="wrap relative z-10 flex h-full flex-col justify-end pb-[72px] pt-24">
          <motion.p
            {...rise(0.05)}
            className="text-[12px] uppercase leading-relaxed tracking-[0.26em] text-white/75"
          >
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
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
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
