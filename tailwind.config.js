/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/screens/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-green': '#31CF67',
        'primary-red': '#E23C44',
      },
    },
  },
  plugins: [],
};
