"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import useDesktopMotion from "../ui/useDesktopMotion";

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

export default function Portfolio({ categories }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { isMounted, shouldAnimate } = useDesktopMotion();
  const activeCategoryData = useMemo(
    () => categories.find((category) => category.id === activeCategory),
    [activeCategory, categories]
  );
  const visibleItems = useMemo(() => {
    if (activeCategory === "all") {
      return categories.flatMap((category) => category.items);
    }
    return activeCategoryData?.items ?? [];
  }, [activeCategory, activeCategoryData, categories]);

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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || typeof window === "undefined") {
      return;
    }

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMouseDown = (event: MouseEvent) => {
      if (!mediaQuery.matches) {
        return;
      }
      isDown = true;
      slider.classList.add("is-dragging");
      startX = event.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      if (!mediaQuery.matches) {
        return;
      }
      isDown = false;
      slider.classList.remove("is-dragging");
    };

    const handleMouseUp = () => {
      if (!mediaQuery.matches) {
        return;
      }
      isDown = false;
      slider.classList.remove("is-dragging");
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!mediaQuery.matches || !isDown) {
        return;
      }
      event.preventDefault();
      const x = event.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("dragstart", handleDragStart);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <section className="portfolio-section bg-cream-light py-16 sm:py-20 section-desktop">
      <motion.div {...fadeUpProps(0)} className="section-header">
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="h-px w-10 bg-graphite/60" aria-hidden="true" />
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl lg:text-[length:var(--font-h2)] lg:leading-tight lg:tracking-[0.01em]">
            Наши работы
          </h2>
        </div>
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
      </motion.div>

      <motion.div
        {...fadeUpProps(0.1)}
        className="mt-10 pb-4 lg:mt-12 lg:pb-0 lg:w-full"
      >
        <div
          ref={sliderRef}
          className="portfolio-slider portfolio-cards-container flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 lg:flex-nowrap lg:px-8 lg:scroll-px-8"
        >
          {visibleItems.map((item) => (
            <article
              key={`${item.title}-${item.material}`}
              className="portfolio-card group min-w-[260px] flex-1 snap-start overflow-hidden rounded-3xl border border-steel/25 bg-warm/40 shadow-elevated hover-shadow card-desktop lg:min-w-[320px] lg:flex-none lg:transition lg:duration-300 lg:ease-out lg:hover:-translate-y-1 lg:hover:scale-[1.01]"
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
                <p className="text-sm text-ash lg:text-base">{item.material}</p>
              </div>
            </article>
          ))}
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
    </section>
  );
}
