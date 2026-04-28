# Changelog

Daily project updates for the PromptAnatomy Executive OS landing page.

## 2026-04-28

### Changed (hero clarity refresh)
- **Hero message + conversion:** Reframed the hero for 2-second scanning: shortened the value prop to one promise (clarity/decisions), rewrote the subtitle to outcome-first (no “fill fields / copy prompt” mechanics), and switched the hero to a **single primary CTA** that opens PromptAnatomy (secondary button removed from the hero row). Updated EN/LT hero keys in `src/content/locales/en.ts` + `src/content/locales/lt.ts`.
- **Hero right-side artifact:** Simplified `HeroBento.astro` to a 3-block executive brief legend (**Decision**, **Risks**, **Next action**) and removed the abstract chips (“Schema / Output shape / Decision-grade”) plus the process strip (“Context → Module → Brief → Safety”) to avoid “system diagram disguised as UI.” Kept the premium accent mapping (gold decision, rose risks, emerald action) and updated EN/LT `heroBento.title`.

### Changed (ClarityDemo practical pass)
- **Practical-first demo:** Rewrote `ClarityDemo.astro` from an academic three-column lesson (messy input → arrow → prompt + 5 stacked outputs) into a single tool surface: scenario chips → Brief card (Decision, Next action, Insight) visible by default → action row with `Copy prompt` (primary gold) + `Show details` (Risks + Questions) + `Show input` disclosures. Removed the connector arrow column, "Transforms" caption, prompt preview block, "Preview hint" lecture text, and "Executive clarity output" label. Kept all `data-*` hooks (`data-scenario`, `data-demo-field`, `data-demo-risks`, `data-demo-questions`, `data-copy-prompt`) so `InteractiveCopy.astro` keeps working untouched. Action voice copy in EN/LT (`Pick a scenario. Get the brief.` / `Pasirink scenarijų. Gauk briefą.`) plus new disclosure keys (`briefLabel`, `showDetails`, `hideDetails`, `showInput`, `hideInput`).

### Changed (hero right-side)
- **Bento proof surface:** Replaced the dense hero slide with `HeroBento` as the right-side proof container, and iterated it toward a scannable “executive brief” legend with strong premium accents (gold decision, rose risks, emerald next action). (Earlier versions included chips/flow + 5 tiles; current version is 3 tiles to reduce cognitive load.)
- **Removed HeroTrust block:** Dropped the “Outcomes operators care about” band under the hero to keep the first screen premium and reduce scroll cost.
### Changed (proof explainer + breath beat)
- **Proof explainer:** Added two micro-lines under the Before/After proof clarifying what a prompt is and what PromptAnatomy means (EN/LT), without turning the page into a tutorial.
- **Breath meme:** Inserted `meme-01-ai-chaos.png` right after the one-screen proof as a single recognition beat (EN/LT caption at `memes.items[0]`).
- **Breath meme (pre-demo):** Inserted `meme-04-delegation-bottleneck.png` right before the static demo as a second short recognition beat (EN/LT caption at `memes.items[2]`).
- **PromptAnatomy banner:** Added a premium handoff banner right after `ExecutiveModules` that links to PromptAnatomy.app (`utm_medium=modules&utm_campaign=handoff`) while keeping the static demo as the secondary path (EN/LT).

### Changed (Phase 3 visuals)
- **Before/after proof:** Added a minimal premium before/after SVG (`public/assets/graphics/before-after.svg`) and surfaced it near the top of the page as a one-screen transformation proof (EN/LT).

### Changed (meme beats)
- **Meme order + reduction:** Set `meme-03-clear-decision` (index `3`) as the first meme beat right after the hero, and reduced the page to **two** meme moments total (indices `3` and `4`).
- **No eyebrow:** Removed the eyebrow label from `MemeMoment.astro` so each meme is a single recognition beat (image + title + body only).

### Changed (Phase 0–1 spine)
- **Spine reorder:** Moved the proof + safety + conversion blocks up: `ExecutiveModules` → `ClarityDemo` → `SafetyCheck` → `CourseCTA` → `AuthorityBridge` so the page follows Act → Believe → Commit before depth.
- **Modules clarity:** Added a one-line “Start here” guide above the module grid to reduce first-time decision overload (EN/LT).
- **Demo CTA ladder:** Upgraded the post-demo follow-up into a single clear CTA button that jumps to `#kit` (EN/LT).
- **Safety dedup:** `RoiPath` now links to `#safety-check` for the safety step instead of duplicating the full safety prompt for copy.
- **Meme docs alignment:** Fixed `Page.astro` meme index documentation to match the live order (`3,0,2,4`) and `docs/VISUAL_CONTENT_MAP.md`.

