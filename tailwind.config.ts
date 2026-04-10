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
          dark: "#0a0a0b",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
        display: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "logo-gradient":
          "linear-gradient(135deg, #6DBF4A 0%, #4AADD9 33%, #F5C523 66%, #F47920 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
