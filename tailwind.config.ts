import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#171717",
        surface: "#262626",
        "surface-raised": "#27272A",
        paper: "#F5F5F5",
        mint: "#61E6B2",
      },
    },
  },
  plugins: [],
} satisfies Config;
