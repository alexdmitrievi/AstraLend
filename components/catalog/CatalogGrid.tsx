"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { CatalogItem } from "../../lib/catalog";
import type { Slide } from "./CatalogLightbox";

// Лайтбокс со своими стилями — отдельный чанк, подгружается по первому клику.
const CatalogLightbox = dynamic(() => import("./CatalogLightbox"), {
  ssr: false,
});

type CatalogGridProps = {
  items: CatalogItem[];
};

export default function CatalogGrid({ items }: CatalogGridProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  // Один раз открыли — компонент остаётся смонтированным, иначе пропадает
  // анимация закрытия.
  const [isLightboxLoaded, setIsLightboxLoaded] = useState(false);

  const slides: Slide[] = useMemo(
    () =>
      items.map((item) => ({
        src: item.image,
        alt: item.title,
        title: item.title,
        description: item.material,
      })),
    [items]
  );

  /* ─── Лайтбокс: открытие / закрытие + кнопка «назад» браузера ─── */
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setIsLightboxLoaded(true);
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

  if (items.length === 0) {
    return (
      <p className="border-t border-steel py-16 text-[15px] text-charcoal">
        По выбранным фильтрам ничего не нашлось. Сбросьте фильтры или напишите
        нам — изготовим по вашим размерам.
      </p>
    );
  }

  return (
    <>
      <ul className="catalog-grid grid gap-x-7 gap-y-10 [grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr))]">
        {items.map((item, index) => (
          <li key={item.id} className="group flex flex-col">
            <button
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`Открыть фото: ${item.title}`}
              className="focus-ring block w-full cursor-pointer text-left"
            >
              <span className="photo block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </span>
            </button>

            <h3 className="mt-5 font-heading text-[19px] font-medium leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ash">
              {item.material}
            </p>

            <Link
              href="/#lead"
              className="focus-ring mt-4 inline-block self-start text-[12px] uppercase tracking-[0.16em] text-walnut underline-offset-[6px] transition-colors duration-300 hover:text-ink hover:underline"
            >
              Рассчитать модель →
            </Link>
          </li>
        ))}
      </ul>

      {isLightboxLoaded ? (
        <CatalogLightbox
          open={isLightboxOpen}
          index={lightboxIndex}
          slides={slides}
          onClose={() => closeLightbox()}
        />
      ) : null}
    </>
  );
}
