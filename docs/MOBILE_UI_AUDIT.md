# Mobiliosios sąsajos auditas (Executive OS landing)

**Apimtis:** statinė vieno puslapio iškrovimo (`src/layouts/Page.astro`), Tailwind + `global.css`, kliento skriptai (`InteractiveCopy.astro`, įterpti `<script>` kai kuriuose komponentuose).  
**Data:** 2026-04-28.  
**Atnaujinta:** 2026-04-29 — inkarų lentelė ir `#roi` (`RoiPath.astro`); hero nav politika žr. [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md) (Hash anchors).  
**Tikslas:** identifikuoti trikdžius, rizikas ir tobulinimo galimybes mažuose ekranuose; fiksuoti vartotojo interakcijas kaip vykdymo šaltinį QA ir ateities refaktoriams.

---

## Įgyvendinta (2026-04-28)

- **`LanguageToggle` (`compact`):** `min-h-11 min-w-11` vietoje `min-h-8` ([`LanguageToggle.astro`](../src/components/LanguageToggle.astro)).
- **`PromptLibrary` Copy:** `min-h-11 py-3` ant bazės ([`PromptLibrary.astro`](../src/components/PromptLibrary.astro)).
- **Hero mobilus meniu:** Tab **focus trap** atidarytai panelei; `Escape` uždaro tik kai meniu atidarytas; **`role="dialog"`**, **`aria-modal="true"`**, **`aria-label`** ant panelės ([`Hero.astro`](../src/components/Hero.astro)).
- **Viewport / korpusas:** meta **`viewport-fit=cover`** ([`Page.astro`](../src/layouts/Page.astro), [`index.astro`](../src/pages/index.astro)); **`body`** — `padding-*` iš `env(safe-area-inset-*)`; **`min-height: 100dvh`** su `@supports` fallback į `100vh` ([`global.css`](../src/styles/global.css)).
- **Meme raster (C2):** [`MemeMoment.astro`](../src/components/MemeMoment.astro) — `<picture>` (**AVIF → WebP → PNG**); generavimas **`npm run optimize:memes`** ([`scripts/optimize-meme-images.mjs`](../scripts/optimize-meme-images.mjs), devDependency **`sharp`**).

---

## Santrauka

