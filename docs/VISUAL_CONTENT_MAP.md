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
   - Placement: before/after section.

3. Workflow map
   - Current file: `public/assets/graphics/workflow-map.svg`
   - Message: "Input → clarity check → insight → full system."
   - Placement: proof, authority, or social sharing asset source.

## Meme moments (fragmented)

**Four** memes are live on the page via `MemeMoment.astro` (indices **3, 0, 2, 4** into `uiCopy.memes.items`). Spare asset `meme-01-ai-chaos.png` stays in `public/assets/memes/` for future use. Live order in `src/layouts/Page.astro` (top to bottom):

| Order | `index` | File | Copy beat |
|-------|---------|------|-----------|
| 1 | 3 | `meme-03-clear-decision.png` | Control creates results |
| 2 | 0 | `reward_2.png` | Access is not enough |
| 3 | 2 | `meme-04-delegation-bottleneck.png` | Tools do not create speed |
| — | — | *(then)* | `ClarityDemo` (`#demo`), `PromptAnatomy`, `AuthorityBridge`, `CourseCTA` (`#kit`), `RoiPath` |
| 4 | 4 | `meme-02-meeting-overload.png` | Leadership needs the system |

Sides: left → right (first pair), then left after ROI for the final beat.

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