### Changed (codebase improvement roadmap)
- **Docs:** Added [`docs/README.md`](docs/README.md) as documentation index; expanded [`AGENTS.md`](AGENTS.md) **Documentation map**; fuller **Source of truth** list in [`docs/DOCUMENT_MANAGEMENT.md`](docs/DOCUMENT_MANAGEMENT.md); [`README.md`](README.md) synced with landing flow + doc links; **Executive summary** block at top of [`docs/STRATEGIC_REVISION_PLAN.md`](docs/STRATEGIC_REVISION_PLAN.md).
- **Copy modularization:** `src/content/copy.ts` re-exports `uiCopy`; locale bodies moved to [`src/content/locales/en.ts`](src/content/locales/en.ts) and [`src/content/locales/lt.ts`](src/content/locales/lt.ts).
- **Runtime payload:** `window.__PA_COPY__` serializes only clipboard-related subtrees via [`src/utils/clientCopyPayload.ts`](src/utils/clientCopyPayload.ts) (`a11y`, `demo`, trimmed `quickPractice`/`safety`, `roiPath` steps + labels, full `library` for nested paths).
- **SEO helper:** JSON-LD graph builder moved to [`src/utils/pageJsonLd.ts`](src/utils/pageJsonLd.ts); [`Page.astro`](src/layouts/Page.astro) imports it.

### Changed (front-page audit / KMK pass)
- **Dead copy / components:** Removed unused `hero.visual*` strings; removed unused `proof` strip copy and deleted `ProofStrip.astro` (no longer shipped in `__PA_COPY__`).
- **Deduped narrative:** `flowScheme.bridgeNote` shortened (no five-block repeat); `anatomy` subtitle and item bodies tightened; `systemVisual.eyebrow` set to reference-style EN/LT.
- **Practice + safety:** Wrapped in one `role="region"` in `Page.astro` with `practiceSafety.ariaLandmark`; `safety` titles/subtitles reframed as continuation of practice step 4.
- **HeroTrust:** When `showPlaceholderLogos` is false, single-column layout with `outcomesTitle` + shorter outcome bullets (no empty logo column).
- **Memes + ROI:** Page now uses **three** memes (`items` indices 0, 2, 4); `RoiPath` moved **after** `#kit` (AuthorityBridge → CourseCTA → RoiPath → meme → FAQ).
- **PDF / CTA ladder:** Removed duplicate proof chips from `CourseCTA`; demo follow-up copy shortened; FAQ dropped the redundant “is the kit free” pair (EN/LT).
- **Library:** Shorter `library.subtitle` (depth-last cue).

### Changed (axis shift: context + modules)
- **New primary action:** Replaced the standalone `QuickPractice` + `SafetyCheck` chapter with **Global Context + Modules** (`#context`) as the main spine action (define once, inject everywhere).
- **Modules:** Added 6 executive modules + 1 **Custom module** (task + expected output shape) and a compiled “Copy full prompt” flow with **readable decision-grade outputs** (bullets/sections, owners, deadlines).
- **Runtime:** Extended `InteractiveCopy.astro` to compile module prompts from `window.__PA_COPY__` and copy them to clipboard (no JSON validation).
- **Nav/anchors:** Hero nav + primary CTA + skip link now target `#context`.
- **Docs:** Updated `README.md`, `docs/CODEBASE_OVERVIEW.md`, `docs/STRATEGIC_REVISION_PLAN.md`, and `AGENTS.md` to reflect the new axis.

### Docs
- **Cursor / agents:** Recorded **lead-training** as the conceptual model for this repo (lean static lead page → qualified handoff to PromptAnatomy / full training), instead of treating it as a standalone “executive landing” product. Follow-up work: align `.cursor/skills/*` with `visual-and-copy.mdc`, reinforce subtract-first behavior in `AGENTS.md` and `.cursor/rules/project-direction.mdc`, and rename the skill folder when those edits land.

