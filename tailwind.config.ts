import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#6366f1",
          "indigo-dark": "#4f46e5",
          amber: "#f59e0b",
          "amber-dark": "#d97706",
        },
        category: {
          melody: "#6366f1",
          rhythm: "#f59e0b",
          interval: "#10b981",
          chord: "#a855f7",
          key: "#ef4444",
          "two-voice": "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
