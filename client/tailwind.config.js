/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
};
