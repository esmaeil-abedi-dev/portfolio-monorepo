import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // For Tailwind v4, we need to define colors directly
        primary: "#1A2B40",
        primaryLight: "#2C3E50",
        primaryDark: "#0F1A2A",
        accent: {
          DEFAULT: "#00C4B4", // Vibrant Teal
          light: "#00DECF",
          dark: "#00A396",
        },
        background: {
          DEFAULT: "#FFFFFF", // Clean White
          alt: "#F8F8F8",     // Light Gray
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
