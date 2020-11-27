const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/site/_includes/**/*.njk"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const cssnano = require("cssnano");

module.exports = ctx => ({
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({ 
      stage: 1, 
      features: {
        'focus-within-pseudo-class': false
      } 
    }),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ]
});
