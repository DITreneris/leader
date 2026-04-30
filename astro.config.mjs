import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "./integrations/robots-txt.mjs";
import { getAstroBase } from "./scripts/lib/deploy-env.mjs";

const base = getAstroBase();
const site = process.env.SITE_URL ?? "https://ditreneris.github.io";

/**
 * Must mirror `src/constants/siteLocale.ts` `SHIPPED_LOCALES` and `@astrojs/sitemap` `i18n.locales` keys.
 * See README → Locale toggle (USA market build).
 */
const shippedLocales = ["en"];

export default defineConfig({
  site,
  base,
  // Note: `fallback: { lt: "en" }` is omitted — with static SSG it prevented `/lt/` from emitting.
  i18n: {
    defaultLocale: "en",
    locales: shippedLocales,
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
  ],
});
