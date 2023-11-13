module.exports = {
  content: [
    "./app/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
