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
  logo?: string;
  logoText?: string;
  logoTextClassName?: string;
};

type ClientsMarqueeProps = {
  clients: Client[];
};

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const SPEED_PX_PER_SEC = 50;

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
      resizeObserver = new ResizeObserver(() => updateSetWidth());
      resizeObserver.observe(trackElement);
    }

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = window.setTimeout(() => {
        updateSetWidth();
      }, 120);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
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
      "--marquee-set-width": `${setWidthPx}`,
      "--marquee-mobile-duration": `${durationSeconds}s`,
    } as CSSProperties;
  }, [setWidthPx, durationSeconds]);

  return (
    <section className="section-desktop bg-cream-light py-16 sm:py-20">
      <motion.div {...fadeUpProps(0)} className="section-header">
        <div className="section-title-row">
          <div className="section-title-divider" aria-hidden="true" />
          <h2 className="section-title">
            Нам доверяют
          </h2>
        </div>
      </motion.div>
      {/* Убрали lg:mx-auto lg:max-w-6xl lg:px-8 - теперь на всю ширину */}
      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-8 overflow-hidden lg:mt-10 lg:w-full"
      >
        <div className="md:hidden">
          <ul
            ref={mobileTrackRef}
            className={`flex w-max items-center justify-center gap-6 sm:gap-8 lg:gap-10 flex-nowrap whitespace-nowrap box-border ${
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
                  className="relative flex min-w-max flex-shrink-0 items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal lg:gap-4 lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:tracking-[0.01em] lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-6 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden box-border"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} логотип`}
                      className="h-9 w-9 object-contain lg:h-10 lg:w-10"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal lg:h-10 lg:w-10 ${client.logoTextClassName ?? ""}`}
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
        <div className="hidden md:block">
          <ul
            ref={desktopTrackRef}
            className={`flex w-max items-center justify-center gap-6 sm:gap-8 lg:gap-10 flex-nowrap whitespace-nowrap ${
              shouldAnimateDesktop ? "marquee marquee-desktop" : ""
            }`}
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
                  className="relative flex min-w-max flex-shrink-0 items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal lg:gap-4 lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:tracking-[0.01em] lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-6 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} логотип`}
                      className="h-9 w-9 object-contain lg:h-10 lg:w-10"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal lg:h-10 lg:w-10 ${client.logoTextClassName ?? ""}`}
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
      </motion.div>
    </section>
  );
}
