import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "../../../components/sections/Header";
import Footer from "../../../components/sections/Footer";
import articles from "../../../content/blog/articles.json";

const SITE = "https://m-astra.ru";
const DZEN_CHANNEL = "https://dzen.ru/id/6ac24e6dfe1edc0c70ac3e2c";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE}/blog/${article.slug}/` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `${SITE}/blog/${article.slug}/`,
      publishedTime: article.date,
      images: article.cover ? [`${SITE}${article.cover}`] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const faq: { q: string; a: string }[] =
    (article as unknown as { faq?: { q: string; a: string }[] }).faq ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        author: { "@type": "Organization", name: "Мастерская АСТРА" },
        publisher: { "@type": "Organization", name: "Мастерская АСТРА", url: SITE },
        mainEntityOfPage: `${SITE}/blog/${article.slug}/`,
        inLanguage: "ru",
        ...(article.cover ? { image: `${SITE}${article.cover}` } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${SITE}/blog/` },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `${SITE}/blog/${article.slug}/`,
          },
        ],
      },
      ...(faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="bg-cream text-charcoal">
      <Header />
      <main id="main" className="pb-20 pt-10 md:pt-14">
        <div className="wrap">
          <nav className="text-[13px] text-ash" aria-label="Хлебные крошки">
            <Link className="transition-colors duration-300 hover:text-ink" href="/">
              Главная
            </Link>
            <span className="px-2">/</span>
            <Link className="transition-colors duration-300 hover:text-ink" href="/blog/">
              Статьи
            </Link>
          </nav>

          <article className="mx-auto mt-8 max-w-[820px]">
            <h1 className="font-heading text-[28px] font-medium leading-tight text-ink md:text-[42px]">
              {article.title}
            </h1>
            <p className="mt-5 text-[12px] uppercase tracking-[0.18em] text-ash">
              {article.dateLabel} · Мастерская АСТРА
            </p>

            {article.cover ? (
              <div className="mt-8 overflow-hidden bg-stone">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.cover}
                  alt={article.coverAlt}
                  decoding="async"
                  className="block h-full w-full object-cover"
                />
              </div>
            ) : null}

            <div
              className="article-body mt-10"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />

            <div className="mt-12 border-t border-steel pt-8 text-[14px] leading-relaxed text-charcoal">
              Больше разборов и советов — в канале{" "}
              <a
                className="text-walnut underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                href={DZEN_CHANNEL}
                target="_blank"
                rel="noreferrer"
              >
                «Мастерская АСТРА» в Дзене
              </a>
              . Выбрать мебель по своим размерам —{" "}
              <Link
                className="text-walnut underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                href="/catalog/"
              >
                в каталоге мастерской
              </Link>
              .
            </div>
          </article>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </div>
  );
}
