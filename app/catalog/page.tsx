"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import CatalogGrid from "../../components/catalog/CatalogGrid";
import FilterRow, { type FilterOption } from "../../components/catalog/FilterRow";
import {
  collections,
  filterItems,
  materialLabels,
  modelsPlural,
  roomLabels,
  type MaterialTag,
  type RoomTag,
} from "../../lib/catalog";

const collectionOptions: FilterOption<string>[] = [
  { value: "", label: "Все" },
  ...collections.map((collection) => ({
    value: collection.id,
    label: collection.title,
  })),
];

const materialOptions: FilterOption<MaterialTag | "">[] = [
  { value: "", label: "Любой" },
  ...(Object.keys(materialLabels) as MaterialTag[]).map((tag) => ({
    value: tag,
    label: materialLabels[tag],
  })),
];

const roomOptions: FilterOption<RoomTag | "">[] = [
  { value: "", label: "Все" },
  ...(Object.keys(roomLabels) as RoomTag[]).map((tag) => ({
    value: tag,
    label: roomLabels[tag],
  })),
];

/* Начальный фильтр из ?collection=.
   Страница статически экспортируется, поэтому query-строка доступна только
   на клиенте: сервер отдаёт "", клиент — значение из URL. */
const subscribeToNothing = () => () => {};
const readCollectionFromUrl = () => {
  const requested = new URLSearchParams(window.location.search).get("collection");
  return requested && collections.some((c) => c.id === requested) ? requested : "";
};
const noCollection = () => "";

export default function CatalogPage() {
  const urlCollection = useSyncExternalStore(
    subscribeToNothing,
    readCollectionFromUrl,
    noCollection
  );

  // null = пользователь ещё не трогал фильтр, действует значение из URL.
  const [pickedCollection, setPickedCollection] = useState<string | null>(null);
  const collection = pickedCollection ?? urlCollection;
  const setCollection = (value: string) => setPickedCollection(value);

  const [material, setMaterial] = useState<MaterialTag | "">("");
  const [room, setRoom] = useState<RoomTag | "">("");

  const items = useMemo(
    () => filterItems({ collection, material, room }),
    [collection, material, room]
  );

  const hasFilters = Boolean(collection || material || room);

  const resetFilters = () => {
    setPickedCollection("");
    setMaterial("");
    setRoom("");
  };

  return (
    <>
      <Header />

      <main id="main" className="bg-cream">
        <section className="section-pad">
          <div className="wrap">
            <Link
              href="/"
              className="focus-ring text-[12px] uppercase tracking-[0.16em] text-ash transition-colors duration-300 hover:text-ink"
            >
              ← На главную
            </Link>
            <h1
              className="mt-5 font-heading font-medium leading-[1.05] text-ink"
              style={{ fontSize: "clamp(34px, 5vw, 68px)" }}
            >
              Каталог
            </h1>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-charcoal">
              Все модели мастерской. Любая позиция меняется по размеру, обивке и
              основанию — каталог здесь отправная точка, а не готовый склад.
            </p>

            <div className="mt-12 border-t border-steel">
              <FilterRow
                label="Коллекция"
                options={collectionOptions}
                value={collection}
                onChange={setCollection}
              />
              <FilterRow
                label="Материал"
                options={materialOptions}
                value={material}
                onChange={setMaterial}
              />
              <FilterRow
                label="Помещение"
                options={roomOptions}
                value={room}
                onChange={setRoom}
              />
            </div>

            <div className="mt-6 mb-12 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[13px] text-ash" aria-live="polite">
                {items.length} {modelsPlural(items.length)} в подборке
              </p>

              <button
                type="button"
                onClick={resetFilters}
                disabled={!hasFilters}
                className="focus-ring cursor-pointer text-[13px] uppercase tracking-[0.1em] text-walnut underline-offset-[6px] transition-colors duration-300 hover:text-ink hover:underline disabled:cursor-default disabled:text-ash/50 disabled:no-underline"
              >
                Сбросить фильтры
              </button>
            </div>

            <CatalogGrid items={items} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
