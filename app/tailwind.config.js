// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust based on your file structure
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 100ms ease-in', // 100ms duration with ease-in
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};