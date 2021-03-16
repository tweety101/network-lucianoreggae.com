const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      teal: colors.teal,
      cyan: colors.cyan,
    },
    fontFamily: {
      sans: ["Anaheim", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontWeight: 400,
            },
            h3: {
              fontWeight: 400,
            },
            h4: {
              fontWeight: 400,
            },
            h5: {
              fontWeight: 400,
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
