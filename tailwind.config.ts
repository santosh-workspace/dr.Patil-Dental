import type { Config } from "tailwindcss";

/**
 * Medical Teal theme (Theme 02) — Dr. Patil's Dental Clinic and Implant Centre.
 * All colors flow from these tokens; components never use raw hex values.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#effcfa",
          100: "#c8f5ef",
          200: "#92eae2",
          300: "#5bd7d0",
          400: "#2fbdb9",
          500: "#16a19f",
          600: "#0e8181",
          700: "#0f6667",
          800: "#115153",
          900: "#124445",
          950: "#03272a",
        },
        mint: {
          50: "#f2fbf7",
          100: "#dcf5ea",
          200: "#b8ead6",
          300: "#8ad9bd",
          400: "#57c0a0",
          500: "#35a486",
        },
        aqua: {
          400: "#38cfd9",
          500: "#17b3c1",
          600: "#0f8f9e",
        },
        neutral: {
          50: "#f7fafa",
          100: "#eef3f4",
          200: "#dde6e8",
          300: "#c2d0d3",
          400: "#95a9ad",
          500: "#6b8286",
          600: "#516569",
          700: "#405054",
          800: "#2d393c",
          900: "#1d2628",
          950: "#111719",
        },
        success: "#1a9e6c",
        warning: "#c98a12",
        error: "#d24545",
        info: "#2276c9",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1320px",
      },
      borderRadius: {
        card: "1.25rem",
        button: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17, 81, 83, 0.04), 0 4px 16px rgba(17, 81, 83, 0.06)",
        lift: "0 2px 4px rgba(17, 81, 83, 0.05), 0 16px 40px rgba(17, 81, 83, 0.14)",
        glow: "0 0 0 1px rgba(22, 161, 159, 0.08), 0 8px 24px rgba(22, 161, 159, 0.16)",
      },
      lineHeight: {
        body: "1.6",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(10px) scale(1.04)" },
        },
        "cue-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "float-slower": "float-slower 12s ease-in-out infinite",
        "cue-bounce": "cue-bounce 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
