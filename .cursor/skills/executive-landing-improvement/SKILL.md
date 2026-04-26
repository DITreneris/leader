---
name: executive-landing-improvement
description: Improves the PromptAnatomy Executive OS CEO landing page. Use when editing landing copy, sections, visual hierarchy, static clarity demo scenarios, bilingual EN/LT content, conversion flow, or SaaS-style page polish.
---

# Executive Landing Improvement

## Quick Start

Before changing the page:

1. Read `AGENTS.md`.
2. Read `src/pages/index.astro`.
3. Read relevant copy in `src/content/copy.ts`.
4. Preserve the static, one-page MVP unless the user explicitly asks to expand it.

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

- Premium dark SaaS style: dark background, white text, cyan/blue accent.
- Use glass cards, bento layouts, and restrained gradients.
- Memes are supporting breaks, not the main conversion asset.
- Prefer SVG for diagrams and AVIF/WebP for screenshots.

## Verification

After meaningful changes:

```bash
npm run build
```

Fix any Astro check or build errors before finishing.
