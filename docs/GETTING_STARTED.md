# Getting started

Quick path for developers working on the PromptAnatomy Executive OS landing page.

## Prerequisites

- Node.js `>=22.12.0` (see root `package.json` `engines`)
- npm (comes with Node)

## Install

```bash
npm ci
```

## Local development

```bash
npm run dev
```

Open **http://localhost:4321/** (Astro dev server; base path follows your env, default `/`).

## First successful task

1. Open `/` in the browser.
2. Scroll to **Context + modules** (`#context`).
3. Fill the four context fields and click **Copy full prompt** on a module card.
4. Paste into your approved AI assistant.

## Production-like preview

Build with the same env as your deploy target, then preview:

```bash
# GitHub Pages mirror
set BASE_PATH=/leader
set SITE_URL=https://ditreneris.github.io
npm run build
npm run preview
# → http://localhost:4321/leader/

# Vercel primary (PowerShell)
$env:BASE_PATH="/"
$env:SITE_URL="https://promptanatomy.pro"
npm run build
npm run preview
# → http://localhost:4321/
```

On macOS/Linux, use `export BASE_PATH=...` and `export SITE_URL=...`.

## Verify before a PR

```bash
npm test
npm run build
```

Optional: `npm run test:e2e` after build (see [`COMMANDS.md`](COMMANDS.md)).

## Next steps

**Humans**

- All npm scripts: [`COMMANDS.md`](COMMANDS.md)
- Environment variables: [`CONFIGURATION.md`](CONFIGURATION.md)
- Architecture: [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md)
- Pre-PR gate: [`DEFINITION_OF_DONE.md`](DEFINITION_OF_DONE.md)

**Agents**

- Onboarding: root [`AGENTS.md`](../AGENTS.md) → [`DEFINITION_OF_DONE.md`](DEFINITION_OF_DONE.md)
