module.exports = data => {
  // Filter out an data without a URL.
  const itemsWithUrl = data.collections.recipesAscending;

  // Return the proper structure for our search.
  const content = itemsWithUrl.map(item => {
    return {
      title: item.data.title,
      body: item.templateContent,
      text: item.data.text,
      url: item.url,
      uuid: item.data.uuid,
      source: item.data.source,
      source_url: item.data.source_url,
      yield: item.data.yield,
      active_time: item.data.active_time,
      total_time: item.data.total_time,
      image: item.data.image,
      favorite: item.data.favorite,
      tags: item.data.tags,
      ingredients: item.data.ingredients,
      instructions: item.data.instructions,
      notes: item.data.notes,
      _type: 'recipe'
    };
  });

  return JSON.stringify(content);
};
