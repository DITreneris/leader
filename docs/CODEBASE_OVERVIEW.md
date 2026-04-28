# Codebase Overview

## Purpose

This repository contains a lean bilingual CEO/COO executive prompt operating kit for PromptAnatomy Executive OS. The page creates a quick aha moment with a 2-minute practice, safety check, simulated clarity demo, 7 recommended starting prompts, 35 copyable prompts as depth proof, a short printable Max Value Kit, and a path to the full PromptAnatomy system.

## Current Architecture

- `src/layouts/Page.astro` composes the one-page landing flow (used by `src/pages/en/index.astro` and `src/pages/lt/index.astro`).
- `src/components/` contains section components.
- `src/content/copy.ts` contains English and Lithuanian copy, including prompt-library content and static demo scenarios.
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/` contains visual assets for memes, diagrams, and screenshots.
- `.cursor/rules/`, `.cursor/skills/`, and `AGENTS.md` guide future AI-assisted development.

## Landing Flow

1. Hero + hero trust outcomes rail (optional logo row off until assets).
2. Quick practice: fog, structured prompt, result, and safety preview; end CTAs to demo and PromptAnatomy; link to full safety section.
3. Executive safety check (`#safety-check`): full copyable prompt and four ordered checks.
4. Meme moments 0–2 (`reward_2`, `meme-01`, `meme-04`): match `copy.memes.items[0–2]`.
5. Static clarity demo (`#demo`): scenarios, connector to structured output, follow-up link to `#kit`.
6. Executive prompt anatomy: five blocks in a collapsed `<details>` by default.
7. ROI path: weekly cycle; printable one-liner links to `#kit`.
8. Meme moments 3–4 (`meme-03`, `meme-02`): match `copy.memes.items[3–4]`.
9. Authority bridge: mother platform card; sister hub as text link.
10. Final conversion band (`#kit`): Max Value Kit download + PromptAnatomy secondary + chips.
11. FAQ.
12. System visual (`#system`): four-layer operating grid.
13. Prompt library (`#library`): starters, then accordion depth (collapsed by default).

Memes appear as fragmented emotional rest stops, not as one bundled section. They alternate sides and accent colors and never carry CTAs.

## Constraints

- Keep the MVP static.
- Keep the product one page unless explicitly expanded.
- Keep English and Lithuanian aligned.
- Do not add backend, login, database, or AI API calls without explicit approval.
- Prioritize practical executive prompts, safety, visuals, and clarity over educational depth.
