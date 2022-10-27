/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  plugins: [],

  theme: {
    extend: {
      colors: {
        'regal-blue': '#2F3CED',
        'bannerBlue': '#3F8CFF',
      },
      width: {
        '80%': '80%',
        '90%': '90%',
        '20%': '20%',
        '30%': '30%',
        '60%': '60%',
        '40%': '40%',
      },
    }
  }
}

