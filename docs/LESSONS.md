# Lessons (agent-facing)

Short gotchas from shipped work. Prefer bullets; link to code/docs. Not a product roadmap.

## Cut-only spine polish — 2026-08-09

- When the ask is **erase words / no additional copy**: edit marketing strings on the conversion spine only (`hero` → `modules` → `promo` → `demo` → `anatomy` → `cta` / light FAQ). Do **not** trim AI prompt bodies, module `outputExampleJson`, library prompts, or ROI step prompts — those words do work for the model.
- Do **not** touch hub QW1b footer (`footer.brand` / `footer.entityLink`) or invent alternate entity wording.
- Prefer deleting redundant adjectives and repeated section framing (`executive` when the page already says executive; “in front of you”; anatomy “already built into sections above” when on-page links exist). After a cut, re-read aloud: stripping articles (`the` / `a`) must not leave ungrammatical US English (e.g. keep `the team standard`).
- `lt.ts` stays frozen — do not mirror EN prose trims into LT; key parity only if keys change.
- Sync cited strings in [`COPY_AUDIT_BY_SLIDE.md`](COPY_AUDIT_BY_SLIDE.md) / [`USER_JOURNEY.md`](USER_JOURNEY.md) when eyebrows or step labels change.

## Hub ecosystem entity footer (QW1b) — 2026-08-09

- This spoke is **P1 `.pro`** (live `promptanatomy.pro`, GitHub `leader`). Hub entity copy is **exact** EN: `Part of Prompt Anatomy · Training & checkout → promptanatomy.app`. Do not invent alternate brand wording on that line.
- **Integrate** into the existing footer brand row — do not add a card, sticky promo, floating badge, or second “Buy Core” CTA. Founder attribution stays on the copyright line, not the entity line.
- UTM split: conversion CTAs keep `utm_source=leader`; entity footer only uses **`buildEntityFooterUrl()`** → `utm_source=pro`, `utm_medium=entity_footer`, `utm_campaign=ecosystem`. See [`UTM_MATRIX.md`](UTM_MATRIX.md).
- LT UI is frozen — ship EN only; keep `lt.ts` key parity with English placeholders. Hub LT string applies only if bilingual UI is unfrozen.
- After deploy: reply to hub with deploy URL + `EN only, UTM yes (pro / entity_footer / ecosystem)`.

## Conversion spine CTA discipline — 2026-08-24

- **Three memes only** (indices `3`, `2`, `5`). Do not remount `meme-01-ai-chaos.png` (`items[0]`) — it restates the hero H1 and delays `#context`.
- **No gold inside `#context`.** Preset and custom module copy buttons stay outline. Custom stays in a closed `<details>` (`Need a task not listed?`). Gold in Step 1 lives on the hero CTA only.
- **No PromptAnatomy.app on PromoBanner.** Gold → `#demo`; sister text → `.cloud`. Scale CTAs stay on `#kit` and the hub footer. `promoBanner.secondaryCta` is unused locale residue — do not render it.
- Context badge must stay honest: **Used when you copy** (no sessionStorage). Do not reintroduce “Saved in session.”

## Durable outbound rule

- Never hand-roll `promptanatomy.app` / `.cloud` / consumer-AI query strings. Use [`outboundLinks.ts`](../src/constants/outboundLinks.ts) and update [`UTM_MATRIX.md`](UTM_MATRIX.md) in the same change.
