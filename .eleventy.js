const { createClient } = require("@sanity/client");
const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const format = require("date-fns/format");
const md = require("markdown-it")();
const slugify = require("@sindresorhus/slugify");

// Local env variables.
require("dotenv").config();

// Import plugins.
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {
  // Global Data.
  eleventyConfig.addGlobalData(
    "sanityClient",
    createClient({
      projectId: "at91z4ai",
      dataset: "production",
      apiVersion: "2022-11-14",
      useCdn: false,
    })
  );

  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/ions": "./" });
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

  eleventyConfig.addFilter("toLowerCase", value => { 
    return value.toLowerCase();
  });

  eleventyConfig.addFilter("jsEscape", value => { 
    return escape(value);
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

  // Server options.
  eleventyConfig.setServerOptions({
    domdiff: false,
  });

  return {
    dir: {
      input: "src/site",
      output: "public"
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
