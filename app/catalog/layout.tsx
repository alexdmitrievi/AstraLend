import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог",
  description:
    "Каталог мягкой мебели мастерской АСТРА: диваны, кресла, кровати, банкетки и мебель для бизнеса. Любые размеры и обивка под заказ.",
  alternates: {
    canonical: "https://m-astra.ru/catalog/",
  },
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
