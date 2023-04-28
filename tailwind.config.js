/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#e0f3fb",
          100: "#b2e0f4",
          200: "#81cbec",
          300: "#54b7e3",
          400: "#37a9de",
          500: "#239bd8",
          600: "#1f8dca",
          700: "#197bb7",
          800: "#176ba3",
          900: "#0f4c81",
        },
        secondary: {
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#ececec",
          300: "#dedede",
          400: "#bababa",
          500: "#9b9b9b",
          600: "#727272",
          700: "#5f5f5f",
          800: "#404040",
          900: "#1f1f1f"
        },
        blue: "#4E51B0",
        sky: "#0590DE",
        night: "#0A0515",
        green: "#70a334",
        orange: "#FF9800",
        red: "#dc3545",
        yellow: "#FDAF17",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwind-scrollbar")({ nocompatible: true }),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
