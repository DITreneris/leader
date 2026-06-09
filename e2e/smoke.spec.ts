import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("hero heading is visible with copy", async ({ page }) => {
    await page.goto("/leader/");
    const heading = page.getByTestId("hero-heading");
    await expect(heading).toBeVisible();
    const text = await heading.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("hero decision diagram landmark is visible", async ({ page }) => {
    await page.goto("/leader/");
    const diagram = page.getByTestId("hero-diagram");
    await expect(diagram).toBeVisible();
    await expect(diagram).toHaveAttribute(
      "aria-label",
      "Example: scattered executive inputs synthesized into a decision brief with decision, owner, rationale, risk, and next action."
    );
  });

  test("PromptAnatomy outbound link includes leader UTM", async ({ page }) => {
    await page.goto("/leader/");
    // Skip hidden mobile-drawer links; assert a visible hero CTA.
    const link = page.locator("section.relative a[href*='promptanatomy.app'][target='_blank']").first();
    await expect(link).toBeVisible();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/utm_source=leader/);
    expect(href).toMatch(/utm_medium=/);
    expect(href).toMatch(/utm_campaign=/);
  });

  test("PromoBanner primary CTA targets clarity practice", async ({ page }) => {
    await page.goto("/leader/");
    const promo = page.getByRole("region", {
      name: "Step 2: prove on a scenario before the full product.",
    });
    await expect(promo).toBeVisible();
    const goldCta = promo.locator("a.cta-gradient").first();
    await expect(goldCta).toHaveAttribute("href", "#demo");
    const paLink = promo.locator("a[href*='promptanatomy.app']").first();
    await expect(paLink).toBeVisible();
    const href = await paLink.getAttribute("href");
    expect(href).toMatch(/utm_source=leader/);
  });

  test("macro step eyebrows appear on conversion spine", async ({ page }) => {
    await page.goto("/leader/");
    const context = page.locator("#context");
    await context.scrollIntoViewIfNeeded();
    await expect(context).toContainText(/Step 1/);
    const demo = page.locator("#demo");
    await demo.scrollIntoViewIfNeeded();
    await expect(demo).toContainText(/Step 2/);
    const kit = page.locator("#kit");
    await kit.scrollIntoViewIfNeeded();
    await expect(kit).toContainText(/Step 3/);
  });

  test("kit section exposes PDF download link", async ({ page }) => {
    await page.goto("/leader/");
    const kit = page.locator("#kit");
    await expect(kit).toBeVisible();
    const download = kit.locator("a[data-kit-download]");
    await expect(download).toBeVisible();
    const href = await download.getAttribute("href");
    expect(href).toMatch(/executive-operating-kit\.pdf$/);
  });

  test("clarity demo exposes copy prompt control", async ({ page }) => {
    await page.goto("/leader/");
    const demo = page.locator("#demo");
    await expect(demo).toBeVisible();
    const copyBtn = demo.locator("button[data-copy-prompt]").first();
    await expect(copyBtn).toBeVisible();
    await expect(copyBtn).toBeEnabled();
    const pasteStrip = demo.locator('[data-paste-destination-strip="demo"]');
    await expect(pasteStrip).toHaveClass(/hidden/);
  });

  test("prompt anatomy links blocks to in-page sections", async ({ page }) => {
    await page.goto("/leader/");
    const anatomy = page.locator("#anatomy");
    await anatomy.scrollIntoViewIfNeeded();
    await anatomy.locator("summary").click();
    await expect(anatomy.locator('a[href="#context"]').first()).toBeVisible();
    await expect(anatomy.locator('a[href="#safety-check"]').first()).toBeVisible();
  });

  test("mobile menu opens and closes on nav link", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/leader/");
    const panel = page.locator("#mobile-menu");
    const menuBtn = page.locator("[data-mobile-menu-button]");
    await expect(panel).toBeHidden();
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute("aria-expanded", "true");
    await expect(panel).toBeVisible();
    await panel.locator('a[href="#context"]').click();
    await expect(menuBtn).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();
  });

  test("context module copy control is present", async ({ page }) => {
    await page.goto("/leader/");
    const moduleCopy = page.locator('#context [data-module-copy="secondOrder"]');
    await moduleCopy.scrollIntoViewIfNeeded();
    await expect(moduleCopy).toBeVisible();
    await expect(moduleCopy).toBeEnabled();
  });

  test("prompt library inner panel opens from outer accordion", async ({ page }) => {
    await page.goto("/leader/");
    const library = page.locator("#library");
    await library.scrollIntoViewIfNeeded();
    await library.locator("summary.library-summary").click();
    await expect(library.locator("[data-prompt-library-inner]")).toBeVisible();
  });

  test("first meme image asset is served", async ({ page, request }) => {
    await page.goto("/leader/");
    const response = await request.get("/leader/assets/memes/meme-03-clear-decision.png");
    expect(response.status()).toBe(200);
  });
});
