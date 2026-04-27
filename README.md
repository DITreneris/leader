# PromptAnatomy Executive OS (Leader)

Lean bilingual CEO/COO executive prompt operating kit: 2-minute practice, safety check, clarity demo, and a printable Max Value Kit—**static, no backend, no AI API keys**.

[![CI](https://github.com/DITreneris/leader/actions/workflows/ci.yml/badge.svg)](https://github.com/DITreneris/leader/actions/workflows/ci.yml)
[![Deploy](https://github.com/DITreneris/leader/actions/workflows/deploy.yml/badge.svg)](https://github.com/DITreneris/leader/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Links**: [Live site](https://ditreneris.github.io/leader/) · [Download PDF kit](https://ditreneris.github.io/leader/assets/downloads/executive-operating-kit.pdf) · [Changelog](./CHANGELOG.md) · [Codebase overview](./docs/CODEBASE_OVERVIEW.md) · [QA](./docs/QUALITY_ASSURANCE.md)

## Choose your path

| Goal | Fast path |
|---|---|
| Evaluate in browser | Open the [live site](https://ditreneris.github.io/leader/) |
| Download the kit | Get the [PDF](https://ditreneris.github.io/leader/assets/downloads/executive-operating-kit.pdf) |
| Run locally | `npm ci` → `npm run dev` |
| Verify production build | `npm run build` |
| Deploy (GitHub Pages) | Push to `main` (see env below) |

## What’s inside

- **QuickPractice** → 2-minute prompt practice (fog → structure → decision-ready output)
- **SafetyCheck** → executive risk scan (facts, reputation, context, ownership)
- **ClarityDemo** → selectable scenarios with copyable prompt + output
- **PromptLibrary** → 7 starters + 35 prompt depth proof (accordion)
- **Operating kit** → printable Max Value Kit PDF (with HTML fallback)

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

- `docs/CODEBASE_OVERVIEW.md` explains the current architecture and page flow.
- `docs/DOCUMENT_MANAGEMENT.md` defines the documentation source of truth and update rules.
- `docs/QUALITY_ASSURANCE.md` defines product, content, visual, accessibility, performance, and release checks.
- `docs/VISUAL_CONTENT_MAP.md` defines meme, screenshot, and diagram content roles.
- `CHANGELOG.md` tracks daily project updates.

## Asset folders

- `public/assets/memes/` for CEO meme illustrations.
- `public/assets/graphics/` for SVG diagrams and schemes.
- `public/assets/screenshots/` for optimized AVIF/WebP mockups.
