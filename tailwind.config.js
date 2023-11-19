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
      boxShadow: {
        mainShadow: "0 0 10px 0 rgba(62,28,131,0.07)",
      },
    },
  },
  plugins: [],
};
