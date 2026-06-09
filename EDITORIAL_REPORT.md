# Editorial and Repository Audit Report

> **Audit artifact (2026-06-09). Not agent policy.** For completion criteria use [`docs/DEFINITION_OF_DONE.md`](docs/DEFINITION_OF_DONE.md) and [`docs/QUALITY_ASSURANCE.md`](docs/QUALITY_ASSURANCE.md).

**Repository:** `066_Leader` (PromptAnatomy Executive OS / Leader)  
**Audit date:** 2026-06-09  
**Package version:** `1.1.0` (`package.json` lines 2–3)  
**Auditor role:** Product, editorial, and repository quality review (read-only analysis; this report is the sole deliverable)

---

## 1. Executive Summary

### Current maturity level

**Post-MVP, production-capable static product** with mature internal documentation (16 indexed docs, Cursor rules/skills, CI pipeline), but **editorial and spec drift** from rapid iteration. The shipped artifact is a single-page Astro SSG landing (v1.1.0) with client-side clipboard UX, not a multi-feature application.

**Verified:** `npm test` — 16/16 passed; `npm run build` — 0 Astro errors/warnings, emits `/en/` + root redirect only.

### Main conclusion

The **implementation is stronger than several documentation and copy surfaces suggest**. Core conversion flow (`#context` → `#demo` → `#kit` → PromptAnatomy.app), outbound URL discipline, bilingual locale bundles, and CI are well engineered. The primary debt is **narrative fragmentation**: product naming, meta/SEO strings, privacy/analytics claims, Global Context field definitions, meme-count references, and locale-ship status are **inconsistent across README, `llms.txt`, FAQ, root redirect meta, hero chrome, and strategic docs**.

### What breaks first

1. **Trust on privacy** — FAQ states “nothing uploads” while `@vercel/analytics` ships in `Page.astro` (line 127); on Vercel deploy this contradicts the FAQ unless analytics is documented or removed.
2. **SEO/social preview at `/`** — Root `index.astro` title uses “Executive **Prompt** Operating Kit” (line 13) while `/en/` uses “Executive **Decision** Operating Kit” (`en.ts` line 3).
3. **Contributor confusion** — 16 docs + strategic backlog + orphan prototypes (`snippet.html`) + untracked `golden_memo.md` compete for attention; no single “start here for humans” path beyond a dense README.

### Five highest-impact findings

| # | Finding | Evidence |
|---|---------|----------|
| 1 | **Analytics vs “no data sent” claim** | `Page.astro:127` `<Analytics />`; FAQ `en.ts:24` “nothing uploads”; `CHANGELOG.md:343` “analytics-free” |
| 2 | **Product title fragmentation** | `en.ts:3` “Decision”; `index.astro:13` “Prompt”; `QUALITY_ASSURANCE.md:42` “Executive Prompt Operating Kit” |
| 3 | **Version label drift** | Footer `v1.1.0` via `APP_VERSION`; hero chip `a11y.brandSubtag` “v1.0” (`en.ts:12`) |
| 4 | **Global Context field mismatch** | UI: 4 fields (`ExecutiveModules.astro:46–100`); FAQ/llms.txt cite 5 different concepts |
| 5 | **English-only ship vs bilingual claims** | `siteLocale.ts:11` `["en"]`; `llms.txt:3` “bilingual (EN/LT)”; `STRATEGIC_REVISION_PLAN.md:49` “real `/en/` `/lt/` routes” |

### Recommended immediate decision

**Freeze scope** (no new sections per `AGENTS.md`) and run a **Phase 1 credibility pass**: align meta titles, privacy/analytics wording, Global Context definitions, version chips, and stale doc counts **before** any strategic backlog work in `STRATEGIC_REVISION_PLAN.md`.

---

## 2. Audit Scope and Method

### Files and areas inspected

| Area | Paths |
|------|-------|
| Entry & agent docs | `README.md`, `AGENTS.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`, `.env.example` |
| Documentation | `docs/**` (16 files + unindexed `CLARITY_DEMO_KISS_MARRY_KILL.md`) |
| Source | `src/layouts/Page.astro`, `src/components/**`, `src/content/locales/{en,lt}.ts`, `src/constants/**`, `src/utils/**` |
| Config & CI | `package.json`, `astro.config.mjs`, `.github/workflows/ci.yml`, `playwright.config.ts`, `vitest.config.ts` |
| Public assets | `public/llms.txt`, `public/assets/**` |
| Scripts | `scripts/**`, `integrations/robots-txt.mjs` |
| Tests | `src/**/*.test.ts` (3 files), `e2e/smoke.spec.ts` |
| Orphans | `snippet.html`, `golden_memo.md` (untracked) |

### Areas excluded or unavailable

- **Live production URLs** — not fetched; deploy claims taken from README/CI config.
- **Vercel Analytics runtime behavior** — package present; actual beacon firing on GitHub Pages vs Vercel not verified in browser.
- **Lighthouse CI scores** — workflow referenced; scores not re-run in this audit.
- **Full line-by-line audit** of 35-prompt library strings and printable kit Markdown (~800+ lines each) — sampled, not exhaustive.
- **Historical git commits** — changelog used for evolution context only.

### Evidence hierarchy

1. **Strongest:** Source code, `Page.astro` render order, `npm test` / `npm run build` results (verified 2026-06-09).
2. **Strong:** Vitest assertions, Playwright config, `git ls-files` for tracked assets.
3. **Medium:** `CHANGELOG.md`, `docs/SOURCE_OF_TRUTH.md` (explicitly subordinate to `Page.astro`).
4. **Weak / suspect:** `STRATEGIC_REVISION_PLAN.md` backlog rows, `snippet.html`, `golden_memo.md`, older changelog bullets.

### Important limitations

- Workspace file search did not list binary meme/PDF files; **`git ls-files` confirms** PDF and meme assets are tracked — local checkout completeness may vary by environment.
- Audit did not run `npm run test:e2e` or `npm run build:pdf` (Pandoc/Typst toolchain not assumed installed).
- Lithuanian copy parity assumed structurally aligned; LT prose not line-audited in this pass.

---

## 3. Actual Product State

### What the product currently does

