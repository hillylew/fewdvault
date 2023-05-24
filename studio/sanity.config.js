import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { markdownSchema } from "sanity-plugin-markdown";
import schemas from "./schemas/schema";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  title: 'fewdvault',
  projectId: 'at91z4ai',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema(), visionTool()],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },

  schema: {
    types: schemas,
  },
})

