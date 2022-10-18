/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  content: ["/index.html", "./src/**/*.svelte"],
  theme: {
    extend: {},
  },
  plugins: [],
}
