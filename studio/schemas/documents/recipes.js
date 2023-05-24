import body from "../fields/body";
import uuid from "../fields/uuid";

export default {
  title: "Recipes",
  name: "recipes",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    body,
    uuid,
    {
      title: "Source",
      name: "source",
      type: "string",
    },
    {
      title: "Source URL",
      name: "source_url",
      type: "string",
    },
    {
      title: "Yield",
      name: "yield",
      type: "string",
    },
    {
      title: "Active Time",
      name: "active_time",
      type: "string",
    },
    {
      title: "Total Time",
      name: "total_time",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Favorite",
      name: "favorite",
      type: "boolean",
    },
    {
      title: "Categories",
      name: "tags",
      type: "array",
      of: [{type: "string"}],
      options: {
        layout: "tags"
      }
    },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "markdown",
    },
    {
      title: "Instructions",
      name: "instructions",
      type: "markdown",
    },
    {
      title: "Notes",
      name: "notes",
      type: "markdown",
    }
  ]
};
