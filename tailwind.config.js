/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      Cookie: ['Cookie']
    },
    extend: {
      backgroundImage: {
        'circuloContador': "url('./public/images/circuloContador.svg')",
      }
    }
  },
  plugins: [],
}

