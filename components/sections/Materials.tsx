"use client";

import { useEffect, useRef, useState } from "react";
import useDesktopMotion from "../ui/useDesktopMotion";

type MaterialsProps = {
  /** Путь к ролику или null, если файла ещё нет в public/. */
  videoSrc?: string | null;
  /** Постер и он же фолбэк-фон. */
  posterSrc?: string | null;
};

export default function Materials({
  videoSrc = null,
  posterSrc = null,
}: MaterialsProps) {
  const { isMounted, prefersReducedMotion } = useDesktopMotion();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Секция целиком не монтируется при prefers-reduced-motion — как и в макете.
  // До определения предпочтений (SSR и первый кадр) тоже не рендерим,
  // чтобы ролик не успел начать грузиться.
  const shouldRender = isMounted && !prefersReducedMotion && Boolean(videoSrc);

  useEffect(() => {
    // shouldRender обязан быть в зависимостях: на первом рендере видео ещё
    // нет, и без него эффект не перезапустится, когда элемент появится —
    // тогда play() не вызовется вообще.
    if (!shouldRender) return;

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
  }, [shouldRender, isPaused]);

  // !videoSrc повторно: shouldRender — boolean, сам по себе тип не сужает
  if (!shouldRender || !videoSrc) return null;

  return (
    <section
      aria-label="Материалы"
      className="relative w-full overflow-hidden bg-[#141413] pb-24 pt-16 lg:h-[46vh] lg:min-h-[340px] lg:py-0"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc ?? undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* На узком экране текст идёт во всю ширину — подложка вертикальная,
          иначе правый край строк попадает на светлую часть кадра. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(20,20,19,.82) 0%, rgba(20,20,19,.72) 50%, rgba(20,20,19,.86) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20,20,19,.9) 0%, rgba(20,20,19,.62) 40%, rgba(20,20,19,.15) 100%)",
        }}
      />

      <div className="wrap relative flex flex-col justify-center lg:h-full">
        <p className="text-[12px] uppercase tracking-[0.24em] text-white/60">
          Материалы
        </p>
        <h2 className="h-section mt-4 max-w-[18ch] text-white">
          Кожа, велюр, массив дуба
        </h2>
        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
          Обивку подбираем под объект: износостойкую для ресторана и лобби,
          тактильную для дома. Образцы привозим на замер — решение принимается
          по фактуре в руках, а не по картинке на экране.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setIsPaused((prev) => !prev)}
        aria-label={
          isPaused ? "Воспроизвести фоновое видео" : "Остановить фоновое видео"
        }
        className="focus-ring absolute bottom-4 left-4 z-10 flex h-11 w-11 lg:bottom-6 lg:left-auto lg:right-6 cursor-pointer items-center justify-center border border-white/40 bg-ink/40 text-[13px] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-ink/70"
      >
        <span aria-hidden="true">{isPaused ? "▶" : "❚❚"}</span>
      </button>
    </section>
  );
}
