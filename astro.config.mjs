import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const basePath = process.env.BASE_PATH ?? "/";
const base = basePath === "/" ? "/" : `/${basePath.replace(/^\/|\/$/g, "")}/`;
const site = process.env.SITE_URL ?? "https://ditreneris.github.io";

/** Must mirror `src/constants/siteLocale.ts` `SHIPPED_LOCALES` when shipping LT. See README → Locale toggle. */
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
