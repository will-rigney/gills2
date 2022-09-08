/** @type {import('tailwindcss').Config} */
// const production = !process.env
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["/index.html", "./src/**/*.svelte"],
    // enabled: production
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
