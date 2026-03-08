import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F7", // Off-white/Cream
        foreground: "#121212", // Rich Black
        gold: {
          DEFAULT: "#C5A059",
          dark: "#A38446",
        },
        treehouse: {
          deep: "#1B241E", // Dark Forest
          moss: "#3E4F42",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      letterSpacing: {
        premium: "0.2em",
      }
    },
  },
  plugins: [],
};
export default config;