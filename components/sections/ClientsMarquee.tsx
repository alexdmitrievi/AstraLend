"use client";

import { motion } from "framer-motion";
import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useDesktopMotion from "../ui/useDesktopMotion";

type Client = {
  name: string;
  href?: string;
  logo?: string;
  logoText?: string;
  logoTextClassName?: string;
};

type ClientsMarqueeProps = {
  clients: Client[];
};

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

const SPEED_PX_PER_SEC_MOBILE = 50;
const SPEED_PX_PER_SEC_DESKTOP = 34;

const DESKTOP_VISIBLE_CARDS = 5;
const DESKTOP_CARD_WIDTH_PX = 360;
const DESKTOP_GAP_PX = 40;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const normalizeLogoSrc = (src?: string) => {
  if (!src) return src;
  if (src.endsWith(".svg")) return src.replace(/\.svg$/i, ".webp");
  return src;
};

export default function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  const { isMounted, shouldAnimate, prefersReducedMotion } =
    useDesktopMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [setWidthPx, setSetWidthPx] = useState(0);

  const [animKey, setAnimKey] = useState(0);

  const setWidthRef = useRef(0);

  const mobileTrackRef = useRef<HTMLUListElement | null>(null);
  const desktopTrackRef = useRef<HTMLUListElement | null>(null);

  const resizeTimeoutRef = useRef<number | null>(null);
  const rafMeasureRef = useRef<number | null>(null);

  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
          viewport: { once: true, amount: 0.3 },
        }
      : { initial: false };

  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

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
      "--marquee-desktop-duration": `${durationSeconds}s`,
      "--marquee-duration": `${durationSeconds}s`,
    } as CSSProperties;
  }, [setWidthPx, durationSeconds]);

  const desktopViewportStyle = useMemo(() => {
    const widthPx =
      DESKTOP_VISIBLE_CARDS * DESKTOP_CARD_WIDTH_PX +
      (DESKTOP_VISIBLE_CARDS - 1) * DESKTOP_GAP_PX;

    return {
      maxWidth: `${widthPx}px`,
      marginLeft: "auto",
      marginRight: "auto",
    } as CSSProperties;
  }, []);

  const Logo = ({
    client,
    size,
    onAssetReady,
    eager,
  }: {
    client: Client;
    size: "mobile" | "desktop";
    onAssetReady: () => void;
    eager?: boolean;
  }) => {
    const isDesktop = size === "desktop";

    // ✅ увеличенные лого на desktop
    const imgClass = isDesktop
      ? "h-24 sm:h-28 lg:h-[112px] w-auto max-w-[300px] object-contain"
      : "h-24 w-auto max-w-[240px] object-contain";

    const fallbackBoxClass = isDesktop
      ? "h-16 sm:h-[72px] lg:h-[80px] w-[220px]"
      : "h-12 w-[140px]";

    const src = normalizeLogoSrc(client.logo);

    if (src) {
      return (
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
          "text-[11px] uppercase tracking-[0.18em] text-charcoal/85",
          client.logoTextClassName ?? "",
        ].join(" ")}
        aria-hidden="true"
      >
        {(client.logoText ?? getInitials(client.name)) || "LG"}
      </span>
    );
  };

  return (
    <section className="section-desktop bg-cream-light py-16 sm:py-20">
      <motion.div {...fadeUpProps(0)} className="section-header">
        <div className="section-title-row">
          <div className="section-title-divider" aria-hidden="true" />
          <h2 className="section-title">Нам доверяют</h2>
        </div>
      </motion.div>

      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-8 overflow-hidden lg:mt-10 lg:w-full"
      >
        {/* MOBILE */}
        <div className="md:hidden">
          <ul
            key={`m-${animKey}`}
            ref={mobileTrackRef}
            className={[
              "flex w-max items-center gap-5 flex-nowrap whitespace-nowrap box-border",
              "transform-gpu will-change-transform [backface-visibility:hidden] [transform:translate3d(0,0,0)]",
              shouldAnimateMobile ? "marquee-mobile" : "",
            ].join(" ")}
            style={trackStyle}
            aria-label="Список клиентов"
          >
            {[0, 1].map((setIndex) =>
              clients.map((client, index) => {
                const isVtb = /втб/i.test(client.name);
                const vtbScale = isVtb ? "scale-[1.08]" : "scale-100";
                const eager = setIndex === 0 && index < 3;

                return (
                  <li
                    key={`${client.name}-mobile-${setIndex}-${index}`}
                    aria-hidden={setIndex === 1}
                    title={client.name}
                    className="group relative flex min-w-[140px] flex-shrink-0 flex-col items-center justify-center py-3"
                  >
                    <div className={["transform-gpu", vtbScale].join(" ")}>
                      <Logo
                        client={client}
                        size="mobile"
                        onAssetReady={scheduleMeasure}
                        eager={eager}
                      />
                    </div>

                    <span className="mt-2 text-[12px] leading-none text-charcoal/70">
                      {client.name}
                    </span>

                    <span className="sr-only">{client.name}</span>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div style={desktopViewportStyle} className="overflow-hidden">
            <ul
              key={`d-${animKey}`}
              ref={desktopTrackRef}
              className={[
                "flex w-max items-center justify-start gap-10 flex-nowrap whitespace-nowrap",
                "transform-gpu will-change-transform [backface-visibility:hidden] [transform:translate3d(0,0,0)]",
                shouldAnimateDesktop ? "marquee marquee-desktop" : "",
                "hover:[animation-play-state:paused]",
              ].join(" ")}
              style={trackStyle}
              aria-label="Список клиентов"
            >
              {[0, 1].map((setIndex) =>
                clients.map((client, index) => (
                  <li
                    key={`${client.name}-desktop-${setIndex}-${index}`}
                    aria-hidden={setIndex === 1}
                    className="group relative flex w-[360px] flex-shrink-0 flex-col items-center justify-center py-4 text-charcoal transition-transform duration-200 ease-out hover:-translate-y-0.5"
                  >
                    <Logo
                      client={client}
                      size="desktop"
                      onAssetReady={scheduleMeasure}
                      eager={setIndex === 0 && index < 3}
                    />

                    {/* ✅ подпись теперь всегда видна как на мобилке */}
                    <span className="mt-3 text-[14px] font-medium tracking-[0.01em] leading-tight whitespace-nowrap text-charcoal/85 select-none">
                      {client.name}
                    </span>

                    <span className="sr-only">{client.name}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}






