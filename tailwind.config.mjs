/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,astro}"],
  theme: {
    extend: {
      colors: {
        monza: {
          50: "#fef2f2",
          100: "#ffe1e1",
          200: "#ffc9c9",
          300: "#fea4a3",
          400: "#fb6f6e",
          500: "#f34140",
          600: "#e02322",
          700: "#b81918",
          800: "#9c1918",
          900: "#811c1b",
          950: "#460909",
        },
        edgreen: "#00BFA6",
        edblue: "#241442",
        edpurple: "#9c1918",
        edyellow: "#E6272C",
        edoffwhite: "#FAF9F6",
        edgray: "#4F536C",
        edgray2: "#445375",
      },

      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
      },

      keyframes: {
        borderFade: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.1)", opacity: "0" },
        },
      },

      animation: {
        borderFade: "borderFade 1.5s linear infinite",
      },
    },
    screens: {
      xxxxl: { max: "1880px" },
      // => @media (max-width: 1880px) { ... }

      xxxl: { max: "1799px" },
      // => @media (max-width: 1799px) { ... }

      xxl: { max: "1599px" },
      // => @media (max-width: 1599px) { ... }

      xl: { max: "1399px" },
      // => @media (max-width: 1399px) { ... }

      lg: { max: "1199px" },
      // => @media (max-width: 1199px) { ... }

      md: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      sm: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      xs: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      xxs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
