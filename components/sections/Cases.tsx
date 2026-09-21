import Link from "next/link";
import { cases, type ProjectCase } from "../../lib/cases";
import { collections } from "../../lib/catalog";

type CasesProps = {
  /** Путь к фактуре или null, если файла ещё нет в public/. */
  textureSrc?: string | null;
};

type Row = { label: string; value: string };

function CaseCard({ item }: { item: ProjectCase }) {
  const rows: Row[] = [
    { label: "Задача", value: item.task },
    { label: "Решение", value: item.solution },
    { label: "Результат", value: item.result },
  ].filter((row) => row.value.trim().length > 0);

  const collection = collections.find((c) => c.id === item.collection);

  return (
    <article className="flex flex-col gap-6">
      <div className="aspect-[4/5] w-full overflow-hidden bg-stone">
        {item.cover ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.cover}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-[12px] uppercase tracking-[0.24em] text-charcoal">
              фото готовится
            </span>
            <span className="text-[12px] leading-relaxed text-ash">
              {item.coverHint}
            </span>
          </div>
        )}
      </div>

      <div>
        {item.city ? (
          <p className="text-[12px] uppercase tracking-[0.2em] text-white/60">
            {item.city}
          </p>
        ) : null}

        {item.title ? (
          <h3 className="mt-3 font-heading text-[28px] font-medium leading-tight text-white">
            {item.title}
          </h3>
        ) : null}

        {rows.length > 0 ? (
          <dl className="mt-5 grid gap-3.5">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-t border-white/20 pt-3.5"
              >
                <dt className="text-[11px] uppercase tracking-[0.16em] text-white/60">
                  {row.label}
                </dt>
                <dd className="text-[14px] leading-relaxed text-white/85">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {collection ? (
          <Link
            href={`/catalog/?collection=${collection.id}`}
            className="focus-ring mt-6 inline-block border-b border-white/50 pb-1 text-[12px] uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-white"
          >
            Модели объекта →
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default function Cases({ textureSrc = null }: CasesProps) {
  return (
    <section
      id="projects"
      tabIndex={-1}
      className="section-pad relative scroll-mt-24 overflow-hidden bg-dark"
    >
      {textureSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={textureSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(35,35,34,.82) 0%, rgba(35,35,34,.94) 60%, #232322 100%)",
        }}
      />

      <div className="wrap relative">
        <p className="text-[12px] uppercase tracking-[0.24em] text-white/60">
          Наши работы
        </p>
        <h2 className="h-section mt-4 max-w-[20ch] text-white">
          Объекты, где стоит наша мебель
        </h2>
        <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-white/75">
          Каждый объект — задача, решение и результат. С каждой обложки можно
          перейти к моделям, которые в нём использованы.
        </p>

        <div className="mt-14 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
