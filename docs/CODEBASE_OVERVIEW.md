# Codebase Overview

## Purpose

This repository contains a lean bilingual CEO/COO landing page for PromptAnatomy Executive OS. The page creates a quick aha moment with a static "3-minute clarity check" and sends qualified visitors to the full PromptAnatomy system.

## Current Architecture

- `src/pages/index.astro` composes the one-page landing flow.
- `src/components/` contains section components.
- `src/content/copy.ts` contains English and Lithuanian copy, including static demo scenarios.
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/` contains visual assets for memes, diagrams, and screenshots.
- `.cursor/rules/`, `.cursor/skills/`, and `AGENTS.md` guide future AI-assisted development.

## Landing Flow

1. Hero: business noise to clear decisions.
2. Static clarity demo: scenario selection and executive output.
3. Before/after: random AI use vs structured workflow.
4. Meme block: visual break and future asset slots.
5. Workflow cards: meetings, reports, decisions, delegation, communication.
6. ROI block: time saved and time-to-insight.
7. Authority bridge: mother and sister platforms.
8. Final CTA: PromptAnatomy.app and Lithuanian practical page.

## Constraints

- Keep the MVP static.
- Keep the product one page unless explicitly expanded.
- Keep English and Lithuanian aligned.
- Do not add backend, login, database, or AI API calls without explicit approval.
- Prioritize simple executive clarity over educational depth.
