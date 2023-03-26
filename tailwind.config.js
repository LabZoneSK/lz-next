module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/images/lead-v1.webp')",
      },
      colors: {
        "lz-red": "#ff1d25",
      },
    },
  },
  variants: {},
  plugins: [],
};
