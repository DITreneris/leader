# AGENTS.md

Guidance for AI coding agents working on this repository.

## Mission

This project is a lean **English-only** CEO/COO executive prompt operating kit for PromptAnatomy Executive OS (ships **US market** copy at `/`). It should create a fast aha moment through a **Global Context Block + executive modules** (copy one compiled prompt, get decision-grade output), a safety check rule surface, a printable static download, visual proof, and a proof demo that sends qualified users to the full PromptAnatomy system. **Lithuanian development is frozen** — edit `en.ts` only; `lt.ts` stays in repo as archive until product explicitly unfreezes bilingual delivery.

## Start here (agents)

1. Read this file (mission + non-negotiables).
2. Open [`docs/DEFINITION_OF_DONE.md`](docs/DEFINITION_OF_DONE.md) — completion router for your task type.
3. Canonical page order: [`src/layouts/Page.astro`](src/layouts/Page.astro).
4. Open only the docs row you need from the map below (or [`docs/README.md`](docs/README.md)).
5. Landing edits: use skill [`.cursor/skills/executive-landing-improvement/SKILL.md`](.cursor/skills/executive-landing-improvement/SKILL.md).

## Non-Negotiables

- Keep it one page unless the user explicitly asks otherwise.
- Keep the MVP static: no backend, login, database, analytics lock-in, or AI API call.
- Keep the page simple enough for an overloaded CEO to understand in under 10 seconds.
- **EN-only development:** edit `src/content/locales/en.ts` for copy. Do not update Lithuanian strings in `lt.ts` unless the user explicitly unfreezes bilingual work. If you add/remove keys in `en.ts`, add matching keys in `lt.ts` with English placeholders only so `localeParity.test.ts` passes.
- Do not edit plan files in `.cursor/plans` or the user's global plan folder unless explicitly requested.

## Architecture

- [`src/pages/index.astro`](src/pages/index.astro) renders [`src/layouts/Page.astro`](src/layouts/Page.astro) at `/`; legacy `/en/` and `/lt/` are noindex redirect stubs — details in [`docs/CODEBASE_OVERVIEW.md`](docs/CODEBASE_OVERVIEW.md).
- Copy (active): [`src/content/locales/en.ts`](src/content/locales/en.ts) via [`src/content/copy.ts`](src/content/copy.ts). Frozen archive: [`lt.ts`](src/content/locales/lt.ts).
- Outbound URLs: [`src/constants/outboundLinks.ts`](src/constants/outboundLinks.ts) + [`docs/UTM_MATRIX.md`](docs/UTM_MATRIX.md); domains in [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md).
- Components: [`src/components/`](src/components/); styles: [`src/styles/global.css`](src/styles/global.css).
- Assets, OG image, robots — [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md) + [`docs/COMMANDS.md`](docs/COMMANDS.md).
- [`CHANGELOG.md`](CHANGELOG.md) tracks daily updates.

## Cursor rules and skills

- **Rules:** `.cursor/rules/` — `project-direction.mdc` (always on); scoped rules for `src/**` (`visual-and-copy.mdc`, `language-standard.mdc`, `astro-quality.mdc`) and `docs/**` US META (`us-localization-meta.mdc`). On conflict with shipped UI, **`src/layouts/Page.astro`** wins — then update the doc.
- **Skill:** [`.cursor/skills/executive-landing-improvement/SKILL.md`](.cursor/skills/executive-landing-improvement/SKILL.md) — landing copy, sections, EN-only development, conversion polish (must stay aligned with rules above).

## Documentation map

Read [`docs/README.md`](docs/README.md) for the full index (purpose + when to update each file). Quick links:

| Topic | Doc |
|-------|-----|
| Definition of done | [`docs/DEFINITION_OF_DONE.md`](docs/DEFINITION_OF_DONE.md) |
| Source of truth map | [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md) |
| US localization META (EU/Baltic → US drafts) | [`docs/PROMPTS_US_LOCALIZATION_META.md`](docs/PROMPTS_US_LOCALIZATION_META.md) |
| Landing flow / architecture | [`docs/CODEBASE_OVERVIEW.md`](docs/CODEBASE_OVERVIEW.md) |
| Design system (`ds/`, tokens) | [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) |
| Memes & visual assets | [`docs/VISUAL_CONTENT_MAP.md`](docs/VISUAL_CONTENT_MAP.md) |
| Meme mount / cut decisions | [`docs/MEME_PRIORITY_REGISTRY.md`](docs/MEME_PRIORITY_REGISTRY.md) |
| Copy QA by section | [`docs/COPY_AUDIT_BY_SLIDE.md`](docs/COPY_AUDIT_BY_SLIDE.md) |
| Strategy & CTA roadmap (long) | [`docs/STRATEGIC_REVISION_PLAN.md`](docs/STRATEGIC_REVISION_PLAN.md) |
| UTM parameters + outbound URL builders (`outboundLinks.ts`) | [`docs/UTM_MATRIX.md`](docs/UTM_MATRIX.md), [`src/constants/outboundLinks.ts`](src/constants/outboundLinks.ts) |
| QA checklist | [`docs/QUALITY_ASSURANCE.md`](docs/QUALITY_ASSURANCE.md) |
| Mobile UX audit + interaction map | [`docs/MOBILE_UI_AUDIT.md`](docs/MOBILE_UI_AUDIT.md) |
| Doc ownership rules | [`docs/DOCUMENT_MANAGEMENT.md`](docs/DOCUMENT_MANAGEMENT.md) |
| PDF build (maintainers) | [`docs/SETUP_PDF.md`](docs/SETUP_PDF.md), [`docs/executive-operating-kit-pdf.md`](docs/executive-operating-kit-pdf.md) |

## Quality Bar

- Prefer fewer, sharper sections over more content.
- Use executive copy: decision, risk, trade-off, next action, delegation, ROI.
- Prefer **compiled modules** over long prompt lists on the main story spine (library stays reference/appendix).
- Avoid generic AI claims, beginner prompt-engineering lessons, and feature bloat.
- **Done gate:** follow [`docs/DEFINITION_OF_DONE.md`](docs/DEFINITION_OF_DONE.md). Before release: `npm run build` then `npm run verify` (see [`docs/COMMANDS.md`](docs/COMMANDS.md)).
