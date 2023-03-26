/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          {
            fontFeatureSettings: '"salt", "cpsp", "cv11"',
          },
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        hero: "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
