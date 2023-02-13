module.exports = {
  purge: [".src/**/*.{js,hsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
