/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              50: "#ffffff",
              100: "#e6e6e6",
              200: "#cccccc",
              300: "#b3b3b3",
              400: "#999999",
              500: "#808080",
              600: "#666666",
              700: "#4d4d4d",
              800: "#333333",
              900: "#1a1a1a",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};