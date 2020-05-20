const format = require("date-fns/format");
const md = require("markdown-it")();
const slugify = require("@sindresorhus/slugify");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/icons": "./" });
  eleventyConfig.addPassthroughCopy({ "src/cms/dist": "./admin" });
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });

  // Filters.
  eleventyConfig.addFilter("prettyDate", dateObject => {
    return format(dateObject, "MMMM d, yyyy");
  });

  eleventyConfig.addFilter("markdown", value => {
    return md.render(value);
  });

  eleventyConfig.addFilter("slugify", value => {
    return slugify(value, {
      customReplacements: [["'"]]
    });
  });  

  // Collections.
  eleventyConfig.addCollection("tagList", collection => {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;
  
        tags = tags.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
              return false;
          }
  
          return true;
        });
  
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet];
  });

  eleventyConfig.addCollection("categoryList", collection => {
    let catSet = new Set()

    collection.getAllSorted().forEach(item =>
          typeof item.data.category === "string"
      &&  catSet.add(item.data.category))

    return [...catSet]
  });

  eleventyConfig.addCollection("types", collection => {
    let types = {}
  
    // Every rendered page
    collection.getAllSorted().forEach(item => {
      let type = item.data.type

        // Ignore the ones without a category.
      if (typeof type !== "string")
        return

      if (Array.isArray(types[type]))
        types[type].push(item)
      else
          // Otherwise create it and it the first.
        types[type] = [item]
    })

    return types
  });

  eleventyConfig.addCollection("recipesAscending", collection => {
    return collection.getFilteredByGlob("src/site/recipes/*.md").sort(function(a, b) {
      let nameA = a.data.title.toUpperCase();
      let nameB = b.data.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    });
  });

  return {
    dir: {
      input: "src/site",
      output: "public"
    }
  };
};
