import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Fredoka'", "'Noto Sans Thai'", "system-ui", "sans-serif"],
        body: ["'Nunito'", "'Noto Sans Thai'", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        clay: {
          bg: "#EEF2FF",
          ink: "#1E1B4B",
          muted: "#475569",
          indigo: "#4F46E5",
          periwinkle: "#818CF8",
          orange: "#F97316",
          coral: "#FF7675",
          mint: "#10B981",
          sky: "#0EA5E9",
          amber: "#F59E0B",
          lavender: "#EDE9FE",
          peach: "#FFEDD5",
          butter: "#FEF9C3",
          rose: "#FFE4E6",
        },
      },
      borderRadius: {
        clay: "1.75rem",
        "clay-lg": "2.25rem",
      },
      boxShadow: {
        clay: "inset -4px -4px 10px rgba(79, 70, 229, 0.08), inset 4px 4px 10px rgba(255, 255, 255, 0.9), 0 12px 24px -6px rgba(79, 70, 229, 0.14)",
        "clay-hover": "inset -4px -4px 10px rgba(79, 70, 229, 0.1), inset 4px 4px 12px rgba(255, 255, 255, 0.95), 0 18px 32px -8px rgba(79, 70, 229, 0.22)",
        "clay-sm": "inset -2px -2px 6px rgba(79, 70, 229, 0.08), inset 2px 2px 6px rgba(255, 255, 255, 0.85), 0 6px 14px -4px rgba(79, 70, 229, 0.14)",
        "clay-btn": "inset -3px -4px 8px rgba(0, 0, 0, 0.18), inset 3px 3px 8px rgba(255, 255, 255, 0.45), 0 10px 20px -6px rgba(79, 70, 229, 0.35)",
        "clay-cta": "inset -3px -4px 8px rgba(154, 52, 18, 0.25), inset 3px 3px 8px rgba(255, 255, 255, 0.5), 0 10px 22px -6px rgba(249, 115, 22, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
