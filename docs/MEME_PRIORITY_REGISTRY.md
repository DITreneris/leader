# Meme priority registry (Executive OS landing)

**Purpose:** Rank `MemeMoment` beats and record which unmounted memes were cut for scroll depth.

**Canonical order:** [`src/layouts/Page.astro`](../src/layouts/Page.astro). Copy indices map to `uiCopy.memes.items[index]` in [`en.ts`](../src/content/locales/en.ts) / [`lt.ts`](../src/content/locales/lt.ts).

**Shipped (2026-04-29):** post–`RoiPath` beat **`items[4]`** (`meme-02-meeting-overload.png`) **removed** from the page. `items[4]` copy remains in locales for optional reuse; `sequenceImageAlts` matches only the four mounted memes in `Page.astro` order.

---

## Mounted beats (top → bottom)

| Order | `items` index | Asset | EN title (beat) | Role in journey |
|-------|---------------|-------|-----------------|-----------------|
| 1 | **3** | `meme-03-clear-decision.png` | Control creates results | After Hero → **BeforeAfter** — outcome-first promise. |
| 2 | **0** | `meme-01-ai-chaos.png` | AI chaos | Pain before **`#context`** — structure vs noise. |
| 3 | **2** | `meme-04-delegation-bottleneck.png` | Delegation bottleneck | Before **`#demo`** — vague brief → editor trap. |
| 4 | **5** | `reward_2.png` | Keep the structure on your desk | Post-demo → kit / PDF cue toward **`#kit`**. |

---

## Not mounted (reserved / removed)

| `items` index | Asset | EN title | Notes |
|---------------|-------|----------|--------|
| **1** | — | Structure creates control | Spare copy only; never wired in `Page.astro`. |
| **4** | `meme-02-meeting-overload.png` | Leadership needs the system | **Removed 2026-04-29** — overlapped PromoBanner + PromptAnatomy; low marginal value after `RoiPath`. PNG may remain in [`public/assets/memes/`](../public/assets/memes/) for social reuse. |

---

## If you cut again (future)

| Priority | Index | File | Rationale |
|----------|-------|------|-----------|
| Next candidate | **2** | `meme-04-delegation-bottleneck.png` | Demo already proves clarity; smallest loss after removing **4**. |

**Keep unless strategically trimming:** indices **0**, **3**, **5** (problem hook, proof bridge, kit reward).

---

## Implementation checklist (removal)

- Remove `<MemeMoment>` from [`Page.astro`](../src/layouts/Page.astro); trim `memes.sequenceImageAlts[]` to match beat order.
- Update comments in `Page.astro` + locale JSDoc on `sequenceImageAlts`.
- Refresh [`VISUAL_CONTENT_MAP.md`](VISUAL_CONTENT_MAP.md) and [`public/assets/memes/README.md`](../public/assets/memes/README.md).
