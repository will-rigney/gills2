/** @type {import('tailwindcss').Config} */
// const production = !process.env
module.exports = {
  purge: {
    content: ["/index.html", "./src/**/*.svelte"],
    // enabled: production
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
