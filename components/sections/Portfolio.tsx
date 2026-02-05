"use client";

import { useMemo, useState } from "react";

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

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-graphite/60" aria-hidden="true" />
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
            Каталог работ
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={
              activeCategory === "all"
                ? "px-4 py-2 text-sm bg-graphite text-white rounded-none"
                : "px-4 py-2 text-sm text-charcoal border border-steel rounded-none hover:border-graphite"
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
                  ? "px-4 py-2 text-sm bg-graphite text-white rounded-none"
                  : "px-4 py-2 text-sm text-charcoal border border-steel rounded-none hover:border-graphite"
              }
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 overflow-x-auto pb-4">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 snap-x snap-mandatory scroll-px-4 sm:gap-6 sm:scroll-px-6 lg:scroll-px-8">
            {visibleItems.map((item) => (
              <article
                key={`${item.title}-${item.material}`}
                className="group min-w-[260px] flex-1 snap-start overflow-hidden rounded-3xl border border-steel/25 bg-warm/40"
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-graphite font-medium">{item.title}</h3>
                  <p className="text-sm text-ash">{item.material}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <a
          href="#lead"
          className="focus-ring inline-flex rounded-none border border-graphite px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-graphite hover:text-white"
        >
          Хочу похожий проект
        </a>
      </div>
    </section>
  );
}
