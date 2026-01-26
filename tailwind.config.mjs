import { colors } from "./src/data/content.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme_header: `rgb(${colors.header} / <alpha-value>)`,
        theme_button: `rgb(${colors.button} / <alpha-value>)`,
        theme_button_hover: `rgb(${colors.button_hover} / <alpha-value>)`,
        theme_text_light: `rgb(${colors.text_light} / <alpha-value>)`,
        theme_text_dark: `rgb(${colors.text_dark} / <alpha-value>)`,
        theme_content_bg: `rgb(${colors.content_bg} / <alpha-value>)`,
      },
    },
  },
  plugins: [],
};