A **static, English-first (US-market) one-page executive prompt operating kit** that:

1. Presents hero + proof + four meme beats + section stack.
2. Lets executives fill a **Global Context Block** (4 fields) and compile **6 preset + 1 custom module** prompts client-side.
3. Offers a **static Clarity Demo** (5 scenarios) with copy/paste strips to ChatGPT, Claude, Gemini.
4. Surfaces a **Safety Check** prompt and **weekly ROI path** (5 steps).
5. Converts via **Max Value Kit PDF download** (`#kit`) and outbound links to **PromptAnatomy.app** and **promptanatomy.cloud**.
6. Provides depth appendix: Prompt Anatomy reference + 35-prompt library accordion.

**Canonical render order:** `src/layouts/Page.astro` lines 133–187.

### Working capabilities (verified)

| Capability | Evidence |
|------------|----------|
| Static SSG build | `astro.config.mjs`; build emits `dist/en/index.html`, `dist/index.html` |
| EN route + root redirect | `src/pages/en/index.astro`; `src/pages/index.astro` |
| Clipboard + module compile | `InteractiveCopy.astro` + `clientCopyPayload.ts` |
| PDF download with HTML fallback | `CourseCTA.astro:32–34`; `InteractiveCopy.astro:411–425` |
| UTM-tracked outbound URLs | `outboundLinks.ts`; 16 unit tests pass |
| JSON-LD FAQ schema | `pageJsonLd.ts`; unit tests pass |
| CI: test → audit → build → e2e → LHCI | `.github/workflows/ci.yml` |
| Semver in footer | `appVersion.ts`; footer `v{APP_VERSION}` in `Page.astro:205` |
| OG image + build-time robots.txt | `scripts/generate-og-image.mjs`; `integrations/robots-txt.mjs` |

### Partially implemented capabilities

| Item | Status |
|------|--------|
| **Bilingual `/lt/`** | `lt.ts` maintained; route **not emitted** (`siteLocale.ts:11`); `LanguageToggle` hidden |
| **PDF kit** | Tracked in git; client HEAD-fallback to HTML if 404 |
| **Meme optimization pipeline** | `npm run optimize:memes` documented; requires PNG masters |
| **Facebook `fb:app_id`** | Optional via `PUBLIC_FB_APP_ID` (`.env.example:3`) |
| **Sister hub CTA** | Shipped in `PromoBanner`; `buildSisterHubUrl` **not unit-tested** |

### Missing capabilities (by design per `AGENTS.md`)

- Backend, login, database, AI API calls, user data storage, course app.

### Legacy MVP elements still in repo

| Artifact | Notes |
|----------|-------|
| `heroArtifact` copy block | `en.ts:78–99` — unused; hero uses `HeroBento` |
| `snippet.html` | Pre-Astro HTML prototype (~519 lines); not referenced |
| `meme-02-meeting-overload.png` | Asset kept; **unmounted** from page (`MEME_PRIORITY_REGISTRY.md`) |
| Unused `nav.*` keys | `product`, `system`, `library`, `demo`, `language` — not in `Hero.astro` nav |
| `golden_memo.md` | Untracked generic quality memo; zero repo references |
| Old changelog tier bullets | e.g. five-meme stack, `/lt/` emission (`CHANGELOG.md` historical sections) |

### Differences between claimed and implemented functionality

| Claim | Reality |
|-------|---------|
| “Analytics-free” (`CHANGELOG.md:343`) | `@vercel/analytics` in `Page.astro:5,127` |
| “Bilingual (EN/LT)” (`llms.txt:3`) | English-only shipped |
| “Five MemeMoment beats” (`QUALITY_ASSURANCE.md:71`) | **Four** beats in `Page.astro` |
| Global Context “5 fields” (FAQ, `llms.txt`) | **Four** UI fields |
| Hero shows `v1.0` | Package/footer at `v1.1.0` |

---

## 4. Repository Structure Analysis

### Structure clarity

**Good.** Conventional Astro layout: `src/pages`, `src/layouts`, `src/components`, `src/content/locales`, `src/constants`, `public/assets`. Agent onboarding via `AGENTS.md` → `docs/README.md` is above average for a landing MVP.

### Separation of concerns

| Layer | Assessment |
|-------|------------|
| Copy vs components | **Strong** — `uiCopy` in locales; components consume keys |
| Outbound URLs | **Strong** — centralized `outboundLinks.ts` + `UTM_MATRIX.md` |
| Design system | **Good** — `ds/` primitives + `DESIGN_SYSTEM.md` |
| Client behavior | **Acceptable** — `InteractiveCopy.astro` is large but documented |

### File and module naming

| Issue | Detail |
|-------|--------|
| Repo folder `066_Leader` vs npm `066_leader` | Internal codename exposed in `package.json:2` |
| `CourseCTA.astro` | Name suggests course; section is **kit PDF download** (`#kit`) |
| Product names | “Leader”, “Executive OS”, “Prompt Operating Kit”, “Decision Operating Kit” used interchangeably |

### Obsolete or misplaced files

| File | Recommendation |
|------|----------------|
| `snippet.html` | Archive or delete |
| `golden_memo.md` | Move to personal notes or `docs/archive/` if kept |
| `docs/CLARITY_DEMO_KISS_MARRY_KILL.md` | Index in `docs/README.md` or merge into `COPY_AUDIT_BY_SLIDE.md` |

### Duplication

- **Strategy vs implementation:** `STRATEGIC_REVISION_PLAN.md` (373 lines) overlaps `CODEBASE_OVERVIEW.md`, `SOURCE_OF_TRUTH.md`, `COPY_AUDIT_BY_SLIDE.md`.
- **Copy dead keys:** `heroArtifact`, partial `nav.*`, partial `demo.*` duplicate intent of live sections.
- **PDF messaging:** repeated in demo follow-up, `#kit`, library — intentional cross-link but noisy per strategic plan §2.

### Discoverability

- **Strength:** `docs/README.md` table with “update when” column.
- **Gap:** No `docs/GETTING_STARTED.md`; README mixes CEO-facing links with maintainer deploy env.
- **Gap:** Tests live in `src/**/*.test.ts` and `e2e/` — no `tests/` folder (may confuse contributors).

