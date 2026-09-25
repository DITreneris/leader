# Lessons — executive landing

Date-stamped traps. The skill is the playbook; this file is why not to undo a ship. Do not dump `en.ts`, the PDF, or the prompt library here.

## 2026-09-15 leftover cleanup

- **Clipboard vs hidden prompt:** focusing `[data-demo-field=prompt]` while `#demo-prompt-panel` still has class `hidden` shows the toast and hides the text. Call `setDemoSubpanel("prompt")` first (`revealDemoPromptForManualCopy`). Module copy fail: open parent `<details>` of `[data-module-preview-content]` if present; else toast-only.
- **Hash focus needs tabindex:** `Page.astro` `el.focus()` no-ops without it. `#safety-check` `#faq` `#anatomy` `#library` `#module-secondOrder` are `anchorFocusable` / `ContentCard tabindex=-1` when `id` is set. Wrap `decodeURIComponent(location.hash)` in try/catch.
- **Hero in main:** the 2026-09-09 line that `main` starts at `#context` is false. First child of `<main>` is `Hero`; `#context` is still the first conversion id after the hero. Skip-link stays `#ctx-company`.
- **E2E site chrome:** do not `locator("header")` count 1. PromptLibrary category panels use `<header class="mb-4">` inside `main`. Use `data-testid="site-header"`. PA `hero`/`primary` lives in `#mobile-menu` (sibling of that header).
- **Do not restore:** `DiagramContainer.astro`, `.btn-outline-neutral`, `.hidden-lang`, `.border-surface`, a desktop PromptAnatomy button, LanguageToggle, pre-context meme-01/03 mounts. Unmounted meme PNG files stay on disk (social reuse).
