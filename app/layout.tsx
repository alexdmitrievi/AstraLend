import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "../components/ui/WhatsAppFloat";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE_URL = "https://m-astra.ru";

// Structured data for search engines and AI crawlers (LocalBusiness).
const STRUCTURED_DATA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Мастерская АСТРА",
  description:
    "Мастерская мягкой мебели на заказ: диваны, кресла, кровати для дома и бизнеса. Проект, производство, монтаж. Доставка по всей России.",
  url: BASE_URL,
  telephone: "+7 913 626-34-44",
  // Contact mailbox lives on the a-stra.ru domain (active Yandex mail for domain).
  email: "mebel@a-stra.ru",
  taxID: "550516401202",
  image: [`${BASE_URL}/astra_main.png`],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Омск",
    addressCountry: "RU",
  },
  areaServed: [
    { "@type": "City", name: "Омск" },
    { "@type": "Country", name: "Россия" },
  ],
});

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
    // Переменные шрифтов обязаны жить на <html>: Tailwind объявляет
    // --font-heading: var(--font-playfair) в :root, и если --font-playfair
    // определён только на <body>, var() в :root не разрешается и все
    // заголовки уезжают в системный sans-serif.
    <html lang="ru" className={`${montserrat.variable} ${playfair.variable}`}>
      <body
        className="min-h-screen bg-cream text-charcoal font-body antialiased"
      >
        {/* Yandex.Metrika counter — Мастерская АСТРА (m-astra.ru), счётчик 113393959 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=113393959','ym');ym(113393959,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/113393959"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] border border-steel bg-cream-light px-4 py-2 text-[13px] uppercase tracking-[0.1em] text-ink"
        >
          Перейти к содержимому
        </a>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
