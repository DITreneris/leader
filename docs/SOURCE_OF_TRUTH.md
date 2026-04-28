# Source of truth (Executive OS landing)

Use this doc to avoid “where is the real spec?” drift.

## Product intent

- **Audience**: CEOs/COOs and senior operators.
- **Promise**: decision-grade output (decision, trade-offs, risks, owner, deadline, next action).
- **Primary conversion ladder**: `#context` → `#demo` → `#kit` → PromptAnatomy.
- **Non-goals**: course app, backend, login, analytics lock-in, AI API calls.

## Canonical landing flow (what ships)

- **Rendered by**: `src/layouts/Page.astro`
- **Documented in**: `docs/CODEBASE_OVERVIEW.md`

If these ever disagree, treat `src/layouts/Page.astro` as the canonical truth and update the docs.

## Copy and i18n

- **Single source of truth**: `src/content/locales/en.ts` and `src/content/locales/lt.ts`
- **Public API**: `src/content/copy.ts` re-exports `uiCopy`

Rule: any user-visible string change must keep EN/LT aligned.

## Visual system rules

- **Palette and constraints**: `.cursor/rules/visual-and-copy.mdc`
- **Global tokens/utilities**: `src/styles/global.css`

Policy: use one primary CTA per major section; keep glass/elevation reserved for primary containers.

### Visual tokens (`global.css`)

- **Radius**: `--radius-sm` … `--radius-xl` with helpers `.radius-sm` … `.radius-xl`, plus `.radius-meme-outer` / `.radius-meme-inner` for meme frames.
- **Typography roles**: `.type-section-eyebrow`, `.type-eyebrow-promo`, `.type-eyebrow-promo-bright`, `.type-eyebrow-inline`, `.type-form-label`, `.type-micro-label`, `.type-cta-label`.
- **Section rhythm**: `.section-y` (standard), `.section-y-tight`, `.section-y-compact`, `.section-y-roomy-lg` (extra vertical space from `lg`); horizontal padding stays `px-5 sm:px-8` on sections.

## Visual assets

- **Placement and rules**: `docs/VISUAL_CONTENT_MAP.md`
- **Assets live in**: `public/assets/{memes,graphics,screenshots}/`

## Strategy vs implementation

- **Strategic roadmap (long-form)**: `docs/STRATEGIC_REVISION_PLAN.md`
- **What shipped (daily deltas)**: `CHANGELOG.md`

Strategy can be aspirational. `Page.astro` + `CHANGELOG.md` describe reality.

