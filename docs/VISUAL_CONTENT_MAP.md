# Visual Content Map

## Principle

Visuals should make the CEO feel the transformation quickly: business noise becomes clear decisions, risks, and next actions.

## Priority Visuals

1. Hero UI mockup
   - File target: `public/assets/screenshots/hero-executive-output.avif`
   - Message: "This is what a useful executive AI output looks like."
   - Placement: hero right side.

2. Before/after graphic
   - File target: `public/assets/graphics/before-after.svg`
   - Message: "Random AI use creates generic output; structured executive workflow creates decisions."
   - Placement: `BeforeAfter` section near the top (before `#context`).

3. Workflow map
   - Current file: `public/assets/graphics/workflow-map.svg`
   - Message: "Input → clarity check → insight → full system."
   - Placement: proof, authority, or social sharing asset source.

## Meme moments (fragmented)

Several `MemeMoment.astro` beats break up long reading. Copy always comes from `uiCopy.memes.items[index]` (EN/LT aligned). Top-to-bottom order in `src/layouts/Page.astro`:

| Order | `index` | File | Copy beat (EN title) |
|-------|---------|------|----------------------|
| 1 | 3 | `meme-03-clear-decision.png` | Control creates results |
| 2 | 0 | `meme-01-ai-chaos.png` | AI chaos |
| 3 | 2 | `meme-04-delegation-bottleneck.png` | Delegation bottleneck |
| 4 | 5 | `reward_2.png` | Keep the structure on your desk |

Desktop (`lg+`): **two-column asymmetric grid** (**1.25fr** image column / **0.75fr** caption column), alternating **`side`** (`left` / `right`) per [`Page.astro`](../src/layouts/Page.astro). Below **`lg`**: stacked — full-width **16:9** image, then title + body (centered).

Section flow between beats: `BeforeAfter` → `ExecutiveModules` (`#context`) → `PromoBanner` → `ClarityDemo` (`#demo`) → **meme index 5** → `SafetyCheck` → `CourseCTA` (`#kit`) → `PromptAnatomy` → `RoiPath` → `Faq` → …

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
