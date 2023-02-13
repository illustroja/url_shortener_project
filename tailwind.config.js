module.exports = {
  // purge: [".src/**/*.{js,hsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto"],
      display: ["Roboto"],
      body: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
