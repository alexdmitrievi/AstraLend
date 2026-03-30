import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "../components/ui/WhatsAppFloat";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE_URL = "https://a-stra.ru";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Мягкая мебель на заказ — Мастерская АСТРА | Омск",
    template: "%s — АСТРА",
  },
  description:
    "Изготовление мягкой мебели на заказ: диваны, кресла, кровати для дома и бизнеса. Собственное производство, гарантия качества, доставка по всей России. ИНН 550516401202.",
  keywords: [
    "мягкая мебель на заказ",
    "диваны на заказ",
    "кресла на заказ",
    "мебель для офиса",
    "мастерская мебели Омск",
    "АСТРА мебель",
    "мягкая мебель производство",
  ],
  authors: [{ name: "Мастерская АСТРА" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "Мастерская АСТРА",
    title: "Мягкая мебель на заказ — Мастерская АСТРА",
    description:
      "Премиальная мягкая мебель на заказ: диваны, кресла, кровати. Собственное производство, договор и гарантия. Доставка по всей России.",
    images: [
      {
        url: "/astra_main.png",
        width: 1200,
        height: 630,
        alt: "Мастерская мягкой мебели АСТРА",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Мягкая мебель на заказ — Мастерская АСТРА",
    description:
      "Премиальная мягкая мебель на заказ. Собственное производство, договор и гарантия.",
    images: ["/astra_main.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} min-h-screen bg-stone text-graphite font-body antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-full border border-steel/60 bg-stone px-4 py-2 text-sm font-semibold text-graphite"
        >
          Перейти к содержимому
        </a>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
