import { title } from "../fields/title";
import { body } from "../fields/body";
import { seo } from "../fields/seo";
import { uuid } from "../fields/uuid";

export const pages = {
  label: "Pages",
  name: "pages",
  label_singluar: "page",
  folder: "src/site/content/pages",
  create: true,
  fields: [
    // Add imported fields...
    title,
    body,
    seo,
    uuid,
    // Or add them this way...
    {
      label: "Path",
      name: "path",
      default: "/page/wow"
    }
  ]
};
