/**
 * Shared SITE_URL + BASE_PATH helpers — must match routing in astro.config.mjs.
 * Used by robots.txt integration and any tooling that needs the deployed sitemap URL.
 */
export function getAstroBase() {
  const basePath = process.env.BASE_PATH ?? "/";
  return basePath === "/" ? "/" : `/${basePath.replace(/^\/|\/$/g, "")}/`;
}

export function getSiteOrigin() {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  // Hosting providers commonly expose the public hostname via env vars.
  // Prefer these over the GitHub Pages default to keep canonicals, OG tags,
  // and `dist/robots.txt` sitemap correct when SITE_URL wasn't configured.
  const inferredHost =
    process.env.VERCEL_URL?.trim() ||
    process.env.NETLIFY_URL?.trim() ||
    process.env.CF_PAGES_URL?.trim() ||
    process.env.RENDER_EXTERNAL_URL?.trim();

  if (inferredHost) {
    const withProtocol = inferredHost.startsWith("http") ? inferredHost : `https://${inferredHost}`;
    return withProtocol.replace(/\/$/, "");
  }

  return "https://ditreneris.github.io";
}

/** Absolute URL to sitemap-index.xml for the current deploy env. */
export function getSitemapIndexUrl() {
  return `${getSiteOrigin()}${getAstroBase()}sitemap-index.xml`;
}
