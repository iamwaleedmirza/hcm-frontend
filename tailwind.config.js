/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7152F3",
        borderColor: "#CEC4F6",
        textColor: "#16151CCC",
        primaryTransparent: '#7152F30D',
      },
    },
  },
  plugins: [],
};
