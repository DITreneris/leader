# Codebase Overview

## Purpose

This repository contains a lean **English-first (US-market default)** CEO/COO executive prompt operating kit for PromptAnatomy Executive OS; Lithuanian copy remains in `locales/lt.ts` for opt-in bilingual restores (see root `README` — Locale toggle). The page creates a quick aha moment with a **Global Context Block + executive modules** (copy one compiled prompt, get decision-grade output), a simulated clarity demo, optional prompt anatomy depth, a printable Max Value Kit, and a path to the full PromptAnatomy system.

## Current Architecture

- `src/layouts/Page.astro` composes the one-page landing flow (used by `src/pages/en/index.astro`; optional `lt/index` when bilingual is enabled). Footer plus `InteractiveCopy.astro` handle copy-to-clipboard, demo tab state, and the fixed manual-copy hint; an inline script focuses hash targets for a11y.
- `src/components/` contains section components (`PasteDestinationStrip` after module grid and demo copy surfaces ChatGPT / Claude / Gemini via `buildConsumerAiUrl` in `outboundLinks.ts`).
- `src/content/copy.ts` re-exports `uiCopy`; English and Lithuanian bundles live in `src/content/locales/en.ts` and `src/content/locales/lt.ts` (prompt library, demo scenarios, and all marketing copy).
- `src/constants/outboundLinks.ts`: PromptAnatomy (tracked + legal), Telegram, **`buildConsumerAiUrl`** (paste-to-assistant), **`buildSisterHubUrl`** (`promptanatomy.cloud` — secondary learning CTA) (see [`docs/UTM_MATRIX.md`](UTM_MATRIX.md)).
- `src/styles/global.css` contains global styling and reusable visual helpers.
- `public/assets/` contains visual assets for memes, diagrams, and screenshots.
- `.cursor/rules/`, `.cursor/skills/`, and `AGENTS.md` guide future AI-assisted development.

## Landing Flow

Canonical order is `src/layouts/Page.astro` (see also `docs/VISUAL_CONTENT_MAP.md` for meme indices and filenames).

1. **Hero** (`Hero.astro`): header nav (`#context`, `#demo`, `#kit`) + **`HeroBento`** (right column proof tiles).
2. **Meme** — `copy.memes.items[3]` → `meme-03-clear-decision.png`.
3. **`BeforeAfter`**: before/after workflow graphic (gates into practice).
4. **Meme** — index `0` → `meme-01-ai-chaos.png`.
5. **Executive modules + global context** (`#context`): compiled module prompts; readable output shapes.
6. **`PromoBanner`**: contextual promo strip above the demo funnel.
7. **Meme** — index `2` → `meme-04-delegation-bottleneck.png`.
8. **ClarityDemo** (`#demo`): selectable scenarios + connector toward `#kit`.
9. **Meme** — index `5` → `reward_2.png` (“keep the structure on your desk”).
10. **`SafetyCheck`**: safety / escalation rule surface before heavy conversion.
11. **CourseCTA** (`#kit`): Max Value Kit PDF + PromptAnatomy path.
12. **PromptAnatomy**: depth in collapsed `<details>` (reference, not blocking).
13. **RoiPath** (`#roi`): weekly cycle / printable line back to `#kit`.
14. **Faq** (`#faq`): objections (JSON-LD FAQPage).
15. **PromptLibrary** (`#library`): full accordion appendix; PDF jump above optional.

Meme indices **`1`** and **`4`** are not mounted (`4` removed from the stack 2026-04-29 — see [`MEME_PRIORITY_REGISTRY.md`](MEME_PRIORITY_REGISTRY.md)). Memes are emotional beats only—no primary CTAs on meme rows.

## Hash anchors (registry)

Canonical `id` values on shipped sections (for deep links, QA, and `hashchange` focus in `Page.astro`). Inner-only ids (e.g. `#roi-step-panel`, `#ctx-company`) are omitted here.

| Anchor | Component | Notes |
|--------|-------------|--------|
| `#top` | `Page.astro` (`body`) | Return to page start. |
| `#context` | `ExecutiveModules.astro` | Global Context Block + modules; focusable section (`SectionShell` + `anchorFocusable`). |
| `#demo` | `ClarityDemo.astro` | Clarity practice; focusable section. |
| `#safety-check` | `SafetyCheck.astro` | Safety rules surface. |
| `#kit` | `CourseCTA.astro` | Max Value Kit / PDF ladder. |
| `#anatomy` | `PromptAnatomy.astro` | Collapsed Prompt Anatomy depth. |
| `#roi` | `RoiPath.astro` | Weekly ROI path; section `tabindex="-1"` + `aria-labelledby="roi-heading"`. |
| `#faq` | `Faq.astro` | FAQ (JSON-LD source). |
| `#library` | `PromptLibrary.astro` | Prompt library appendix. |

**Skip link:** `#ctx-company` (first context field in `ExecutiveModules.astro`) — not a section wrapper; pairs with `a11y.skipLink`.

**Hero nav (`Hero.astro`):** desktop and mobile menus expose only **`#context`**, **`#demo`**, **`#kit`** (primary conversion ladder). Locale files may define additional `nav.*` strings (`product`, `system`, `library`, `demo`, etc.) for i18n parity and optional reuse; they are **not** required to appear in the header — keeping the bar minimal is intentional (see **DESIGN_SYSTEM.md** — one primary CTA discipline per major section).

## Constraints

- Keep the MVP static.
- Keep the product one page unless explicitly expanded.
- Keep English and Lithuanian aligned.
- Do not add backend, login, database, or AI API calls without explicit approval.
- Prioritize practical executive prompts, safety, visuals, and clarity over educational depth.
