module.exports = {
  // purge: ["./src/**/*.{js,hsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/*.{js,hsx,ts,tsx,html}",
    "./src/**/*.{html,js}",
    "./public/index.html",
    "./src/**/*.{js,hsx,ts,tsx}",
    "./src/App.tsx",
  ],
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
