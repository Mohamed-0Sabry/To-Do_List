/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
