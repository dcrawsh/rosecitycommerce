import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"]
      },
      colors: {
        forest: {
          900: "#163229",
          950: "#0f241e"
        },
        copper: {
          500: "#B56A3A",
          600: "#9c592f"
        },
        paper: {
          50: "#FFFCF8",
          100: "#F6F3ED"
        },
        slate: {
          700: "#4A5451"
        },
        charcoal: {
          900: "#2B2F31"
        },
        border: "#D8D3C9",
        muted: "#ECE8DF",
        success: "#1F7A4F",
        warning: "#9A6A14",
        danger: "#B42318",
        info: "#1D4E89"
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,.06)",
        md: "0 8px 24px rgba(9,21,18,.10)",
        lg: "0 20px 45px rgba(9,21,18,.14)"
      }
    }
  },
  plugins: []
};

export default config;