### Scalability and maintainability concerns

1. **`en.ts` / `lt.ts` ~830 lines each** — manageable now; will strain without key pruning or section splits.
2. **`InteractiveCopy.astro`** — monolithic client script; changes risk regression without broader e2e.
3. **Doc count (16+)** — high for a one-pager; needs ruthless “ship baseline vs backlog” labeling.

---

## 5. Editorial Analysis

### Summary

User-facing EN copy is **generally strong**: executive voice, decision/risk/owner framing, US English, anti-beginner positioning. Developer-facing docs are **comprehensive but unevenly fresh**. Main failures are **cross-surface inconsistency**, not grammar.

### Material issues table

| ID | Severity | Location | Current text or issue | Why it fails | Recommended revision |
| -- | -------- | -------- | --------------------- | ------------ | -------------------- |
| E-01 | **High** | `src/pages/index.astro:13` vs `en.ts:3` | Root: “Executive **Prompt** Operating Kit”; `/en/`: “Executive **Decision** Operating Kit” | Split SEO/social identity; crawlers see different product names | Single canonical title; derive root meta from `uiCopy.en.meta.title` |
| E-02 | **High** | `en.ts:24` (FAQ) + `Page.astro:127` | “Nothing uploads” + Vercel Analytics | Privacy claim may be false on Vercel mirror | Either remove Analytics, gate by env, or qualify FAQ: “Your prompts are not sent to us; optional page analytics on Vercel deploy” |
| E-03 | **High** | `en.ts:40–41` (FAQ), `llms.txt:18` | Global Context lists “audience, success criteria” (5 concepts) | UI ships 4 fields: Company, Current goal, Main constraint, Key bottleneck | Rewrite FAQ + llms.txt to match 4 fields verbatim |
| E-04 | **Medium** | `en.ts:12`, `lt.ts:14` | `brandSubtag`: “Executive OS · **v1.0**” | Footer/meta show **v1.1.0** | Use `APP_VERSION` or drop version from subtag |
| E-05 | **Medium** | `README.md:44` | Lithuanian “žr.” inside English README | Breaks US-first positioning; confuses EN-only contributors | “see” + link text in English |
| E-06 | **Medium** | `llms.txt:3` | “bilingual (EN/LT) lead magnet” | Default build is EN-only | “English-first; Lithuanian optional when bilingual build enabled” |
| E-07 | **Medium** | `QUALITY_ASSURANCE.md:71` | “Five `MemeMoment` beats” | Four mounted (`Page.astro`) | “Four `MemeMoment` beats” |
| E-08 | **Medium** | `STRATEGIC_REVISION_PLAN.md:49` | “real `/en/` `/lt/` routes” | `/lt/` not shipped | “`/en/` shipped; `/lt/` opt-in via `siteLocale.ts`” |
| E-09 | **Low** | `Hero.astro:32` | Hardcoded “Prompt Anatomy” | Bypasses locale bundle; blocks LT brand tweaks | Move to `a11y` or `footer.brand` key |
| E-10 | **Low** | `package.json:4,21–22` | Empty `description`, `keywords`, `author` | Weak npm/GitHub discovery | Fill: “Static CEO/COO executive prompt operating kit for PromptAnatomy” |
| E-11 | **Low** | `index.astro:14–15` | Root description differs from `en.meta.description` | Social cards at `/` ≠ `/en/` | Align or document intentional split |
| E-12 | **Low** | `CourseCTA.astro:33` | `download="www.promptanatomy.app.pdf"` | Surprising filename; may confuse users | `executive-operating-kit.pdf` or document branding intent in CONTRIBUTING |
| E-13 | **Low** | `CHANGELOG.md:343` | “this sister page stays analytics-free” | Contradicts current `Page.astro` | Update changelog note or revert Analytics |
| E-14 | **Low** | `docs/COPY_AUDIT_BY_SLIDE.md` | Mixed LT/EN section headers | Harder for EN-only maintainers | English headings with LT examples in sub-bullets |
| E-15 | **Medium** | Dead copy keys | `heroArtifact`, unused `nav.*`, `demo.promptBlockLabel`, etc. | Maintainer noise; false impression of features | Prune or mark `@deprecated` in comment block |

---

## 6. Documentation-to-Code Consistency

| Documented claim | Evidence in code | Status | Gap | Required action |
| ---------------- | ---------------- | ------ | --- | --------------- |
| Single-page static MVP, no backend | Astro static output; no API routes | **VERIFIED** | — | — |
| Conversion ladder `#context` → `#demo` → `#kit` → PA | `Page.astro`, `Hero.astro` nav | **VERIFIED** | — | — |
| English-only default ship | `siteLocale.ts:11`, only `dist/en/` built | **VERIFIED** | — | — |
| Bilingual EN/LT shipped | No `src/pages/lt/index.astro` | **OUTDATED** | `llms.txt`, `STRATEGIC_REVISION_PLAN.md` | Fix prose |
| “Nothing uploads” / static copy-only | FAQ `en.ts:24`; clipboard only | **PARTIAL** | Vercel Analytics | Resolve E-02 |
| Analytics-free sister page | `Page.astro:127` | **MISLEADING** | `CHANGELOG.md:343` | Update docs or remove Analytics |
| Four Global Context fields | `ExecutiveModules.astro`, `en.ts:143` | **VERIFIED** | FAQ/llms say 5 | Fix E-03 |
| Four meme beats | `Page.astro` 4× `MemeMoment` | **VERIFIED** | QA says five | Fix E-07 |
| PDF kit at `executive-operating-kit.pdf` | `git ls-files`; `CourseCTA.astro` | **VERIFIED** | HEAD fallback exists | — |
| Sister hub → `promptanatomy.cloud` | `buildSisterHubUrl`, `PromoBanner` | **VERIFIED** | — | — |
| Legacy `ceo/` hub in shipped CTAs | No builder in `outboundLinks.ts` | **VERIFIED** | Only `llms.txt:46` prose | Decide keep/remove line |
| Semver v1.1.0 in footer | `APP_VERSION`, `package.json` | **VERIFIED** | Hero subtag v1.0 | Fix E-04 |
| `@vercel/analytics` documented | Not in README/QA | **NOT FOUND** | Undocumented dependency | Document or remove |
| `npm run test:e2e` after build | `ci.yml:42–43`, `README.md:67` | **VERIFIED** | — | — |
| `robots.txt` at build time | `integrations/robots-txt.mjs` | **VERIFIED** | — | — |
| Hero uses `heroArtifact` panel | `HeroBento.astro` only | **OUTDATED** | `heroArtifact` keys remain | Prune copy |
| Real `/lt/` in Lighthouse CI | `.lighthouserc.json` — not re-read | **UNVERIFIABLE** | README says add `/lt/` when bilingual | Verify on bilingual enable |

