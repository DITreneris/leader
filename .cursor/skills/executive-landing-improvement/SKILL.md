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
5. Hub ecosystem gotchas → [`docs/LESSONS.md`](../../docs/LESSONS.md)

## Product filter

Every change should pass this test:

- Does it help a CEO/COO get clarity faster?
- Does it strengthen the path from aha moment to PromptAnatomy.app?
- Does it keep the page simpler, not heavier?

If the answer is no, do not add it.

## Cut-only polish (erase words, add none)

When the user asks for word cuts / micro polish with **no additional copy**:

1. Spine marketing strings only — not prompt templates, library bodies, or ROI step prompts.
2. Leave hub QW1b footer exact (see below).
3. After deletes, re-read for grammatical US English (do not strand articles).
4. Gotchas → [`docs/LESSONS.md`](../../docs/LESSONS.md) (cut-only spine polish).

## Hub entity footer (do not regress)

- Footer line 1 is the hub QW1b contract: `Part of Prompt Anatomy · Training & checkout →` + linked `promptanatomy.app` (`footer.brand` / `footer.entityLink`).
- Build the href with **`buildEntityFooterUrl()`** only (`utm_source=pro`). Do not reuse `buildPromptAnatomyUrl` (`leader`) for that line.
- Keep it a quiet footer text link — no card, sticky bar, hero overlay, or hard-sell price CTA. Founder stays on the copyright line.

## Standards (do not re-state here)

- Copy: [`.cursor/rules/language-standard.mdc`](../../.cursor/rules/language-standard.mdc)
- Visuals: [`.cursor/rules/visual-and-copy.mdc`](../../.cursor/rules/visual-and-copy.mdc) + [`docs/DESIGN_SYSTEM.md`](../../docs/DESIGN_SYSTEM.md)
- Code: [`.cursor/rules/astro-quality.mdc`](../../.cursor/rules/astro-quality.mdc)

## Done

Follow [`docs/DEFINITION_OF_DONE.md`](../../docs/DEFINITION_OF_DONE.md). Always:

- `npm test` and `npm run build`
- `CHANGELOG.md` if user-visible

After substantive copy: skim [`docs/COPY_AUDIT_BY_SLIDE.md`](../../docs/COPY_AUDIT_BY_SLIDE.md) for touched sections (English).
