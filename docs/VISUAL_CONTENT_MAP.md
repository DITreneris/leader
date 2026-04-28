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

**Two** memes are live on the page via `MemeMoment.astro` (indices **3, 4** into `uiCopy.memes.items`). Spare assets (e.g. `reward_2.png`, `meme-04-delegation-bottleneck.png`, `meme-01-ai-chaos.png`) stay in `public/assets/memes/` for future use. Live order in `src/layouts/Page.astro` (top to bottom):

| Order | `index` | File | Copy beat |
|-------|---------|------|-----------|
| 1 | 3 | `meme-03-clear-decision.png` | Control creates results |
| — | — | *(then)* | `BeforeAfter`, `ExecutiveModules` (`#context`), `ClarityDemo` (`#demo`), `SafetyCheck` (`#safety-check`), `CourseCTA` (`#kit`), `AuthorityBridge`, `PromptAnatomy`, `RoiPath` |
| 2 | 4 | `meme-02-meeting-overload.png` | Leadership needs the system |

Sides: left for both beats.

Implementation rules:

- All images: `loading="lazy"`, `decoding="async"`, explicit width/height.
- Copy from `uiCopy.memes.items[index]` so EN/LT stay aligned.
- Fragmentation is intentional; memes do not carry primary CTAs.

## Quality Rules

- Do not let memes replace proof or demo content.
- Keep image filenames descriptive and numbered.
- Prefer SVG for diagrams and AVIF/WebP for screenshots.
- Add dimensions or aspect ratio when images are implemented.
- Below-the-fold visual assets should be lazy-loaded.
