# Meme Assets

CEO-focused meme images used on the landing page as fragmented emotional rest moments — not as a single bundle. Each meme appears once, between heavier reading sections, and is rendered through `MemeMoment.astro`.

Active assets (clean `.png` extension):

- `reward_2.png` — printable kit / same structure on paper (post–`ClarityDemo` beat; `memes.items[5]`).
- `meme-01-ai-chaos.png` — AI chaos / structure vs noise (`index={0}`, after `BeforeAfter`).
- `meme-02-meeting-overload.png` — the team may already be experimenting; the CEO needs the operating system.
- `meme-03-clear-decision.png` — structured AI turns random output into clear decisions.
- `meme-04-delegation-bottleneck.png` — adding AI to an unclear process only makes the bottleneck more visible.

Placement on the landing page (see `Page.astro`) — **five** `MemeMoment` beats, indices into `copy.memes.items`:

1. After hero — `meme-03-clear-decision.png` (`index={3}`, gold accent).
2. After `BeforeAfter` — `meme-01-ai-chaos.png` (`index={0}`, gold).
3. After `PromoBanner`, before `ClarityDemo` — `meme-04-delegation-bottleneck.png` (`index={2}`, gold).
4. Immediately after `ClarityDemo` (after the “keep the structure / printable kit” band) — `reward_2.png` (`index={5}`, gold).
5. After `RoiPath`, before `Faq` — `meme-02-meeting-overload.png` (`index={4}`, gold).

Unused on the live page: `memes.items[1]` (“Structure creates control”) — kept for future placement or reuse.

Rules:

- Each meme is a recognition moment, not a sales section. No CTA, no eyebrow ladder.
- Live page uses a **gold** frame accent only (restrained brand). `MemeMoment` uses a fixed **16:9** viewport (`aspect-video`) and **`object-contain`** so the full meme is visible (no cropping). On all breakpoints the image is **full width** of the content column, with title + caption **below** (centered). New assets should be exported **16:9**.
- Images use explicit width/height on `<img>` for aspect-ratio hint / CLS; intrinsic PNG sizes may still vary.
- Do not bundle the memes back into a single block — fragmentation is the point.
- Future exports should keep the clean `.png` extension. Double extensions like `.png.png` were renamed.
