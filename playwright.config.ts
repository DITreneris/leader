import { defineConfig, devices } from "@playwright/test";

/**
 * E2E expects `dist/` built with the same `BASE_PATH` as production (e.g. `/leader`).
 * CI: build step sets BASE_PATH + SITE_URL, then `npm run test:e2e`.
 * `astro preview` must receive the same BASE_PATH or `/leader/` never becomes ready.
 */
const basePath = process.env.BASE_PATH ?? "/leader";
const previewPath =
  basePath === "/" ? "/" : `/${String(basePath).replace(/^\/|\/$/g, "")}/`;
const previewOrigin = "http://127.0.0.1:4321";

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: previewOrigin,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 5"] },
    },
  ],
  webServer: {
    command: "npx astro preview --host 127.0.0.1 --port 4321",
    url: `${previewOrigin}${previewPath}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      BASE_PATH: basePath,
      SITE_URL: process.env.SITE_URL ?? "https://ditreneris.github.io",
    },
  },
});
