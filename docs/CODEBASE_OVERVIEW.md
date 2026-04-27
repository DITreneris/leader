# Codebase Overview

## Purpose

This repository contains a lean bilingual CEO/COO executive prompt operating kit for PromptAnatomy Executive OS. The page creates a quick aha moment with a 2-minute practice, safety check, simulated clarity demo, 7 recommended starting prompts, 35 copyable prompts as depth proof, a short printable Max Value Kit, and a path to the full PromptAnatomy system.

## Current Architecture

- `src/pages/index.astro` composes the one-page landing flow.
- `src/components/` contains section components.
- `src/content/copy.ts` contains English and Lithuanian copy, including prompt-library content and static demo scenarios.
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/` contains visual assets for memes, diagrams, and screenshots.
- `.cursor/rules/`, `.cursor/skills/`, and `AGENTS.md` guide future AI-assisted development.

## Landing Flow

1. Hero: CEO/COO Executive Prompt Operating Kit and direct download.
2. Proof strip: decision-first, workflow-native, low-risk positioning.
3. Meme moment 1 (`reward_2.png`, cyan): access is not enough.
4. Quick practice: fog, structured prompt, result, and safety check.
5. Executive safety check: fact, reputation, context, and ownership review.
6. Meme moment 2 (`meme-01-ai-chaos.png`, amber): structure creates control.
7. Static clarity demo: scenario selection, executive output proof, and an inline post-demo CTA.
8. Executive prompt anatomy: five blocks for leadership work.
9. Meme moment 3 (`meme-04-delegation-bottleneck.png`, rose): tools do not create speed.
10. ROI path: weekly time-savings flow.
11. Prompt library: workflow picker chips above the 7 recommended starting prompts, then a 35-prompt accordion catalog as depth proof (first category open by default).
12. Meme moment 4 (`meme-03-clear-decision.png`, emerald): control creates results.
13. System visual: workflow-map SVG plus the four-layer operating system grid.
14. Authority bridge.
15. Meme moment 5 (`meme-02-meeting-overload.png`, fuchsia): leadership needs the system.
16. Final CTA: Max Value Kit download, PromptAnatomy.app, plus three reassurance chips.

Memes appear as fragmented emotional rest stops, not as one bundled section. They alternate sides and accent colors and never carry CTAs.

## Constraints

- Keep the MVP static.
- Keep the product one page unless explicitly expanded.
- Keep English and Lithuanian aligned.
- Do not add backend, login, database, or AI API calls without explicit approval.
- Prioritize practical executive prompts, safety, visuals, and clarity over educational depth.