### Added
- **Strategic revision plan:** `docs/STRATEGIC_REVISION_PLAN.md` — phased roadmap (CTA ladder, journey, de-duplication, visuals, IA checklist, risks, verification) aligned with `AGENTS.md`.
- **`docs/UTM_MATRIX.md`:** Canonical `utm_source` / `utm_medium` / `utm_campaign` values for hero, practice band, bridge, footer, and lead-magnet links.

### Changed (earlier 2026-04-28 stack)
- **Hero / nav / FlowScheme / conversion:** EN/LT hero + `flowScheme` tone; header shows `#practice`, `#demo`, `#kit` + mobile PromptAnatomy; `CourseCTA` exposes `#kit`; `ClarityDemo` connector + `aria-live`; `AuthorityBridge` Option A; `PromptAnatomy` collapsed `<details>`; quick practice value framing + single demo CTA; ROI copy button SSR keys; library reveal strings; `docs/VISUAL_CONTENT_MAP.md` + `STRATEGIC_REVISION_PLAN` §12 updates.

### Changed (premium + de-overload pass)
- **Hero proof:** Replaced the hero’s “slide” diagram with an **executive brief artifact** (`HeroArtifact`) and moved the flow diagram into a collapsed “How it works” disclosure.
- **Surface system:** Softened `glass-card` borders/shadows/blur and introduced a flatter `surface-card` so not everything looks equally elevated.
- **Context + modules density:** Compressed injected rules and per-module “Expected output” into `<details>` disclosures to reduce first-paint overload while keeping all modules visible.
- **Memes:** Added `meme-03-clear-decision.png` as the first “breath” beat after `#context` (live meme indices now `3,0,2,4`).
- **Prompt anatomy:** Calmed typography and de-emphasized the 01–05 step tiles to avoid slide-deck vibes while keeping the section collapsed by default.
- **Docs:** Added `docs/SOURCE_OF_TRUTH.md` and wired it from `README.md`, `docs/README.md`, and `AGENTS.md`.

### Verified
- `npm run build`

## 2026-04-27

