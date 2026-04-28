# UTM matrix — Executive OS landing

Use these consistently when adding or changing outbound links. Pattern: `utm_source=leader` + `utm_medium` + `utm_campaign`.

| Location | Medium | Campaign | Notes |
|----------|--------|----------|--------|
| PromoBanner primary (PromptAnatomy) | `modules` | `handoff` | Mid-page upgrade CTA from [`PromoBanner.astro`](../src/components/PromoBanner.astro); `utm_source=leader` |
| Hero primary CTA (gold, PromptAnatomy) | `hero` | `primary` | Main outbound from [`Hero.astro`](../src/components/Hero.astro); `utm_source=leader` |
| Hero secondary CTA | — | — | In-page anchor `#context` in [`Hero.astro`](../src/components/Hero.astro) (no UTM) |
| Practice band PA link | `practice_band` | `demo_followup` | After demo CTA in practice |
| CourseCTA secondary | `lead_magnet` | `executive_prompt_library` | Full product from conversion band |
| Authority bridge mother | `bridge` | `mother` | PromptAnatomy.app |
| Authority bridge sister | `bridge` | `sister` | GitHub Pages CEO hub |
| Footer brand | `footer` | `brand` | promptanatomy.app |
| Before/After “Today's workflow” AI links | `before_after_workflow` | `chatgpt` / `claude` / `gemini` | Outbound to consumer AI assistants from [`BeforeAfter.astro`](src/components/BeforeAfter.astro) |

PDF download CTAs use `data-kit-download` on `#kit`; no UTM on static file URLs.
