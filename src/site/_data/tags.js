const { AssetCache } = require("@11ty/eleventy-fetch");
const groq = require("groq");

module.exports = async function (configData) {  
  // Create cache.
  const asset = new AssetCache("tags");

  // Check if cache is valid.
  if (asset.isCacheValid("15m")) {
    // Send back the cached assets if they haven't expired yet.
    return asset.getCachedValue();
  }

  // Query sanity.
  const query = groq`
    *[_type == 'recipes'].tags
  `;

  // Query sanity.
  let arrayTags = await configData.sanityClient.fetch(query);
  arrayTags = arrayTags.flat();
  // Merge all separate arrays and get the unique values.
  const tags = [...new Set(arrayTags)];

  // Save settings in cache.
  await asset.save(tags, "json");
 
  return tags;
};