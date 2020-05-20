// Import CSS file for CMS style overrides.
import "./style.css";

// Flag to set CMS initialization to manual.
window.CMS_MANUAL_INIT = true;

// Import the CMS.
import CMS from "netlify-cms-app";

// Import custom previews.
import RecipesPreview from "./previews/RecipesPreview";

// Import our config.
import { config } from "./config";

// Init the CMS with our custom config.
CMS.init({ config });

// Register site CSS file.
CMS.registerPreviewStyle("/main.css");

// Register custom previews.
CMS.registerPreviewTemplate("recipes", RecipesPreview);
