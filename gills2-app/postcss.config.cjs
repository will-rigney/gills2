const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
module.exports = {
  // not sure if postcss is even required if we have svelte preprocess
  // todo: replace with svelte prepocess if appropriate
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}