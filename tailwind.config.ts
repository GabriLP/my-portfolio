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
        'heading-1': 'clamp(5rem, 7vw, 9rem)',
        'heading-2': 'clamp(3rem, 7vw, 6rem)',
        'heading-3': 'clamp(2rem, 7vw, 4rem)',
        'heading-4': 'clamp(1.5rem, 6vw, 3.5rem)',
        'heading-5': 'clamp(1.5rem, 5vw, 3rem)',
        'body-1': 'clamp(1rem, 2vw, 1.5rem)',
        'body-2': 'clamp(0.85rem, 2vw, 1.25rem)',
        'body-3': 'clamp(0.6rem, 2vw, 1rem)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: '#212121',
        foreground: "hsl(var(--foreground))",
        text: "#FFFFFF",
        primary: '#ff621D',
        secondary: '#E75618',
        error: '#F44336',
        accent: '#795548',
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