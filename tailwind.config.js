/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "muted-dark-red": "#8d3f3f",
        "bright-light-red": "#ff0000",
        "project-silver": "#eae7e7",
        "muted-light-red":"#856767",
        "dark-red": "#5e0000",
      }
    },
  },
  plugins: [],
}
