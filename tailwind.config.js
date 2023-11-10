/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        iransans: ["IRANSans"],
      },

      colors: {
        mainColor: "#36C9F4",
        hoverColor: "#00b2da",
      },
    },
  },
  plugins: [],
};
