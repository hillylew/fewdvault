import { BiNavigation } from "react-icons/bi";

export default {
  name: "link",
  title: "Link",
  type: "object",
  icon: BiNavigation,
  
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],
};