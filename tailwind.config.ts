import type { Config } from "tailwindcss";

/**
 * Tailwind v4 читает токены из `@theme` в app/globals.css — этот файл
 * оставлен только для инструментов, которые всё ещё ждут конфиг.
 * Значения обязаны совпадать с блоком `@theme`.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5F0",
        "cream-light": "#FAFAF8",
        stone: "#E8E4DC",
        linen: "#F2F0EB",
        steel: "#D4D0C8",
        ink: "#1A1A1A",
        charcoal: "#4A4A4A",
        ash: "#8A8A8A",
        walnut: "#6B5D4D",
        gold: "#C9A961",
        dark: "#232322",
        graphite: "#2C2C2C",
      },
      fontFamily: {
        heading: ['var(--font-playfair)', '"Playfair Display"', "serif"],
        body: ['var(--font-montserrat)', "Montserrat", "sans-serif"],
      },
    },
  },
};

export default config;
