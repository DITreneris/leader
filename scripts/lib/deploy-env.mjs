/**
 * Shared SITE_URL + BASE_PATH helpers — must match routing in astro.config.mjs.
 * Used by robots.txt integration and any tooling that needs the deployed sitemap URL.
 */

/** GitHub Pages hostnames are case-insensitive; Astro emits lowercase in canonicals. */
export function normalizeSiteOrigin(origin) {
  const trimmed = origin.replace(/\/$/, "");
  try {
    const url = new URL(trimmed);
    if (url.hostname.endsWith(".github.io")) {
      url.hostname = url.hostname.toLowerCase();
    }
    return url.origin;
  } catch {
    return trimmed;
  }
}

export function getAstroBase() {
  const basePath = process.env.BASE_PATH ?? "/";
  return basePath === "/" ? "/" : `/${basePath.replace(/^\/|\/$/g, "")}/`;
}

export function getSiteOrigin() {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return normalizeSiteOrigin(explicit);

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
    return normalizeSiteOrigin(withProtocol);
  }

  return "https://ditreneris.github.io";
}

/** Absolute URL to sitemap-index.xml for the current deploy env. */
export function getSitemapIndexUrl() {
  return `${getSiteOrigin()}${getAstroBase()}sitemap-index.xml`;
}
