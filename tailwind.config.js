/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coc-gold': '#FFD700',
        'coc-brown': '#8B4513',
      },
      fontFamily: {
        sans: ['Supercell-Magic', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};