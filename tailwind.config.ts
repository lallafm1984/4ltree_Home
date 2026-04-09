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
          green: "#6DBF4A",
          "green-dark": "#5AA63C",
          blue: "#4AADD9",
          "blue-dark": "#3A96C0",
          yellow: "#F5C523",
          "yellow-dark": "#DBA91E",
          orange: "#F47920",
          "orange-dark": "#D96818",
          dark: "#4A4A4A",
        },
        category: {
          melody: "#4AADD9",
          rhythm: "#F47920",
          interval: "#6DBF4A",
          chord: "#F5C523",
          key: "#F47920",
          "two-voice": "#4AADD9",
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
