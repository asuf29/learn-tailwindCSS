/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },

    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "tw-red": "#BC1A45",
        "tw-melon": "#FFD369",
        "tw-grey": "#DDDDDD",
        "tw-white": "#F7F7F7",
        "tw-blue": "#00ACEE",
      },

      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