---

## 7. User Journey and Developer Experience

### 1. Repository discovery

| | |
|---|---|
| **Goal** | Understand what this repo is in <30s |
| **Experience** | README opens strong; badges, live link, doc index |
| **Friction** | Name collision: `066_leader`, “Leader”, “Executive OS”, “Prompt” vs “Decision” kit |
| **Missing** | One-sentence positioning in `package.json` description |
| **Fix** | Add unified product name glossary to README top |

### 2. Installation

| | |
|---|---|
| **Goal** | Run locally |
| **Experience** | `npm ci` → `npm run dev`; Node `>=22.12.0` stated |
| **Friction** | None significant |
| **Missing** | Windows-specific notes (PowerShell works; `&&` fails in older PS) |
| **Fix** | Optional: note PowerShell `;` separator in CONTRIBUTING |

### 3. Configuration

| | |
|---|---|
| **Goal** | Match deploy URLs |
| **Experience** | `.env.example` documents `BASE_PATH`, `SITE_URL` |
| **Friction** | Dual deploy (GitHub Pages + Vercel) requires careful env |
| **Missing** | Analytics env behavior not documented |
| **Fix** | Add `docs/CONFIGURATION.md` or README subsection |

### 4. First run

| | |
|---|---|
| **Goal** | See landing at `/en/` |
| **Experience** | Dev server; root redirects to `./en/` |
| **Friction** | `BASE_PATH=/leader` needed for production parity in preview/e2e |
| **Missing** | README could state default dev path vs preview path |
| **Fix** | “Local URLs” table in README |

### 5. First successful task

| | |
|---|---|
| **Goal** | Copy a compiled module prompt |
| **Experience** | Fill context → select module → Copy full prompt |
| **Friction** | Low — paste strip helps |
| **Missing** | — |
| **Fix** | — |

### 6. Command discovery

| | |
|---|---|
| **Goal** | Find build/test/pdf/og commands |
| **Experience** | README Commands section; `docs/README.md` |
| **Friction** | `generate:og`, `optimize:memes` only in README asset section |
| **Missing** | Single `docs/COMMANDS.md` |
| **Fix** | Phase 2 doc split |

### 7. Error recovery

| | |
|---|---|
| **Goal** | Recover from clipboard/PDF failures |
| **Experience** | Manual copy hint (`a11y.copyManual`); PDF→HTML fallback |
| **Friction** | Fallback fetch fails silently on network error (`InteractiveCopy.astro:423`) |
| **Missing** | User-visible message if PDF missing |
| **Fix** | Optional toast when fallback triggers |

### 8. Advanced use

| | |
|---|---|
| **Goal** | Bilingual restore, PDF rebuild, meme pipeline |
| **Experience** | README “Locale toggle” 4-step guide; `SETUP_PDF.md` |
| **Friction** | Locale restore requires 4 coordinated file edits |
| **Missing** | Checklist script or doc single page |
| **Fix** | `docs/BILINGUAL_RESTORE.md` |

### 9. Updating and migration

| | |
|---|---|
| **Goal** | Bump version, deploy |
| **Experience** | `DOCUMENT_MANAGEMENT.md` semver rules; CHANGELOG daily |
| **Friction** | `brandSubtag` not tied to semver bump |
| **Missing** | Semver bump checklist item for hero chip |
| **Fix** | Add to CONTRIBUTING versioning section |

### 10. Contribution and maintenance

| | |
|---|---|
| **Goal** | PR with correct docs/tests |
| **Experience** | CI enforces test/build/e2e/LHCI; PR template exists |
| **Friction** | 16 docs — unclear which to update for a given change |
| **Missing** | `CONTRIBUTING.md` “which doc to edit” decision tree |
| **Fix** | Link `docs/DOCUMENT_MANAGEMENT.md` table in CONTRIBUTING |

---

## 8. Terminology and Naming Audit

| Concept | Current variants | Recommended term | Reason | Files requiring updates |
| ------- | ---------------- | ---------------- | ------ | ----------------------- |
| Product (public) | Leader, Executive OS, Prompt Operating Kit, Decision Operating Kit | **PromptAnatomy Executive OS** (subtitle: *CEO/COO decision operating kit*) | Mother brand + decision-ops positioning | `index.astro`, `en.ts` meta, README, `llms.txt` |
| This deploy property | leader, 066_Leader, ditreneris.github.io/leader | **Executive OS landing** (internal: `leader` UTM source) | Separates deploy path from product name | README, `package.json` description |
| Global Context Block | 4 fields vs “5-field skeleton” in FAQ | **Global Context Block (4 fields)** | Match UI | `en.ts`/`lt.ts` FAQ, `llms.txt` |
| Max Value Kit | Kit, PDF kit, operating kit, lead magnet | **Max Value Kit** | Established brand string | Already mostly consistent |
| Clarity practice | Demo, clarity demo, proof, `#demo` | **Clarity practice** (nav: “Clarity practice”) | Matches `nav.proof` intent | Docs only |
| Modules | Executive modules, preset modules, compiled prompt | **Executive modules** | Matches `modules` section eyebrow | — |
| Mother site | PromptAnatomy.app, promptanatomy.app, www | **PromptAnatomy.app** (`https://www.promptanatomy.app`) | `outboundLinks.ts` canonical | — |
| Sister hub | promptanatomy.cloud, sister hub, learning path | **PromptAnatomy Cloud** (framework practice) | `buildSisterHubUrl` | `llms.txt`, promo copy |
| Safety | Safety check, safety gate, `#safety-check` | **Safety check** | FAQ + section id | — |
| Version | v1.0 (hero), v1.1.0 (footer), Kit v1.0 (changelog) | **v1.1.0** everywhere or remove from hero chip | Single source: `package.json` | `en.ts`, `lt.ts` `brandSubtag` |
| AI vs DI | AI (EN), DI (LT) | Keep rule | `language-standard.mdc` | — |
| CourseCTA | Component name vs kit section | Rename to `KitCta.astro` (optional) | Reduces “course app” confusion | Component file + imports |