Sąsaja iš esmės yra **vieno stulpelio**, su aiškiais horizontaliais tarpais (`px-5 sm:px-8`), **horizontalus „scroll“** slopinamas (`body { overflow-x: hidden }`), hero antrinė navigacija **paslėpta nuo `md`** ir atidaroma **hamburgeriu**. Likusios stebėsenos sritys (nebūtinai trikdžiai): **InteractiveCopy** PDF `HEAD` elgsena mobiliajame Safari, **touch highlight** kompromisas (`-webkit-tap-highlight-color`), **C** backlog (#demo horizontalus scroll). Memo raster: žr. **AVIF/WebP** + `npm run optimize:memes` [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) ir [`MemeMoment.astro`](../src/components/MemeMoment.astro).

---

## Kas veikia gerai

| Sritis | Pastaba |
|--------|---------|
| Bazinis viewport | `width=device-width, initial-scale=1, viewport-fit=cover` (`Page.astro`, redirect `index.astro`). |
| Minimalus plotis | `min-width: 320px` ant `body` (`global.css`). |
| Hero mobilus meniu | Hamburgeris **44×44 px**, `aria-expanded`, dialog **`aria-label`**, Tab ciklas panelei, uždarymas: nuoroda, `Escape` (tik kai atidaryta), scroll, `pointerdown` už ribų, `hashchange`. |
| Clarity demo (`#demo`) | Scenarijų žetonai `min-h-11`, aiškūs focus žiedai. |
| Kopijavimas | `navigator.clipboard` su fallback į fiksuotą užuominą (`[data-copy-manual-hint]`) + `.safe-bottom` po įpjovų. |
| Judėjimo mažinimas | `prefers-reduced-motion` (`global.css`). |
| Sekcijų inkarai | `#context`, `#demo`, `#kit` ir kt.; `SectionShell` su `anchorFocusable` kur reikia fokuso po hash. |

---

## Trikdžiai ir rizikos

### Išspręsta (2026-04-28)

Ankstesni **P1** (LanguageToggle compact, PromptLibrary Copy), **P2** (mobilaus meniu focus trap + dialog semantika), **P3** (viewport-fit + safe-area ant `body`, `100dvh`) — įgyvendinta; žr. skyrių **Įgyvendinta** viršuje.

### Vis dar aktualu / backlog

1. **`InteractiveCopy.astro`**: PDF nuorodų `HEAD` tikrinimas — **mobilus Safari / privatus režimas** gali sušvelninti `fetch` elgseną; fallback į `.html` lieka naudingas (žr. kodą).
2. **`-webkit-tap-highlight-color: transparent`** ant visų `a`/`button`: pagerina „švarų“ išvaizdą, bet pašalina numatytą touch feedback kai kuriuose naršykliuose — kompromisas vertintinas pagal prekės ženklą.

---

## Tobulinimo galimybės (prioritetuota)

| Prioritetas | Veiksmas |
|-------------|----------|
| ~~A~~ | ~~Touch targets (LanguageToggle, PromptLibrary); hero meniu trap + dialog~~ — **įgyvendinta 2026-04-28.** |
| ~~B~~ | ~~`viewport-fit=cover`, safe-area ant `body`, `100dvh`~~ — **įgyvendinta 2026-04-28.** |
| C | **Horizontalus scenarijų juostos scroll** (`#demo`) vietoje tik `flex-wrap` labai siauruose ekranuose — jei KPI rodo problemą. |
| C | ~~**Memo PNG** dydis~~ — **įgyvendinta:** `MemeMoment` naudoja `<picture>` (AVIF/WebP) + PNG fallback; generavimas `npm run optimize:memes`. |

---

## Dokumentuotos interakcijos

Žemiau — **kas vyksta**, **kur kodas**, **kokie duomenų atributai / inkarai**.

### 1. Navigacija ir inkarai

| Interakcija | Vieta | Mechanika |
|-------------|-------|-----------|
| Pagrindinė nav (`md+`) | `Hero.astro` | Nuorodos į `#context`, `#demo`, `#kit` (tik pagrindinės kopėčios; žr. **Hash anchors** [`CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md)). |
| Gilus inkaras ROI | `RoiPath.astro` | `#roi` — išorinė sekcija (`tabindex="-1"`, `aria-labelledby="roi-heading"`); vidinis regionas lieka `#roi-step-panel`. |
| Mobilus meniu | `Hero.astro` | `[data-mobile-menu-button]` ↔ `[data-mobile-menu-panel]` (`role="dialog"`, `aria-modal`, `aria-label`); `aria-expanded`; Tab ciklas fokusuojamiems elementams panelei; nuorodos `[data-mobile-menu-link]` uždaro panelę. |
| Hash → fokusas | `Page.astro` (inline) | Po `DOMContentLoaded` / `hashchange` elementas iš inkaro gauna `focus({ preventScroll: true })`. |
| Skip link | `Page.astro` | Nuoroda į `#ctx-company` (klaviatūros naudotojams). |

### 2. Globalus kontekstas ir moduliai (`#context`)

| Interakcija | Vieta | Mechanika |
|-------------|-------|-----------|
| Konteksto laukai | `ExecutiveModules.astro` | `data-context-field="company"|"goal"|"constraint"|"bottleneck"` — skaito `InteractiveCopy.astro` (`readContext`) kompiliuojant promptą. |
| Modulio „Copy full prompt“ | `ExecutiveModules.astro` + `InteractiveCopy.astro` | `data-module-copy={id}` — `buildCompiledPrompt(...)`, tada `clipboard.writeText`. |
| Custom modulis | `ExecutiveModules.astro` | `data-custom-task`, `data-custom-output`, `data-custom-copy`, `data-custom-error`. |

### 3. Clarity practice (`#demo`)

| Interakcija | Vieta | Mechanika |
|-------------|-------|-----------|
| Scenarijaus pasirinkimas | `ClarityDemo.astro` + `InteractiveCopy.astro` | `data-scenario` mygtukai; `activeScenario`; DOM atnaujinimas `[data-demo-field]`, `[data-demo-risks]`, `[data-demo-questions]`. Antrinė zona: vienas panelis su **`[data-demo-tab]`** tabais (Details / Input), placeholder tekstu (`secondaryPanelHint`), aktyvaus tabo pakartotinis paspaudimas grąžina į placeholder. |
| Ekrano skaitytuvas | `ClarityDemo.astro` | `#demo-scenario-status` (`aria-live`), tekstas iš `demo.scenarioLiveStatus` / fallback. |
| Kopijuoti promptą | `InteractiveCopy.astro` | `[data-copy-prompt]` — kopijuoja paslėpto `<pre data-demo-field="prompt">` turinį (įterptas į scenarijaus promptą). |

### 4. Sauga, biblioteka, PDF

| Interakcija | Vieta | Mechanika |
|-------------|-------|-----------|
| Safety kopija | `SafetyCheck.astro` + `InteractiveCopy.astro` | `data-copy-i18n="safety.prompt"` ir susieti `data-copy-label-i18n` / `data-copy-copied-i18n`. |
| Biblioteka — kategorija | `PromptLibrary.astro` (inline script) | `[data-library-cat]` / `[data-library-panel]` — rodo vieną panelę, `aria-pressed`, CSS klasės aktyviam mygtukui. |
| Biblioteka — kopijuoti vieną promptą | `PromptLibrary.astro` + `InteractiveCopy.astro` | `data-copy-i18n` su keliu `library.categories.{i}.prompts.{j}.prompt`. |
| PDF fallback | `InteractiveCopy.astro` | `a[data-kit-download]`: jei `.pdf` `HEAD` → 404, `href` perrašomas į `.html`, nuimamas `download`. |

### 5. Kopijavimo užuomina (toast)

| Interakcija | Vieta | Mechanika |
|-------------|-------|-----------|
| Rankinis kopijavimas | `Page.astro` + `InteractiveCopy.astro` | `[data-copy-manual-hint]` rodo `a11y.copyManual`; klasė `.safe-bottom`; paslėpta po timeout. |

### 6. Kliento kopijos payload

| Šaltinis | Vieta |
|----------|-------|
| `window.__PA_COPY__` | Sugeneruotas `Page.astro` iš `buildClientCopyPayload` — demo scenarijai, moduliai, taisyklės, etiketės kopijos būsenoms. |

---

## Kaip naudoti šį dokumentą

- **Prieš release:** suderinti su [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) (mobilus užduoties punktas).
- **Keičiant `Hero` ar kopijavimą:** atnaujinti **Dokumentuotos interakcijos** lentelę ir datą šio failo viršuje.
- **Įgyvendinus P1/P2:** perkelti iš „Trikdžiai“ į CHANGELOG ir sutrumpinti aptikimus čia arba pažymėti „išspręsta“ su data.
