# Meme Assets

CEO-focused meme images used on the landing page as fragmented emotional rest moments — not as a single bundle. Each meme appears once, between heavier reading sections, and is rendered through `MemeMoment.astro`.

Active assets (clean `.png` extension):

- `reward_2.png` — access to AI is not enough; control creates useful output.
- `meme-01-ai-chaos.png` — (spare / not currently on page) structure turns AI guessing into understanding and control.
- `meme-02-meeting-overload.png` — the team may already be experimenting; the CEO needs the operating system.
- `meme-03-clear-decision.png` — structured AI turns random output into clear decisions.
- `meme-04-delegation-bottleneck.png` — adding AI to an unclear process only makes the bottleneck more visible.

Placement on the landing page (see `Page.astro`) — **four** memes, indices `3`, `0`, `2`, `4` in `copy.memes.items`:

1. After `#context`, before the other meme beats — `meme-03-clear-decision.png` (`index={3}`, emerald, left).
2. Still before `ClarityDemo` — `reward_2.png` (`index={0}`, gold, left).
3. Still before `ClarityDemo` — `meme-04-delegation-bottleneck.png` (`index={2}`, rose, right).
4. After `CourseCTA` (`#kit`) and `RoiPath`, before `Faq` — `meme-02-meeting-overload.png` (`index={4}`, fuchsia, left).

Rules:

- Each meme is a recognition moment, not a sales section. No CTA, no eyebrow ladder.
- Sides and accents vary by row for rhythm.
- Images use explicit width/height to keep CLS at zero.
- Do not bundle the memes back into a single block — fragmentation is the point.
- Future exports should keep the clean `.png` extension. Double extensions like `.png.png` were renamed.
