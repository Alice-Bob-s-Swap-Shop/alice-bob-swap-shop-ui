const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
