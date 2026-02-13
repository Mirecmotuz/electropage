/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sk-red': '#EA002C',
        'sk-orange': '#F47725',
        'graphite': '#444B53',
        'lime': '#A6C044',
        'light-bg': '#F5F7FF',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
