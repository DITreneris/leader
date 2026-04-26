import { defineConfig } from "astro/config";

const basePath = process.env.BASE_PATH ?? "/";
const base = basePath === "/" ? "/" : `/${basePath.replace(/^\/|\/$/g, "")}/`;
const site = process.env.SITE_URL ?? "https://ditreneris.github.io";

export default defineConfig({
  site,
  base,
});