### Flags

- **Conflicting names:** Prompt vs Decision Operating Kit (SEO-critical).
- **Internal terminology exposed:** `066_leader`, UTM `leader`, hash ids (`#ctx-company`) — acceptable for devs.
- **Outdated MVP naming:** “Executive Prompt Operating Kit” in QA checklist.
- **Capitalization:** “Prompt Anatomy” (two words) in hero vs “PromptAnatomy” (brand) in copy.

---

## 9. Content Architecture

### Assessment by document

| Document | Action | Role |
|----------|--------|------|
| `README.md` | **Rewrite** (partial) | Human entry: install, commands, deploy, links — trim strategic depth |
| `AGENTS.md` | **Keep** | AI agent canonical brief |
| `docs/README.md` | **Keep** | Doc index |
| `docs/SOURCE_OF_TRUTH.md` | **Keep** | Conflict resolution + deploy verification |
| `docs/CODEBASE_OVERVIEW.md` | **Keep** | Architecture + anchor registry |
| `docs/QUALITY_ASSURANCE.md` | **Rewrite** (partial) | Fix stale counts; add analytics check |
| `docs/STRATEGIC_REVISION_PLAN.md` | **Split** | Move closed items to archive; keep open backlog only |
| `docs/COPY_AUDIT_BY_SLIDE.md` | **Keep** | Per-section copy QA |
| `docs/DESIGN_SYSTEM.md` | **Keep** | Visual tokens |
| `docs/UTM_MATRIX.md` | **Keep** | Marketing params |
| `docs/SETUP_PDF.md` + `executive-operating-kit-pdf.md` | **Keep** | PDF maintainer |
| `docs/CLARITY_DEMO_KISS_MARRY_KILL.md` | **Merge or index** | Demo editorial pass |
| `CHANGELOG.md` | **Keep** | Daily deltas |
| `CONTRIBUTING.md` | **Rewrite** (expand) | Add doc decision tree, analytics note |
| `SECURITY.md` | **Keep** | Vulnerability reporting |
| `golden_memo.md` | **Remove or archive** | Not product-specific |
| `snippet.html` | **Remove or archive** | Pre-MVP prototype |

### Proposed target structure

```
README.md                 — 60-second overview + quick start + links
docs/GETTING_STARTED.md   — Install, env, first build, local URLs (NEW)
docs/COMMANDS.md          — All npm scripts + when to run (NEW)
docs/ARCHITECTURE.md      — Rename/symlink from CODEBASE_OVERVIEW.md
docs/CONFIGURATION.md     — SITE_URL, BASE_PATH, PUBLIC_FB_APP_ID, analytics (NEW)
docs/TROUBLESHOOTING.md   — PDF missing, e2e base path, clipboard (NEW)
docs/ROADMAP.md           — Extract open items from STRATEGIC_REVISION_PLAN.md
CHANGELOG.md
CONTRIBUTING.md
docs/SOURCE_OF_TRUTH.md   — Retain as governance doc
```

**Not proposed:** Separate user manual — product is one page.

---

## 10. Product and Technical Communication Risks

| Risk | Impact | Likelihood | Notes |
|------|--------|------------|-------|
| FAQ “nothing uploads” vs Vercel Analytics | **High** | **Medium** (high on Vercel deploy) | E-02 |
| Inconsistent SEO titles (Prompt vs Decision) | **High** | **High** | Root vs `/en/` |
| Global Context field mismatch erodes expert trust | **Medium** | **High** | FAQ + llms.txt |
| Stale bilingual claims | **Medium** | **Medium** | llms.txt, strategic plan |
| Undocumented analytics on privacy-forward product | **Medium** | **Medium** | — |
| Long doc set implies incomplete implementation | **Low** | **Medium** | Strategy doc size |
| `snippet.html` discovered via search | **Low** | **Low** | Orphan |
| UK spelling slip in EN ship | **Low** | **Low** | Rules exist |
| PDF 404 without visible fallback message | **Low** | **Low** | Silent HEAD swap |
| Version chip v1.0 vs v1.1.0 | **Low** | **High** | Cosmetic trust |

---

## 11. Findings by Severity

### Critical

*None that block build or prevent core use.* Privacy/analytics tension is the nearest critical **trust** issue.

### High

| ID | Evidence | Impact | Audience | Fix | Effort | Priority |
|----|----------|--------|----------|-----|--------|----------|
| H-01 | `Page.astro:127`, FAQ `en.ts:24` | Privacy trust | CEOs, legal | Align analytics + FAQ | S | **P0** |
| H-02 | `index.astro:13` vs `en.ts:3` | SEO/social split | Marketing | Unify meta title | S | **P0** |
| H-03 | FAQ/`llms.txt` vs 4 UI fields | Product comprehension | Users, LLM citations | Rewrite definitions | S | **P1** |
| H-04 | `QUALITY_ASSURANCE.md:71`, `STRATEGIC_REVISION_PLAN.md:49` | Maintainer wrong spec | Devs | Update counts/routes | S | **P1** |

### Medium

| ID | Evidence | Impact | Audience | Fix | Effort | Priority |
|----|----------|--------|----------|-----|--------|----------|
| M-01 | `brandSubtag` v1.0 vs `APP_VERSION` | Version trust | Users | Sync or remove | S | **P1** |
| M-02 | Dead copy keys ~50+ lines | Maintainability | Devs | Prune locales | M | **P2** |
| M-03 | `README.md:44` “žr.” | EN-first credibility | Contributors | English “see” | S | **P2** |
| M-04 | `llms.txt:3` bilingual lead | AI citation accuracy | GEO | Qualify EN-first | S | **P2** |
| M-05 | `snippet.html`, `golden_memo.md` | Repo clutter | Devs | Archive/remove | S | **P3** |
| M-06 | `buildSisterHubUrl` untested | Regression risk | Devs | Add Vitest case | S | **P3** |
| M-07 | `package.json` empty metadata | Discovery | GitHub visitors | Fill description | S | **P3** |

