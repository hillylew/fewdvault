import { RiPagesLine } from "react-icons/ri";
import body from "../fields/body";
import seo from "../fields/seo";
import uuid from "../fields/uuid";

// schemas/pages.js
export default {
	title: 'Pages',
  name: 'pages',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    body,
    seo,
    uuid,
  ]
}