/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./src/**/*.ts",
  ],

  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#03070d",
        backgroundSecondary: "#0B1726",
        backgroundTertiary: "#2E4559",

        primary: "#794AE4",
        secondary: "#03070d",
      },
    },

    animation: {
      wheel: "wheel 2.5s ease-in-out infinite",
    },

    keyframes: {
      wheel: {
        "0%": {
          opacity: "1",
          top: "7px",
        },

        "20%": {
          opacity: "1",
          top: "7px",
        },

        "85%": {
          opacity: "0",
          top: "25px",
        },

        "86%": {
          opacity: "0",
          top: "7px",
        },

        "100%": {
          opacity: "1",
          top: "7px",
        },
      },
    },

    screens: {
      xs: "320px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
      "3xl": "1919px",
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
