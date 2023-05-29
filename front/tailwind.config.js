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
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
