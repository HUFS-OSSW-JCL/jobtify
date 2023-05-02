/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "#BB2649",
      green: "#26BB98",
      "light-blue": "#EEF1F4",
      white: "#FFFFFF",
      fontgray: "#AAAAAA",
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
