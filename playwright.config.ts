import { defineConfig, devices } from "@playwright/test";

/**
 * E2E expects `dist/` built with the same `BASE_PATH` as production (e.g. `/leader`).
 * CI: build step sets BASE_PATH + SITE_URL, then `npm run test:e2e`.
 */
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    ...devices["Desktop Chrome"],
    baseURL: "http://127.0.0.1:4321",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npx astro preview --host 127.0.0.1 --port 4321",
    url: "http://127.0.0.1:4321/leader/en/",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
