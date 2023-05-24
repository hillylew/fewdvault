const { AssetCache } = require("@11ty/eleventy-fetch");
const groq = require("groq");

module.exports = async function (configData) {  
  // Create cache.
  const asset = new AssetCache("recipes");

  // Check if cache is valid.
  if (asset.isCacheValid("15m")) {
    // Send back the cached assets if they haven't expired yet.
    return asset.getCachedValue();
  }

  // Query sanity.
  const query = groq`
    *[_type == 'recipes']{
      'id': _id,
      'slug': slug.current,
      title,
      body,
      source,
      source_url,
      yield,
      active_time,
      total_time,
      image,
      'image_alt': image.alt,
      favorite,
      tags,
      ingredients,
      instructions,
      notes,
    }
  `;

  // Query sanity.
  const recipes = await configData.sanityClient.fetch(query);

  // Save settings in cache.
  await asset.save(recipes, "json");
 
  return recipes;
};