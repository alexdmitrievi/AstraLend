import Link from "next/link";
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";
import articles from "../../content/blog/articles.json";

const DZEN_CHANNEL = "https://dzen.ru/id/6ac24e6dfe1edc0c70ac3e2c";

export default function BlogIndexPage() {
  return (
    <div className="bg-cream text-charcoal">
      <Header />
      <main id="main" className="section-pad">
        <div className="wrap">
          <p className="eyebrow">Журнал мастерской</p>
          <h1 className="h-section mt-4">Статьи о мебели на заказ</h1>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-charcoal">
            Практические разборы от мастеров АСТРА: как выбрать диван, кровать или
            кухонный уголок, из чего складывается цена и на чём не стоит экономить.
            Эти же статьи выходят в нашем канале{" "}
            <a
              className="text-walnut underline underline-offset-4 transition-colors duration-300 hover:text-ink"
              href={DZEN_CHANNEL}
              target="_blank"
              rel="noreferrer"
            >
              «Мастерская АСТРА» в Дзене
            </a>
            .
          </p>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}/`} className="focus-ring group block">
                  <div className="aspect-[16/9] overflow-hidden bg-stone">
                    {article.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={article.cover}
                        alt={article.coverAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-heading text-[18px] text-ash">
                        А·СТРА
                      </span>
                    )}
                  </div>
                  <p className="mt-5 text-[12px] uppercase tracking-[0.18em] text-ash">
                    {article.dateLabel}
                  </p>
                  <h2 className="mt-2 font-heading text-[20px] font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-walnut md:text-[22px]">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-charcoal">
                    {article.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-steel pt-8 text-[14px] leading-relaxed text-charcoal">
            Выбрать мебель по своим размерам можно{" "}
            <Link
              className="text-walnut underline underline-offset-4 transition-colors duration-300 hover:text-ink"
              href="/catalog/"
            >
              в каталоге мастерской
            </Link>
            . А короткие советы и новые статьи мы публикуем{" "}
            <a
              className="text-walnut underline underline-offset-4 transition-colors duration-300 hover:text-ink"
              href={DZEN_CHANNEL}
              target="_blank"
              rel="noreferrer"
            >
              в Дзене
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
