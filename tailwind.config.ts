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
          950: "#0B1F1A"
        },
        copper: {
          100: "#F4E3D7",
          500: "#B56A3A",
          600: "#9C592F"
        },
        paper: {
          50: "#FFFCF8",
          100: "#F6F3ED"
        },
        surface: {
          50: "#FFFFFF",
          100: "#FAFAF7",
          200: "#F4F5F2"
        },
        neutral: {
          700: "#44504C",
          800: "#303735",
          900: "#202625"
        },
        mist: {
          100: "#EEF3F1",
          300: "#CBD8D3",
          700: "#3D5A53"
        },
        slate: {
          700: "#4A5451"
        },
        charcoal: {
          900: "#2B2F31"
        },
        border: {
          DEFAULT: "#D8D3C9",
          strong: "#BDB6AA",
          cool: "#D7E0DC"
        },
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
