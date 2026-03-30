"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

/* ─── Types (unchanged) ─── */
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

/* ──────────────────────────────────────────────────────────────────────
   Art-directed display order for "Все" tab.
   CSS columns fills top→bottom, then next column, so:
   Items 1-7 → LEFT column, Items 8-13 → RIGHT column.

   LEFT:                              RIGHT:
   1  Кресло Heritage колесная        8  Heritage Classic RED
   2  Резное кресло Heritage          9  Кровать розовая
   3  Модульный зелёный              10  Кровать серая
   4  Chesterfield                   11  Банкетка
   5  Лаунж синий                    12  Пуф
   6  Минималистичный диван          13  Диван переговорной
   7  Угловой диван (cream)
   ────────────────────────────────────────────────────────────────────── */
const ALL_DISPLAY_ORDER: string[] = [
  /* LEFT 1  */ "https://i.postimg.cc/cJSQh23G/1c51eec6e84c002d0d9310cb10b26ec0-1770243052.png",
  /* LEFT 2  */ "https://i.postimg.cc/ZnbB2vFd/17091dd7206c2c4550150e55426f61ad-1770240229.png",
  /* LEFT 3  */ "https://i.postimg.cc/28YBLJs8/06864f01252556d06a45281bffd903ed-1770245125.png",
  /* LEFT 4  */ "https://i.postimg.cc/7L9TV6D1/a3ce72d274c2a75847a8fe18b32b1091-1770241389.png",
  /* LEFT 5  */ "https://i.postimg.cc/1XKmqyQy/196f01ad-e165-4ff4-83c9-eedd43b4d7d1.png",
  /* LEFT 6  */ "https://i.postimg.cc/tRF7tkbW/771f0af22663800624a9fc8c4300639e-1770247764.png",
  /* LEFT 7  */ "https://i.postimg.cc/jSDTsHLw/38246aa2-9ced-4ea6-9a5a-32de4b893e25.png",
  /* RIGHT 1 */ "https://i.postimg.cc/KzvGxWVV/photo-2026-02-09-00-33-28.jpg",
  /* RIGHT 2 */ "https://i.postimg.cc/k41M1Y0N/720490c15029dad280131423b2d53b27-1770732955.png",
  /* RIGHT 3 */ "https://i.postimg.cc/jjnFnLfH/15cf1e42e21d4141d4ec6a52abbedb2f-1770652377.png",
  /* RIGHT 4 */ "https://i.postimg.cc/W1rKYd9w/0f154305120eb542bd0b0ce9e9d04798-1770247952.png",
  /* RIGHT 5 */ "https://i.postimg.cc/GpdMMqT4/eddeff193c92e25e89c1018110825040-1770247153.png",
  /* RIGHT 6 */ "https://i.postimg.cc/k55tTbsm/d29350da0f0e5772c0e15acbc1dae661-1770245979.png",
];

