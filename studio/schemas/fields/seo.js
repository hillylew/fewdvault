
export default {
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collasped: true,
    collapsible: true,
  },
  fields: [
    {
      name: "meta",
      title: "Meta description",
      type: "text",
      validation: (Rule) =>
        Rule.max(155).warning(
          "Suggested length is no more than 155 characters."
        ),
      description:
        "Description of this page for search engines. Suggested length is no more than 155 characters.",
    },
  ],
};