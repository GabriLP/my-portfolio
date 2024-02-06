import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'anton': ['Bricolage Grotesque', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': 'clamp(5rem, 7vw, 8rem)',
        'heading-2': 'clamp(4rem, 8vw, 7rem)',
        'heading-3': 'clamp(3rem, 7vw, 6rem)',
        'heading-4': 'clamp(2rem, 6vw, 5rem)',
        'heading-5': 'clamp(1.5rem, 5vw, 3rem)',
        'body-1': 'clamp(1rem, 2vw, 1.5rem)',
        'body-2': 'clamp(0.85rem, 2vw, 1.25rem)',
        'body-3': 'clamp(0.6rem, 2vw, 0.875rem)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#101010", // Combined
        foreground: "hsl(var(--foreground))",
        text: "#FFFFFF", // Combined
        primary: '#4CAF50', // Overridden with direct hex value
        secondary: '#2196F3', // Overridden with direct hex value
        error: '#F44336', // Added
        accent: '#795548', // Overridden with direct hex value
        // Other custom colors from the first config
        // ...
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  
} satisfies Config

export default config