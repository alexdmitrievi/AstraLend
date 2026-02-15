import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-Core.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const playfair = localFont({
  src: [
    {
      path: "../public/fonts/PlayfairDisplay-Core.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Times New Roman", "serif"],
});
