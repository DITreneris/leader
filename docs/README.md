# Documentation index

**Agents:** start at project root [`AGENTS.md`](../AGENTS.md) (mission, architecture, quality bar), then open only the rows below that match your task.

| Document | Purpose | Update when |
|----------|---------|-------------|
| [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md) | Canonical map: what is truth for product/flow/copy/visuals | You feel “spec drift” or add new docs/systems |
| [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) | Design tokens, `ds/` primitives, section templates, visual anti-patterns | Tokens, spacing, new section layout, or DS enforcement rules change |
| [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md) | Page stack, folder roles, landing flow (canonical with [`src/layouts/Page.astro`](../src/layouts/Page.astro)) | Section order or major folders change |
| [`VISUAL_CONTENT_MAP.md`](VISUAL_CONTENT_MAP.md) | Memes, screenshots, diagrams — placement and rules | Meme indices, asset filenames, or visual beats change |
| [`STRATEGIC_REVISION_PLAN.md`](STRATEGIC_REVISION_PLAN.md) | Long-form product/IA/CTA roadmap + phased backlog (must stay consistent with [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md)) | Strategic scope, hero/CTA experiments, or phase status changes |
| [`UTM_MATRIX.md`](UTM_MATRIX.md) | Canonical `utm_*` values for outbound links | New links or campaigns |
| [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) | QA checklist before release | Checks or deploy expectations change |
| [`DOCUMENT_MANAGEMENT.md`](DOCUMENT_MANAGEMENT.md) | Which doc is source of truth; changelog rules | Doc process changes |
| [`SETUP_PDF.md`](SETUP_PDF.md) | Toolchain for building the printable kit PDF | PDF build pipeline changes |
| [`executive-operating-kit-pdf.md`](executive-operating-kit-pdf.md) | PDF source content / structure | Kit content changes |

**Also:** [`CHANGELOG.md`](../CHANGELOG.md) (daily deltas), [`README.md`](../README.md) (commands and links), [`CONTRIBUTING.md`](../CONTRIBUTING.md), [`SECURITY.md`](../SECURITY.md).

**Copy source of truth:** [`src/content/locales/en.ts`](../src/content/locales/en.ts) and [`src/content/locales/lt.ts`](../src/content/locales/lt.ts); `copy.ts` re-exports `uiCopy` only—see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md).
