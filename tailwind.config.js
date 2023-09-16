/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        Vazirmatn : ["Vazirmatn"]
      },
      boxShadow : {
        innerShadow : 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset'
      }
    },
  },
  plugins: [require("daisyui")],
}

