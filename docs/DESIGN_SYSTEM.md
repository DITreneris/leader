# Design System v1 (Executive OS landing)

**Scope:** Visual and layout rules for the single-page landing in `src/layouts/Page.astro`. Each major **section** is treated as one “slide”: one primary idea, predictable layout, reusable primitives.

**Canonical code:** [`src/styles/global.css`](../src/styles/global.css) (tokens + utilities), [`src/components/ds/`](../src/components/ds/) (Astro primitives). Product copy and palette philosophy: [`.cursor/rules/visual-and-copy.mdc`](../.cursor/rules/visual-and-copy.mdc).

---

## 1. Design tokens

### Typography

| Role | Implementation | Use |
|------|-----------------|-----|
| Section eyebrow (sentence case) | `.type-section-eyebrow` | Default section kicker above H2 |
| Promo eyebrow (uppercase) | `.type-eyebrow-promo`, `.type-eyebrow-promo-bright` | Promo strips, high-contrast labels |
| Inline label in cards | `.type-eyebrow-inline` | Card subheads, inline section labels |
| Micro / overline | `.type-micro-label` | Badges, column labels, tight metadata |
| Micro / overline (readable) | `.type-micro-label-readable` | Field labels in demo and modules (≥11px) |
| Body deck | `.type-body-deck` | Section subtitles, lead paragraphs (`slate-200`) |
| Body support | `.type-body-support` | Card body copy (`slate-300`) |
| Prompt preview | `.text-prompt-preview` | Monospace `<pre>` prompt blocks |
| Form-style label | `.type-form-label` | Inputs and structured fields |
| CTA text on gold button | `.type-cta-label` | Primary gradient buttons — prefer composed `.btn-primary-gold` |
| **Section H2 (display)** | `SectionTitleBlock` / `SectionHeader` default (`titleScale="display"`) | Main section titles: `text-4xl` → `sm:text-5xl` |
| **Section H2 (compact)** | `titleScale="compact"` | FAQ-style sections: `text-2xl` → `sm:text-3xl` |
| **Section H2 (promo)** | In-strip only (e.g. PromoBanner) | `text-2xl` → `sm:text-3xl` — subordinate to display H2 |
| **Card H3** | Module/demo card titles | `text-xl font-black text-white` |
| **Meme H3** | MemeMoment copy column | `text-2xl` → `lg:text-4xl` max — subordinate to section H2 |
| Body (legacy) | `text-sm leading-6 text-slate-300` | Prefer `.type-body-deck` / `.type-body-support` on new work |
| Hero-specific | Hero keeps its own eyebrow pill and headline scale; not forced through `SectionTitleBlock` | Documented as **Hero** template exception |

Body text on dark surfaces: **deck** = `.type-body-deck` (`slate-200`); **support** = `.type-body-support` (`slate-300`); **metadata** = `text-slate-400` at `text-xs` or smaller only. Titles and emphasis use `text-white`.

### Spacing

| Token / pattern | Value | When |
|-----------------|-------|------|
| Section horizontal | `px-5 sm:px-8` | Every section row |
| Section max width | `max-w-7xl mx-auto` | Default content column (with above) |
| Inner content column | `max-w-3xl`, `max-w-4xl`, `max-w-6xl` as needed | Narrow reading vs wide grids — pick one per section and stay consistent |
| Vertical rhythm | `.section-y` | Default major section |
| | `.section-y-tight` | Lighter breaks, promos |
| | `.section-y-compact` | Dense proof blocks (e.g. before/after row) |
| | `.section-y` + `.section-y-roomy-lg` | Extra vertical air (e.g. safety block) |
| After section title | `.stack-after-section-title` | `mt-8` gap before first content block |

**Card padding:**

| Variant | Classes | Use |
|---------|---------|-----|
| **Compact** | `.card-padding-compact` (`p-4 sm:p-6`) | FAQs, tight cards, nested panels |
| **Comfort** | `.card-padding-comfort` (`p-6 sm:p-8`) | Primary glass cards, demo article |
| **Promo** | `.card-padding-promo` (`p-7 sm:p-10`) | `HighlightStrip` promo variant only |

Prefer [`ContentCard`](../src/components/ds/ContentCard.astro) with `padding="compact" | "comfort"` instead of ad-hoc `p-*` on every new card.

### Color (usage)