### Low

| ID | Evidence | Impact | Audience | Fix | Effort | Priority |
|----|----------|--------|----------|-----|--------|----------|
| L-01 | `Hero.astro:32` hardcoded brand | i18n | LT restore | Locale key | S | **P3** |
| L-02 | `CourseCTA` download filename | UX polish | Users | Rename attribute | S | **P3** |
| L-03 | `COPY_AUDIT_BY_SLIDE.md` LT headers | Contributor UX | Devs | EN headers | M | **P3** |
| L-04 | `docs/CLARITY_DEMO_*` unindexed | Discoverability | Devs | Index in README | S | **P3** |

---

## 12. OK / FAIL Analysis

### OK

- `Page.astro` section order documented and matches `CODEBASE_OVERVIEW.md`.
- Outbound URL centralization + Vitest coverage.
- EN/LT structural parity in locale files.
- CI pipeline (test, audit, build, e2e, Lighthouse).
- Executive copy voice and anti-beginner positioning.
- `SOURCE_OF_TRUTH.md` conflict hierarchy (Page.astro wins).
- PDF HTML fallback pattern.
- Paste destination strips with UTM discipline.
- Semver in footer from `package.json`.
- Build cleanliness (0 errors/warnings verified).

### FAIL

- Root vs `/en/` meta title mismatch.
- Analytics present vs “analytics-free” / “nothing uploads” narrative.
- Global Context field count in FAQ/llms.txt.
- QA checklist “five memes” and strategic plan “real /lt/ routes”.
- Hero version chip stuck at v1.0.
- Orphan `snippet.html` and untracked `golden_memo.md`.
- Dead locale keys (`heroArtifact`, unused nav/demo strings).
- `package.json` empty description/author.

### CONDITIONAL

- **Vercel Analytics** — Acceptable if disclosed; fail if privacy-first is a hard brand promise.
- **35-prompt library at page bottom** — Acceptable as appendix; validate with users if scroll fatigue reports.
- **Hero primary CTA off-site** — Strategic tension documented in `STRATEGIC_REVISION_PLAN.md`; needs product decision.
- **Lithuanian bundle maintained while EN-only** — Acceptable for opt-in restore; costs sync tax.

---

## 13. Keep / Rewrite / Remove Analysis

### KEEP

- `src/layouts/Page.astro` spine and conversion order.
- `outboundLinks.ts` + `UTM_MATRIX.md`.
- `AGENTS.md`, `docs/SOURCE_OF_TRUTH.md`, `docs/CODEBASE_OVERVIEW.md`.
- `language-standard.mdc` + locale bundles.
- CI workflows, Vitest/Playwright smoke.
- `public/llms.txt` (after editorial fix).
- Design system docs + `ds/` components.

### REWRITE

- Root `index.astro` meta (derive from `uiCopy.en.meta`).
- FAQ Global Context answer + `llms.txt` definitions.
- `QUALITY_ASSURANCE.md` meme count + analytics row.
- `README.md` opening (unify naming; remove “žr.”).
- `CONTRIBUTING.md` (configuration + doc map).
- `STRATEGIC_REVISION_PLAN.md` baseline paragraph (locale + meme count).

### REMOVE OR ARCHIVE

- `snippet.html` → `archive/pre-astro-snippet.html` or delete.
- `golden_memo.md` → do not commit, or move outside repo.
- `heroArtifact` block in `en.ts`/`lt.ts` (or wire to UI if product wants it).
- Unused `nav.*` and `demo.*` keys after confirmation.
- `CHANGELOG.md:343` analytics-free claim if Analytics stays.

---

## 14. Prioritized Remediation Plan

### Phase 1 — Immediate credibility fixes (1–2 days)

| Priority | Task | Evidence | Expected result | Effort | Dependencies | Acceptance criteria |
| -------- | ---- | -------- | --------------- | ------ | ------------ | ------------------- |
| P0 | Resolve analytics vs privacy copy | H-01 | Single truthful privacy story | S | Product decision | FAQ + SECURITY/README mention analytics OR Analytics removed from build |
| P0 | Unify page title strings | H-02 | Same title at `/` and `/en/` | S | — | `index.astro` title matches `en.meta.title` |
| P1 | Fix Global Context field docs | H-03 | FAQ + llms match 4 fields | S | — | Zero references to “audience/success criteria” as input fields |
| P1 | Fix meme count + locale claims in QA/strategy | H-04 | Docs say 4 memes, EN-only default | S | — | Grep “Five MemeMoment” → 0; “real /lt/ routes” qualified |

### Phase 2 — Documentation and terminology alignment (3–5 days)

| Priority | Task | Evidence | Expected result | Effort | Dependencies | Acceptance criteria |
| -------- | ---- | -------- | --------------- | ------ | ------------ | ------------------- |
| P1 | Sync hero `brandSubtag` with semver | M-01 | v1.1.0 or no version in chip | S | Phase 1 | Hero chip matches footer |
| P2 | Add `docs/GETTING_STARTED.md` + `docs/COMMANDS.md` | §7 friction | Faster contributor onboarding | M | — | README links to both |
| P2 | Prune dead locale keys | M-02 | Smaller `en.ts`/`lt.ts` | M | — | No `heroArtifact`; unused nav keys removed or documented |
| P2 | Index or merge `CLARITY_DEMO_KISS_MARRY_KILL.md` | L-04 | No orphan docs | S | — | Listed in `docs/README.md` |
| P2 | Fill `package.json` metadata | M-07 | Clear npm/GitHub identity | S | — | Non-empty description |

### Phase 3 — Product and UX improvements (1–2 weeks)

