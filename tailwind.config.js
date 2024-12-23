/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2048px",
      },
      flexBasis: {
        "9/13": "69.230769%",
        "4/13": "30.769231%",
      },
      borderWidth: {
        0: "0px",
        0.5: "0.5px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
      },
      colors: {
        yellow: "#EBFF00",
        green: "#6ee94f",
        light_green: "#aff59d",
        light_gray: "#d9d9d9",
        dark_gray: "#acacac",
      },
      aspectRatio: {
        "3/2": "3/2",
        "2/3": "2/3",
        "1/2": "1/2",
      },
      gridTemplateRows: {
        "10-free": "repeat(10, minmax(0, auto))",
      },
      fontFamily: {
        sans: ["Nunito", "sans"],
        "mona": ["Mona", "sans-serif"],
      },
    },
  },
  plugins: [],
};
