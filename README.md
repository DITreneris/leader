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
2. In [`astro.config.mjs`](astro.config.mjs), set **`shippedLocales`** and **`i18n.locales`** to exactly the same list as step 1 (`["en", "lt"]`), and under `@astrojs/sitemap` → `i18n.locales` restore **`lt: "lt-LT"`** alongside **`en: "en-US"`**. All three must stay in sync—drift breaks routes or hreflang in the sitemap.
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

Order matches [`docs/CODEBASE_OVERVIEW.md`](./docs/CODEBASE_OVERVIEW.md) and [`src/layouts/Page.astro`](./src/layouts/Page.astro): **Hero + HeroBento** → **meme** → **BeforeAfter** → **meme** → **Global Context + Modules (`#context`)** → **PromoBanner** → **meme** → **ClarityDemo (`#demo`)** → **meme** → **SafetyCheck** → **CourseCTA (`#kit`)** → **PromptAnatomy** → **RoiPath** → **FAQ (`#faq`)** → **PromptLibrary** (four **`MemeMoment`** beats; žr. [`docs/MEME_PRIORITY_REGISTRY.md`](./docs/MEME_PRIORITY_REGISTRY.md)).

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
npm run test        # Vitest (outbound URLs, JSON-LD, client copy payload)
npm run build
npm run preview
```

**E2E smoke** (`npm run test:e2e`): run after a production-like build so `dist/` matches GitHub Pages. Set the same env as deployment (see below), then `npm run build`; Playwright starts `astro preview` and opens `/leader/en/`.

### Max Value Kit PDF (optional, for maintainers)

Source: `docs/executive-operating-kit-pdf.md` → output: `public/assets/downloads/executive-operating-kit.pdf`. Toolchain matches the sister [lead](https://github.com/DITreneris/lead) repo (Pandoc + Typst or LaTeX). See `docs/SETUP_PDF.md`.

```bash
npm run build:pdf
```

## Deployment environment

`SITE_URL` and `BASE_PATH` drive canonical URLs, `og:image` / `twitter:image`, the Astro sitemap, and the **`Sitemap:`** line written to **`dist/robots.txt`** at build time (see [`integrations/robots-txt.mjs`](integrations/robots-txt.mjs), [`scripts/lib/deploy-env.mjs`](scripts/lib/deploy-env.mjs)).

| Deploy target | Typical env |
|---------------|----------------|
| **GitHub Pages** (this repo’s default path) | `BASE_PATH=/leader`<br>`SITE_URL=https://<user>.github.io` |
| **Vercel / apex domain** (e.g. optional mirror at `promptanatomy.pro`) | `BASE_PATH=/`<br>`SITE_URL=https://promptanatomy.pro` (use the hostname you actually serve—include `www` if that is canonical) |

GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) sets `BASE_PATH=/leader` and `SITE_URL` from the repo owner’s GitHub Pages URL.

**Pre-deploy checklist**

- `SITE_URL` and `BASE_PATH` match the live URL shape (canonical links, sitemap, social preview URLs, assets).
- Open `dist/robots.txt` after `npm run build` and confirm **`Sitemap:`** matches production origin + base (e.g. `https://<user>.github.io/leader/sitemap-index.xml` or `https://promptanatomy.pro/sitemap-index.xml`).
- After changing env or domain, run `npm run build` and smoke-test the live site (hero, outbound PromptAnatomy links, PDF kit, `/og-image.png`).

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