| Priority | Task | Evidence | Expected result | Effort | Dependencies | Acceptance criteria |
| -------- | ---- | -------- | --------------- | ------ | ------------ | ------------------- |
| P2 | User-visible PDF fallback notice | §7.7 | Users know when HTML served | S | — | Optional `data-kit-fallback` message |
| P3 | Add `buildSisterHubUrl` test | M-06 | Parity with other builders | S | — | Vitest covers sister UTM |
| P3 | Rename `CourseCTA` → `KitCta` | §8 | Clearer component name | M | — | Import paths updated, build passes |
| P3 | Extract open roadmap from strategic plan | §9 | Shorter living roadmap | M | — | `docs/ROADMAP.md` < 100 lines open items |

### Phase 4 — Maintenance system (ongoing)

| Priority | Task | Evidence | Expected result | Effort | Dependencies | Acceptance criteria |
| -------- | ---- | -------- | --------------- | ------ | ------------ | ------------------- |
| P2 | PR checklist: meta/FAQ/llms on copy changes | Recurring drift | Fewer regressions | S | Phase 1–2 | PR template checkbox |
| P2 | Quarterly doc freshness review | 16 docs | Stale rows flagged | S | — | Calendar + OWNER in DOCUMENT_MANAGEMENT |
| P3 | Expand Playwright smoke (demo copy, `#kit`) | QA Want backlog | Regression safety | M | — | 2+ new stable tests |

---

## 15. Top 10 Low-Hanging Fruits

1. **Set `index.astro` `rootTitle` from `uiCopy.en.meta.title`** — eliminates Prompt/Decision split (5 min).
2. **Change `a11y.brandSubtag` to `Executive OS` without version** — avoids future drift (5 min).
3. **Replace README “žr.” with “see”** (1 min).
4. **Fix `QUALITY_ASSURANCE.md` “Five” → “Four” meme beats** (1 min).
5. **Update FAQ Global Context answer to list 4 field labels from `modules.context`** (10 min).
6. **Update `llms.txt` line 3 and line 18** for EN-first + 4 fields (10 min).
7. **Add `buildSisterHubUrl` test** mirroring existing outbound tests (15 min).
8. **Fill `package.json` `description`** (2 min).
9. **Add `docs/CLARITY_DEMO_KISS_MARRY_KILL.md` row to `docs/README.md`** (5 min).
10. **Delete or move `snippet.html` to `archive/`** — reduces confusion (5 min).

---

## 16. Proposed Product Narrative

### One-sentence product definition

**PromptAnatomy Executive OS is a static, English-first CEO/COO landing page that compiles decision-grade AI briefs from a Global Context Block and executive modules—no login, no AI API.**

### Short product description

Executives fill four context fields once, pick a leadership module, and copy a single compiled prompt into ChatGPT, Claude, or Gemini. A clarity practice demo, safety check, weekly ROI path, and printable Max Value Kit support the path to the full PromptAnatomy system at promptanatomy.app.

### Target user

CEOs, COOs, and senior operators in US-market (default) or Lithuanian (opt-in bilingual build) contexts who need **decision-ready briefs** with owners, risks, and deadlines—not prompt-engineering training.

### Primary problem solved

**Unstructured AI output** for leadership decisions; the kit enforces context, logic, output shape, and a safety gate before send.

### Core capabilities (verified)

- Global Context Block + 6 preset + 1 custom executive modules with client-side compile/copy.
- Static clarity practice (5 scenarios).
- Safety check prompt + 4-check list.
- Max Value Kit PDF download (HTML fallback).
- 35-prompt reference library (appendix).
- Outbound handoff to PromptAnatomy.app and promptanatomy.cloud.

### Current limitations (verified)

- No AI execution on-page; user must paste into external assistants.
- English-only route shipped; LT strings exist but `/lt/` not emitted.
- Single long page; depth sections require scroll.
- Vercel Analytics dependency present (privacy wording must account for this).
- PDF build requires local Pandoc/Typst toolchain.

### Suggested README opening section

```markdown
# PromptAnatomy Executive OS

**A static CEO/COO decision operating kit**—Global Context, executive modules, clarity practice, and a printable Max Value Kit. Copy compiled prompts into your approved AI assistant. No login. No uploads of your brief content to this page.

**Live:** https://ditreneris.github.io/leader/en/ · **Full product:** https://www.promptanatomy.app

| In 60 seconds | Action |
|---------------|--------|
| Try it | [Open live site](…) → **Context + modules** → copy one prompt |
| Take it offline | [Download Max Value Kit PDF](…) |
| Run locally | `npm ci && npm run dev` → http://localhost:4321/en/ |
```

---

## 17. Recommended README Outline

```markdown
# PromptAnatomy Executive OS
<!-- One paragraph: what, who, static/no-login (§16) -->

## Quick links
<!-- Live, PDF, mother site, changelog, docs index -->

## Choose your path
<!-- Table: evaluate / download / develop / deploy (keep existing) -->

## What's on the page
<!-- Section ladder with anchors; 4 meme beats; conversion path -->

## Tech stack
<!-- Astro, Tailwind, TS, static SSG -->

## Prerequisites
<!-- Node >=22.12.0 -->

## Commands
<!-- dev, test, build, preview, test:e2e, generate:og, optimize:memes, build:pdf -->

## Configuration
<!-- SITE_URL, BASE_PATH, PUBLIC_FB_APP_ID; link docs/CONFIGURATION.md -->

## Deployment
<!-- GitHub Pages + optional Vercel mirror; pre-deploy checklist -->

## Locale toggle (maintainers)
<!-- 4-step bilingual restore (keep existing) -->

## Documentation map
<!-- Short table → docs/README.md -->

## Assets
<!-- memes, graphics, screenshots folders -->

## License / security
<!-- MIT, SECURITY.md -->
```

---

## 18. Editorial Style Guide

### Rules

