# Meme Assets

CEO-focused meme images used on the landing page as fragmented emotional rest moments — not as a single bundle. Each meme appears once, between heavier reading sections, and is rendered through `MemeMoment.astro`.

Active assets (PNG masters in repo; **AVIF** + **WebP** derivatives generated for delivery — see below):

- `reward_2.png` — printable kit / same structure on paper (post–`ClarityDemo` beat; `memes.items[5]`).
- `meme-01-ai-chaos.png` — AI chaos / structure vs noise (`index={0}`, after `BeforeAfter`).
- `meme-02-meeting-overload.png` — **not mounted** on the live page (removed 2026-04-29); asset kept for optional reuse / social.
- `meme-03-clear-decision.png` — structured AI turns random output into clear decisions.
- `meme-04-delegation-bottleneck.png` — adding AI to an unclear process only makes the bottleneck more visible.

Placement on the landing page (see `Page.astro`) — **four** `MemeMoment` beats, indices into `copy.memes.items`:

1. After hero — `meme-03-clear-decision.png` (`index={3}`, gold accent).
2. After `BeforeAfter` — `meme-01-ai-chaos.png` (`index={0}`, gold).
3. After `PromoBanner`, before `ClarityDemo` — `meme-04-delegation-bottleneck.png` (`index={2}`, gold).
4. Immediately after `ClarityDemo` — `reward_2.png` (`index={5}`, gold).

Not mounted: `memes.items[1]` (spare copy); `memes.items[4]` + `meme-02-meeting-overload.png` removed from the stack **2026-04-29** (see [`docs/MEME_PRIORITY_REGISTRY.md`](../../../docs/MEME_PRIORITY_REGISTRY.md)).

Rules:

- Each meme is a recognition moment, not a sales section. No CTA, no eyebrow ladder.
- Live page uses a **gold** frame accent only (restrained brand). `MemeMoment` uses a fixed **16:9** viewport (`aspect-video`) and **`object-contain`** so the full meme is visible (no cropping). **Below `lg`:** image is full width of the column, title + caption stacked (centered). **`lg+`:** asymmetric two-column layout (**1.25fr** image / **0.75fr** caption) with alternating **`side`** — image no longer spans the full content width on desktop (restores pre–full-bleed-stacked behavior). New assets should be exported **16:9**.
- Images use explicit width/height on `<img>` for aspect-ratio hint / CLS; intrinsic PNG sizes may still vary.
- Do not bundle the memes back into a single block — fragmentation is the point.
- Future exports should keep the clean `.png` extension. Double extensions like `.png.png` were renamed.

**AVIF / WebP:** [`MemeMoment.astro`](../../src/components/MemeMoment.astro) loads **AVIF → WebP → PNG** (`<picture>`). After replacing or editing a PNG, regenerate matching `.avif` and `.webp` from the project root:

```bash
npm run optimize:memes
```

Commit the new derivatives alongside the PNG so deploys do not 404 the `<source>` URLs.
