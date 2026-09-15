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

  test("hero column and header have no PromptAnatomy outbound", async ({ page }) => {
    await page.goto("/leader/");
    const heroSection = page.locator("section").filter({ has: page.getByTestId("hero-heading") });
    await expect(heroSection.locator("a[href*='promptanatomy.app']")).toHaveCount(0);
    await expect(heroSection.locator("a.btn-primary-gold")).toHaveAttribute("href", "#context");
    await expect(page.locator("header a[href*='promptanatomy.app']")).toHaveCount(0);
  });

  test("PromptAnatomy outbound link includes leader UTM", async ({ page }) => {
    await page.goto("/leader/");
    const link = page.locator("a[href*='promptanatomy.app'][target='_blank']").filter({ visible: true }).first();
    await link.scrollIntoViewIfNeeded();
    await expect(link).toBeVisible();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/utm_source=leader/);
    expect(href).toMatch(/utm_medium=/);
    expect(href).toMatch(/utm_campaign=/);
  });

  test("hero heading lives in main; header stays outside; no meme before Step 1", async ({ page }) => {
    await page.goto("/leader/");
    const heading = page.getByTestId("hero-heading");
    await expect(heading).toBeVisible();
    await expect(page.locator("main").getByTestId("hero-heading")).toBeVisible();
    await expect(page.getByTestId("site-header")).toBeVisible();
    await expect(page.locator("main").getByTestId("site-header")).toHaveCount(0);

    const contextIndex = await page.evaluate(() => {
      const main = document.querySelector("main");
      if (!main) return -1;
      return Array.from(main.children).findIndex((el) => el.id === "context");
    });
    expect(contextIndex).toBeGreaterThan(0);

    const memeBeforeContext = await page.evaluate(() => {
      const main = document.querySelector("main");
      const context = document.getElementById("context");
      if (!main || !context) return true;
      const children = Array.from(main.children);
      const contextIdx = children.indexOf(context);
      return children.slice(0, contextIdx).some((el) => el.tagName === "ASIDE");
    });
    expect(memeBeforeContext).toBe(false);
  });

  test("PromoBanner primary CTA targets clarity practice", async ({ page }) => {
    await page.goto("/leader/");
    const promo = page.getByRole("region", {
      name: "Prove on a scenario before the full product.",
    });
    await expect(promo).toBeVisible();
    const goldCta = promo.locator("a.cta-gradient").first();
    await expect(goldCta).toHaveAttribute("href", "#demo");
    await expect(promo.locator("a[href*='promptanatomy.app']")).toHaveCount(0);
    const sister = promo.locator("a[href*='promptanatomy.cloud']").first();
    await expect(sister).toBeVisible();
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

  test("hash targets receive focus on load", async ({ page }) => {
    await page.goto("/leader/#safety-check");
    await expect.poll(async () =>
      page.evaluate(() => document.activeElement?.id ?? ""),
    ).toBe("safety-check");

    await page.goto("/leader/#faq");
    await expect.poll(async () =>
      page.evaluate(() => document.activeElement?.id ?? ""),
    ).toBe("faq");
  });

  test("demo copy fallback reveals the prompt panel", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
    });
    await page.goto("/leader/");
    const demo = page.locator("#demo");
    await demo.scrollIntoViewIfNeeded();
    await demo.locator("button[data-copy-prompt]").first().click();
    const panel = page.locator("#demo-prompt-panel");
    await expect(panel).not.toHaveClass(/hidden/);
    await expect(panel.locator('[data-demo-field="prompt"]')).toBeVisible();
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
    const productCta = panel.locator("a[href*='promptanatomy.app']");
    await expect(productCta).toBeVisible();
    const productHref = await productCta.getAttribute("href");
    expect(productHref).toMatch(/utm_medium=hero/);
    expect(productHref).toMatch(/utm_campaign=primary/);
    await panel.getByRole("link", { name: "How it works" }).click();
    await expect(menuBtn).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();
  });

  test("hero connector is rotated on narrow viewports after load", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/leader/");
    const connector = page.getByTestId("hero-connector");
    await expect(connector).toBeVisible();
    await page.waitForTimeout(1500);
    const isRotated = await connector.evaluate((el) => {
      const transform = getComputedStyle(el).transform;
      if (transform === "none") return false;
      if (transform.includes("rotate(90deg)")) return true;
      const match = transform.match(/matrix\(([^)]+)\)/);
      if (!match) return false;
      const values = match[1].split(",").map((part) => parseFloat(part.trim()));
      const b = values[1];
      const c = values[2];
      return Math.abs(b) > 0.5 || Math.abs(c) > 0.5;
    });
    expect(isRotated).toBe(true);
  });

  test("context inputs use 16px font on narrow viewports", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/leader/");
    const fontSize = await page.locator("#ctx-company").evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    expect(fontSize).toBeGreaterThanOrEqual(16);
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
    const response = await request.get("/leader/assets/memes/meme-04-delegation-bottleneck.png");
    expect(response.status()).toBe(200);
  });
});
