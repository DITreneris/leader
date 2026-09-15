# Codebase Overview

## Purpose

This repository contains a lean **English-only (US-market)** CEO/COO executive prompt operating kit for PromptAnatomy Executive OS. Active copy lives in `locales/en.ts`; `locales/lt.ts` is a **frozen archive** (no LT development unless product unfreezes bilingual delivery — root `README` — Locale toggle). The page creates a quick aha moment with a **Global Context Block + executive modules** (copy one compiled prompt, get decision-grade output), a simulated clarity demo, optional prompt anatomy depth, a printable Max Value Kit, and a path to the full PromptAnatomy system.

## Current Architecture

- `src/layouts/Page.astro` composes the one-page landing flow (used by `src/pages/index.astro` at `/`). Legacy `/en/` and `/lt/` are noindex redirect stubs only. `SiteHeader.astro` (nav + mobile menu) sits outside `<main>`; `Hero.astro` (h1 + diagram) is the first child of `<main>`. Footer plus `InteractiveCopy.astro` handle copy-to-clipboard, demo disclosure panels, and the fixed manual-copy hint; an inline script focuses hash targets for a11y.
- `src/components/` contains section components (`PasteDestinationStrip` after module grid and demo copy surfaces ChatGPT / Claude / Gemini via `buildConsumerAiUrl` in `outboundLinks.ts`).
- `src/content/copy.ts` re-exports `uiCopy` from `src/content/locales/en.ts` (active). `lt.ts` remains in repo as frozen archive.
- `src/constants/outboundLinks.ts`: PromptAnatomy (tracked + legal), Telegram, **`buildConsumerAiUrl`** (paste-to-assistant), **`buildSisterHubUrl`** (`promptanatomy.cloud` — secondary learning CTA) (see [`docs/UTM_MATRIX.md`](UTM_MATRIX.md)).
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/` contains visual assets for memes, diagrams, and screenshots.
- `.cursor/rules/`, `.cursor/skills/`, and `AGENTS.md` guide future AI-assisted development.

## Landing Flow

Canonical order is `src/layouts/Page.astro` (see also `docs/VISUAL_CONTENT_MAP.md` for meme indices and filenames).

1. **Hero** (`SiteHeader.astro` + `Hero.astro`): header/nav stay **outside** `<main>`; hero section (gold `#context` CTA + `HeroDecisionDiagram`) is the **first child of `<main>`**. Desktop header has no PromptAnatomy outbound; mobile menu may expose `utm_medium=hero` / `utm_campaign=primary`.
2. **Executive modules + global context** (`#context`): compiled module prompts; readable output shapes.
3. **`PromoBanner`**: gold `#demo` plus sister-hub text; no PromptAnatomy.app link.
4. **Meme** — index `2` → `meme-04-delegation-bottleneck.png`.
5. **ClarityDemo** (`#demo`): selectable scenarios + connector toward `#kit`.
6. **Meme** — index `5` → `reward_2.png` (“keep the structure on your desk”).
7. **`SafetyCheck`**: safety / escalation rule surface before heavy conversion.
8. **CourseCTA** (`#kit`): Max Value Kit PDF + PromptAnatomy path.
9. **PromptAnatomy**: depth in collapsed `<details>` (reference, not blocking).
10. **RoiPath** (`#roi`): weekly cycle / printable line back to `#kit`.
11. **Faq** (`#faq`): objections (JSON-LD FAQPage).
12. **PromptLibrary** (`#library`): full accordion appendix; PDF jump above optional.

Meme indices **`0`**, **`1`**, **`3`**, and **`4`** are not mounted (`3` and `0` unmounted 2026-09-09 for time-to-copy; `4` removed 2026-04-29 — see [`MEME_PRIORITY_REGISTRY.md`](MEME_PRIORITY_REGISTRY.md)). Memes are emotional beats only—no primary CTAs on meme rows.

## Hash anchors (registry)

Canonical `id` values on shipped sections (for deep links, QA, and `hashchange` focus in `Page.astro`). Inner-only ids (e.g. `#roi-step-panel`, `#ctx-company`) are omitted here.

| Anchor | Component | Macro step | Notes |
|--------|-------------|------------|--------|
| `#top` | `Page.astro` (`body`) | — | Return to page start. |
| `#context` | `ExecutiveModules.astro` | **Step 1** | Global Context Block + modules; `anchorFocusable`. |
| `#demo` | `ClarityDemo.astro` | **Step 2** | Clarity practice; `anchorFocusable`. |
| `#safety-check` | `SafetyCheck.astro` | gate | Safety rules surface; `anchorFocusable`. |
| `#kit` | `CourseCTA.astro` | **Step 3** | Max Value Kit / PDF ladder; `anchorFocusable`. |
| `#anatomy` | `PromptAnatomy.astro` | depth | Collapsed Prompt Anatomy depth (Block 1–5); `anchorFocusable`. |
| `#roi` | `RoiPath.astro` | depth | Weekly ROI path (Move 1–5); `anchorFocusable` + `aria-labelledby="roi-heading"`. |
| `#faq` | `Faq.astro` | — | FAQ (JSON-LD source); `anchorFocusable`. |
| `#library` | `PromptLibrary.astro` | depth | Prompt library appendix; `anchorFocusable`. |
| `#module-secondOrder` | `ExecutiveModules.astro` | Step 1 | Featured module card (`ContentCard` `tabindex="-1"`). |

**Skip link:** `#ctx-company` (first context field in `ExecutiveModules.astro`) — not a section wrapper; pairs with `a11y.skipLink`.

**Hero nav (`SiteHeader.astro`):** desktop and mobile menus expose only **`#context`**, **`#demo`**, **`#kit`** (labels: `nav.practice`, `nav.proof`, `nav.kitPdf`). Keeping the bar minimal is intentional (see **DESIGN_SYSTEM.md** — one primary CTA discipline per major section).

## Constraints

- Keep the MVP static.
- Keep the product one page unless explicitly expanded.
- Develop copy in `en.ts` only (`lt.ts` frozen).
- Do not add backend, login, database, or AI API calls without explicit approval.
- Prioritize practical executive prompts, safety, visuals, and clarity over educational depth.
