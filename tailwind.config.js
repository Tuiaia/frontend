/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#043475',
        'p-hover': '#074a8a',
        'p-bold': '#002747',
        'p-light': '#003475',
        'p-lighter': '#1769bb',
        'secondary': '#22AFE0',
        'third': '#48B091',
        'classify-negative': '#EB615C',
        'classify-neutral': '#c0bfbb',
        'classify-positive': '#48B091',
        'black': '#000000',
      }
    },
  },
  plugins: [],
}
