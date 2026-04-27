# Meme Assets

CEO-focused meme images used on the landing page as fragmented emotional rest moments — not as a single bundle. Each meme appears once, between heavier reading sections, and is rendered through `MemeMoment.astro`.

Active assets (clean `.png` extension):

- `reward_2.png` — access to AI is not enough; control creates useful output.
- `meme-01-ai-chaos.png` — structure turns AI guessing into understanding and control.
- `meme-02-meeting-overload.png` — the team may already be experimenting; the CEO needs the operating system.
- `meme-03-clear-decision.png` — structured AI turns random output into clear decisions.
- `meme-04-delegation-bottleneck.png` — adding AI to an unclear process only makes the bottleneck more visible.

Placement on the landing page (top to bottom):

1. After `ProofStrip`, before `QuickPractice` — `reward_2.png` (cyan accent, image left).
   - Note: in code, the old `cyan` accent tone is now `gold` to match the PromptAnatomy brand palette.
2. After `SafetyCheck`, before `ClarityDemo` — `meme-01-ai-chaos.png` (amber accent, image right).
3. After `PromptAnatomy`, before `RoiPath` — `meme-04-delegation-bottleneck.png` (rose accent, image left).
4. After `CourseCTA`, before `SystemVisual` — `meme-03-clear-decision.png` (emerald accent, image right).
5. After `AuthorityBridge`, before `CourseCTA` — `meme-02-meeting-overload.png` (fuchsia accent, image left).

Rules:

- Each meme is a recognition moment, not a sales section. No CTA, no eyebrow ladder.
- Sides alternate (left → right → left → right → left) for visual rhythm.
- Images are lazy-loaded with explicit width/height to keep CLS at zero.
- Do not bundle the memes back into a single block — fragmentation is the point.
- Future exports should keep the clean `.png` extension. Double extensions like `.png.png` were renamed.