| Topic | Rule |
|-------|------|
| **Voice and tone** | Executive, direct, outcome-first. Decision, risk, trade-off, owner, deadline, next action. |
| **Person and tense** | EN: second person implied (“Copy the prompt”). LT: “Tu” in body; infinitive on buttons. |
| **Command formatting** | Backtick npm scripts: `npm run build`. Bash blocks for multi-step. |
| **Headings** | Sentence case in UI and EN docs. Title case only for brand product name line. |
| **Feature names** | **Max Value Kit**, **Global Context Block**, **Clarity practice**, **Safety check**, **Executive modules**. |
| **Error messages** | State what failed + one recovery action (e.g. manual copy hint pattern in `a11y.copyManual`). |
| **Examples** | US business context: Series B SaaS, Q3, board deck. |
| **Technical terms** | “Static page”, “compile”, “paste into assistant”—avoid “prompt engineering”. |
| **Capitalization** | `PromptAnatomy` / `PromptAnatomy.app` (brand); “Prompt Anatomy” only if matching existing logo lockup. |
| **Punctuation** | EN em dash `—` for asides; LT en dash `–` per language-standard. |
| **Status labels** | VERIFIED / PARTIAL / OUTDATED in docs; semver `vX.Y.Z` from package.json only. |
| **Version references** | Footer and generator meta use `APP_VERSION`; marketing copy does not hardcode version unless intentional release note. |

### Before → After examples (from this repository)

| # | Before | After |
|---|--------|-------|
| 1 | `CEO/COO Executive Prompt Operating Kit` (`index.astro:13`) | `CEO/COO Executive Decision Operating Kit` (match `en.ts:3`) |
| 2 | FAQ: “company, goals, constraints, audience, success criteria” | “Company, current goal, main constraint, key bottleneck—the four fields in the Global Context Block.” |
| 3 | `llms.txt`: “bilingual (EN/LT) lead magnet” | “English-first lead magnet; Lithuanian route available when bilingual build is enabled.” |
| 4 | `Executive OS · v1.0` (`brandSubtag`) | `Executive OS` or `Executive OS · v1.1.0` (synced via `APP_VERSION`) |
| 5 | README: “four MemeMoment beats; žr. MEME_PRIORITY_REGISTRY” | “four MemeMoment beats; see [MEME_PRIORITY_REGISTRY.md](docs/MEME_PRIORITY_REGISTRY.md).” |

---

## 19. Definition of Done

Editorial remediation is **done** when all of the following pass:

1. **Title parity:** `index.astro` og:title === `en.meta.title` (string match or shared source).
2. **Privacy parity:** FAQ answer on data handling is accurate for shipped scripts (Analytics documented or removed).
3. **Field parity:** FAQ, `llms.txt`, and `modules.context` labels describe the same **four** fields.
4. **Version parity:** No user-visible `v1.0` when `package.json` is `v1.1.0` unless intentionally marketing a kit edition separate from site semver.
5. **Locale parity:** No doc claims bilingual ship as default; `llms.txt` and README agree on EN-first.
6. **Visual parity:** QA/strategic docs state **four** meme beats.
7. **Build green:** `npm test`, `npm run build` pass; CI equivalent.
8. **Changelog:** Entry under current date listing editorial remediation scope.
9. **Dead copy:** `heroArtifact` removed or wired; grep for unused `nav.product` etc. resolved.
10. **Orphans:** `snippet.html` and `golden_memo.md` not in root without README explanation.

---

## 20. Final Recommendation

### What should be done first

1. **Product owner decision on Vercel Analytics** — disclose or remove (blocks honest FAQ).
2. **Unify SEO title** at root and `/en/`.
3. **Fix Global Context + meme + locale documentation** in FAQ, `llms.txt`, QA, strategic baseline.

These three restore **credibility** without touching page architecture.

### What should not be worked on yet

- New sections or backend features (violates MVP constraints).
- Full rewrite of `STRATEGIC_REVISION_PLAN.md` before Phase 1 fixes land.
- Renaming repo/npm package (`066_leader`) unless branding initiative approved.
- Expanding Playwright before copy/doc truth is stable.

### What should be validated with users

- Hero **primary CTA off-site** vs in-page `#context` first — strategic plan flags this.
- Scroll length / library placement — is appendix placement sufficient?
- PDF download filename `www.promptanatomy.app.pdf` — brand recognition vs clarity.

### What would make the repository credible as a post-MVP product

1. **One external narrative** — README + meta + llms.txt + FAQ agree on name, fields, locale, privacy.
2. **Truth-labeled docs** — “Ship baseline” vs “Backlog” visually separated; stale changelog bullets annotated.
3. **Automated guardrails** — meta title test, sister hub URL test, optional FAQ field-count lint.
4. **Lean root** — no orphan prototypes; `package.json` describes the product.
5. **Continued CI green** — already strong; maintain as editorial changes land.

---

## Post-audit addendum (remediation shipped 2026-06-09)

### Verified production

- **Primary public URL:** [https://promptanatomy.pro/](https://promptanatomy.pro/) (Vercel; `BASE_PATH=/`, `SITE_URL=https://promptanatomy.pro`)
- **Mirror:** [https://ditreneris.github.io/leader/](https://ditreneris.github.io/leader/) (GitHub Pages CI)

### Privacy policy (product owner confirmed)

- FAQ **unchanged** — “nothing uploads” refers to **user brief/prompt content**, not telemetry.
- **Telemetry:** anonymous page views only via Vercel Analytics on the Vercel deploy. Documented in `docs/SOURCE_OF_TRUTH.md` and `CONTRIBUTING.md`.

### Remediation checklist

| Criterion | Status |
|-----------|--------|
| Title parity `/` vs `/en/` | Done — `index.astro` uses `uiCopy.en.meta` |
| Privacy parity | Done — docs; FAQ retained |
| Four-field Global Context in FAQ + llms | Done |
| Version chip drift | Done — removed `v1.0` from `brandSubtag` |
| EN-first locale claims | Done |
| Four meme beats in QA | Done |
| promptanatomy.pro primary in README + llms | Done |
| Dead copy (`heroArtifact`, unused `nav.*`) | Done |
| `snippet.html` archived | Done — `archive/snippet.html` |
| Maintainer docs | Done — `GETTING_STARTED`, `COMMANDS`, `CONFIGURATION` |
| `buildSisterHubUrl` test | Done |
| PR template + dual-deploy QA | Done |

---

*Report generated from repository inspection and verified `npm test` / `npm run build` on 2026-06-09. Assumptions and unverified areas are labeled in §2.*
