/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica'],
      roboto: ['Roboto', 'sans-serif'],
      noto: ['Noto', 'sans-serif'],
    },
    lineHeight: {
      'extra-loose': '2.5',
      12: '3rem',
    },
    extend: {
      backgroundImage: {
        'wood-pattern': "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
