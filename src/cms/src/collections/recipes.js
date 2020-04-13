import { title } from "../fields/title";
import { body } from "../fields/body";
import { uuid } from "../fields/uuid";

export const recipes = {
  label: "Recipes",
  name: "recipes",
  label_singluar: "recipe",
  folder: "src/site/recipes",
  create: true,
  fields: [
    title,
    body,
    uuid,
    {
      label: "Source",
      name: "source",
      widget: "string"
    },
    {
      label: "Source URL",
      name: "source_url",
      widget: "string"
    },
    {
      label: "Yield",
      name: "yield",
      widget: "string"
    },
    {
      label: "Active Time",
      name: "active_time",
      widget: "string"
    },
    {
      label: "Total Time",
      name: "total_time",
      widget: "string"
    },
    {
      label: "Image",
      name: "image",
      widget: "image"
    },
    {
      label: "Favorite",
      name: "favorite",
      widget: "boolean"
    },
    {
      label: "Categories",
      name: "tags",
      widget: "string"
    },
    {
      label: "Ingredients",
      name: "ingredients",
      widget: "markdown"
    },
    {
      label: "Instructions",
      name: "instructions",
      widget: "markdown"
    },
    {
      label: "Notes",
      name: "notes",
      widget: "markdown"
    }
  ]
};
