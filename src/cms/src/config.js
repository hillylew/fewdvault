// Import collections.
import { recipes } from "./collections/recipes";

export const config = {
  // No need for config.yml thanks to this.
  load_config_file: false,
  backend: {
    // Switch name to test-repo for local testing
    name: "test-repo",
    name: "github",
    repo: "hillylew/fewdvault",
    // auth_type: "implicit",
    // app_id: "application id",
    // api_root: "https://api.github.com",
    // base_url: "https://gitlab.com",
    // auth_endpoint: "oauth/authorize"
  },
  media_folder: "src/uploads",
  public_folder: "/uploads",
  display_url: "https://gitlab.umich.edu/michigan-creative/creative-cms",
  logo_url: "https://gitlab.umich.edu/michigan-creative/creative-cms/raw/master/logo.svg",
  collections: [recipes]
};
