/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#658CD0",
          400: "#2e58a2",
          500: "#325fad",
          600: "#295095",
          700: "#1d4ed8",
          800: "#1e3c72",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: 'media'
};
