import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Core colors
      background: "var(--background, #FFFFFF)",
      foreground: "var(--foreground, #171717)",
      primary: "var(--color-primary, #1A2B40)",
      "primary-light": "var(--color-primary-light, #2C3E50)",
      "primary-dark": "var(--color-primary-dark, #0F1A2A)",
      accent: "var(--color-accent, #00C4B4)",
      "accent-light": "var(--color-accent-light, #00DECF)",
      "accent-dark": "var(--color-accent-dark, #00A396)",
      
      // Standard colors 
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        50: "#F8F8F8",
        100: "#EFEFEF",
        200: "#E0E0E0",
        300: "#C9C9C9",
        400: "#9D9D9D",
        500: "#6B6B6B",
        600: "#545454",
        700: "#3E3E3E",
        800: "#292929",
        900: "#121212",
      },
    },
    fontFamily: {
      sans: "var(--font-sans)",
      heading: "var(--font-heading)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
