# AGENTS.md

Guidance for AI coding agents working on this repository.

## Mission

This project is a lean bilingual CEO/COO executive prompt operating kit for PromptAnatomy Executive OS. It should create a fast aha moment through practical copyable executive prompts, a safety check, a printable static download, visual proof, and a proof demo that sends qualified users to the full PromptAnatomy system.

## Non-Negotiables

- Keep it one page unless the user explicitly asks otherwise.
- Keep the MVP static: no backend, login, database, analytics lock-in, or AI API call.
- Keep the page simple enough for an overloaded CEO to understand in under 10 seconds.
- Keep English and Lithuanian aligned when changing marketing copy.
- Do not edit plan files in `.cursor/plans` or the user's global plan folder unless explicitly requested.

## Architecture

- `src/pages/index.astro` redirects `/` to `/en/` (or `/lt/` when `navigator.language` starts with `lt`).
- `src/pages/en/index.astro` and `src/pages/lt/index.astro` render `src/layouts/Page.astro` with the full section stack.
- `src/components/` contains section components.
- `src/content/copy.ts` is the source of bilingual copy, operating-kit content, prompt-library content, and demo scenarios.
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/memes/`, `public/assets/graphics/`, and `public/assets/screenshots/` hold visual assets.
- `docs/` contains codebase, document management, and quality assurance guidance.
- `CHANGELOG.md` tracks daily updates.

## Quality Bar

- Prefer fewer, sharper sections over more content.
- Use executive copy: decision, risk, trade-off, next action, delegation, ROI.
- Avoid generic AI claims, beginner prompt-engineering lessons, and feature bloat.
- Run `npm run build` after meaningful code changes.
- Add a `CHANGELOG.md` entry for daily visible, structural, documentation, or deployment changes.
