# PromptAnatomy Executive OS

**A static CEO/COO decision operating kit**—Global Context, executive modules, clarity practice, and a printable Max Value Kit. Copy compiled prompts into your approved AI assistant. No login. Your brief content stays on your device.

**Live:** [promptanatomy.pro](https://promptanatomy.pro/) · **Full product:** [PromptAnatomy.app](https://www.promptanatomy.app)

**English-only development.** US-market copy ships at the site root (`/`). Lithuanian (`src/content/locales/lt.ts`) is **frozen** — do not maintain LT strings during normal work. Legacy `/en/` and `/lt/` paths redirect to `/` (301 on Vercel; noindex stubs on GitHub Pages mirror).

[![CI](https://github.com/DITreneris/leader/actions/workflows/ci.yml/badge.svg)](https://github.com/DITreneris/leader/actions/workflows/ci.yml)
[![Deploy](https://github.com/DITreneris/leader/actions/workflows/deploy.yml/badge.svg)](https://github.com/DITreneris/leader/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Links**: [Live site](https://promptanatomy.pro/) · [Download PDF kit](https://promptanatomy.pro/assets/downloads/executive-operating-kit.pdf) · [GitHub Pages mirror](https://ditreneris.github.io/leader/) · [Changelog](./CHANGELOG.md) · [Docs index](./docs/README.md) · [Getting started](./docs/GETTING_STARTED.md) · [Commands](./docs/COMMANDS.md) · [Configuration](./docs/CONFIGURATION.md)

## Choose your path

| Goal | Fast path |
|---|---|
| Evaluate in browser | Open the [live site](https://promptanatomy.pro/) |
| Download the kit | Get the [PDF](https://promptanatomy.pro/assets/downloads/executive-operating-kit.pdf) |
| Run locally | `npm ci` → `npm run dev` → http://localhost:4321/ |
| Verify production build | `npm run build` |
| Deploy | GitHub Pages (push to `main`) or Vercel (`promptanatomy.pro`) — see [Configuration](./docs/CONFIGURATION.md) |
| Agent / AI work | [`AGENTS.md`](./AGENTS.md) → [`docs/DEFINITION_OF_DONE.md`](./docs/DEFINITION_OF_DONE.md) |

## What's on the page

Order matches [`docs/CODEBASE_OVERVIEW.md`](./docs/CODEBASE_OVERVIEW.md) and [`src/layouts/Page.astro`](./src/layouts/Page.astro): **Hero + HeroDecisionDiagram** → **meme** → **meme** → **Global Context + Modules (`#context`)** → **PromoBanner** → **meme** → **ClarityDemo (`#demo`)** → **meme** → **SafetyCheck** → **CourseCTA (`#kit`)** → **PromptAnatomy** → **RoiPath** → **FAQ (`#faq`)** → **PromptLibrary** (four **`MemeMoment`** beats; see [`docs/MEME_PRIORITY_REGISTRY.md`](./docs/MEME_PRIORITY_REGISTRY.md)).

**Conversion ladder:** `#context` → `#demo` → `#kit` → [PromptAnatomy.app](https://www.promptanatomy.app)

- **Global Context + Modules** — four context fields; compile and copy one of six presets or a custom module.
- **Clarity practice** — five static scenarios with copyable prompt + output.
- **Safety check** — send/risk gate before anything leaves your desk.
- **Max Value Kit** — printable PDF at `#kit` (HTML fallback if PDF missing).
- **Prompt library** — 35-prompt appendix (depth last).

## Stack

- Astro (static SSG)
- Tailwind CSS
- TypeScript
- Deploy: Vercel (`promptanatomy.pro`) + GitHub Pages mirror

## Prerequisites

- Node.js `>=22.12.0`

## Commands

See [`docs/COMMANDS.md`](docs/COMMANDS.md) for the full list. Quick reference:

```bash
npm run dev          # local dev server
npm run test         # Vitest (outbound URLs, JSON-LD, client copy payload)
npm run build        # astro check + production build
npm run preview      # serve dist/ locally
npm run test:e2e     # Playwright smoke (after build with deploy env)
npm run generate:og  # regenerate public/og-image.png
npm run optimize:memes
npm run build:pdf    # maintainer PDF toolchain
```

**E2E smoke:** run after a production-like build. GitHub Pages CI uses `BASE_PATH=/leader`; Playwright opens `/leader/`. For Vercel parity locally, build with `BASE_PATH=/` and `SITE_URL=https://promptanatomy.pro`.

### Max Value Kit PDF (maintainers)

Source: `docs/executive-operating-kit-pdf.md` → output: `public/assets/downloads/executive-operating-kit.pdf`. See `docs/SETUP_PDF.md`.

```bash
npm run build:pdf
```

## Configuration

`SITE_URL` and `BASE_PATH` drive canonical URLs, social previews, sitemap, and `dist/robots.txt`. Full table: [`docs/CONFIGURATION.md`](docs/CONFIGURATION.md).

| Deploy target | Typical env |
|---------------|----------------|
| **Vercel** (primary — `promptanatomy.pro`) | `BASE_PATH=/`<br>`SITE_URL=https://promptanatomy.pro` |
| **GitHub Pages** (mirror) | `BASE_PATH=/leader`<br>`SITE_URL=https://<user>.github.io` |

Optional: `PUBLIC_FB_APP_ID` for Facebook `fb:app_id` meta (see [`.env.example`](.env.example)).

**Pre-deploy checklist**

- `SITE_URL` and `BASE_PATH` match the live URL shape.
- Open `dist/robots.txt` after build — confirm `Sitemap:` matches production.
- Smoke-test hero, outbound PromptAnatomy links, PDF kit, `/og-image.png`.

## English-only routing

Shipped **`main`** builds serve **one English page at `/`** (mirror: `/leader/`). Copy source: [`src/content/locales/en.ts`](src/content/locales/en.ts). **`lt.ts` is frozen** — edit `en.ts` only; add matching keys in `lt.ts` with English placeholders when keys change ([`localeParity.test.ts`](src/content/locales/localeParity.test.ts)).

Legacy locale paths **`/en/`** and **`/lt/`** redirect to `/` (HTTP 301 via [`vercel.json`](vercel.json) on Vercel; noindex HTML stubs on GitHub Pages).

## Project docs

- **`docs/README.md`** — full documentation index.
- [`docs/DEFINITION_OF_DONE.md`](docs/DEFINITION_OF_DONE.md) — completion router (agents + pre-PR).
- [`docs/GETTING_STARTED.md`](docs/GETTING_STARTED.md) — install and first run.
- [`docs/COMMANDS.md`](docs/COMMANDS.md) — npm scripts.
- [`docs/CONFIGURATION.md`](docs/CONFIGURATION.md) — env vars and dual deploy.
- [`docs/CODEBASE_OVERVIEW.md`](docs/CODEBASE_OVERVIEW.md) — architecture and landing flow.
- [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md) — canonical map.
- [`docs/QUALITY_ASSURANCE.md`](docs/QUALITY_ASSURANCE.md) — QA before release.
- [`CHANGELOG.md`](CHANGELOG.md) — daily project updates.

## Asset folders

- `public/assets/memes/` — PNG masters + AVIF/WebP via **`npm run optimize:memes`**
- `public/assets/graphics/` — SVG diagrams
- `public/assets/screenshots/` — optimized mockups

## License and security

MIT — see [`LICENSE`](./LICENSE). Security reports: [`SECURITY.md`](./SECURITY.md) → `info@promptanatomy.app`.