| Token / area | Hex / value | Rule |
|--------------|-------------|------|
| Page base | `--color-page-base` `#050816` | Body gradient anchor |
| Brand / chrome | `--color-brand-dark` `#0b1320` | Manifest `theme-color`, logo tile feel |
| Accent | `#CFA73A` / `var(--color-brand-accent)` | Headings, accents, outline focus |
| Accent hover | `#E8B93C` | Hover text, brighter promo |
| CTA gradient | `--color-cta-from` → `--color-cta-to` (`#FFCC33` → `#FFB300`) | **Primary conversion** buttons only (`cta-gradient`) |
| Surfaces | `--color-surface-*`, `--surface-1-bg`, `--surface-2-bg`, `--surface-accent-bg` | Cards and panels via `glass-card`, `surface-card`, `surface-accent` |
| Functional | Rose (risk), emerald (action), amber (warning), violet (ROI communication step only) | Semantic bands only — see `visual-and-copy.mdc` |

Do **not** reintroduce cyan/blue as a primary accent.

### Shadows and elevation

| Token / class | Use |
|---------------|-----|
| `glass-card` | Primary elevated content: blur + border + `--shadow-card` |
| `.elevate-hover` | Interactive cards / links that lift on hover |
| `--shadow-card-hover` | Hover state for elevated cards |
| `--shadow-glow-accent` | Optional accent glow (e.g. demo decision block with `accent-glow`) |
| `--shadow-cta-shadow` | Gold CTA buttons (`cta-gradient`) |

### Gradients and canvas

- **Body:** stacked radial + linear in `body` (see `global.css`) — do not duplicate for inner sections.
- **Surface fills:** use `var(--surface-1-bg)`, `var(--surface-2-bg)`, `var(--surface-accent-bg)` via existing classes, not one-off gradients unless documented as an exception.

### Border radius

Use only: `.radius-sm` … `.radius-xl`, or meme-specific `.radius-meme-outer` / `.radius-meme-inner`. **No new arbitrary `rounded-[…]`** for section-level UI. **`rounded-full`** for pills, chips, and CTA buttons only. Hero mobile menu may use `rounded-2xl` (documented nav exception).

### Buttons (composed recipes)

Prefer these over inline `cta-gradient` + ad-hoc padding. Always keep class name `cta-gradient` on primary gold links/buttons for tests and legacy selectors.

| Tier | Class | Use |
|------|-------|-----|
| Primary gold | `.btn-primary-gold` + `.cta-gradient` + `.elevate-hover` | Hero, PromoBanner (`#demo`), demo copy |
| Accent outline | `.btn-outline-accent` + `.elevate-hover` (optional) | Per-module copy, custom compile, ROI step actions |
| Neutral outline | `.btn-outline-neutral` + `.elevate-hover` (optional) | Secondary outbound where used (not Promo) |
| Warning outline | `.btn-outline-warning` + `.type-cta-label` | SafetyCheck copy only |
| Text link | Underlined `text-sm font-semibold` | Sister hub, footer, tertiary |

**Module hierarchy:** custom compile and per-module **Copy prompt** = accent outline. Custom sits in a closed `<details>` so it does not compete with Promo gold → `#demo`.

---

## 2. Component primitives (`src/components/ds/`)

| Component | Role |
|-----------|------|
| `SectionShell` | Standard section wrapper: rhythm + `max-w-7xl` + horizontal padding + optional `id` / `aria-*`; optional `as="aside"` for meme beats |
| `SectionTitleBlock` | Eyebrow + H2 + subtitle; delegates to `SectionHeader` (same API + `titleScale`) |
| `ContentCard` | `glass` / `surface` / `accent` surface, `lg` / `xl` radius, compact or comfort padding, optional `elevate-hover` |
| `BulletSystem` | Disc list with consistent spacing (`default` \| `muted` text) |
| `HighlightStrip` | Accent callout surfaces: `band` (inline strip), `promo` (glass + accent border + promo blurs) |
| `DiagramContainer` | Figure shell for SVG/diagrams: glass frame, consistent padding |
| `WorkflowStepRail` | **#context** only: three-step journey (define context → choose module → copy brief) |

New sections should compose these primitives before inventing new layout classes.

### Banner hierarchy (visual weight)

Use a small number of **visual tiers** so callouts feel part of the same page, not random ads:

| Tier | Pattern | Role |
|------|---------|------|
| **Ribbon** | `HighlightStrip` `band` (`context` / `panel`) | Short guidance, instructions, “start here” — no competing gold CTA on the same row. |
| **Glass promo** | `HighlightStrip` `promo` (e.g. [`PromoBanner.astro`](../src/components/PromoBanner.astro)) | Mid-funnel next step: gold in-page `#demo`; tertiary text link to promptanatomy.cloud. PromptAnatomy.app stays at `#kit`. |
| **Gold commitment** | [`CourseCTA.astro`](../src/components/CourseCTA.astro) gradient block | Strongest download / asset moment after the narrative has landed (e.g. after safety check). |

