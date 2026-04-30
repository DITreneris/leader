# Quality Assurance

## Quality Goal

The page should feel premium, load fast, and make sense to a CEO or COO in under 10 seconds. Quality is measured by clarity, speed, trust, prompt usefulness, visual explanation, safety, and conversion focus.

## Required Checks

Run after meaningful code, copy, style, or config changes:

```bash
npm run build
```

The build must finish with:

- 0 Astro check errors
- 0 Astro check warnings
- Successful static build

### Automated CI (GitHub Actions)

[`../.github/workflows/ci.yml`](../.github/workflows/ci.yml) runs, in order:

1. `npm test` — Vitest unit tests (`src/**/*.test.ts`) for outbound URLs, client copy payload, and JSON-LD helpers.
2. `npm audit --audit-level=high` — fails the job only on **high or critical** advisories. Moderate/low issues in dev-only chains (e.g. Lighthouse CLI, `@astrojs/check` / YAML language server) are tracked via Dependabot and upgrades; do not use `npm audit fix --force` without reviewing breaking changes.
3. `npm run build` with `BASE_PATH=/leader` and `SITE_URL` matching the GitHub Pages host.
4. Playwright E2E smoke (`npm run test:e2e`) against `astro preview` — hero visibility and PromptAnatomy UTM links.
5. Lighthouse CI (see root [`.lighthouserc.json`](../.lighthouserc.json)).

### Optional follow-ups (Want backlog)

Not in CI today; consider when the landing grows in interactivity:

- Broader Playwright coverage (demo flows, library accordion, ROI panel) with stable `data-testid` contracts.
- Content-Security-Policy **Report-Only** via meta or edge headers (strict CSP without `unsafe-inline` would require refactoring inline scripts in `Page.astro`).
- Visual regression (screenshot diff) if layout churn becomes costly.

## Product QA Checklist

- The page still has one clear primary promise.
- The Executive Prompt Operating Kit promise is obvious above the fold.
- The first prompt action is clear before the full 35-prompt library appears.
- **Global Context + Modules** (`#context`) reads as the main “act” step; **SafetyCheck** follows the demo as a dedicated send/risk surface (see `Page.astro` order).
- The safety check stands alone as a valuable executive workflow.
- The static clarity demo is easy to understand without instructions.
- The Max Value Kit download is short and matches the page promise.
- CTAs support the direct library download and the full PromptAnatomy system.
- The page does not become a beginner prompt-engineering lesson.
- No backend, login, AI API call, database, or user data storage was added unintentionally.
- English and Lithuanian copy stay aligned.

## Content QA Checklist

- Headlines are short and executive.
- Copy uses business language: decision, risk, trade-off, next action, delegation, ROI.
- Claims are specific and believable.
- ROI language stays cautious unless backed by proof.
- Links to the static download, `https://www.promptanatomy.app/`, and `https://ditreneris.github.io/ceo/` (sister bridge) remain correct.
- Search-intent split stays explicit: `leader` = executive decision ops, mother = product authority, sister hub = framework/learning practice.
- Shipped English uses **American English** (not UK spellings/phrasing); see **US English (shipped default)** in [`.cursor/rules/language-standard.mdc`](../.cursor/rules/language-standard.mdc).

## Visual QA Checklist

