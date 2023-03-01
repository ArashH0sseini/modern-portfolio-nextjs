/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/noise.png')",
      },
      fontFamily: {
        'vazir':['Vazir']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}