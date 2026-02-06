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

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const dragThreshold = 6;
    const wheelMultiplier = 1.2;
    const keyScrollStep = 280;
    let isPointerDown = false;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let cancelClick = false;
    let wheelRaf = 0;
    let queuedWheelDelta = 0;

    const getMaxScrollLeft = () =>
      Math.max(0, slider.scrollWidth - slider.clientWidth);

    const clampScrollLeft = (nextValue: number) =>
      Math.max(0, Math.min(getMaxScrollLeft(), nextValue));

    const canScrollInDirection = (delta: number) => {
      if (delta > 0) {
        return slider.scrollLeft < getMaxScrollLeft() - 1;
      }
      if (delta < 0) {
        return slider.scrollLeft > 1;
      }
      return false;
    };

    const getWheelDelta = (event: WheelEvent) => {
      let delta = event.deltaY;
      if (event.deltaMode === 1) {
        delta *= 16;
      } else if (event.deltaMode === 2) {
        delta *= slider.clientWidth;
      }
      return delta * wheelMultiplier;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!mediaQuery.matches) {
        return;
      }
      const delta = getWheelDelta(event);
      if (!canScrollInDirection(delta)) {
        return;
      }
      event.preventDefault();
      queuedWheelDelta += delta;
      if (!wheelRaf) {
        wheelRaf = window.requestAnimationFrame(() => {
          slider.scrollLeft = clampScrollLeft(
            slider.scrollLeft + queuedWheelDelta
          );
          queuedWheelDelta = 0;
          wheelRaf = 0;
        });
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (!mediaQuery.matches || event.button !== 0) {
        return;
      }
      isPointerDown = true;
      isDragging = false;
      cancelClick = false;
      startX = event.pageX;
      startScrollLeft = slider.scrollLeft;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!mediaQuery.matches || !isPointerDown) {
        return;
      }
      const delta = event.pageX - startX;
      if (!isDragging && Math.abs(delta) > dragThreshold) {
        isDragging = true;
        slider.classList.add("is-dragging");
      }
      if (!isDragging) {
        return;
      }
      event.preventDefault();
      slider.scrollLeft = clampScrollLeft(startScrollLeft - delta);
    };

    const endDrag = () => {
      if (!mediaQuery.matches) {
        return;
      }
      if (isDragging) {
        cancelClick = true;
      }
      isPointerDown = false;
      isDragging = false;
      slider.classList.remove("is-dragging");
    };

    const handleClickCapture = (event: MouseEvent) => {
      if (!mediaQuery.matches) {
        return;
      }
      if (cancelClick) {
        event.preventDefault();
        event.stopPropagation();
        cancelClick = false;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mediaQuery.matches) {
        return;
      }
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const delta = direction * keyScrollStep;
      if (!canScrollInDirection(delta)) {
        return;
      }
      event.preventDefault();
      slider.scrollLeft = clampScrollLeft(slider.scrollLeft + delta);
    };

    const handleDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseleave", endDrag);
    slider.addEventListener("mouseup", endDrag);
    slider.addEventListener("click", handleClickCapture, true);
    slider.addEventListener("keydown", handleKeyDown);
    slider.addEventListener("dragstart", handleDragStart);

    return () => {
      slider.removeEventListener("wheel", handleWheel);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseleave", endDrag);
      slider.removeEventListener("mouseup", endDrag);
      slider.removeEventListener("click", handleClickCapture, true);
      slider.removeEventListener("keydown", handleKeyDown);
      slider.removeEventListener("dragstart", handleDragStart);
      if (wheelRaf) {
        window.cancelAnimationFrame(wheelRaf);
      }
    };
  }, []);

  return (
    <section className="portfolio-section bg-cream-light py-16 sm:py-20 section-desktop">
      <motion.div {...fadeUpProps(0)} className="section-header">
        <div className="section-title-row">
          <div className="section-title-divider" aria-hidden="true" />
          <h2 className="section-title">
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
          tabIndex={0}
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
