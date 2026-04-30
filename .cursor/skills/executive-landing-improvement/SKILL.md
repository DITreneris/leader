---
name: executive-landing-improvement
description: Improves the PromptAnatomy Executive OS CEO landing page. Use when editing landing copy, sections, visual hierarchy, static clarity demo scenarios, bilingual EN/LT content, conversion flow, or SaaS-style page polish.
---

# Executive Landing Improvement

## Quick Start

Before changing the page:

1. Read `AGENTS.md` and `docs/SOURCE_OF_TRUTH.md`.
2. Read `src/pages/index.astro` (root redirect + crawler **OG/Twitter** head) and `src/layouts/Page.astro` (section order is canonical).
3. For visuals and section layout, follow `docs/DESIGN_SYSTEM.md` and `.cursor/rules/visual-and-copy.mdc` (tokens, `ds/` primitives, one primary CTA per major section).
4. Read or edit copy in `src/content/locales/en.ts` and `src/content/locales/lt.ts` (re-exported via `src/content/copy.ts`); use `docs/COPY_AUDIT_BY_SLIDE.md` as the section-by-section QA map after substantive edits.
5. New outbound or paste-strip links: `src/constants/outboundLinks.ts` + `docs/UTM_MATRIX.md` — include **`buildConsumerAiUrl`** (ChatGPT / Claude / Gemini) and **`buildSisterHubUrl`** (`promptanatomy.cloud`) when touching sister learning CTAs.
6. Preserve the static, one-page MVP unless the user explicitly asks to expand it.

## Product Filter

Every change should pass this test:

- Does it help a CEO/COO get clarity faster?
- Does it strengthen the path from aha moment to PromptAnatomy.app?
- Does it keep the page simpler, not heavier?
- Does it preserve both English and Lithuanian content?

If the answer is no, do not add it.

## Content Rules

- Use executive words: decision, risk, trade-off, next action, delegation, ROI.
- Avoid beginner terms: prompt engineering, learn AI, tutorial, course module.
- Keep headings short and specific.
- Keep the static demo useful even without real AI.
- When changing a scenario, update both `en.demo.scenarios` and `lt.demo.scenarios`.

## Visual Rules

- Align with `.cursor/rules/visual-and-copy.mdc`: dark navy base, white text, **gold** brand accent (CTA gradient as on the site). Do not reintroduce cyan/blue as the primary accent.
- Glass cards, bento-style hero column, restrained gradients—clarity over decoration.
- Memes are supporting breaks, not the main conversion asset.
- Prefer SVG for diagrams and AVIF/WebP for screenshots.

## Verification

After meaningful changes:

```bash
npm run build
```

Fix any Astro check or build errors before finishing.