### Changed
- **Landing clarity pass:** Simplified the above-the-fold journey and removed duplicate “second-hero” proof density. Primary Hero CTA now opens PromptAnatomy, with the PDF download demoted to a secondary link. Reordered the main stack to start with `QuickPractice` → `SafetyCheck` and restored all five fragmented meme moments across the flow (matching `public/assets/memes/README.md`).
- **Prompt library overload:** Moved `PromptLibrary` to the bottom of the page so the conversion path stays scannable; the 35-prompt depth library remains opt-in behind a top-level disclosure, with each prompt’s full text hidden behind a per-prompt “Reveal prompt”.
- **Hero visual artifact:** Replaced the previous dense Hero preview card with a static inline SVG flow scheme (Noise → Prompt → Decision-ready output → Safety check) and then upgraded it to a more premium 2×2 layout with subtle icon badges and tiny step numbers.
- **2-minute practice (learning slide):** Removed duplicate “structure” copy (old gold box repeated the start of the full prompt). One canonical `<pre>` + `structureHelper` microcopy, wider column 2 in the grid, `<ol>` semantics for steps 1–4, `resultMicro` to label the example, `checkBridge` to hand off to the safety section. See `QuickPractice.astro` and `copy.ts` `quickPractice.*`.
- **2-minute practice (decisive slide pass):** Rewrote the section for 2-second executive scanning: added an outcome-first subtitle, removed the internal scroll UI, tightened each step to short bullets, made the `Result` block visually dominant, reframed safety as a “risk shield”, and added an explicit CTA to PromptAnatomy.
- **Surface copy trims:** Shortened the highest-surface intro lines (hero, quick-practice trail, library intros) without changing the underlying prompt library content.
- **Docs alignment:** Updated `docs/VISUAL_CONTENT_MAP.md`, `docs/CODEBASE_OVERVIEW.md`, and `public/assets/memes/README.md` to match the new meme placements and the “library last + opt-in” structure.
- **Sister platform:** `AuthorityBridge` and copy now point to [DI Operacinis Centras](https://ditreneris.github.io/ceo/) (`/ceo/`) instead of `/lead/`; `authority.sisterTitle` + updated EN/LT `sisterText`. `llms.txt`, `project-direction.mdc`, and `docs/QUALITY_ASSURANCE.md` aligned.

### Changed (de-frankenstein pass)
- Tightened bilingual marketing copy in `src/content/copy.ts` (hero, proof, practice, safety, demo, anatomy, `roiPath`, library intros, `systemVisual`, FAQ, authority, CTA) to cut redundant “system / static / ROI” repetition; removed unused `beforeAfter`, `workflows`, `visualBreak`, and `roi` object keys.
- `PromptLibrary.astro`: category `<details>` panels default to **closed** on first load so the full library is not a wall of open text.
- **Copyable prompts:** `ClarityDemo.astro`, `QuickPractice.astro`, and `SafetyCheck.astro` now show the full prompt in a scrollable `<pre>` (demo prompt syncs with scenario buttons via `data-demo-field="prompt"`). `Page.astro` + `InteractiveCopy.astro` add a short toast (`a11y.copyManual`) when the Clipboard API is missing or throws, and focus the visible prompt for manual copy.

### Changed (workflow UX polish)
- **SafetyCheck becomes a process:** Rebuilt the 01–04 cards into a step-by-step ordered flow with a clear “run the 4 checks” micro-label; upgraded the step titles into questions and tightened hero spacing. The safety prompt now shows a preview with a fade (copy still grabs the full prompt) and adds a bilingual `previewHint`.
- **Weekly ROI path becomes a system:** Rebuilt `RoiPath` from a 2×3 grid into a weekly cycle (desktop) with active step selection, per-step copyable prompts, and a mobile ordered flow. Added `roiPath.centerLabel/centerText`, stronger “time → value” copy, and upgraded `total` into a value claim.
- **Cross-slide copy consistency:** Standardized prompt preview UX across `QuickPractice` and `ClarityDemo` (preview + fade + `previewHint`, no scroll-UI “cut-off” look). Moved the demo Copy CTA next to the prompt preview so it is unambiguously “copy the prompt”, not output.

### Added
- **PDF lead magnet (sister-`lead` pattern):** canonical Markdown at `docs/executive-operating-kit-pdf.md`, build scripts `scripts/build-executive-kit-pdf.ps1` / `scripts/build-executive-kit-pdf.sh` and `scripts/run-build-pdf.mjs`, `npm run build:pdf`, and `docs/SETUP_PDF.md` (Pandoc + Typst or LaTeX, same as [DITreneris/lead](https://github.com/DITreneris/lead) `scripts/build-pdf.*`). The generated `public/assets/downloads/executive-operating-kit.pdf` is committed so GitHub Pages serves a real `.pdf` without CI Pandoc. CTAs were already `*.pdf`; `InteractiveCopy.astro` still falls back to `.html` on 404.
- Adopted the PromptAnatomy.app mother brand identity: copied the mother's favicon set into `public/` (`favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `og-image.png`) and added a sub-brand `public/site.webmanifest` (`PromptAnatomy - Executive OS`, `theme_color: #0B1320`) so the browser tab, mobile chrome, and PWA install icon match the mother site.
- Linked the full favicon set, the manifest, and the mother's 1200x630 `og-image.png` from `src/pages/index.astro` head with `import.meta.env.BASE_URL` prefixes so paths resolve correctly behind the `/leader/` GitHub Pages base.
- Added a logo lockup in `src/components/Hero.astro` (Zap glyph SVG using the mother's exact lightning-bolt path, `PromptAnatomy` wordmark, `Executive OS` gold chip, and `Kit v1.0 - CEO/COO` version chip) framed by the new `--drop-shadow-logo-glow` token via `.logo-glow`.
- Added brand tokens in `src/styles/global.css` (`--color-brand-dark: #0B1320`, `--color-brand-accent: #CFA73A`, `--color-brand-accent-hover: #E8B93C`, `--color-cta-from: #FFCC33`, `--color-cta-to: #FFB300`, `--background-image-cta-gradient`, `--shadow-glow-accent`, `--shadow-cta-shadow`, `--drop-shadow-logo-glow`) and helper utilities `.cta-gradient` and `.logo-glow` so future agents bind to brand variables instead of inline cyan values.
- Added a `prefers-reduced-motion: reduce` guard in `global.css` that disables `scroll-behavior: smooth` and clamps animation/transition durations.
- Injected `Organization`, `WebSite`, and `WebPage` JSON-LD in `src/pages/index.astro` head using the mother's stable `@id` (`https://www.promptanatomy.app/#organization` and `#website`) with `isPartOf` and `about` references on the WebPage so search engines and AI crawlers group the sister landing page under the same publisher.
- Added `og:site_name="PromptAnatomy"`, `og:locale="en_US"`, and `og:locale:alternate="lt_LT"` so social cards advertise the bilingual brand.
- Added `public/llms.txt` mirroring the mother's structure: identifies this property as the CEO/COO Executive OS lead magnet, declares canonical authority at `https://www.promptanatomy.app/`, lists the landing page and the static download URL, and notes there are no transactional routes.
- Differentiated the AuthorityBridge in `src/components/AuthorityBridge.astro`: the mother card now carries a gold border, the Zap glyph, and a `Mother platform` gold pill, while the sister card stays neutral; both `href`s gained bridge-specific UTMs (`utm_source=leader&utm_medium=bridge&utm_campaign=mother|sister`) so cross-property traffic is attributable.
- Rewrote the footer in `src/pages/index.astro` to attribute back to PromptAnatomy with bilingual copy (`PromptAnatomy - Executive OS` / `PromptAnatomy - Vadovo OS`), a static-kit reassurance line, links to the mother's `/privacy` and `/terms`, and a UTM-tagged link to `promptanatomy.app`. Added `footer.brand`, `footer.tagline`, `footer.privacy`, and `footer.terms` keys to `src/content/copy.ts` for both EN and LT.

### Changed
- **GitHub Actions:** pinned official actions to `runs: node24` (or `upload-artifact` v7 inside the composite) per [Node 20 runner deprecation](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/): `actions/checkout@v6`, `actions/setup-node@v6`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5` (replaces the transitive `actions/upload-artifact@v4` warning from v4 of this action), `actions/deploy-pages@v5` in `deploy.yml`; `ci.yml` uses `setup-node@v6` with the same app Node `22.12.0` pin.
- Switched the visual identity from "dark base + cyan accent" to "dark navy base (#0B1320) + gold accent (#CFA73A)" matching PromptAnatomy.app: replaced every `cyan-*` Tailwind class across `Hero.astro`, `LanguageToggle.astro`, `CourseCTA.astro`, `ClarityDemo.astro`, `PromptAnatomy.astro`, `QuickPractice.astro`, `PromptLibrary.astro`, `RoiPath.astro`, `ProofStrip.astro`, `SystemVisual.astro`, `AuthorityBridge.astro`, and the `cyan` accent option in `MemeMoment.astro` with the gold token; the `MemeMoment` `AccentTone` union renamed `cyan` to `gold`. Status colors (rose, emerald, amber) preserved because they are functional, not brand.
- Promoted the primary CTA buttons to the gold gradient via `.cta-gradient` (Hero primary CTA, ClarityDemo follow-up, PromptLibrary starter download, CourseCTA card) so the conversion path matches the mother's CTA visual.
- Swapped the `body` background gradient in `src/styles/global.css`: removed the cyan radial and added a warm-yellow radial so the page reads "dark + gold" instead of "dark + cyan".
- Updated `<meta name="theme-color">` in `src/pages/index.astro` from `#050816` to `#0B1320` so the mobile chrome bar matches the mother's `site.webmanifest` theme.
- Switched `og:image` and `twitter:image` from the embedded `assets/graphics/workflow-map.svg` to the new `public/og-image.png` so social cards visually match the mother.
- Updated `LanguageToggle.astro` to render an active language pill in the gold token with a 36px tap target.
- Updated `.cursor/rules/visual-and-copy.mdc` palette guidance from "dark base, white text, cyan/blue accent" to "dark navy base (#0B1320), white text, gold accent (#CFA73A) with #E8B93C hover and the gold CTA gradient (#FFCC33 to #FFB300) matching the PromptAnatomy.app mother brand" so future agents stop reverting to cyan. Status colors are pinned: rose for risk, emerald for action, amber for warning.

### Tier 3–4 — locale routing, accessibility, SEO depth
- Shipped real `/en/` and `/lt/` routes via `src/pages/en/index.astro` and `src/pages/lt/index.astro`, a shared `src/layouts/Page.astro`, and Astro `i18n` in `astro.config.mjs` (`prefixDefaultLocale: true`). Root `src/pages/index.astro` is a static redirect (`./en/` with `navigator.language` → `./lt/`). Locale `fallback` is intentionally omitted: with static SSG, `fallback: { lt: "en" }` prevented `/lt/` from emitting.
- Replaced runtime `data-i18n` swapping with server-rendered copy per locale; `window.__PA_COPY__` now holds only the active locale for copy-to-clipboard paths. Client behaviour lives in `InteractiveCopy.astro` (demo scenarios, generic copy buttons, PDF→HTML fallback).
- Per-locale `<html lang>`, canonical, `hreflang` (en / lt / x-default → EN), `og:title` / `og:description` from `copy.meta`, `og:locale` / alternate, and `og:image` with `public/og-image-lt.png` when present at build time (else `og-image.png`). JSON-LD uses Organization `name` “Promptų anatomija”, `alternateName` “Prompt Anatomy”, `og:site_name` “Prompt Anatomy”, plus `WebPage`, `FAQPage`, and updated `inLanguage`.
- Added bilingual FAQ (`src/components/Faq.astro`, `copy.faq`) as `<details>` above `AuthorityBridge`, with matching `FAQPage` schema in the head.
- Added skip link (`copy.a11y.skipLink`), `.focus-ring` and `.skip-link` in `global.css`, Tailwind `@theme` brand utilities (`text-brand-accent`, etc.), `motion-safe:` on image scale, AuthorityBridge lift, and PromptLibrary disclosure chevron; widened tap targets (44px) on language pills, workflow chips, scenario chips, and copy buttons; mobile nav drawer in `Hero.astro` (hamburger, Escape, link close).
- `LanguageToggle` is now two route anchors with `aria-current="page"`. Kit CTAs point at `executive-operating-kit.pdf` with a HEAD 404 fallback to `.html`. Expanded `@media print` on `executive-operating-kit.html` (A4, light background, `page-break-inside: avoid` on cards).
- Integrated `@astrojs/sitemap` (hreflang alternates), `public/robots.txt` (sitemap + `llms.txt` comment), `.lighthouserc.json`, and a CI step running `lhci autorun` (Performance ≥90, A11y/SEO/Best practices ≥95).
- **Analytics:** Confirmed the mother site ships no analytics scripts; this sister page stays analytics-free so the “no data sent” claim stays accurate.

### Verification
- `npm run build` (with `BASE_PATH=/leader`, `SITE_URL=https://ditreneris.github.io`) emits `dist/index.html` (redirector), `dist/en/index.html`, `dist/lt/index.html`, `sitemap-index.xml`, and `robots.txt`. `npx lhci autorun` passes on `/en/index.html` and `/lt/index.html`.

## 2026-04-26

### Added
- Added `.cursor/rules/language-standard.mdc` defining the Lithuanian and English copy standard agents must follow when editing or auditing text (Tu vs. Jūs forms, AI→DI, diacritics, preferred business vocabulary, sentence-case English headings, bilingual alignment, and an audit checklist). Scoped to `src/content/**`, `src/components/**/*.astro`, and project Markdown.
- Added a `MemeMoment.astro` component that renders each CEO meme as a single fragmented emotional rest stop (image + short caption, no CTA, alternating sides, accent-coloured glow).
- Added five fragmented meme moments to the landing flow (after `ProofStrip`, after `SafetyCheck`, after `PromptAnatomy`, after `PromptLibrary`, after `AuthorityBridge`) so memes act as recognition beats between heavier teaching sections instead of one bundled visual block.
- Embedded the `workflow-map.svg` inside `SystemVisual` above the four-layer grid so the operating-system claim is shown, not only stated.
- Added a lightweight workflow picker (seven category chips) above `Start with 7` that highlights and scrolls to the matching starter card without forcing a full quiz flow.
- Added an inline post-demo CTA card that links to the Max Value Kit so the demo's clarity payoff has an immediate next step.
- Added three reassurance chips (`Short printable kit`, `No login`, `Built on PromptAnatomy`) under the final `CourseCTA` buttons to reinforce trust at the conversion zone.
- Added a `Start with 7` recommended prompt layer before the full 35-prompt library so the first user action is guided instead of catalog-driven.
- Added the Executive Prompt Operating Kit direction with 2-minute practice, safety check, 35 visible prompts, ROI path, visual break, and system visual.
- Added a printable HTML operating-kit download asset.
- Added the CEO/COO prompt-library lead magnet flow with quick practice, executive prompt anatomy, and a copyable library preview.
- Added the static downloadable `executive-prompt-library.md` lead magnet asset.
- Created the Astro, Tailwind CSS, and TypeScript static landing page foundation.
- Added bilingual English/Lithuanian content in `src/content/copy.ts`.
- Added the static 3-minute clarity check with five executive scenarios.
- Added landing sections for hero, demo, before/after, meme slots, workflows, ROI, authority bridge, and final CTA.
- Added a proof strip near the top of the page to support the static demo and low-risk positioning.
- Added asset folders for memes, graphics, and screenshots.
- Added `docs/VISUAL_CONTENT_MAP.md` for meme, screenshot, and diagram planning.
- Added a meme asset evaluation canvas documenting the top 5 project-ready visuals and rejected alternatives.
- Added GitHub Pages deployment workflow.
- Added PR build CI and `.env.example` for GitHub Pages cold deploy settings.
- Added Cursor rules, project skill, and `AGENTS.md` for future AI-assisted development.
- Added document management, quality assurance, and codebase overview docs.

### Fixed
- Renamed the duplicate `id="system"` on `AuthorityBridge.astro` to `id="bridge"` so the in-page `#system` nav link reliably scrolls to `SystemVisual` and the page stops emitting two elements with the same identifier.
- Replaced lingering English business jargon in the Lithuanian `src/content/copy.ts` block (`churn`, `pre-read`, `follow-up`, `pass/fail`) with the project-standard Lithuanian equivalents (`klientų netekimas`, `paruošiamoji medžiaga`, `tęstinė žinutė`/`tolesni veiksmai`, `tinka/netinka`) to satisfy the `language-standard.mdc` audit checklist.

### Removed
- Deleted unused landing components no longer imported by `src/pages/index.astro`: `BeforeAfter.astro`, `MemeBlock.astro`, `RoiBlock.astro`, `VisualBreak.astro`, and `WorkflowCards.astro` (`MemeBlock` also violated the “do not collapse the moments back into a single block” rule).
- Deleted the unused `public/assets/downloads/executive-prompt-library.md` lead magnet asset; every CTA now links to `executive-operating-kit.html`.

### Changed
- Audited Lithuanian UI copy in `src/content/copy.ts`: converted formal `Jūs` imperatives (e.g., `Pradėkite`, `Naudokite`, `Atsisiųskite`, `Pasiimkite`, `Patikrinkite`, `Nesiųskite`) to informal `Tu` form (`Pradėk`, `Naudok`, `Atsisiųsk`, `Pasiimk`, `Patikrink`, `Nesiųsk`) for a more direct executive voice.
- Replaced remaining `AI` references in Lithuanian copy with `DI` (e.g., `AI Operating System` → `DI operacinė sistema`) and changed `jūsų` → `tavo` for consistency with the informal tone.
- Polished Lithuanian grammar and style: tightened wording in `proof`, `quickPractice`, `safety`, `anatomy`, `library`, `demo`, `beforeAfter`, `memes`, `authority`, and `cta` sections; cleaned leftover English fragments (`support ir account` → `kliento aptarnavimo ir paskyros`); fixed awkward word order and replaced `Pagal PromptAnatomy` with `Pagrįsta PromptAnatomy`.
- Renamed meme PNG files from double `.png.png` extensions to clean `.png` so the new fragmented meme moments load via stable paths.
- Converted the 35-prompt depth library into a `<details>`-based accordion with the first category open by default to reduce scroll fatigue while keeping depth as proof.
- Refined `SystemVisual` layout to lead with the workflow-map SVG and follow with the four-layer system grid, replacing the previous text-only side panel.
- Updated `docs/VISUAL_CONTENT_MAP.md`, `docs/CODEBASE_OVERVIEW.md`, `docs/QUALITY_ASSURANCE.md`, and `public/assets/memes/README.md` to describe the fragmented meme moment placement, accordion library, workflow picker, and reassurance chips, plus the rule against bundling memes back into a single block.
- Reworked the user journey around a shorter CEO/COO Max Value Kit, placing the static clarity demo before the library and introducing 7 recommended starting prompts before the full 35-prompt depth proof.
- Shortened the printable download from a catalog-style prompt asset into a focused Max Value Kit with the 4-move method, safety check, 7 top prompts, ROI path, and PromptAnatomy next step.
- Removed repeated mid-page workflow and ROI sections from the main landing flow to reduce scroll fatigue.
- Upgraded the lead magnet from a prompt-library preview into a fuller CEO/COO operating-kit experience.
- Replaced the shallow ROI story with a weekly time-savings path.
- Updated hero, CTA, metadata, docs, and QA expectations for the operating-kit direction.
- Repositioned the page from Executive Clarity Check to an English-first CEO/COO Prompt Library lead magnet.
- Reordered the landing flow so the prompt-library value appears before the static clarity demo.
- Aligned GitHub Pages CI/deploy builds to the documented `/leader` base path.
- Updated project guidance and QA docs for the prompt-library lead magnet direction.
- Replaced missing meme image references with launch-safe visual proof cards to avoid broken public assets.
- Hardened static demo language switching, list rendering, copy embedding, and clipboard handling.
- Normalized the Astro base path so GitHub Pages builds produce `/leader/` URLs from `BASE_PATH=/leader`.
- Upgraded Astro to clear the runtime XSS advisory and aligned CI/deploy workflows to Node 22.12.0.
- Replaced meme placeholders with selected uploaded PNG assets and bilingual captions.
- Expanded the meme section from 3 cards to a 5-card visual story: access, speed, structure, leadership system, results.
- Removed unused PNG meme assets to keep the project lean.
- Confirmed `public/assets/memes/` should retain only the five landing-page PNGs plus `README.md`.
- Updated meme asset documentation to separate landing-page images from social/course assets.
- Rewrote hero, CTA, and top-of-page copy for sharper CEO relevance.
- Improved all five static demo scenarios in English and Lithuanian.
- Updated page metadata with sharper SEO title, description, canonical URL, Open Graph, and Twitter card fields.
- Switched Tailwind integration from the Vite plugin to PostCSS to keep the production build stable.
- Reordered `uiCopy.memes.items` in both `en` and `lt` blocks to match on-screen order (`Access` → `Structure` → `Tools` → `Control` → `Leadership`) and aligned the `MemeMoment` `index` props in `src/pages/index.astro` to the same `0..4` sequence so the array index now reflects the visual flow.
- Refactored 12 landing components (`Hero`, `ProofStrip`, `QuickPractice`, `SafetyCheck`, `ClarityDemo`, `PromptAnatomy`, `RoiPath`, `PromptLibrary`, `SystemVisual`, `AuthorityBridge`, `CourseCTA`, `MemeMoment`) to import `uiCopy` and render English text from `uiCopy.en.*` at SSR time instead of hardcoded fallback strings, making `src/content/copy.ts` the single source of truth (Lithuanian still swaps in via `LanguageToggle.astro`'s `data-i18n` runtime).
- Dropped the `fallbackTitle` and `fallbackBody` props from `MemeMoment.astro` now that captions render directly from `uiCopy.en.memes.items[index]`.

### Verified
- Ran `npm run build` after the Lithuanian Tu-form audit, AI→DI conversion, and language-standard rule landing with 0 Astro check errors and 0 warnings.
- Ran `npm run build` after the library accordion, workflow picker, post-demo CTA, final CTA proof chips, and SystemVisual SVG integration with 0 Astro check errors and 0 warnings.
- Ran `npm run build` after introducing fragmented meme moments with 0 Astro check errors and 0 warnings.
- Ran `npm run build` after the Max Value Kit journey rework with 0 Astro check errors and 0 warnings.
- Ran `npm run build` after the operating-kit rework with 0 Astro check errors and 0 warnings.
- Ran `npm run build` after the lead-magnet rework with 0 Astro check errors and 0 warnings.
- Ran `npm run build` successfully with 0 Astro check errors and 0 warnings.
- Re-ran `npm run build` after audit fixes with 0 Astro check errors and 0 warnings.
- Ran `npm run build` after the codebase hygiene pass (duplicate `id` fix, Lithuanian anglicism cleanup, dead component/asset removal, meme-array reorder, SSR copy refactor) with 0 Astro check errors, 0 warnings, and 0 hints.
