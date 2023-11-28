module.exports = {
  content: [
    "./app/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        "sans-mono": ["var(--font-noto-sans-mono)"],
        "sans-display": ["var(--font-noto-sans-display)"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
