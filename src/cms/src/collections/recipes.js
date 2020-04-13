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
      widget: "string",
      required: false
    },
    {
      label: "Source URL",
      name: "source_url",
      widget: "string",
      required: false
    },
    {
      label: "Yield",
      name: "yield",
      widget: "string",
      required: false
    },
    {
      label: "Active Time",
      name: "active_time",
      widget: "string",
      required: false
    },
    {
      label: "Total Time",
      name: "total_time",
      widget: "string",
      required: false
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false
    },
    {
      label: "Favorite",
      name: "favorite",
      widget: "boolean",
      required: false
    },
    {
      label: "Categories",
      name: "tags",
      widget: "string",
      required: false
    },
    {
      label: "Ingredients",
      name: "ingredients",
      widget: "markdown",
      required: false
    },
    {
      label: "Instructions",
      name: "instructions",
      widget: "markdown",
      required: false
    },
    {
      label: "Notes",
      name: "notes",
      widget: "markdown",
      required: false
    }
  ]
};
