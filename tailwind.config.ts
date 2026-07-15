import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#070B12",
        panel: "#0E1624",
        accent: "#38BDF8",
        success: "#34D399",
        warning: "#FBBF24",
      },
      boxShadow: {
        glow: "0 20px 70px rgba(56, 189, 248, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
