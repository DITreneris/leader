import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "./integrations/robots-txt.mjs";
import { getAstroBase, getSiteOrigin } from "./scripts/lib/deploy-env.mjs";

const base = getAstroBase();
const site = getSiteOrigin();

export default defineConfig({
  site,
  base,
  integrations: [
    robotsTxt(),
    sitemap({
      filter: (page) => !/\/(en|lt)\/?$/.test(new URL(page).pathname),
    }),
  ],
});
