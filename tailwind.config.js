/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", 
    "./dist/tailwind/**/*.{css,html}", // Fixed path pattern
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        "ds": "320px",
        "xxs": "350px",
        "sm": "680px",
        "xs": "480px",
        "bs": "520px",
        
      },
      colors: {
        "primary" : "#FFA500",
        "fade": "#101010",
        "light-primary": "#FCEED5",
        "tresh": "#0f172a",
        "pur": "#1e293b",
        "dark-blue": "#003459"
      }
    },
  },
  plugins: [],
}
