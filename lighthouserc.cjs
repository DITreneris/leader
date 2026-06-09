/** @see docs/COMMANDS.md — must match CI build BASE_PATH (e.g. /leader on GitHub Pages). */
const basePath = process.env.BASE_PATH ?? "/";
const normalizedBase =
  basePath === "/" ? "" : `/${String(basePath).replace(/^\/|\/$/g, "")}`;
const indexPath = `${normalizedBase}/index.html`.replace(/\/+/g, "/") || "/index.html";

module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: [indexPath],
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