**Rule of thumb:** avoid stacking multiple “brightest” conversion surfaces with no vertical breathing space; see story order in [`Page.astro`](../src/layouts/Page.astro).

**Outbound URLs:** use [`src/constants/outboundLinks.ts`](../src/constants/outboundLinks.ts) for PromptAnatomy, Telegram, **`buildConsumerAiUrl`** (ChatGPT / Claude / Gemini paste strips), **`buildSisterHubUrl`** (`promptanatomy.cloud` — secondary learning path), and **`buildEntityFooterUrl`** (hub QW1b entity footer, `utm_source=pro`); keep [`UTM_MATRIX.md`](UTM_MATRIX.md) aligned when adding destinations or `utm_*` values.

---

## 3. Slide templates (section patterns)

Maps “template” → existing components (reference implementation).

| Template | Purpose | Typical building blocks |
|----------|---------|-------------------------|
| **Hero** | First screen: promise + nav + primary/secondary CTAs | `Hero.astro`, `HeroDecisionDiagram.astro` — **exception:** custom hero eyebrow pill, not `SectionTitleBlock` |
| **Content** | Modules, library, dense value | `SectionShell` + `SectionTitleBlock` + `ContentCard` grid or accordions (`ExecutiveModules`, `PromptLibrary`) |
| **Comparison** | Before / after or contrast story | `SectionShell` + `SectionTitleBlock` + copy column + `DiagramContainer` (hero diagram ships proof; standalone BeforeAfter removed **2026-06-09**) |
| **Process** | Steps, ROI path, flow | `SectionShell` + steps or `DiagramContainer` + `BulletSystem` where lists matter (e.g. `RoiPath`) |
| **CTA** | Conversion band | One primary CTA per major section; `HighlightStrip` / `CourseCTA` patterns; gold `cta-gradient` for primary action |
| **Reference** | Optional framework vocabulary (late funnel) | [`PromptAnatomy.astro`](../src/components/PromptAnatomy.astro) — collapsed `<details>`; per block: definition label + body, monospace **example** strip (always populated), **On this page** text link to `#context` / `#demo` / `#safety-check`. Use light bordered cards — **not** `surface-panel` form-style panels. |

**HeroDecisionDiagram (right column):** One `glass-card` **split-compare** (`hero-split__*`): Example eyebrow (slate micro-label), **Scattered inputs** (~42% flex, slate titles) → **minimal gold arrow connector** (no center label or line rail) → **Decision brief** panel (~58% flex). Brief uses **hierarchy layout** (not flat rows): Decision hero block (gold label + left accent) → Why → Owner|Risk meta grid (risk amber border) → Next with slate arrow. No inner "Decision brief" panel title. CSS-only motion; process detail in `#context`.

---

## 4. Usage rules

- **One primary CTA** per major section (see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)).
- **Meme sections** are recognition breaks only: no CTA, no eyebrow ladder ([`VISUAL_CONTENT_MAP.md`](VISUAL_CONTENT_MAP.md)).

**PromoBanner CTA tiers** ([`PromoBanner.astro`](../src/components/PromoBanner.astro)):

| Tier | Visual | Destination |
|------|--------|-------------|
| 1 (gold) | `cta-gradient` | In-page `#demo` (clarity practice) |
| 2 (text) | Underlined link | promptanatomy.cloud (`buildSisterHubUrl`) |

- **New section:** use `SectionShell` + `SectionTitleBlock` unless you are intentionally using the **Hero** template.
- **Diagrams:** SVG preferred; wrap in `DiagramContainer` (or equivalent classes) for frame consistency.

### Do not (DS v1)

- Add new accent colors outside the defined functional set.
- Scatter multiple “primary” conversion actions in one section.
- Apply `glass-card` to every nested element (reserve for primary surfaces).
- Introduce new arbitrary border-radius or spacing scales without updating this doc and `global.css`.
- Change user-visible copy in `en.ts` only — `lt.ts` is frozen ([`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)).

---

## 5. Related docs

- [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) — release checks including DS consistency
- [`COPY_AUDIT_BY_SLIDE.md`](COPY_AUDIT_BY_SLIDE.md) — copy QA by section
- [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md) — precedence when docs disagree
