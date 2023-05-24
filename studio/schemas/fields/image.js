export default {
  name: "image",
  title: "Image",
  type: "image",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};