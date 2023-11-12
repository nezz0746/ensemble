module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cabin Sketch"],
      },
    },
  },
  plugins: [require("daisyui")],
};
