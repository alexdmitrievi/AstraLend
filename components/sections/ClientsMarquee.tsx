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
  href?: string; // future: link to client case
  logo?: string; // e.g. "/clients/vtb.svg"
  logoText?: string;
  logoTextClassName?: string;
};

type ClientsMarqueeProps = {
  clients: Client[];
};

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const SPEED_PX_PER_SEC = 50;

// Desktop viewport: show up to 5 cards
const DESKTOP_VISIBLE_CARDS = 5;
// Larger cells on desktop for premium brand presence
const DESKTOP_CARD_WIDTH_PX = 360;
// lg:gap-10 ~= 40px
const DESKTOP_GAP_PX = 40;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export default function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  const { isMounted, shouldAnimate, prefersReducedMotion } = useDesktopMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [setWidthPx, setSetWidthPx] = useState(0);

  const setWidthRef = useRef(0);

  const mobileTrackRef = useRef<HTMLUListElement | null>(null);
  const mobileFirstItemRef = useRef<HTMLLIElement | null>(null);
  const mobileSecondItemRef = useRef<HTMLLIElement | null>(null);

  const desktopTrackRef = useRef<HTMLUListElement | null>(null);
  const desktopFirstItemRef = useRef<HTMLLIElement | null>(null);
  const desktopSecondItemRef = useRef<HTMLLIElement | null>(null);

  const resizeTimeoutRef = useRef<number | null>(null);

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

  const updateSetWidth = useCallback(() => {
    const firstItem = isMobile
      ? mobileFirstItemRef.current
      : desktopFirstItemRef.current;
    const secondItem = isMobile
      ? mobileSecondItemRef.current
      : desktopSecondItemRef.current;

    if (!firstItem || !secondItem) return;

    const nextWidth = Math.round(secondItem.offsetLeft - firstItem.offsetLeft);
    if (!nextWidth || nextWidth === setWidthRef.current) return;

    setWidthRef.current = nextWidth;
    setSetWidthPx(nextWidth);
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    // Safari fallback
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const trackElement = isMobile
      ? mobileTrackRef.current
      : desktopTrackRef.current;
    if (!trackElement) return;

    updateSetWidth();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateSetWidth);
      resizeObserver.observe(trackElement);
    }

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = window.setTimeout(updateSetWidth, 120);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [isMobile, updateSetWidth]);

  const durationSeconds = setWidthPx > 0 ? setWidthPx / SPEED_PX_PER_SEC : 0;

  const shouldAnimateMobile =
    isMobile && !prefersReducedMotion && setWidthPx > 0;

  const shouldAnimateDesktop =
    !isMobile && !prefersReducedMotion && setWidthPx > 0;

  const trackStyle = useMemo(() => {
    if (!setWidthPx) return undefined;
    return {
      "--marquee-set-width": String(setWidthPx),
      "--marquee-mobile-duration": `${durationSeconds}s`,
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
            ref={mobileTrackRef}
            className={`flex w-max items-center justify-center gap-6 sm:gap-8 flex-nowrap whitespace-nowrap box-border ${
              shouldAnimateMobile ? "marquee-mobile" : ""
            }`}
            style={trackStyle}
            aria-label="Список клиентов"
          >
            {[0, 1].map((setIndex) =>
              clients.map((client, index) => (
                <li
                  key={`${client.name}-mobile-${setIndex}-${index}`}
                  ref={
                    setIndex === 0 && index === 0
                      ? mobileFirstItemRef
                      : setIndex === 1 && index === 0
                      ? mobileSecondItemRef
                      : undefined
                  }
                  aria-hidden={setIndex === 1}
                  className={[
                    "relative flex min-w-max flex-shrink-0 items-center gap-4",
                    "rounded-none border border-steel text-charcoal box-border",
                    "px-7 py-4 text-[16px] leading-none",
                  ].join(" ")}
                  title={client.name}
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt=""
                      aria-hidden="true"
                      className="h-14 w-auto max-w-[170px] shrink-0 object-contain"
                      loading="lazy"
                      decoding="async"
                      // optical baseline nudge (subtle, improves perceived alignment)
                      style={{ transform: "translateY(1px)" }}
                    />
                  ) : (
                    <span
                      className={[
                        "flex h-14 w-14 items-center justify-center shrink-0",
                        "rounded-none border border-steel",
                        "text-[10px] uppercase tracking-[0.2em] text-charcoal",
                        client.logoTextClassName ?? "",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      {(client.logoText ?? getInitials(client.name)) || "LG"}
                    </span>
                  )}

                  <span className="whitespace-nowrap">{client.name}</span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div style={desktopViewportStyle} className="overflow-hidden">
            <ul
              ref={desktopTrackRef}
              className={`flex w-max items-center justify-start gap-6 sm:gap-8 lg:gap-10 flex-nowrap whitespace-nowrap ${
                shouldAnimateDesktop ? "marquee marquee-desktop" : ""
              } hover:[animation-play-state:paused]`}
              style={trackStyle}
              aria-label="Список клиентов"
            >
              {[0, 1].map((setIndex) =>
                clients.map((client, index) => (
                  <li
                    key={`${client.name}-desktop-${setIndex}-${index}`}
                    ref={
                      setIndex === 0 && index === 0
                        ? desktopFirstItemRef
                        : setIndex === 1 && index === 0
                        ? desktopSecondItemRef
                        : undefined
                    }
                    aria-hidden={setIndex === 1}
                    title={client.name}
                    style={{ width: DESKTOP_CARD_WIDTH_PX }}
                    className={[
                      "relative flex flex-shrink-0 items-center gap-6",
                      "min-w-0 overflow-hidden",
                      "rounded-none border border-steel text-charcoal",
                      "px-9 py-6 text-[18px] tracking-[0.01em]",
                      // premium touch: subdued by default, fully crisp on hover
                      "transition-opacity duration-200 ease-out hover:opacity-100",
                      // keep overall look consistent; do not force opacity if you don't want it globally
                      "opacity-95",
                      "lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-7 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden",
                    ].join(" ")}
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt=""
                        aria-hidden="true"
                        className="h-16 w-auto max-w-[240px] shrink-0 object-contain"
                        loading="lazy"
                        decoding="async"
                        style={{ transform: "translateY(1px)" }}
                      />
                    ) : (
                      <span
                        className={[
                          "flex h-16 w-16 items-center justify-center shrink-0",
                          "rounded-none border border-steel",
                          "text-[10px] uppercase tracking-[0.2em] text-charcoal",
                          client.logoTextClassName ?? "",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {(client.logoText ?? getInitials(client.name)) || "LG"}
                      </span>
                    )}

                    <span className="min-w-0 truncate">{client.name}</span>
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


