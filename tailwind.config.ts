import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#171A19",
        surface: "#1F2321",
        "surface-raised": "#272C29",
        paper: "#F4F2EB",
        mint: "#61E6B2",
      },
    },
  },
  plugins: [],
} satisfies Config;
