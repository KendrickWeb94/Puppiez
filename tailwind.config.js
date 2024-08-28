/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}", 
    "./dist/tailwind/**/*.{css,js,html}", // Fixed path pattern
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        "ds": "320px",
        "xxs": "350px",
        "xs": "480px",
        "bs": "520px",
      },
      colors: {
        "primary" : "#FFA500",
        "fade": "#101010",
        "light-primary": "#FCEED5",
      }
    },
  },
  plugins: [],
}
