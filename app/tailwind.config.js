/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ['"Oxanium"', 'sans-serif'], // Add Oxanium as a custom font
      },
    },
  },
  plugins: [],
};