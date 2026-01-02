import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf6ff",
          100: "#d7e9ff",
          200: "#b4d4ff",
          300: "#82b8ff",
          400: "#5297fa",
          500: "#2f75e6",
          600: "#205bcc",
          700: "#1c4aa6",
          800: "#1d3f86",
          900: "#1b356f",
        },
      },
      boxShadow: {
        card: "0px 18px 45px rgba(30, 64, 175, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
