/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src"],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#00a3e0",
        "border-color": "#AEB5C39E",
        "p-color": "#A6ACB9",
        "menu-text-color": "#B0B0B0",
        title: "#2B3449",
        "title-black": "#181F2F",
      },
      fontFamily: {
        // firago: ["FiraGO", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        medium: ["Montserrat-medium", "sans-serif"],
        semibold: ["Montserrat-semibold", "sans-serif"],
        bold: ["Montserrat-bold", "sans-serif"],
      },
    },
    // screens: {
    //   xl: "1440px",
    // },
  },
  plugins: [],
};
