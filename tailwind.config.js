/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: '#1b1a27',
        tomato: '#f84f39',
      }
    },
  },
  plugins: [],
};

