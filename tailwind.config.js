module.exports = {
  content: [
    "./**/*.njk",
    "./_data/helpers.js",
    "./js/**/*.js",
    "./functions/index.sj",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        "woodsmoke": "#0e1111",
        "outer-space": "#232b2b",
        "cape-cod": "#353839",
        "limed-spruce": "#3b444b",
        "silver": "#cccccc",
        "red": "#ff0000",
        "pink": "#F6807E",
        "chartreuse-yellow": "#e3ff00",
        "malachite": "#2af33e",
        "cyan": "#00ffec",
        "purple-pizzazz": "#ff00db",
        "light-blue": "#4da6ff",
        "white": "#ffffff"
      },
      height: {
        "16": "4rem"
      },
      margin: {
        "1125": "1.125rem",
      },
      minHeight: {
        "16": "4rem",
        "32": "8rem",
      },
      width: {
        "16": "4rem"
      }
    }
  },
  variants: {},
  plugins: []
};
