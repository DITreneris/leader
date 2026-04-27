# PromptAnatomy CEO/COO Executive Prompt Operating Kit

Lean bilingual CEO/COO executive prompt operating kit for the PromptAnatomy Executive OS funnel.

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

## Deployment Environment

GitHub Pages builds require:

```bash
BASE_PATH=/leader
SITE_URL=https://ditreneris.github.io
```

## Project Docs

- `docs/CODEBASE_OVERVIEW.md` explains the current architecture and page flow.
- `docs/DOCUMENT_MANAGEMENT.md` defines the documentation source of truth and update rules.
- `docs/QUALITY_ASSURANCE.md` defines product, content, visual, accessibility, performance, and release checks.
- `docs/VISUAL_CONTENT_MAP.md` defines meme, screenshot, and diagram content roles.
- `CHANGELOG.md` tracks daily project updates.

## Asset Folders

- `public/assets/memes/` for CEO meme illustrations.
- `public/assets/graphics/` for SVG diagrams and schemes.
- `public/assets/screenshots/` for optimized AVIF/WebP mockups.

The current version uses static prompt workflows, a printable operating kit (PDF plus HTML fallback), and a simulated demo, so no AI API key or backend is required.
