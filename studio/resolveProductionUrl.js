export default function resolveProductionUrl(document) {
  // Set the base URL based on the env.
  const baseURL = window.location.href.includes("localhost")
    ? "http://localhost:8080"
    : "https://fewdvault.netlify.app";

  // Handle page previews.
  if (
    document._type === "recipe" &&
    document._id &&
    document._id.includes("drafts")
  ) {
    return `${baseURL}/preview/recipe/${document._id}/`;
  }
}