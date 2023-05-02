/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E73FB",
        secondary: "#4DDE82",
        light: "#EAF3F4",
        accent: "#1CAEFC"
      }
    },
  },
  plugins: [require("daisyui")],
}
