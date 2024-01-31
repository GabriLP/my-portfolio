/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        error: '#F44336',
        background: '#101010',
        text: '#FFFFFF',
        accent: '#795548',
      },
      fontSize: {
        'heading-1': ['clamp(5rem, 7vw, 8rem)'],
        'heading-2': ['clamp(4rem, 8vw, 7rem)'],
        'heading-3': ['clamp(3rem, 7vw, 6rem)'],
        'heading-4': ['clamp(2rem, 6vw, 5rem)'],
        'heading-5': ['clamp(1.5rem, 5vw, 3rem)'],
        'body-1': ['clamp(1rem, 2vw, 1.5rem)'],
        'body-2': ['clamp(0.85rem, 2vw, 1.25rem)'],
        'body-3': ['clamp(0.6rem, 2vw, 0.875rem)'],
      }
    },
  },
  plugins: [],
}

