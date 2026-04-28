# UTM matrix — Executive OS landing

Use these consistently when adding or changing outbound links. Pattern: `utm_source=leader` + `utm_medium` + `utm_campaign`.

| Location | Medium | Campaign | Notes |
|----------|--------|----------|--------|
| PromoBanner primary (PromptAnatomy) | `modules` | `handoff` | Mid-page upgrade CTA from [`PromoBanner.astro`](../src/components/PromoBanner.astro); `utm_source=leader` |
| Hero primary CTA (gold, in-page) | — | — | In-page anchor `#context` in [`Hero.astro`](../src/components/Hero.astro) (no UTM). Note: “primary (gold)” refers to visual hierarchy, not UTM campaign naming. |
| Hero outlined CTA (PromptAnatomy) | `hero` | `primary` | Outbound from [`Hero.astro`](../src/components/Hero.astro); `utm_source=leader` |
| CourseCTA secondary | `lead_magnet` | `executive_prompt_library` | Full product from conversion band |
| Authority bridge mother | `bridge` | `mother` | PromptAnatomy.app |
| Authority bridge sister | `bridge` | `sister` | GitHub Pages CEO hub |
| Footer brand | `footer` | `brand` | promptanatomy.app link in [`Page.astro`](../src/layouts/Page.astro) |
| Footer Telegram | `social` | `telegram` | `https://t.me/prompt_anatomy` (query params may be stripped by client; keep for analytics consistency) |
| Before/After “Today's workflow” AI links | `before_after_workflow` | `chatgpt` / `claude` / `gemini` | Outbound to consumer AI assistants from [`BeforeAfter.astro`](src/components/BeforeAfter.astro) |

Implementation: URL builders live in [`src/constants/outboundLinks.ts`](../src/constants/outboundLinks.ts) so `utm_source=leader` stays consistent.

PDF download CTAs use `data-kit-download` on `#kit`; no UTM on static file URLs.
