/**
 * Shared SITE_URL + BASE_PATH helpers — must match routing in astro.config.mjs.
 * Used by robots.txt integration and any tooling that needs the deployed sitemap URL.
 */
export function getAstroBase() {
  const basePath = process.env.BASE_PATH ?? "/";
  return basePath === "/" ? "/" : `/${basePath.replace(/^\/|\/$/g, "")}/`;
}

export function getSiteOrigin() {
  return (process.env.SITE_URL ?? "https://ditreneris.github.io").replace(/\/$/, "");
}

/** Absolute URL to sitemap-index.xml for the current deploy env. */
export function getSitemapIndexUrl() {
  return `${getSiteOrigin()}${getAstroBase()}sitemap-index.xml`;
}
