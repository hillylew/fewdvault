import imageUrlBuilder from "@sanity/image-url";

export function imageURL(sanityClient, source, width, height) {
  return imageUrlBuilder(sanityClient)
    .image(source)
    ?.width(width)
    ?.height(height)
    .auto("format")
    .quality(80)
    .url();
}
export function getRecipesAscending(recipes) {
  return recipes.sort(function (a, b) {
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    else return 0;
  });
}
export function getRecipesWithTag(recipes, tag) {
  return recipes.filter(item => item.tags.includes(tag));
}
