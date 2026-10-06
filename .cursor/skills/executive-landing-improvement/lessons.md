# Lessons — executive landing

Date-stamped traps. The skill is the playbook; this file is why not to undo a ship. Do not dump `en.ts`, the PDF, or the prompt library here.

## 2026-10-06 spoke brand lockup

- **Tile corner is `rounded-[12px]`, not `rounded-xl`.** This repo’s `--radius-xl` is `2rem`. `rounded-xl` painted a 32px corner on the 40px header tile and it read as a circle. Sizes stay 36px mobile / 40px from `sm`. Fill stays flat `#0b1320`.
- **Do not remap `--color-brand-accent`.** It is already `#cfa73a`. The bolt in `SiteHeader.astro` and `public/favicon.svg` is that hex on purpose. `#fbd304` and `#f3cc30` are not tokens. Do not restore `.logo-glow`.
- **No badge under the wordmark.** `a11y.brandSubtag` is gone. Prompt is white, Anatomy is `#cfa73a`, both weight 900. Do not put Executive OS back on that line.
- **Footer sentence stays.** `footer.brand` is “Part of Prompt Anatomy · Training & checkout”, then `→ promptanatomy.app`. Creator stays on the legal line. Do not change `utm_source=leader`.
- **One bright-gold control per view.** Hero `#context` stays `btn-primary-gold`. Promo, demo, and module actions stay `btn-outline-accent`. The kit card is navy; the download on it is the gold button. Do not paint the kit panel with `cta-gradient` again.
- **Outline class has no box.** `.btn-outline-accent` sets a border and a color only. Those three actions keep their own `inline-flex`, `min-h`, `rounded-full`, and padding. Dropping the utilities leaves a bare border. The promo smoke check targets `a.btn-outline-accent`, not `a.cta-gradient`.
- **Hover token is `#cfa73a`.** `--color-brand-accent-hover` is not `#e8b93c`. Button label is `#0b1320`. CTA shadow is navy `rgba(11, 19, 32, 0.12)`.
- **Inter is not in the stack.** Body font starts at `ui-sans-serif`. Do not put Inter back. OG bolt and the verb on `og-image.png` are `#cfa73a`; regenerate with `npm run generate:og` if that file is redrawn. Do not restore the centered EXECUTIVE OS lockup.

## 2026-09-25 social card

- **Verb is already on the PNG.** Open Graph “image is missing conversion text” is not a reason to redraw `public/og-image.png`. The card already says **Run the 2-minute check.** Hub and cloud “do not redraw” notes are about their own files.
- **Two description strings.** `meta.description` (search + JSON-LD) and `meta.socialDescription` (og + twitter) stay separate. A single ~125 cut drops the search sentence; a single 170-character string dies mid-phrase in the feed.
- **Generator, not Satori.** `npm run generate:og` writes the PNG from `scripts/generate-og-image.mjs` (sharp + SVG). Do not add the Satori package or Inter. Do not restore the centered EXECUTIVE OS lockup.
- **Same URL.** `/og-image.png` is unchanged. After a production deploy, rescan the Open Graph debugger so LinkedIn and Facebook drop the old lockup. Pushed `e8d61a2`.

## 2026-09-15 leftover cleanup

- **Clipboard vs hidden prompt:** focusing `[data-demo-field=prompt]` while `#demo-prompt-panel` still has class `hidden` shows the toast and hides the text. Call `setDemoSubpanel("prompt")` first (`revealDemoPromptForManualCopy`). Module copy fail: open parent `<details>` of `[data-module-preview-content]` if present; else toast-only.
- **Hash focus needs tabindex:** `Page.astro` `el.focus()` no-ops without it. `#safety-check` `#faq` `#anatomy` `#library` `#module-secondOrder` are `anchorFocusable` / `ContentCard tabindex=-1` when `id` is set. Wrap `decodeURIComponent(location.hash)` in try/catch.
- **Hero in main:** the 2026-09-09 line that `main` starts at `#context` is false. First child of `<main>` is `Hero`; `#context` is still the first conversion id after the hero. Skip-link stays `#ctx-company`.
- **E2E site chrome:** do not `locator("header")` count 1. PromptLibrary category panels use `<header class="mb-4">` inside `main`. Use `data-testid="site-header"`. PA `hero`/`primary` lives in `#mobile-menu` (sibling of that header).
- **Do not restore:** `DiagramContainer.astro`, `.btn-outline-neutral`, `.hidden-lang`, `.border-surface`, a desktop PromptAnatomy button, LanguageToggle, pre-context meme-01/03 mounts. Unmounted meme PNG files stay on disk (social reuse).
