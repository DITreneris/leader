/**
 * Routes and shipped UI locales. Default deployment is USA-market English-only;
 * Lithuanian strings remain in {@link "../content/locales/lt"} for opt-in restores.
 *
 * To re-enable bilingual delivery:
 *   1. Set `SHIPPED_LOCALES` below to `["en", "lt"] as const`
 *   2. Mirror that list in {@link ../../astro.config.mjs} (`i18n.locales`) and sitemap `locales`
 *   3. Restore `src/pages/lt/index.astro` with `<Page lang="lt" />`
 * Details: root `README.md` — “Locale toggle (USA build)”
 */
export const SHIPPED_LOCALES = ["en"] as const;

/** True when `/lt/` and the header EN/LT switch ship alongside `/en/`. */
export const showLanguageSwitcher = (): boolean =>
  (SHIPPED_LOCALES as readonly string[]).includes("lt");
