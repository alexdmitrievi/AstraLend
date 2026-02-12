"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

type CategoryItem = {
  title: string;
  material: string;
  image: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  items: CategoryItem[];
};

type PortfolioProps = {
  categories: Category[];
};

type Slide = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
};

const NARROW_MEDIA_QUERY = "(max-width: 1023px)"; // < lg

export default function Portfolio({ categories }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { isMounted, shouldAnimate } = useDesktopMotion();

  const [isNarrow, setIsNarrow] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lastViewRef = useRef<{
    activeCategory: string;
    scrollLeft: number;
  } | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const activeCategoryData = useMemo(
    () => categories.find((category) => category.id === activeCategory),
    [activeCategory, categories]
  );

  const visibleItems = useMemo(() => {
    if (activeCategory === "all") return categories.flatMap((c) => c.items);
    return activeCategoryData?.items ?? [];
  }, [activeCategory, activeCategoryData, categories]);

  const slides: Slide[] = useMemo(
    () =>
      visibleItems.map((item) => ({
        src: item.image,
        alt: item.title,
        title: item.title,
        description: item.material,
      })),
    [visibleItems]
  );

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

  // Detect narrow viewport
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(NARROW_MEDIA_QUERY);
    const onChange = () => setIsNarrow(mq.matches);

    onChange();

    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  // Desktop scroll hints
  const updateDesktopScrollHints = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const left = el.scrollLeft;
    const eps = 8;

    setCanScrollLeft(left > eps);
    setCanScrollRight(left < max - eps);
  }, []);

  const scrollByStep = useCallback((direction: -1 | 1) => {
    const el = sliderRef.current;
    if (!el) return;

    const step = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  // Lightbox open
  const openLightbox = useCallback(
    (index: number) => {
      lastViewRef.current = {
        activeCategory,
        scrollLeft: sliderRef.current?.scrollLeft ?? 0,
      };

      setLightboxIndex(index);
      setIsLightboxOpen(true);

      if (typeof window !== "undefined") {
        window.history.pushState({ portfolioLightbox: true }, "");
      }
    },
    [activeCategory]
  );

  // Lightbox close
  const closeLightbox = useCallback((opts?: { viaPopState?: boolean }) => {
    setIsLightboxOpen(false);

    if (typeof window !== "undefined" && !opts?.viaPopState) {
      try {
        if (window.history.state?.portfolioLightbox) window.history.back();
      } catch {
        // ignore
      }
    }

    const snap = lastViewRef.current;
    if (snap) {
      setActiveCategory(snap.activeCategory);
      requestAnimationFrame(() => {
        sliderRef.current?.scrollTo({ left: snap.scrollLeft, behavior: "auto" });
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onPopState = () => {
      if (isLightboxOpen) closeLightbox({ viaPopState: true });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [isLightboxOpen, closeLightbox]);

  // Track scroll + hint state
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    // Desktop starts from the left
    if (!isNarrow && !isLightboxOpen && !lastViewRef.current) {
      el.scrollTo({ left: 0, behavior: "auto" });
    }

    updateDesktopScrollHints();

    const onScroll = () => {
      updateDesktopScrollHints();
      if (!hasInteracted) setHasInteracted(true);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => updateDesktopScrollHints());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [updateDesktopScrollHints, hasInteracted, isNarrow, isLightboxOpen]);

  // When switching category: desktop start from left
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    if (!isNarrow && !isLightboxOpen) {
      el.scrollTo({ left: 0, behavior: "auto" });
      lastViewRef.current = null;
    }
  }, [activeCategory, isNarrow, isLightboxOpen]);

  // ✅ MOBILE FIX: force initial position to LEFT on narrow screens
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    if (!isNarrow) return;
    if (isLightboxOpen) return;

    // On mobile the browser can auto-snap to center on first paint.
    // We force left edge AFTER layout.
    requestAnimationFrame(() => {
      el.scrollTo({ left: 0, behavior: "auto" });
    });
  }, [isNarrow, activeCategory, isLightboxOpen]);

  // Desktop drag only
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const dragThreshold = 6;
    const keyScrollStep = 280;

    let isPointerDown = false;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let cancelClick = false;

    const getMaxScrollLeft = () =>
      Math.max(0, slider.scrollWidth - slider.clientWidth);

    const clampScrollLeft = (nextValue: number) =>
      Math.max(0, Math.min(getMaxScrollLeft(), nextValue));

    const canScrollInDirection = (delta: number) => {
      if (delta > 0) return slider.scrollLeft < getMaxScrollLeft() - 1;
      if (delta < 0) return slider.scrollLeft > 1;
      return false;
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (!mediaQuery.matches || event.button !== 0) return;
      isPointerDown = true;
      isDragging = false;
      cancelClick = false;
      startX = event.pageX;
      startScrollLeft = slider.scrollLeft;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!mediaQuery.matches || !isPointerDown) return;
      const delta = event.pageX - startX;

      if (!isDragging && Math.abs(delta) > dragThreshold) {
        isDragging = true;
        slider.classList.add("is-dragging");
      }
      if (!isDragging) return;

      event.preventDefault();
      slider.scrollLeft = clampScrollLeft(startScrollLeft - delta);
    };

    const endDrag = () => {
      if (!mediaQuery.matches) return;
      if (isDragging) cancelClick = true;

      isPointerDown = false;
      isDragging = false;
      slider.classList.remove("is-dragging");
    };

    const handleClickCapture = (event: MouseEvent) => {
      if (!mediaQuery.matches) return;
      if (cancelClick) {
        event.preventDefault();
        event.stopPropagation();
        cancelClick = false;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mediaQuery.matches) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      const direction = event.key === "ArrowRight" ? 1 : -1;
      const delta = direction * keyScrollStep;
      if (!canScrollInDirection(delta)) return;

      event.preventDefault();
      slider.scrollLeft = clampScrollLeft(slider.scrollLeft + delta);
    };

    const handleDragStart = (event: DragEvent) => event.preventDefault();

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseleave", endDrag);
    slider.addEventListener("mouseup", endDrag);
    slider.addEventListener("click", handleClickCapture, true);
    slider.addEventListener("keydown", handleKeyDown);
    slider.addEventListener("dragstart", handleDragStart);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseleave", endDrag);
      slider.removeEventListener("mouseup", endDrag);
      slider.removeEventListener("click", handleClickCapture, true);
      slider.removeEventListener("keydown", handleKeyDown);
      slider.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  const sliderBehaviorStyle = useMemo(() => {
    return {
      overscrollBehaviorX: "contain" as const,
      WebkitOverflowScrolling: "touch" as const,
      scrollbarGutter: "stable" as const,
    };
  }, []);

  return (
    <section className="portfolio-section bg-cream-light py-16 sm:py-20 section-desktop">
      <motion.div {...fadeUpProps(0)}>
        <div className="section-header">
          <div className="section-title-row">
            <div className="section-title-divider" aria-hidden="true" />
            <h2 className="section-title">Наши работы</h2>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-8 lg:gap-4">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={
                activeCategory === "all"
                  ? "px-4 py-2 text-sm bg-graphite text-white rounded-none lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out shadow-elevated"
                  : "px-4 py-2 text-sm text-charcoal border border-steel rounded-none hover:border-graphite lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out lg:hover:-translate-y-0.5"
              }
            >
              Все
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "px-4 py-2 text-sm bg-graphite text-white rounded-none lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out shadow-elevated"
                    : "px-4 py-2 text-sm text-charcoal border border-steel rounded-none hover:border-graphite lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out lg:hover:-translate-y-0.5"
                }
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-10 pb-4 lg:mt-12 lg:pb-0 lg:w-full"
      >
        <div className="group relative">
          {/* Desktop edge fades */}
          <div
            aria-hidden="true"
            className={[
              "pointer-events-none absolute inset-y-0 left-0 z-10 w-14 transition-opacity duration-200 hidden lg:block",
              "bg-gradient-to-r from-cream-light to-transparent",
              canScrollLeft ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
          <div
            aria-hidden="true"
            className={[
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-14 transition-opacity duration-200 hidden lg:block",
              "bg-gradient-to-l from-cream-light to-transparent",
              canScrollRight ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          {/* Desktop arrows */}
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            aria-label="Прокрутить влево"
            className={[
              "hidden lg:flex items-center justify-center",
              "absolute left-2 top-1/2 -translate-y-1/2 z-20",
              "h-11 w-11 rounded-full",
              "border border-white/30 bg-white/35 backdrop-blur-md",
              "shadow-elevated transition",
              "opacity-0 group-hover:opacity-100",
              canScrollLeft
                ? "pointer-events-auto hover:bg-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite/30"
                : "pointer-events-none",
            ].join(" ")}
          >
            <span className="text-graphite text-xl leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={() => scrollByStep(1)}
            aria-label="Прокрутить вправо"
            className={[
              "hidden lg:flex items-center justify-center",
              "absolute right-2 top-1/2 -translate-y-1/2 z-20",
              "h-11 w-11 rounded-full",
              "border border-white/30 bg-white/35 backdrop-blur-md",
              "shadow-elevated transition",
              "opacity-0 group-hover:opacity-100",
              canScrollRight
                ? "pointer-events-auto hover:bg-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite/30"
                : "pointer-events-none",
            ].join(" ")}
          >
            <span className="text-graphite text-xl leading-none">›</span>
          </button>

          {/* Narrow hint */}
          {isNarrow && (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream-light to-transparent"
              />
              {!hasInteracted && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2"
                >
                  <div className="flex items-center gap-1 text-ash/70 text-xs">
                    <span className="inline-block animate-pulse">Свайп</span>
                    <span className="inline-block animate-pulse">→</span>
                  </div>
                </div>
              )}
            </>
          )}

          <div
            ref={sliderRef}
            tabIndex={0}
            style={sliderBehaviorStyle}
            className={[
              "portfolio-slider portfolio-cards-container flex gap-6 overflow-x-auto",
              "scroll-smooth",
              // padding for nice edges
              "px-4 scroll-px-4",
              "sm:px-6 sm:scroll-px-6",
              "lg:flex-nowrap lg:px-8 lg:scroll-px-8",
              "lg:cursor-grab",
              "lg:pb-4",
            ].join(" ")}
          >
            {visibleItems.map((item, index) => (
              <article
                key={`${item.title}-${item.material}`}
                className={[
                  "portfolio-card group min-w-[260px] flex-1 overflow-hidden rounded-xl border border-steel/25 bg-warm/40 shadow-elevated hover-shadow card-desktop",
                  "lg:min-w-[320px] lg:flex-none lg:transition lg:duration-300 lg:ease-out lg:hover:-translate-y-1 lg:hover:scale-[1.01]",
                  // snap class kept (but overridden on mobile via global style below)
                  "snap-start",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="block w-full text-left"
                  aria-label={`Открыть фото: ${item.title}`}
                >
                  <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-auto lg:aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] lg:group-hover:scale-[1.06]"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="space-y-4 p-6 lg:p-7">
                    <h3 className="text-graphite font-medium lg:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ash lg:text-base">
                      {item.material}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="section-header portfolio-cta mt-8">
        <a
          href="#lead"
          className="focus-ring inline-flex rounded-none border border-graphite px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-graphite hover:text-white lg:px-8 lg:py-4 lg:text-[length:var(--font-nav)]"
        >
          Хочу похожий проект
        </a>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => closeLightbox()}
        index={lightboxIndex}
        slides={slides}
        plugins={[Fullscreen, Zoom]}
        carousel={{ finite: false }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 1.8,
          doubleTapDelay: 250,
          doubleClickDelay: 250,
          wheelZoomDistanceFactor: 140,
          pinchZoomDistanceFactor: 140,
        }}
      />

      <style jsx global>{`
        /* ✅ MOBILE/TABLET: hard override center-snap rules that may exist globally */
        @media (max-width: 1023px) {
          .portfolio-slider {
            scroll-snap-type: x proximity !important;
            scroll-padding-left: 1rem !important;
            scroll-padding-right: 1rem !important;
          }
          .portfolio-slider > .portfolio-card,
          .portfolio-slider > article.portfolio-card {
            scroll-snap-align: start !important;
          }
        }

        /* ✅ DESKTOP: keep visible horizontal scrollbar */
        @media (min-width: 1024px) {
          .portfolio-slider {
            scroll-snap-type: x mandatory;
            scrollbar-gutter: stable !important;
            scrollbar-width: auto !important; /* Firefox */
            scrollbar-color: rgba(0, 0, 0, 0.42) rgba(0, 0, 0, 0.08) !important;
          }

          .portfolio-slider::-webkit-scrollbar {
            height: 12px !important;
            display: block !important;
          }

          .portfolio-slider::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.06) !important;
            border-radius: 9999px !important;
          }

          .portfolio-slider::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.32) !important;
            border-radius: 9999px !important;
            border: 3px solid rgba(0, 0, 0, 0.06) !important;
          }

          .portfolio-slider::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.48) !important;
          }
        }
      `}</style>
    </section>
  );
}