- **Mobile UX (deep checklist):** [`MOBILE_UI_AUDIT.md`](MOBILE_UI_AUDIT.md) — touch targets, safe-area gaps, hero menu behavior, clipboard/library interactions.
- Mobile order is clear: headline, value, CTA or useful visual.
- The primary CTA is visible above the fold on common screen sizes.
- Gradients, glass cards, and memes support the message rather than distract.
- The before/after proof diagram renders (SVG) and stays low-text.
- Visual breaks explain workflow control, safety, ROI, or system thinking.
- Five `MemeMoment` beats are present on the live page (see `Page.astro` / `docs/VISUAL_CONTENT_MAP.md`); they remain fragmented recognition beats (no CTA).
- No meme moment carries a CTA or eyebrow ladder; each one is a single recognition beat.
- Visual breaks use memes and section rhythm; the former standalone “OS fit” block was removed—its message lives in the FAQ “vs prompt list” answer.
- The library accordion opens the first category by default and keeps the rest collapsed.
- The library section uses a single outer accordion for categories; expand/collapse behaves predictably (no workflow picker).
- The `MemeMoment` images use explicit width and height for CLS; the first beat (after hero) uses `loading="eager"` and `fetchpriority="high"`; others use lazy loading.
- Diagrams should use SVG where possible.
- Meme delivery: [`MemeMoment.astro`](../src/components/MemeMoment.astro) serves **AVIF → WebP → PNG** (`<picture>`); regenerate derivatives after changing a source PNG: `npm run optimize:memes` (requires [`sharp`](https://sharp.pixelplumbing.com/) — see root **`package.json`**).
- Screenshots and larger raster assets should use AVIF/WebP when possible.

## Design System v1 checklist

Reference: [`docs/DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Run these when adding a section, changing layout/CSS, or touching `src/components/ds/`.

- **Tokens:** New surfaces use existing radius utilities (`.radius-sm` … `.radius-xl`), section rhythm (`.section-y*` + `px-5 sm:px-8`), and colors from `global.css` / `.cursor/rules/visual-and-copy.mdc` (no new arbitrary accent colors).
- **Primitives:** Prefer [`src/components/ds/`](../src/components/ds/) (`SectionShell`, `SectionTitleBlock`, `ContentCard`, `BulletSystem`, `HighlightStrip`, `DiagramContainer`) for new or heavily edited sections; document short-lived exceptions in [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) or PR notes.
- **CTA discipline:** At most one primary conversion CTA per major section; glass/elevation stays on primary containers (see Design System “Do not”).
- **i18n:** User-visible string changes remain aligned across EN/LT locales.

## Accessibility QA Checklist

- Buttons and links have clear text.
- Interactive elements are reachable and understandable.
- Color contrast remains strong on the dark background.
- Images should have meaningful alt text when they communicate information.
- Decorative images should use empty alt text when implemented.

## Performance QA Checklist

- Keep the page static-first.
- Avoid adding heavy client-side JavaScript.
- Do not lazy-load above-the-fold hero visuals.
- Lazy-load below-the-fold images when real assets are added.
- Define image dimensions or aspect ratio to avoid layout shift.

## SEO / GEO / AI crawl QA

After changes to [`integrations/robots-txt.mjs`](../integrations/robots-txt.mjs) (crawler policy lines), `public/llms.txt`, meta, JSON-LD, or FAQ copy:

1. Run `npm run build` (0 Astro check errors; 0 warnings).
2. Open `dist/en/index.html` and confirm one `<script type="application/ld+json">` block parses as valid JSON (no stray `<` in strings).
3. Validate structured data (e.g. Google Rich Results Test or schema.org validator) using the deployed or local `dist` HTML — expect `WebPage` with `datePublished` / `dateModified`, `FAQPage` aligned with visible `#faq` questions.
4. Confirm `dist/robots.txt` after build: `User-agent` / `Allow` / `Sitemap` lines, and that **`Sitemap:`** matches production `SITE_URL` + `BASE_PATH` (generated at build from [`scripts/lib/deploy-env.mjs`](../scripts/lib/deploy-env.mjs)).
5. Skim `public/llms.txt` — definitions and `/en/` URL still match the live deploy.
6. If FAQ items changed, confirm **EN/LT** `faq.items` stay aligned ([`docs/COPY_AUDIT_BY_SLIDE.md`](COPY_AUDIT_BY_SLIDE.md) as needed).
7. When ship includes copy or on-page SEO changes, bump **`LEADER_PAGE_DATE_MODIFIED`** in [`src/constants/pageSeo.ts`](../src/constants/pageSeo.ts) and re-build.
8. Optional: run 2–3 English product queries in Perplexity or ChatGPT (with browsing) and note whether Executive OS / Global Context Block citations match `llms.txt` and FAQ.
9. Verify CTA hierarchy: PromptAnatomy.app remains the primary product handoff; `promptanatomy.cloud` is presented as a secondary learning/practice path.

## Release Readiness

Before publishing:

1. Run `npm run build`.
2. Check desktop and mobile layouts.
3. Test language switching.
4. Test all scenario tabs in the clarity demo.
5. Test prompt copy buttons.
6. Test the library accordion expand/collapse (outer + inner categories).
7. Test printable Max Value Kit download and outbound links.
8. Confirm no meme image returns 404 in network tab.
9. Confirm `public/og-image.png` (and `og-image-lt.png` when used) are **1200×630** pixels so they match `og:image:width` / `og:image:height` in `Page.astro` (Facebook / LinkedIn / X previews).
10. Add a daily entry to `CHANGELOG.md`.
