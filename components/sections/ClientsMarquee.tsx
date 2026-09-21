"use client";

import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { asset } from "../../lib/asset";
import type { Client } from "../../lib/clients";
import useDesktopMotion from "../ui/useDesktopMotion";

type ClientsMarqueeProps = {
  clients: Client[];
};

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

const SPEED_PX_PER_SEC_MOBILE = 50;
const SPEED_PX_PER_SEC_DESKTOP = 34;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const normalizeLogoSrc = (src?: string) => {
  if (!src) return src;
  return asset(src.endsWith(".svg") ? src.replace(/\.svg$/i, ".webp") : src);
};

export default function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  const { prefersReducedMotion } = useDesktopMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [setWidthPx, setSetWidthPx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const setWidthRef = useRef(0);
  const mobileTrackRef = useRef<HTMLUListElement | null>(null);
  const desktopTrackRef = useRef<HTMLUListElement | null>(null);

  const resizeTimeoutRef = useRef<number | null>(null);
  const rafMeasureRef = useRef<number | null>(null);

  const measureSetWidth = useCallback(() => {
    const track = isMobile ? mobileTrackRef.current : desktopTrackRef.current;
    if (!track) return;

    const nextWidth = Math.round(track.scrollWidth / 2);
    if (!nextWidth) return;

    if (nextWidth !== setWidthRef.current) {
      setWidthRef.current = nextWidth;
      setSetWidthPx(nextWidth);
      setAnimKey((k) => k + 1);
    }
  }, [isMobile]);

  const scheduleMeasure = useCallback(() => {
    if (typeof window === "undefined") return;
    if (rafMeasureRef.current != null) return;
    rafMeasureRef.current = window.requestAnimationFrame(() => {
      rafMeasureRef.current = null;
      measureSetWidth();
    });
  }, [measureSetWidth]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(MOBILE_MEDIA_QUERY);
    const onChange = () => setIsMobile(mq.matches);

    onChange();

    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  useEffect(() => {
    const track = isMobile ? mobileTrackRef.current : desktopTrackRef.current;
    if (!track) return;

    scheduleMeasure();
    requestAnimationFrame(scheduleMeasure);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(scheduleMeasure);
      ro.observe(track);
    }

    const onResize = () => {
      if (resizeTimeoutRef.current)
        window.clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = window.setTimeout(() => {
        scheduleMeasure();
      }, 160);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (resizeTimeoutRef.current)
        window.clearTimeout(resizeTimeoutRef.current);
      if (rafMeasureRef.current != null) {
        cancelAnimationFrame(rafMeasureRef.current);
        rafMeasureRef.current = null;
      }
    };
  }, [isMobile, scheduleMeasure]);

  const speedPxPerSec = isMobile
    ? SPEED_PX_PER_SEC_MOBILE
    : SPEED_PX_PER_SEC_DESKTOP;

  const durationSeconds = setWidthPx > 0 ? setWidthPx / speedPxPerSec : 0;

  const shouldAnimateMobile =
    isMobile && !prefersReducedMotion && setWidthPx > 0;
  const shouldAnimateDesktop =
    !isMobile && !prefersReducedMotion && setWidthPx > 0;

  const trackStyle = useMemo(() => {
    if (!setWidthPx) return undefined;
    return {
      "--marquee-set-width": String(setWidthPx),
      "--marquee-mobile-duration": `${durationSeconds}s`,
      "--marquee-duration": `${durationSeconds}s`,
    } as CSSProperties;
  }, [setWidthPx, durationSeconds]);

  const Logo = ({
    client,
    variant,
    onAssetReady,
    eager,
  }: {
    client: Client;
    variant: "mobile" | "desktop";
    onAssetReady: () => void;
    eager?: boolean;
  }) => {
    const isDesktop = variant === "desktop";

    // Логотипы идут крупно и в цвете: смысл полосы — чтобы заказчика
    // можно было узнать. Обесцвечивание и приглушение убраны намеренно.
    const imgClass = isDesktop
      ? "h-24 w-auto max-w-[300px] object-contain sm:h-28 lg:h-[112px]"
      : "h-24 w-auto max-w-[240px] object-contain";

    const fallbackBoxClass = isDesktop
      ? "h-16 w-[220px] sm:h-[72px] lg:h-[80px]"
      : "h-12 w-[140px]";

    const src = normalizeLogoSrc(client.logo);

    if (src) {
      return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={`${client.name} логотип`}
          className={imgClass}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onLoad={onAssetReady}
          onError={onAssetReady}
        />
      );
    }

    return (
      <span
        className={[
          "flex items-center justify-center",
          fallbackBoxClass,
          "text-[11px] uppercase tracking-[0.18em] text-charcoal",
          client.logoTextClassName ?? "",
        ].join(" ")}
        aria-hidden="true"
      >
        {(client.logoText ?? getInitials(client.name)) || "LG"}
      </span>
    );
  };

  const renderItems = (variant: "mobile" | "desktop") =>
    [0, 1].map((setIndex) =>
      clients.map((client, index) => (
        <li
          key={`${client.name}-${variant}-${setIndex}-${index}`}
          aria-hidden={setIndex === 1}
          className={
            variant === "mobile"
              ? "flex min-w-[140px] flex-shrink-0 flex-col items-center justify-center py-3"
              : "flex w-[360px] flex-shrink-0 flex-col items-center justify-center py-4"
          }
        >
          <Logo
            client={client}
            variant={variant}
            onAssetReady={scheduleMeasure}
            eager={setIndex === 0 && index < 3}
          />
          {/* Название видно всегда: по одному логотипу заказчика не опознать */}
          <span
            className={
              variant === "mobile"
                ? "mt-2 text-[12px] leading-tight text-charcoal"
                : "mt-3 whitespace-nowrap text-[14px] font-medium leading-tight tracking-[0.01em] text-charcoal"
            }
          >
            {client.name}
          </span>
        </li>
      ))
    );

  return (
    <section
      id="clients"
      tabIndex={-1}
      aria-label="Клиенты мастерской"
      className="scroll-mt-24 bg-cream pt-16 lg:pt-24"
    >
      <div className="wrap">
        <p className="eyebrow mb-8">Нам доверяют</p>
      </div>
      <div className="overflow-hidden border-y border-steel">
        {/* MOBILE */}
        <div className="md:hidden">
          <ul
            key={`m-${animKey}`}
            ref={mobileTrackRef}
            className={[
              "flex w-max items-center gap-5 flex-nowrap whitespace-nowrap",
              "transform-gpu will-change-transform [backface-visibility:hidden]",
              shouldAnimateMobile ? "marquee-mobile" : "",
            ].join(" ")}
            style={trackStyle}
            aria-label="Список клиентов"
          >
            {renderItems("mobile")}
          </ul>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <ul
            key={`d-${animKey}`}
            ref={desktopTrackRef}
            className={[
              "flex w-max items-center justify-start gap-10 flex-nowrap whitespace-nowrap",
              "transform-gpu will-change-transform [backface-visibility:hidden]",
              shouldAnimateDesktop ? "marquee" : "",
              "hover:[animation-play-state:paused]",
            ].join(" ")}
            style={trackStyle}
            aria-label="Список клиентов"
          >
            {renderItems("desktop")}
          </ul>
        </div>
      </div>
    </section>
  );
}
