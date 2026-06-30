/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sk-red':   '#1A1A1A',
        'sk-orange':'#6B6B6B',
        'graphite': '#0A0A0A',
        'lime':     '#D1D1D1',
        'light-bg': '#F4F4F4',
        'accent':   '#C8A951',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
