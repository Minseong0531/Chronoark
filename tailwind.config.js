/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
        noto : ["Noto Sans KR", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

