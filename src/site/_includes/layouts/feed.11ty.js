module.exports = data => {
  // Filter out an data without a URL.
  const itemsWithUrl = data.collections.all.filter(item => {
    return item.url;
  });

  // Return the proper structure for our search.
  const content = itemsWithUrl.map(item => {
    return {
      title: item.data.title,
      body: item.templateContent,
      text: item.data.text,
      url: item.url
    };
  });

  return JSON.stringify(content);
};
