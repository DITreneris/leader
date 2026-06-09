# Documentation index

## Who reads what

| Role | Start here |
|------|------------|
| Human developer | [`GETTING_STARTED.md`](GETTING_STARTED.md) → [`CONTRIBUTING.md`](../CONTRIBUTING.md) |
| AI agent | [`AGENTS.md`](../AGENTS.md) → [`DEFINITION_OF_DONE.md`](DEFINITION_OF_DONE.md) |
| Release / QA | [`DEFINITION_OF_DONE.md`](DEFINITION_OF_DONE.md) → [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) |

**Agents:** after [`AGENTS.md`](../AGENTS.md), open only the rows below that match your task.

| Document | Purpose | Update when |
|----------|---------|-------------|
| [`DEFINITION_OF_DONE.md`](DEFINITION_OF_DONE.md) | Completion router: universal minimum + task-type gates | Done criteria or task router rows change |
| [`GETTING_STARTED.md`](GETTING_STARTED.md) | Install, local dev, first run, preview with deploy env | Onboarding steps or local URL assumptions change |
| [`COMMANDS.md`](COMMANDS.md) | All `npm` scripts and when to run them | `package.json` scripts change |
| [`CONFIGURATION.md`](CONFIGURATION.md) | `SITE_URL`, `BASE_PATH`, dual deploy, telemetry note | Env vars or primary/mirror hosts change |
| [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md) | Canonical map: product/flow/copy/visuals; **Domains** subsection; **Deploy verification** checklist (`SITE_URL` / `BASE_PATH`, `dist/robots.txt`, `dist/index.html`, `llms.txt`) | You feel “spec drift”, add systems, change hosting, or change outbound / crawler policy |
| [`PROMPTS_US_LOCALIZATION_META.md`](PROMPTS_US_LOCALIZATION_META.md) | LLM META: EU/Baltic drafts → US-native copy (Must/Should/Want); not a replacement for `language-standard.mdc` on shipped strings | You change US-market messaging workflow or META sections |
| [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) | Design tokens, `ds/` primitives, section templates, visual anti-patterns | Tokens, spacing, new section layout, or DS enforcement rules change |
| [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md) | Page stack, folder roles, landing flow (canonical with [`src/layouts/Page.astro`](../src/layouts/Page.astro)) | Section order or major folders change |
| [`COPY_AUDIT_BY_SLIDE.md`](COPY_AUDIT_BY_SLIDE.md) | Grammar, English copy, a11y hotspots by section (`lt.ts` frozen) | Visible copy in `en.ts` or section structure changes |
| [`CLARITY_DEMO_KISS_MARRY_KILL.md`](CLARITY_DEMO_KISS_MARRY_KILL.md) | KISS/Marry/Kill editorial pass for `#demo` / `ClarityDemo.astro` | Clarity demo UX or copy strategy changes |
| [`VISUAL_CONTENT_MAP.md`](VISUAL_CONTENT_MAP.md) | Memes, screenshots, diagrams — placement and rules | Meme indices, asset filenames, or visual beats change |
| [`MEME_PRIORITY_REGISTRY.md`](MEME_PRIORITY_REGISTRY.md) | Meme beats ranked; weakest-first removal guidance | You add/remove memes or debate scroll vs storytelling trade-offs |
| [`STRATEGIC_REVISION_PLAN.md`](STRATEGIC_REVISION_PLAN.md) | Long-form product/IA/CTA roadmap + phased backlog (must stay consistent with [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md)) | Strategic scope, hero/CTA experiments, or phase status changes |
| [`ROADMAP.md`](ROADMAP.md) | **Open backlog only** — what to do next | You close or add prioritized work items |
| [`UTM_MATRIX.md`](UTM_MATRIX.md) | Canonical `utm_*` values for outbound links; implementation helpers in [`src/constants/outboundLinks.ts`](../src/constants/outboundLinks.ts) | New links, campaigns, or URL builder changes |
| [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) | QA checklist before release | Checks or deploy expectations change |
| [`MOBILE_UI_AUDIT.md`](MOBILE_UI_AUDIT.md) | Mobile UX: touch targets, safe areas, hero menu, clipboard/library interactions | Mobile layout, `global.css`, or client copy/hash behavior changes materially |
| [`DOCUMENT_MANAGEMENT.md`](DOCUMENT_MANAGEMENT.md) | Which doc is source of truth; changelog rules; **semver** (`package.json` ↔ `appVersion.ts`, footer `vX.Y.Z`) | Doc process or release/version policy changes |
| [`SETUP_PDF.md`](SETUP_PDF.md) | Toolchain for building the printable kit PDF | PDF build pipeline changes |
| [`executive-operating-kit-pdf.md`](executive-operating-kit-pdf.md) | PDF source content / structure | Kit content changes |

**Also:** [`CHANGELOG.md`](../CHANGELOG.md) (daily deltas), [`README.md`](../README.md) (commands and links), [`CONTRIBUTING.md`](../CONTRIBUTING.md), [`SECURITY.md`](../SECURITY.md).

**Copy source of truth:** [`src/content/locales/en.ts`](../src/content/locales/en.ts) (active); [`lt.ts`](../src/content/locales/lt.ts) frozen archive; `copy.ts` re-exports `uiCopy`—see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md).
