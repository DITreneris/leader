# Source of truth (Executive OS landing)

Use this doc to avoid “where is the real spec?” drift.

## Agent stack (Cursor + humans)

Execution order when instructions conflict:

1. **`src/layouts/Page.astro`** + shipped UI — canonical behavior.
2. **`docs/SOURCE_OF_TRUTH.md`**, **`docs/CODEBASE_OVERVIEW.md`**, **`docs/VISUAL_CONTENT_MAP.md`** — map intent to files.
3. **Root [`AGENTS.md`](../AGENTS.md)** — mission, MVP constraints, doc index.
4. **`.cursor/rules/`** — `project-direction.mdc` (always on), plus glob-scoped rules (`visual-and-copy.mdc`, `language-standard.mdc`, `astro-quality.mdc`, `us-localization-meta.mdc` for `docs/**` US META pointer).
5. **`.cursor/skills/`** — task playbooks (e.g. executive landing): must match rules above; if a skill contradicts **`visual-and-copy.mdc`** or **Page section order**, the skill is wrong.

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
- **Shipped default**: English-only route (`/en/`), USA-market positioning; Lithuanian **`/lt/`** and header language toggle are **off** unless opted in via [`src/constants/siteLocale.ts`](../src/constants/siteLocale.ts) (see root **`README`** — Locale toggle).

Rule: any user-visible string change must keep **`en.ts`** and **`lt.ts`** aligned in source, even when only English ships (default US-market build).

**US adaptation (drafts / EU tone → US delivery):** full LLM META with Must / Should / Want priorities lives in [`docs/PROMPTS_US_LOCALIZATION_META.md`](PROMPTS_US_LOCALIZATION_META.md). Use it for posts, slides, and long-form polish; shipped locale strings still obey **`language-standard.mdc`** after you merge copy.

**Copy QA (per slide):** maintain and execute against [`docs/COPY_AUDIT_BY_SLIDE.md`](COPY_AUDIT_BY_SLIDE.md)—grammar, style, EN/LT alignment, and a11y hotspots by section.

## Visual system rules

- **Design System v1 (tokens, primitives, templates, anti-patterns)**: [`docs/DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)
- **Palette and constraints**: `.cursor/rules/visual-and-copy.mdc`
- **Global tokens/utilities**: `src/styles/global.css`

Policy: use one primary CTA per major section; keep glass/elevation reserved for primary containers. New sections should prefer [`src/components/ds/`](../src/components/ds/) primitives documented in **DESIGN_SYSTEM.md**.

### Visual tokens (`global.css`)

- **Radius**: `--radius-sm` … `--radius-xl` with helpers `.radius-sm` … `.radius-xl`, plus `.radius-meme-outer` / `.radius-meme-inner` for meme frames.
- **Page background**: `--color-page-base` anchors the body gradient top stop (deeper than `--color-brand-dark`, which matches manifest/chrome).
- **Typography roles**: `.type-section-eyebrow`, `.type-eyebrow-promo`, `.type-eyebrow-promo-bright`, `.type-eyebrow-inline`, `.type-form-label`, `.type-micro-label`, `.type-cta-label`.
- **Section rhythm**: `.section-y` (standard), `.section-y-tight`, `.section-y-compact`, `.section-y-roomy-lg` (extra vertical space from `lg`); horizontal padding stays `px-5 sm:px-8` on sections.
- **Card padding utilities**: `.card-padding-compact`, `.card-padding-comfort` (see **`docs/DESIGN_SYSTEM.md`**) — prefer via `ds/ContentCard` props.

## Visual assets

- **Placement and rules**: `docs/VISUAL_CONTENT_MAP.md`
- **Assets live in**: `public/assets/{memes,graphics,screenshots}/`

## Strategy vs implementation

- **Strategic roadmap (long-form)**: `docs/STRATEGIC_REVISION_PLAN.md` (backlog; **ship baseline** subsection must match **`Page.astro`** whenever the plan is revised)
- **What shipped (daily deltas)**: `CHANGELOG.md`

Strategy may include future experiments. **`Page.astro`**, **`docs/CODEBASE_OVERVIEW.md`**, and **`CHANGELOG.md`** describe deployable reality.

## SEO / GEO / AI crawlers

Canonical files and policy:

| Concern | Where |
|---------|--------|
| Crawler policy (max visibility; explicit AI user-agents) | [`public/robots.txt`](../public/robots.txt) |
| Short LLM-oriented summary + citable definitions | [`public/llms.txt`](../public/llms.txt) |
| Sitemap (Astro integration; env-driven base) | [`astro.config.mjs`](../astro.config.mjs), emitted `sitemap-index.xml` |
| Meta, canonical, hreflang, OG | [`src/layouts/Page.astro`](../src/layouts/Page.astro), [`src/pages/index.astro`](../src/pages/index.astro) |
| JSON-LD (`WebPage` dates, `FAQPage`, Organization) | [`src/utils/pageJsonLd.ts`](../src/utils/pageJsonLd.ts), [`src/constants/pageSeo.ts`](../src/constants/pageSeo.ts) |
| Indexable FAQ copy (EN/LT aligned) | [`src/content/locales/en.ts`](../src/content/locales/en.ts), [`src/content/locales/lt.ts`](../src/content/locales/lt.ts) |

**When to bump `LEADER_PAGE_DATE_MODIFIED`:** meaningful landing copy, FAQ, or on-page SEO/schema changes ([`src/constants/pageSeo.ts`](../src/constants/pageSeo.ts)).

**Deploy hygiene:** `public/robots.txt` **`Sitemap:`** absolute URL must match production `SITE_URL` + `BASE_PATH` (see root **`README`** / CI env). If you switch domain or base path, update `robots.txt`, verify sitemap, and refresh `llms.txt` URLs in the same change.
