import Link from "next/link";
import {
  collections,
  countByCollection,
  modelsPlural,
  uniqueItems,
} from "../../lib/catalog";

export default function Collections() {
  const total = uniqueItems().length;

  return (
    <section id="collections" tabIndex={-1} className="section-pad scroll-mt-24 bg-cream">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Каталог</p>
            <h2 className="h-section mt-4">Пять коллекций</h2>
          </div>

          <Link
            href="/catalog/"
            className="focus-ring text-[13px] uppercase tracking-[0.1em] text-walnut underline-offset-[6px] transition-colors duration-300 hover:text-ink hover:underline"
          >
            Весь каталог — {total} {modelsPlural(total)} →
          </Link>
        </div>

        <ul className="mt-14 border-t border-steel">
          {collections.map((collection) => {
            const count = countByCollection(collection.id);

            return (
              <li key={collection.id} className="border-b border-steel">
                <Link
                  href={`/catalog/?collection=${collection.id}`}
                  className="focus-ring group grid grid-cols-[96px_minmax(0,1fr)] items-center gap-5 py-6 transition-colors duration-300 hover:bg-cream-light sm:grid-cols-[96px_minmax(0,1fr)_auto] sm:gap-8 sm:px-4"
                >
                  <div className="h-[120px] w-[96px] overflow-hidden bg-stone">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={collection.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-heading text-[22px] font-medium leading-tight text-ink lg:text-[34px]">
                      {collection.title}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-[14px] leading-relaxed text-charcoal">
                      {collection.description}
                    </p>
                    <span className="mt-3 block text-[13px] uppercase tracking-[0.1em] text-ash sm:hidden">
                      {count} {modelsPlural(count)} →
                    </span>
                  </div>

                  <span className="hidden whitespace-nowrap text-[13px] uppercase tracking-[0.1em] text-ash transition-colors duration-300 group-hover:text-ink sm:block">
                    {count} {modelsPlural(count)} →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
