# UTM matrix — Executive OS landing

Use these consistently when adding or changing outbound links. Pattern: `utm_source=leader` + `utm_medium` + `utm_campaign`, except the hub entity footer (below).

Intent guardrail: keep `leader` CTAs framed as executive decision-ops handoff. Product-install intent belongs to `promptanatomy.app`; learning/framework intent belongs to `promptanatomy.cloud`.

| Location | Medium | Campaign | Notes |
|----------|--------|----------|--------|
| PromoBanner PromptAnatomy (`modules` / `handoff`) | `modules` | `handoff` | **Unmounted 2026-08-24** — builder still in [`outboundLinks.ts`](../src/constants/outboundLinks.ts); do not render on Promo. Scale CTAs stay on `#kit` and hero mobile menu. |
| PromoBanner sister hub (`promptanatomy.cloud`) | `modules` | `sister_hub` | Secondary text CTA in [`PromoBanner.astro`](../src/components/PromoBanner.astro); built via `buildSisterHubUrl`; `utm_source=leader` |
| Hero primary CTA (gold, in-page) | — | — | In-page anchor `#context` in [`Hero.astro`](../src/components/Hero.astro) (no UTM). Note: “primary (gold)” refers to visual hierarchy, not UTM campaign naming. |
| Hero outlined CTA (PromptAnatomy) | `hero` | `primary` | Outbound from [`Hero.astro`](../src/components/Hero.astro); `utm_source=leader` |
| CourseCTA secondary | `lead_magnet` | `executive_prompt_library` | Full product from conversion band |
| Footer entity line (QW1b) | `entity_footer` | `ecosystem` | Canonical hub sibling line in [`Page.astro`](../src/layouts/Page.astro); **`utm_source=pro`** (live host `promptanatomy.pro`); via `buildEntityFooterUrl` |
| Footer Telegram | `social` | `telegram` | `https://t.me/prompt_anatomy` (query params may be stripped by client; keep for analytics consistency); `utm_source=leader` |
| Paste strip (after copy) — context | `context_paste` | `chatgpt` / `claude` / `gemini` | [`PasteDestinationStrip`](../src/components/ds/PasteDestinationStrip.astro) on [`ExecutiveModules.astro`](../src/components/ExecutiveModules.astro) |
| Paste strip (after copy) — demo | `demo_paste` | `chatgpt` / `claude` / `gemini` | [`PasteDestinationStrip`](../src/components/ds/PasteDestinationStrip.astro) on [`ClarityDemo.astro`](../src/components/ClarityDemo.astro) |
| FAQ sister hub (`promptanatomy.cloud`) | `faq` | `framework_basics` | Tracked link in [`Faq.astro`](../src/components/Faq.astro) when FAQ item has `handoff: "sister_hub"`; built via `buildSisterHubUrl` |

Implementation: URL builders live in [`src/constants/outboundLinks.ts`](../src/constants/outboundLinks.ts). Conversion CTAs use `utm_source=leader`; the entity footer uses `utm_source=pro` per hub ecosystem memo.

PDF download CTAs use `data-kit-download` on `#kit`; no UTM on static file URLs.
