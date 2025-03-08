const { plugin } = require("postcss");

module.exports = {
  content: [
    "./views/**/*.pug",
    "./views/**/*.html",
    "./dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugin: [],
};
