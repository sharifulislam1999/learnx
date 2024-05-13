/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        pns: " 'Poppins' , sans-serif"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}