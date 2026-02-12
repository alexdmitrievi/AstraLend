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

// Different speeds (desktop slightly slower feels more premium)
const SPEED_PX_PER_SEC_MOBILE = 50;
const SPEED_PX_PER_SEC_DESKTOP = 34;

// Desktop viewport: show up to 5 cells
const DESKTOP_VISIBLE_CARDS = 5;

// Bigger cells for stronger brand presence
const DESKTOP_CARD_WIDTH_PX = 360;
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
      if (resizeTimeoutRef.current) window.clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = window.setTimeout(updateSetWidth, 120);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (resizeTimeoutRef.current) window.clearTimeout(resizeTimeoutRef.current);
    };
  }, [isMobile, updateSetWidth]);

  const speedPxPerSec = isMobile ? SPEED_PX_PER_SEC_MOBILE : SPEED_PX_PER_SEC_DESKTOP;
  const durationSeconds = setWidthPx > 0 ? setWidthPx / speedPxPerSec : 0;

  const shouldAnimateMobile = isMobile && !prefersReducedMotion && setWidthPx > 0;
  const shouldAnimateDesktop = !isMobile && !prefersReducedMotion && setWidthPx > 0;

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

  // Shared “logo” sizing: bigger, consistent height, no borders
  const Logo = ({ client, size }: { client: Client; size: "mobile" | "desktop" }) => {
    const isDesktop = size === "desktop";

    // Fixed height gives consistent rhythm, width stays natural for each logo.
    // (Most premium marquees standardize by height, not by box.)
    const imgClass = isDesktop
      ? "h-20 sm:h-24 lg:h-[96px] w-auto max-w-[260px] object-contain"
      : "h-16 w-auto max-w-[180px] object-contain";

    const fallbackBoxClass = isDesktop
      ? "h-14 sm:h-16 lg:h-[68px] w-[190px]"
      : "h-12 w-[140px]";

    if (client.logo) {
      return (
        <img
          src={client.logo}
          alt={`${client.name} логотип`}
          className={imgClass}
          loading="lazy"
          draggable={false}
        />
      );
    }

    // Fallback: clean monogram (no border)
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
        {/* MOBILE / TABLET */}
        <div className="md:hidden">
          <ul
            ref={mobileTrackRef}
            className={[
              "flex w-max items-center gap-8 flex-nowrap whitespace-nowrap box-border",
              shouldAnimateMobile ? "marquee-mobile" : "",
            ].join(" ")}
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
                  title={client.name}
                  className={[
                    "group relative flex min-w-max flex-shrink-0 flex-col items-center justify-center",
                    "py-2", // no border; keep breathing room
                  ].join(" ")}
                >
                  <Logo client={client} size="mobile" />

                  {/* Mobile: name under logo (no hover available, keeps clarity for lesser-known brands) */}
                  <span className="mt-2 text-[12px] leading-none text-charcoal/70">
                    {client.name}
                  </span>
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
              className={[
                "flex w-max items-center justify-start",
                "gap-10 flex-nowrap whitespace-nowrap",
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
                    ref={
                      setIndex === 0 && index === 0
                        ? desktopFirstItemRef
                        : setIndex === 1 && index === 0
                        ? desktopSecondItemRef
                        : undefined
                    }
                    aria-hidden={setIndex === 1}
                    title={client.name}
                    className={[
                      "group relative flex w-[360px] flex-shrink-0 flex-col items-center justify-center",
                      "py-4",
                      "text-charcoal",
                      // subtle hover affordance without a box/border
                      "transition-transform duration-200 ease-out",
                      "hover:-translate-y-0.5",
                      "focus-within:-translate-y-0.5",
                    ].join(" ")}
                  >
                    <Logo client={client} size="desktop" />

                    {/* Desktop: minimalism by default. Name appears on hover/focus. */}
                    <span
                      className={[
                        "mt-3 text-sm text-charcoal/65",
                        "opacity-0 transition-opacity duration-200",
                        "group-hover:opacity-100 group-focus-within:opacity-100",
                        "select-none",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      {client.name}
                    </span>

                    {/* A11y: always present for screen readers */}
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



