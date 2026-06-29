module.exports = {
  title: "The Fewd Vault",
  googleAnalytics: "UA-XXXXX-Y",
  url:
    process.env.ELEVENTY_ENV === "development"
      ? "http://localhost:3000"
      : "https://fewdvault.pages.dev" // prod URL here
};
