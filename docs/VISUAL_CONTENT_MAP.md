# Visual Content Map

## Principle

Visuals should make the CEO feel the transformation quickly: business noise becomes clear decisions, risks, and next actions.

## Priority Visuals

1. Hero split-compare — premium pass (shipped)
   - Component: [`HeroDecisionDiagram.astro`](../src/components/HeroDecisionDiagram.astro)
   - Copy: `heroDiagram.brief.decision|why|owner|risk|nextAction` — hierarchical brief (not flat `rows[]`)
   - Message: "Decision hero block → Why → Owner/Risk → Next — scannable in ~2 seconds."
   - Visual grammar: blog [`split-compare`](https://github.com/DITreneris/blog/blob/main/data/og/templates/split-compare.mjs); brief panel dominant (~58% flex); center **minimal arrow connector** only (no label, no third panel)
   - Placement: hero right column; process detail in `#context` workflow rail.
   - Motion: CSS-only load stagger + panel hover/focus emphasis; static when `prefers-reduced-motion: reduce`.

### Archival (not mounted on the landing)

2. Before/after graphic — **removed 2026-06-09** (`BeforeAfter.astro`, `before-after.svg` deleted; proof consolidated in hero diagram).
3. Workflow map
   - File: `public/assets/graphics/workflow-map.svg`
   - Status: **archival only** — not referenced in [`Page.astro`](../src/layouts/Page.astro). Social sharing uses `public/og-image.png`. Keep in repo for legacy/docs context; do not treat as a live page beat unless product re-embeds it.

## Meme moments (fragmented)

Several `MemeMoment.astro` beats break up long reading. Copy always comes from `uiCopy.memes.items[index]` (EN/LT aligned). Top-to-bottom order in `src/layouts/Page.astro`:

| Order | `index` | File | Copy beat (EN title) |
|-------|---------|------|----------------------|
| 1 | 3 | `meme-03-clear-decision.png` | Control creates results |
| 2 | 2 | `meme-04-delegation-bottleneck.png` | Delegation bottleneck |
| 3 | 5 | `reward_2.png` | Keep the structure on your desk |

Desktop (`lg+`): **two-column asymmetric grid** — the **meme image always occupies the 1.25fr (wide) column** and copy the 0.75fr column. When **`side="left"`**, columns are **1.25fr | 0.75fr** (image left). When **`side="right"`** (zig-zag), [`MemeMoment.astro`](../src/components/MemeMoment.astro) uses **0.75fr | 1.25fr** so the image stays wide on the **right** (previously a bug put the image in the narrow column). Alternating **`side`** per [`Page.astro`](../src/layouts/Page.astro) is intentional. Below **`lg`**: stacked — full-width **16:9** image, then title + body (centered).

Section flow between beats: `ExecutiveModules` (`#context`) → `PromoBanner` → `ClarityDemo` (`#demo`) → **meme index 5** → `SafetyCheck` → `CourseCTA` (`#kit`) → `PromptAnatomy` → `RoiPath` → `Faq` → `PromptLibrary` (`#library`).

Removed **2026-08-24:** post-hero meme `items[0]` (`meme-01-ai-chaos.png`) — restated the hero H1; asset kept for optional reuse.

Removed **2026-04-29:** post–`RoiPath` meme `items[4]` (`meme-02-meeting-overload.png`) — see [`MEME_PRIORITY_REGISTRY.md`](MEME_PRIORITY_REGISTRY.md).

Index `1` in `memes.items` is not mounted on the page today (reserved / spare).

Implementation rules:

- Raster delivery: **`MemeMoment`** emits `<picture>` with **AVIF → WebP → PNG** (PNG is the authoring master; run **`npm run optimize:memes`** after changing a meme PNG). First above-the-fold meme uses `loading="eager"` and `fetchpriority="high"` via props; others stay lazy.
- Copy from `uiCopy.memes.items[index]` so EN/LT stay aligned (visual titles + captions). Decorative `<img alt>` strings for each beat live in `uiCopy.memes.sequenceImageAlts` in **`Page.astro`** order (localized).
- Fragmentation is intentional; memes do not carry primary CTAs.

## Quality Rules

- Do not let memes replace proof or demo content.
- Keep image filenames descriptive and numbered.
- Prefer SVG for diagrams and AVIF/WebP for screenshots.
- Add dimensions or aspect ratio when images are implemented.
- Below-the-fold visual assets should be lazy-loaded.
