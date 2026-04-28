# PromptAnatomy Executive OS (Leader)

**English-first, US-market** static CEO/COO executive prompt operating kit: **Global Context + executive modules**, clarity demo, and a printable Max Value Kit—**static, no backend, no AI API keys**. Lithuanian copy lives in `src/content/locales/lt.ts`, but the **shipped site is English-only** (no `/lt/` route, no language switch) unless you re-enable bilingual delivery in code—see **[Locale toggle](#locale-toggle-usa-market-build)** below.

[![CI](https://github.com/DITreneris/leader/actions/workflows/ci.yml/badge.svg)](https://github.com/DITreneris/leader/actions/workflows/ci.yml)
[![Deploy](https://github.com/DITreneris/leader/actions/workflows/deploy.yml/badge.svg)](https://github.com/DITreneris/leader/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Links**: [Live site](https://ditreneris.github.io/leader/) · [Download PDF kit](https://ditreneris.github.io/leader/assets/downloads/executive-operating-kit.pdf) · [Changelog](./CHANGELOG.md) · [Docs index](./docs/README.md) · [Source of truth](./docs/SOURCE_OF_TRUTH.md) · [Codebase overview](./docs/CODEBASE_OVERVIEW.md) · [QA](./docs/QUALITY_ASSURANCE.md)

## Choose your path

| Goal | Fast path |
|---|---|
| Evaluate in browser | Open the [live site](https://ditreneris.github.io/leader/) |
| Download the kit | Get the [PDF](https://ditreneris.github.io/leader/assets/downloads/executive-operating-kit.pdf) |
| Run locally | `npm ci` → `npm run dev` |
| Verify production build | `npm run build` |
| Deploy (GitHub Pages) | Push to `main` (see env below) |

## Locale toggle (USA market build)

Shipped **`main`** builds are **pure English**: only **`/en/`** (plus `/` → `/en/`), geared toward **US market** positioning. **`/lt/` is not emitted**; the header **EN/LT toggle is hidden**.

To **turn Lithuanian back on** (dual routes + toggle):

1. Set [`src/constants/siteLocale.ts`](src/constants/siteLocale.ts) **`SHIPPED_LOCALES`** to `["en", "lt"] as const`.
2. In [`astro.config.mjs`](astro.config.mjs), set **`shippedLocales`** / `i18n.locales` to `["en", "lt"]` and restore sitemap **`lt: "lt-LT"`** under `integrations` → `@astrojs/sitemap` → `i18n.locales`.
3. Re-add **`src/pages/lt/index.astro`** with:

   ```astro
   ---
   import Page from "../../layouts/Page.astro";
   ---
   <Page lang="lt" />
   ```

4. Add **`"/lt/index.html"`** back to [`.lighthouserc.json`](.lighthouserc.json) `collect.url` if you rely on Lighthouse CI for `/lt`.

Then run `npm run build` / CI as usual.

## What’s inside (single-page flow)

Order matches [`docs/CODEBASE_OVERVIEW.md`](./docs/CODEBASE_OVERVIEW.md) and [`src/layouts/Page.astro`](./src/layouts/Page.astro): **Hero + HeroBento** → **meme** → **BeforeAfter** → **meme** → **Global Context + Modules (`#context`)** → **PromoBanner** → **meme** → **ClarityDemo (`#demo`)** → **meme** → **SafetyCheck** → **CourseCTA (`#kit`)** → **AuthorityBridge** → **PromptAnatomy** → **RoiPath** → **meme** → **FAQ (`#faq`)** → **PromptLibrary**.

- **Global Context + Modules** → define once, inject everywhere; copy a compiled module prompt (6 fixed modules + 1 Custom). Output is **readable and decision-grade** (bullets/sections, owners, deadlines).
- **ClarityDemo** → selectable scenarios with copyable prompt + output
- **PromptLibrary** → full 35-prompt library (accordion, depth last); PDF kit link above block
- **Operating kit** → printable Max Value Kit PDF (`#kit`, HTML fallback if PDF missing)

## Stack

- Astro
- Tailwind CSS
- TypeScript
- GitHub Pages

## Commands

```bash
npm run dev
npm run build
npm run preview
```

### Max Value Kit PDF (optional, for maintainers)

Source: `docs/executive-operating-kit-pdf.md` → output: `public/assets/downloads/executive-operating-kit.pdf`. Toolchain matches the sister [lead](https://github.com/DITreneris/lead) repo (Pandoc + Typst or LaTeX). See `docs/SETUP_PDF.md`.

```bash
npm run build:pdf
```

## Deployment environment

GitHub Pages builds require:

```bash
BASE_PATH=/leader
SITE_URL=https://ditreneris.github.io
```

## Project docs

- **`docs/README.md`** — full documentation index (start here for agents).
- `docs/CODEBASE_OVERVIEW.md` — architecture and landing flow.
- `docs/DOCUMENT_MANAGEMENT.md` — source-of-truth rules and changelog discipline.
- `docs/QUALITY_ASSURANCE.md` — QA before release.
- `docs/VISUAL_CONTENT_MAP.md` — memes and visual assets.
- `docs/STRATEGIC_REVISION_PLAN.md` — product/IA roadmap (long form).
- `docs/UTM_MATRIX.md` — canonical marketing UTMs.
- `CHANGELOG.md` — daily project updates.

## Asset folders

- `public/assets/memes/` — CEO meme illustrations (PNG masters plus AVIF/WebP generated via **`npm run optimize:memes`** after PNG edits).
- `public/assets/graphics/` for SVG diagrams and schemes.
- `public/assets/screenshots/` for optimized AVIF/WebP mockups.
