# AGENTS.md

Guidance for AI coding agents working on this repository.

## Mission

This project is a lean **English-first** CEO/COO executive prompt operating kit for PromptAnatomy Executive OS (default ship targets **US market** copy). It should create a fast aha moment through a **Global Context Block + executive modules** (copy one compiled prompt, get decision-grade output), a safety check rule surface, a printable static download, visual proof, and a proof demo that sends qualified users to the full PromptAnatomy system. Lithuanian strings remain in `locales/lt.ts` for opt-in bilingual builds (see root `README.md` — Locale toggle).

## Non-Negotiables

- Keep it one page unless the user explicitly asks otherwise.
- Keep the MVP static: no backend, login, database, analytics lock-in, or AI API call.
- Keep the page simple enough for an overloaded CEO to understand in under 10 seconds.
- Keep English and Lithuanian **strings aligned in source** when editing `en.ts` / `lt.ts`, even if only English ships by default.
- Do not edit plan files in `.cursor/plans` or the user's global plan folder unless explicitly requested.

## Architecture

- `src/pages/index.astro` redirects `/` to **`/en/`** (USA-market default; no `/lt/` route unless bilingual is re-enabled in `src/constants/siteLocale.ts` — see root `README`).
- `src/pages/en/index.astro` renders `src/layouts/Page.astro` with the full section stack. Optional `src/pages/lt/index.astro` ships only when bilingual is turned on (not in the default build).
- `src/components/` contains section components.
- `src/content/copy.ts` re-exports `uiCopy`; bilingual bundles live in `src/content/locales/en.ts` and `src/content/locales/lt.ts`.
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/memes/`, `public/assets/graphics/`, and `public/assets/screenshots/` hold visual assets.
- `docs/` contains codebase, document management, and quality assurance guidance (see **Documentation map** below).
- `CHANGELOG.md` tracks daily updates.

## Documentation map

Read [`docs/README.md`](docs/README.md) for the full index (purpose + when to update each file). Quick links:

| Topic | Doc |
|-------|-----|
| Source of truth map | [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md) |
| Landing flow / architecture | [`docs/CODEBASE_OVERVIEW.md`](docs/CODEBASE_OVERVIEW.md) |
| Memes & visual assets | [`docs/VISUAL_CONTENT_MAP.md`](docs/VISUAL_CONTENT_MAP.md) |
| Strategy & CTA roadmap (long) | [`docs/STRATEGIC_REVISION_PLAN.md`](docs/STRATEGIC_REVISION_PLAN.md) |
| UTM parameters | [`docs/UTM_MATRIX.md`](docs/UTM_MATRIX.md) |
| QA checklist | [`docs/QUALITY_ASSURANCE.md`](docs/QUALITY_ASSURANCE.md) |
| Doc ownership rules | [`docs/DOCUMENT_MANAGEMENT.md`](docs/DOCUMENT_MANAGEMENT.md) |
| PDF build (maintainers) | [`docs/SETUP_PDF.md`](docs/SETUP_PDF.md), [`docs/executive-operating-kit-pdf.md`](docs/executive-operating-kit-pdf.md) |

## Quality Bar

- Prefer fewer, sharper sections over more content.
- Use executive copy: decision, risk, trade-off, next action, delegation, ROI.
- Prefer **compiled modules** over long prompt lists on the main story spine (library stays reference/appendix).
- Avoid generic AI claims, beginner prompt-engineering lessons, and feature bloat.
- Run `npm run build` after meaningful code changes.
- Add a `CHANGELOG.md` entry for daily visible, structural, documentation, or deployment changes.
