import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статьи",
  description:
    "Статьи мастерской АСТРА о мягкой мебели на заказ: как выбрать диван, кровать, кресло и кухонный уголок, из чего складывается цена и на чём не стоит экономить.",
  alternates: {
    canonical: "https://m-astra.ru/blog/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
