# Codebase Overview

## Purpose

This repository contains a lean bilingual CEO/COO executive prompt operating kit for PromptAnatomy Executive OS. The page creates a quick aha moment with a **Global Context Block + executive modules** (copy one compiled prompt, get decision-grade output), a simulated clarity demo, optional prompt anatomy depth, a printable Max Value Kit, and a path to the full PromptAnatomy system.

## Current Architecture

- `src/layouts/Page.astro` composes the one-page landing flow (used by `src/pages/en/index.astro` and `src/pages/lt/index.astro`).
- `src/components/` contains section components.
- `src/content/copy.ts` re-exports `uiCopy`; English and Lithuanian bundles live in `src/content/locales/en.ts` and `src/content/locales/lt.ts` (prompt library, demo scenarios, and all marketing copy).
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/` contains visual assets for memes, diagrams, and screenshots.
- `.cursor/rules/`, `.cursor/skills/`, and `AGENTS.md` guide future AI-assisted development.

## Landing Flow

1. Hero + FlowScheme; hero trust outcomes (compact rail when logo placeholders are off).
2. **Global context + modules** (`#context`): define context once, then copy a compiled module prompt. Includes 6 fixed modules + 1 Custom module (task + expected output shape). Outputs are **readable** (bullets/sections), not JSON.
3. **Two** meme beats using `copy.memes.items` indices **0, 2**: `reward_2.png`, `meme-04-delegation-bottleneck.png`.
4. Static clarity demo (`#demo`): scenarios, connector, follow-up link to `#kit`.
5. Executive prompt anatomy: five blocks in collapsed `<details>` by default (depth, not required to act).
6. Authority bridge: mother platform card; sister hub as text link.
7. Final conversion band (`#kit`): Max Value Kit download + PromptAnatomy secondary.
8. ROI path: weekly cycle after the kit band; printable one-liner links to `#kit`.
9. Third meme beat `copy.memes.items[4]`: `meme-02-meeting-overload.png`.
10. FAQ (trimmed; no duplicate “is it free” vs hero).
11. System visual (`#system`): four-layer grid (reference eyebrow in copy).
12. Prompt library (`#library`): starters, then accordion depth (reference appendix).

Memes stay short emotional beats—no CTAs on meme rows.

## Constraints

- Keep the MVP static.
- Keep the product one page unless explicitly expanded.
- Keep English and Lithuanian aligned.
- Do not add backend, login, database, or AI API calls without explicit approval.
- Prioritize practical executive prompts, safety, visuals, and clarity over educational depth.
