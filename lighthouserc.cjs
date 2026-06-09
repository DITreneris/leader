/** @see docs/COMMANDS.md — must match CI build BASE_PATH (e.g. /leader on GitHub Pages). */
const basePath = process.env.BASE_PATH ?? "/";
const normalizedBase =
  basePath === "/" ? "" : `/${String(basePath).replace(/^\/|\/$/g, "")}`;
const previewPath = normalizedBase ? `${normalizedBase}/` : "/";
const port = process.env.LHCI_PREVIEW_PORT || "4321";
const previewUrl = `http://127.0.0.1:${port}${previewPath}`;

module.exports = {
  ci: {
    collect: {
      // staticDistDir cannot serve Astro base-path builds (/leader/* assets, not /leader/index.html on disk).
      startServerCommand: `npx astro preview --host 127.0.0.1 --port ${port}`,
      startServerReadyPattern: String(port),
      url: [previewUrl],
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
      },
    },
  },
};
