/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bohor-bg': "url('/img/bg-with-text.png')",
        'chi3r-bg': "url('/img/chi3r.jpg')",

      }
    },
  },
  plugins: [],
}

