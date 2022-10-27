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
      },
      width: {
        '80%': '80%',
        '20%': '20%',
        '30%': '30%',
      },
    }
  }
}

