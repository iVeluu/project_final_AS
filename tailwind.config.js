/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#1b1a27",
        tomato: "#f84f39",
        headers: "#2ef8a0",
        referencias: "#4CAF50",
      },
    },
  },
  plugins: [],
};

