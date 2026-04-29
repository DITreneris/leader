import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("hero heading is visible with copy", async ({ page }) => {
    await page.goto("/leader/en/");
    const heading = page.getByTestId("hero-heading");
    await expect(heading).toBeVisible();
    const text = await heading.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("PromptAnatomy outbound link includes leader UTM", async ({ page }) => {
    await page.goto("/leader/en/");
    // Skip hidden mobile-drawer links; assert a visible hero CTA.
    const link = page.locator("section.relative a[href*='promptanatomy.app'][target='_blank']").first();
    await expect(link).toBeVisible();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/utm_source=leader/);
    expect(href).toMatch(/utm_medium=/);
    expect(href).toMatch(/utm_campaign=/);
  });
});
