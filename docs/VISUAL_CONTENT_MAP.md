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
   - Message: "Input -> clarity check -> insight -> full system."
   - Placement: proof, authority, or social sharing asset source.

## Meme Moments (Fragmented)

Five memes are placed on the landing page as fragmented emotional rest stops between heavier reading sections, rendered through `MemeMoment.astro`. They are not a bundle, not a sales section, and never include a CTA — each one is a single recognition beat that reinforces the surrounding teaching point.

Order on the live page (top to bottom):

1. `reward_2.png` — *Access is not enough.*
   - Placement: between `ProofStrip` and `QuickPractice`.
   - Side: image left, copy right. Accent: gold.
   - Function: emotional hook into why the practice matters.

2. `meme-01-ai-chaos.png` — *Structure creates control.*
   - Placement: between `SafetyCheck` and `ClarityDemo`.
   - Side: image right, copy left. Accent: amber.
   - Function: validates the safety lesson and primes the demo.

3. `meme-04-delegation-bottleneck.png` — *Tools do not create speed.*
   - Placement: between `PromptAnatomy` and `RoiPath`.
   - Side: image left, copy right. Accent: rose.
   - Function: recognition of the real bottleneck before the ROI path.

4. `meme-03-clear-decision.png` — *Control creates results.*
   - Placement: between `CourseCTA` and `SystemVisual`.
   - Side: image right, copy left. Accent: emerald.
   - Function: payoff moment before the system visual.

5. `meme-02-meeting-overload.png` — *Leadership needs the system.*
   - Placement: between `AuthorityBridge` and `CourseCTA`.
   - Side: image left, copy right. Accent: fuchsia.
   - Function: closes the narrative arc into the final CTA.

Implementation rules:

- Sides alternate (left → right → left → right → left) for visual rhythm.
- All images are `loading="lazy"` and `decoding="async"` with explicit width/height.
- Copy comes from `uiCopy.memes.items[index]` so EN/LT stay aligned.
- Do not collapse the moments back into a single block — fragmentation is the entire point.

## Quality Rules

- Do not let memes replace proof or demo content.
- Keep image filenames descriptive and numbered.
- Prefer SVG for diagrams and AVIF/WebP for screenshots.
- Add dimensions or aspect ratio when images are implemented.
- Below-the-fold visual assets should be lazy-loaded.
