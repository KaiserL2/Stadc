/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 70px -7px rgba(0, 0, 0, 0.3)'
      },
    },
  },
  fontFamily:{
      arca:['Lobster', "cursive"],
      reca:['Cabin', "sans-serif"]
    },
  plugins: [],
}
