/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
