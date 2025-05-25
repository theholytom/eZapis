/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        'custom-gray': {
          light: '#f7f7f7',
          DEFAULT: '#666666',
          dark: '#333333',
        }
      }
    },
  },
  plugins: [],
} 