/* ─── Component ─── */
export default function Portfolio({ categories }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const { isMounted, shouldAnimate } = useDesktopMotion();

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  /* ─── Derived data ─── */
  const activeCategoryData = useMemo(
    () => categories.find((c) => c.id === activeCategory),
    [activeCategory, categories]
  );

  const visibleItems = useMemo(() => {
    const raw =
      activeCategory === "all"
        ? categories.flatMap((c) => c.items)
        : activeCategoryData?.items ?? [];

    // Deduplicate by image URL
    const seen = new Set<string>();
    const deduped = raw.filter((item) => {
      if (seen.has(item.image)) return false;
      seen.add(item.image);
      return true;
    });

    // Apply curated display order for "Все" tab
    if (activeCategory === "all") {
      const orderMap = new Map(
        ALL_DISPLAY_ORDER.map((url, i) => [url, i])
      );
      return [...deduped].sort((a, b) => {
        const ia = orderMap.get(a.image) ?? 999;
        const ib = orderMap.get(b.image) ?? 999;
        return ia - ib;
      });
    }

    return deduped;
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

  /* ─── Animation helpers ─── */
  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
          viewport: { once: true, amount: 0.3 },
        }
      : { initial: false };

  const fadeUpProps = (delay = 0) => (isMounted ? fadeUp(delay) : {});

  const tileVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: Math.min(i * 0.045, 0.4),
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.2 } },
  };

  /* ─── Lightbox open / close + popstate ─── */
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    if (typeof window !== "undefined") {
      window.history.pushState({ portfolioLightbox: true }, "");
    }
  }, []);

  const closeLightbox = useCallback((opts?: { viaPopState?: boolean }) => {
    setIsLightboxOpen(false);
    if (typeof window !== "undefined" && !opts?.viaPopState) {
      try {
        if (window.history.state?.portfolioLightbox) window.history.back();
      } catch {
        // ignore
      }
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

  return (
    <section
      data-component="portfolio-masonry"
      className="portfolio-section bg-cream-light py-16 sm:py-20 section-desktop"
    >
      {/* ─── Header ─── */}
      <motion.div {...fadeUpProps(0)}>
        <div className="section-header">
          <div className="section-title-row">
            <div className="section-title-divider" aria-hidden="true" />
            <h2 className="section-title">Наши работы</h2>
          </div>
        </div>

        {/* ─── Category filters ─── */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-8 lg:gap-4">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={
                activeCategory === "all"
                  ? "cursor-pointer px-4 py-2 text-sm bg-graphite text-white rounded-lg transition-all duration-200 lg:px-6 lg:py-2.5 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] shadow-[0_4px_12px_rgba(44,44,44,0.25)]"
                  : "cursor-pointer px-4 py-2 text-sm text-charcoal border border-steel rounded-lg hover:border-graphite/60 hover:bg-stone/60 transition-all duration-200 lg:px-6 lg:py-2.5 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:hover:-translate-y-0.5"
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
                    ? "cursor-pointer px-4 py-2 text-sm bg-graphite text-white rounded-lg transition-all duration-200 lg:px-6 lg:py-2.5 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] shadow-[0_4px_12px_rgba(44,44,44,0.25)]"
                    : "cursor-pointer px-4 py-2 text-sm text-charcoal border border-steel rounded-lg hover:border-graphite/60 hover:bg-stone/60 transition-all duration-200 lg:px-6 lg:py-2.5 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:hover:-translate-y-0.5"
                }
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Masonry grid (columns) ─── */}
      <motion.div
        {...fadeUpProps(0.1)}
        className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 lg:mt-12 lg:px-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-2 lg:columns-3 gap-3 lg:gap-4"
          >
            {visibleItems.map((item, index) => (
              <motion.article
                key={`${item.image}-${index}`}
                custom={index}
                variants={shouldAnimate ? tileVariants : undefined}
                initial={shouldAnimate ? "hidden" : false}
                animate={shouldAnimate ? "visible" : undefined}
                exit={shouldAnimate ? "exit" : undefined}
                className="mb-3 lg:mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Открыть фото: ${item.title}`}
                  className="group relative block w-full text-left overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite/40 focus-visible:ring-offset-2"
                >
                  {/* ── Image wrapper ── */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="block w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      draggable={false}
                    />

                    {/* Desktop ONLY: hover veil + text overlay */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden lg:block"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden lg:block pointer-events-none">
                      <p className="text-white text-sm lg:text-base font-medium leading-tight">
                        {item.title}
                      </p>
                      <p className="text-white/70 text-xs lg:text-sm mt-1">
                        {item.material}
                      </p>
                    </div>
                  </div>

                  {/* ── Mobile ONLY: text BELOW the image ── */}
                  <div className="pt-2.5 pb-1 lg:hidden">
                    <p className="text-graphite text-[13px] font-medium leading-snug line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-ash text-[11px] leading-snug mt-0.5 line-clamp-1">
                      {item.material}
                    </p>
                  </div>

                  {/* sr-only */}
                  <span className="sr-only">
                    {item.title} — {item.material}
                  </span>
                </button>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ─── CTA ─── */}
      <div className="section-header portfolio-cta mt-10 lg:mt-14">
        <a
          href="#lead"
          className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg border border-graphite px-6 py-3 text-sm font-semibold text-graphite transition-all duration-200 hover:bg-graphite hover:text-white hover:shadow-md lg:px-8 lg:py-4 lg:text-[length:var(--font-nav)]"
        >
          Хочу похожий проект
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* ─── Lightbox ─── */}
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
    </section>
  );
}






