import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "АСТРА — мебель на заказ",
  description:
    "Премиальная мебель на заказ: дизайн, замер, производство и монтаж под ключ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
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
      </body>
    </html>
  );
}
