/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./ui/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#181C2A",
        "light-blue": "#323646",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
