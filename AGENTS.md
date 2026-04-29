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
- `src/constants/outboundLinks.ts` — PromptAnatomy (home + legal URLs), Telegram, **`buildConsumerAiUrl`** (ChatGPT / Claude / Gemini paste strips); pair with [`docs/UTM_MATRIX.md`](docs/UTM_MATRIX.md). The sister hub `ditreneris.github.io/ceo/` is product context (see `project-direction.mdc`, `llms.txt`); it is not built by this module after AuthorityBridge removal. **Domains:** canonical mother site stays **`https://www.promptanatomy.app`**; see [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md) — *Domains (canonical product vs optional deploy)*. Deploying the same static build on Vercel (e.g. `promptanatomy.pro`) does not, by itself, mean outbound links or locales should be rewired.
- `src/constants/appVersion.ts` — **`APP_VERSION`** from root `package.json` (footer `vX.Y.Z`, `<meta name="generator">`); bump policy in [`docs/DOCUMENT_MANAGEMENT.md`](docs/DOCUMENT_MANAGEMENT.md).
- Other `src/constants/` files: locale toggles (`siteLocale.ts`), SEO dates (`pageSeo.ts`).
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/memes/`, `public/assets/graphics/`, and `public/assets/screenshots/` hold visual assets.
- `docs/` contains codebase, document management, and quality assurance guidance (see **Documentation map** below).
- `CHANGELOG.md` tracks daily updates.

## Cursor rules and skills

- **Rules:** `.cursor/rules/` — `project-direction.mdc` (always on); scoped rules for `src/**` (`visual-and-copy.mdc`, `language-standard.mdc`, `astro-quality.mdc`) and `docs/**` US META (`us-localization-meta.mdc`). On conflict with shipped UI, **`src/layouts/Page.astro`** wins — then update the doc.
- **Skill:** [`.cursor/skills/executive-landing-improvement/SKILL.md`](.cursor/skills/executive-landing-improvement/SKILL.md) — landing copy, sections, EN/LT, conversion polish (must stay aligned with rules above).

## Documentation map

Read [`docs/README.md`](docs/README.md) for the full index (purpose + when to update each file). Quick links:

| Topic | Doc |
|-------|-----|
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
- Run `npm run build` after meaningful code changes.
- Add a `CHANGELOG.md` entry for daily visible, structural, documentation, or deployment changes.
