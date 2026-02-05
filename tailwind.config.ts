import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        anthracite: "#2B2D2F",
        gold: "#c9a961",
        beige: "#F5F1E8",
        graphite: "#2C2C2C",
        charcoal: "#4A4A4A",
        ash: "#8A8A8A",
        steel: "#D4D0C8",
        stone: "#E8E4DC",
        linen: "#F2F0EB",
        warm: "#FAFAF8",
        walnut: "#6B5D4D",
        oak: "#9C8B75",
      },
      fontFamily: {
        heading: ['var(--font-playfair)', '"Playfair Display"', "serif"],
        body: ['var(--font-montserrat)', "Montserrat", "sans-serif"],
      },
    },
  },
};

export default config;
