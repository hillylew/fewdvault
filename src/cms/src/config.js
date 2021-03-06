// Import collections.
import { recipes } from "./collections/recipes";

export const config = {
  // No need for config.yml thanks to this.
  load_config_file: false,
  backend: {
    // Switch name to test-repo for local testing
    branch: "master",
    name: "github",
    repo: "hillylew/fewdvault",
    // name: "git-gateway", // npx netlify-cms-proxy-server
  },
  local_backend: false,
  media_folder: "src/uploads",
  public_folder: "/uploads",
  collections: [recipes]
};
