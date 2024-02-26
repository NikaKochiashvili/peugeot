/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src"],
  theme: {
    extend: {
      colors: {
        "button-color": "#00A3E0",
        "border-color": "#AEB5C39E",
        "p-color": "#A6ACB9",
        "menu-text-color": "#B0B0B0",
        "nav-hover": "#00a3e0",
      },
    },
    screens: {
      md: "1127px",
      sm: "240px",
    },
  },
  plugins: [],
};
