import Link from "next/link";
import { cases, type ProjectCase } from "../../lib/cases";
import { collections } from "../../lib/catalog";

type Row = { label: string; value: string };

function CaseCard({ item }: { item: ProjectCase }) {
  const rows: Row[] = [
    { label: "Задача", value: item.task },
    { label: "Решение", value: item.solution },
    { label: "Результат", value: item.result },
  ].filter((row) => row.value.trim().length > 0);

  const collection = collections.find((c) => c.id === item.collection);

  return (
    <article className="flex flex-col border-t border-white/15 pt-6">
      <div className="aspect-[4/5] w-full overflow-hidden bg-stone">
        {item.cover ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.cover}
            alt={item.title || "Объект мастерской АСТРА"}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="eyebrow text-charcoal">фото готовится</span>
          </div>
        )}
      </div>

      {item.city ? (
        <p className="eyebrow mt-6 text-white/60">{item.city}</p>
      ) : null}

      {item.title ? (
        <h3 className="mt-3 font-heading text-[24px] font-medium leading-tight text-white">
          {item.title}
        </h3>
      ) : null}

      {rows.length > 0 ? (
        <dl className="mt-6 space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[96px_1fr] gap-4 border-t border-white/10 pt-3">
              <dt className="text-[12px] uppercase tracking-[0.16em] text-white/60">
                {row.label}
              </dt>
              <dd className="text-[14px] leading-relaxed text-white/80">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {collection ? (
        <Link
          href={`/catalog/?collection=${collection.id}`}
          className="focus-ring mt-6 inline-block text-[13px] uppercase tracking-[0.1em] text-white/80 underline-offset-[6px] transition-colors duration-300 hover:text-white hover:underline"
        >
          Модели объекта →
        </Link>
      ) : null}
    </article>
  );
}

export default function Cases() {
  const hasContent = cases.some((item) => item.title || item.cover);

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="section-pad scroll-mt-24 bg-dark"
    >
      <div className="wrap">
        <p className="eyebrow text-white/60">Объекты</p>
        <h2 className="h-section mt-4 max-w-[20ch] text-white">
          Объекты, где стоит наша мебель
        </h2>

        {!hasContent ? (
          <p className="mt-6 max-w-[60ch] text-[14px] leading-relaxed text-white/65">
            Материалы по объектам готовятся: собираем фотографии и согласуем
            описания с заказчиками.
          </p>
        ) : null}

        <div className="mt-14 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
