const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      red: "#BB2649",
      red2: "#941e1e",
      red3: "#bd3e5c",
      checked: "#fecaca",
      checked2: "#fca5a5",
      green: "#26BB98",
      "light-blue": "#EEF1F4",
      white: "#FFFFFF",
      fontgray: "#AAAAAA",
      black: "#181717",
    },
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR"],
        main: ["Pretendard"],
      },
    },
  },
  plugins: [],
};