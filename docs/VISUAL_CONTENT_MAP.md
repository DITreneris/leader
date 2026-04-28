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
| 5 | 4 | `meme-02-meeting-overload.png` | Leadership needs the system |

Section flow between beats: `BeforeAfter` → `ExecutiveModules` (`#context`) → `PromoBanner` → `ClarityDemo` (`#demo`) → **meme index 5** → `SafetyCheck` → `CourseCTA` (`#kit`) → `AuthorityBridge` → `PromptAnatomy` → `RoiPath` → **meme index 4** → `Faq` → …

Index `1` in `memes.items` is not mounted on the page today (reserved / spare).

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
