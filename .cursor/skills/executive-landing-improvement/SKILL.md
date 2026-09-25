---
name: executive-landing-improvement
description: Landing copy, sections, EN-only development, conversion flow. Static one-page MVP only.
---

# Executive Landing Improvement

## Before you edit

1. [`AGENTS.md`](../../AGENTS.md) + [`docs/DEFINITION_OF_DONE.md`](../../docs/DEFINITION_OF_DONE.md)
2. [`src/layouts/Page.astro`](../../src/layouts/Page.astro) — section order is canonical
3. Edit [`src/content/locales/en.ts`](../../src/content/locales/en.ts) only for copy (**`lt.ts` is frozen**); scoped rules apply automatically
4. Outbound changes → [`src/constants/outboundLinks.ts`](../../src/constants/outboundLinks.ts) + [`docs/UTM_MATRIX.md`](../../docs/UTM_MATRIX.md)
5. Deploy host is apex `https://promptanatomy.pro/` (`SITE_URL`). Do not retarget canonicals to `www`. GSC http/www redirects are expected — see [`docs/SOURCE_OF_TRUTH.md`](../../docs/SOURCE_OF_TRUTH.md) SEO table.
6. Session traps: [`lessons.md`](lessons.md)

## Shipped layout (do not undo)

- `SiteHeader.astro` (nav + mobile menu) stays **outside** `<main>`. `Hero.astro` (h1 + diagram) is the **first child of `<main>`**. Skip-link stays `#ctx-company`.
- Desktop gold CTA is `#context` only. PromptAnatomy `utm_source=leader` `hero`/`primary` is **mobile-menu only**.
- Demo Details / Input / Prompt are disclosures (`aria-expanded`, collapse-on-retap), not a tablist.
- Do not remount meme-01/03, restore `LanguageToggle`, move PromoBanner, or start bounce / PDF dedup.

## Product filter

Every change should pass this test:

- Does it help a CEO/COO get clarity faster?
- Does it strengthen the path from aha moment to PromptAnatomy.app?
- Does it keep the page simpler, not heavier?

If the answer is no, do not add it.

## Standards (do not re-state here)

- Copy: [`.cursor/rules/language-standard.mdc`](../../.cursor/rules/language-standard.mdc)
- Visuals: [`.cursor/rules/visual-and-copy.mdc`](../../.cursor/rules/visual-and-copy.mdc) + [`docs/DESIGN_SYSTEM.md`](../../docs/DESIGN_SYSTEM.md)
- Code: [`.cursor/rules/astro-quality.mdc`](../../.cursor/rules/astro-quality.mdc)

## Done

Follow [`docs/DEFINITION_OF_DONE.md`](../../docs/DEFINITION_OF_DONE.md). Always:

- `npm test` and `npm run build`
- `CHANGELOG.md` if user-visible

After substantive copy: skim [`docs/COPY_AUDIT_BY_SLIDE.md`](../../docs/COPY_AUDIT_BY_SLIDE.md) for touched sections (English).
