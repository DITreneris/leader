# Configuration

Environment variables and deploy targets for the static Executive OS landing.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `SITE_URL` | Yes (build) | Origin without trailing slash — canonical URLs, `og:image`, sitemap, `robots.txt` `Sitemap:` |
| `BASE_PATH` | Yes (build) | URL prefix (e.g. `/leader` or `/`) — must match how the host serves the app |
| `PUBLIC_FB_APP_ID` | No | Facebook `fb:app_id` meta when set |
| `PUBLIC_ENABLE_ANALYTICS` | No | Set to `true` on **Vercel only** (`promptanatomy.pro`) to render `@vercel/analytics` in [`Page.astro`](../src/layouts/Page.astro). Omit or leave empty for GitHub Pages mirror and local dev. |

Example: [`.env.example`](../.env.example)

Variables are read at **build time** via [`scripts/lib/deploy-env.mjs`](../scripts/lib/deploy-env.mjs) and [`astro.config.mjs`](../astro.config.mjs).

## Deploy targets

| Target | Role | `SITE_URL` | `BASE_PATH` | Public URL |
|--------|------|------------|-------------|------------|
| **Vercel** | Primary | `https://promptanatomy.pro` | `/` | https://promptanatomy.pro/ |
| **GitHub Pages** | Mirror | `https://<owner>.github.io` | `/leader` | https://ditreneris.github.io/leader/ |

Each pipeline must set env to match the served URL. Wrong env produces wrong canonicals, social preview URLs, and sitemap pointers.

GitHub Actions deploy: [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) (Pages only).

## Outbound links (unchanged by deploy host)

Mother product, legal, Telegram, and sister hub URLs are fixed in [`src/constants/outboundLinks.ts`](../src/constants/outboundLinks.ts). Deploying on `promptanatomy.pro` does **not** change outbound targets to the mother site (`www.promptanatomy.app`).

## Privacy and telemetry

- **User content:** Context fields and compiled prompts stay client-side; no backend upload.
- **Page views:** When `PUBLIC_ENABLE_ANALYTICS=true` (Vercel primary deploy only), anonymous page views are collected via Vercel Analytics. Brief text and context fields are not uploaded. FAQ answers describe this split explicitly.

## Verification after env change

1. `npm run build` with production env.
2. `npm run verify:build` with the **same** `SITE_URL` and `BASE_PATH` as step 1.
3. Check `dist/robots.txt` — `Sitemap:` line matches live origin + base.
4. Spot-check `dist/index.html` — `canonical`, `og:url`, `og:image` are absolute and correct.
5. Confirm `dist/llms.txt` and `dist/llms-full.txt` exist after build.
6. Update [`public/llms.txt`](../public/llms.txt) if the primary public URL changes.

CI runs verify for **both** deploy pairs (GitHub Pages + Vercel) in [`.github/workflows/ci.yml`](../.github/workflows/ci.yml).
