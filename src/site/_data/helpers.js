const imageUrlBuilder = require("@sanity/image-url");

module.exports = {
  imageURL(sanityClient, source, width, height) {
    return imageUrlBuilder(sanityClient)
      .image(source)
      ?.width(width)
      ?.height(height)
      .auto("format")
      .quality(80)
      .url();
  },

  getRecipesAscending(recipes) {
    return recipes.sort(function(a, b) {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    });
  },

  getRecipesWithTag(recipes, tag) {
    return recipes.filter(item => item.tags.includes(tag));
  },
};
