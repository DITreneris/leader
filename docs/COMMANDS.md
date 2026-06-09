# Commands

All npm scripts from root `package.json`. Run from the repository root.

| Script | Command | When to run |
|--------|---------|-------------|
| `dev` | `npm run dev` | Local development; hot reload |
| `build` | `npm run build` | Before deploy or PR; runs `astro check` then static build to `dist/` |
| `preview` | `npm run preview` | Serve `dist/` locally after `build` |
| `check` | `npm run check` | Astro/TypeScript diagnostics only (no emit) |
| `test` | `npm run test` | Vitest unit tests (`src/**/*.test.ts`) |
| `test:e2e` | `npm run test:e2e` | Playwright smoke against `astro preview` — **after** `build` with deploy env |
| `generate:llms-full` | `npm run generate:llms-full` | Regenerate `public/llms-full.txt` from English library in `en.ts` — uses Node `--experimental-strip-types` (required on CI Node 22.12); commit after library prompt edits |
| `verify:build` | `npm run verify:build` | Post-build checks on `dist/` (robots sitemap, canonical/OG, PromoBanner CTA, kit PDF link, deploy assets PDF/memes/favicons/OG 1200×630, `llms.txt`, `llms-full.txt`) — **after** `build`; **`SITE_URL` + `BASE_PATH` must match the build** |
| `verify` | `npm run verify` | `npm test` then `verify:build` — run `npm run build` first with production env |
| `generate:og` | `npm run generate:og` | Regenerate `public/og-image.png` (1200×630) after brand/copy changes |
| `optimize:memes` | `npm run optimize:memes` | AVIF/WebP from meme PNG masters in `public/assets/memes/` |
| `build:pdf` | `npm run build:pdf` | Build printable kit PDF from `docs/executive-operating-kit-pdf.md` (needs Pandoc/Typst or LaTeX — see [`SETUP_PDF.md`](SETUP_PDF.md)) |

## CI order (GitHub Actions)

From [`.github/workflows/ci.yml`](../.github/workflows/ci.yml):

1. `npm test`
2. `npm audit --audit-level=high`
3. Matrix: `npm run build` + `npm run verify:build` for GitHub Pages **and** Vercel env (see [`CONFIGURATION.md`](CONFIGURATION.md))
4. `npm run test:e2e` (GitHub Pages build)
5. Lighthouse CI (`npx lhci autorun`)

## Common workflows

**Before release or deploy env change**

```bash
npm test
BASE_PATH=/leader SITE_URL=https://<owner>.github.io npm run build
BASE_PATH=/leader SITE_URL=https://<owner>.github.io npm run verify:build
npm run test:e2e
```

For Vercel (`BASE_PATH=/`, `SITE_URL=https://promptanatomy.pro`), use matching env for `build` and `verify:build`.

**Copy or locale change**

```bash
npm test
npm run build
```

Update **`en.ts`** and **`lt.ts`** in the same commit. Bump [`LEADER_PAGE_DATE_MODIFIED`](../src/constants/pageSeo.ts) when FAQ or SEO copy changes.

**Meme image edit**

1. Replace PNG in `public/assets/memes/`
2. `npm run optimize:memes`
3. `npm run build`

**Kit PDF update**

1. Edit `docs/executive-operating-kit-pdf.md`
2. `npm run build:pdf`
3. Commit `public/assets/downloads/executive-operating-kit.pdf` and sync HTML fallback if needed
