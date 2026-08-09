# Copy audit pagal skaidrę (Executive OS landing)

Vienas vykdymo šaltinis: gramatika, stilius, EN/LT lygiavimas, a11y ir techniniai nuotėkiai. **Kanoninė seka** = [`src/layouts/Page.astro`](../src/layouts/Page.astro) (kūno `main` eiliškumas).

**Locale šaltinis:** [`src/content/locales/en.ts`](../src/content/locales/en.ts), [`src/content/locales/lt.ts`](../src/content/locales/lt.ts) per [`src/content/copy.ts`](../src/content/copy.ts).

**Taisyklės:** [`.cursor/rules/language-standard.mdc`](../.cursor/rules/language-standard.mdc).

**US tonas (hero, postai, skaidrės):** gilesnei „EU formal / generic“ → **US operator** adaptacijai naudok LLM **META** iš [`PROMPTS_US_LOCALIZATION_META.md`](PROMPTS_US_LOCALIZATION_META.md) (Must / Should / Want valdo išvesties apimtį); į `en.ts` / `lt.ts` įkeldami tekstą vis tiek laikykis **language-standard** ir dviejų kalbų lygiavimo.

---

## Cross-cutting (visas puslapis)

| ID | Sritis | Pastaba | Prioritetas |
|----|--------|---------|-------------|
| CC-1 | CEO/COO lietuviškai | Vadovų segmente **palikti** CEO/COO kaip tarptautinę pareigų santrumpą; jei reikia „praskiesti“, tik **meta ar hero** vieną eilutę su funkciniu aprašu + `(CEO / COO)` skliaustuose. Biblioteka / modulių viduje palikti santrumpas. | Politika |
| CC-2 | DI vs AI | LT rinkinyje viešoje kopijoje **`DI`**, ne `AI`. EN – `AI` kur tinkama. Promptų šablonuose į DI modelį – angliškos rolės („Veik kaip CEO…“) sąmoningai. | P1 |
| CC-3 | Formalus „jūs“ | LT rinkinyje nekviesti `‑kite` / `jūsų`; mygtukai lieka infinityve (žr. language-standard). | P0 (regresijos kontrolė) |
| CC-4 | Brūkšniai LT | Visame `lt.ts` **`–`** (en dash), ne **`—`** (**P2 įgyvendinta**). | P2 |
| CC-5 | `authority.*` | Sekcija **AuthorityBridge** pašalinta **2026-04-29** — cross-cutting P0 istorinis; raktų nebėra `en.ts` / `lt.ts`. | — |
| CC-6 | EN `roiPath.printableKitLink` | „band“ → „banner“ (**P0 pataisyta**). | P0 |
| CC-7 | LT `meta.socialImageAlt` | gramatinis derinimas (**P0 pataisyta**). | P0 |
| CC-8 | LT `demo.scenarios.meeting.risks[0]` | `virs` → **`virsta`** (**P0 pataisyta**). | P0 |
| CC-9 | Hero (`Hero.astro`) | Logotipo eilutė, `aria-label`, meniu – perkelta į `a11y.*` (**P1 įgyvendinta**). LT `brandSubtag` sutampa su footer „Vadovo OS“. | P1 |
| CC-10 | Meme (`Page.astro` + `MemeMoment.astro`) | `img alt` (`memes.sequenceImageAlts`) ir sekcijos `aria-label` (`memes.sectionAriaLabel`) lokalizuoti (**P1 įgyvendinta**). | P1 |
| CC-11 | `InteractiveCopy.astro` | Fallback `manualMessage()` pagal `html[lang]` LT/EN jei trūksta `copyManual` (**P2 įgyvendinta**). | P2 |
| CC-12 | JSON-LD | **`WebPage`** `primaryImageOfPage` ImageObject su **`description: meta.socialImageAlt`**; **`FAQPage.inLanguage`** = puslapio locale (**P3**). | P3 |
| CC-US | Shipped EN = US English | `en.ts` ir kitas **viešas** angliškas tekstas — **American English**; vengti UK rašybos ir junginių (`behaviour`, `organisation`, `whilst`, ir pan.). Žr. [`.cursor/rules/language-standard.mdc`](../.cursor/rules/language-standard.mdc) — **US English (shipped default)**. **2026-08-09:** deep EN audit + max-ROI session — UK fixes; `Impact filter`; sister CTA **Practice the framework**; **Global Context Block**; prose **PromptAnatomy.app**; spine/ROI trim. | P1 |

---

## Skaidžių žemėlapis (indeksas)

| # | Skaidrė | Anchor | Pagrindiniai raktai |
|---|---------|--------|---------------------|
| 0 | Puslapio karkasas | `<head>`, skip | `meta.*`, `a11y.*`, JSON-LD |
| 1 | Hero | (header + hero blokas) | `nav.*`, `hero.*`, `heroDiagram.*` |
| 2 | Meme 1 | — | `memes.items[3]` |
| 3 | Meme 2 | — | `memes.items[0]` |
| 4 | Kontekstas + moduliai | `#context` | `modules.*` |
| 5 | Promo juosta | — | `promoBanner.*` |
| 6 | Meme 3 | — | `memes.items[2]` |
| 7 | Aiškumo praktika | `#demo` | `demo.*` |
| 8 | Meme 4 | — | `memes.items[5]` |
| 9 | Saugumo patikra | `#safety-check` | `safety.*` |
| 10 | Rinkinio CTA | `#kit` | `cta.*` |
| 11 | Penki blokai (anatomija) | `#anatomy` | `anatomy.*` |
| 12 | ROI kelias | — | `roiPath.*` |
| 13 | DUK | `#faq` | `faq.*` |
| 14 | Biblioteka | `#library` | `library.*` |
| 15 | Porinės juosta | `<footer>` | `footer.*` |

**Nebe skaidrė:** Authority tiltas (`#bridge`) — pašalinta **2026-04-29**. **BeforeAfter** (`beforeAfter.*`) — pašalinta **2026-06-09**; įrodymas konsoliduotas į hero diagramą. **Nebemontuojamas meme:** `memes.items[4]` (`meme-02-meeting-overload.png`) — **2026-04-29**, žr. [`MEME_PRIORITY_REGISTRY.md`](MEME_PRIORITY_REGISTRY.md).

---

## 0. Puslapio karkasas (head, JSON-LD, skip)

- **Failai:** [`Page.astro`](../src/layouts/Page.astro), [`pageJsonLd.ts`](../src/utils/pageJsonLd.ts)
- **Raktai:** `meta.*`, `a11y.skipLink`

**LT**

- `meta.title` / `meta.description`: SEO tankūs; po redakcijos patikrinti, ar `CEO/COO` išlieka strategiškai.
- `meta.socialImageAlt`: **P0** – gramatiškai taisyklingas aprašas (peržiūros paveikslas socialiniams tinklams ar pan.).

**EN**

- `meta.*`: aiškus value prop; vengti „tutorial“ žodyno (žr. language-standard).

**Lygiavimas**

- `og:*` ir `twitter:*` naudoja tą patį `meta.title` / `description` / `socialImageAlt` – vienas redagavimas abiem.

**Ne locale**

- `og:site_name` fiksuotas „Prompt Anatomy“ – OK kaip prekės ženklas.

**Veiksmai**

- [x] LT `socialImageAlt` P0 taisymas (žr. cross-cutting).
- [x] P3 / CC-12: JSON-LD paveikslo aprašas ir `FAQPage` kalba (žr. [`pageJsonLd.ts`](../src/utils/pageJsonLd.ts)).

---

## 1. Hero (antraštė + HeroDecisionDiagram)

- **Failai:** [`Hero.astro`](../src/components/Hero.astro), [`HeroDecisionDiagram.astro`](../src/components/HeroDecisionDiagram.astro)
- **Raktai:** `nav.*`, `hero.*` (įsk. `ctaMeta`), `heroDiagram.*`

**LT**

- `hero.title` / `subtitle`: tonas „tu“ netiesiogiai vykdomajame plane – OK.
- `heroDiagram.sample.*`: „brief“ žargonas briefe – sąmoningas; pavyzdinės eilutės turi būti vykdomojo tono (ne KPI savaitės ops).

**EN**

- `hero.title` „From AI noise to decision.“ – rinkodarinė ellipsis; formaliau būtų „… to a decision“ – neprivaloma.

**Lygiavimas**

- Pirminis (auksinis) CTA – **in-page** `href="#context"` su `hero.inPageCta` (be UTM); **2026-06-09:** `Build your decision brief`.
- Antrinis CTA – tekstinė nuoroda į PromptAnatomy su `utm_medium=hero` ir `utm_campaign=primary` (`hero.productCta`; `docs/UTM_MATRIX.md`).

**EN (shipped 2026-06-09)**

- `heroDiagram.pipeline`: Scattered input → Decision context → Decision brief (ne „Module“).
- `heroDiagram.sample`: penkios eilutės (decision, owner, risks, deadline, next action).
- `heroDiagram.connectorLabel`: „Generated brief“.

**Ne locale**

- ~~Logotipo eilutė / aria~~ – dabar iš `a11y.*` (**P1**).

**Veiksmai**

- [x] P1: Hero kietojo teksto i18n (`a11y.logoAriaLabel`, `brandSubtag`, `openMobileMenu`, `nav*Aria`, `languageToggleAria`).
- [x] **2026-04-28:** Du hero CTA (`Hero.astro`): `#context` (auksinis, be UTM) + PA outbound (kontūrinis, su UTM).
- [x] **2026-06-09:** Konversijos kopija + hero diagramos modernizacija; antrinis CTA → tekstinė nuoroda.

---

## 2. Meme 1 (`memes.items[3]`)

- **Failai:** [`MemeMoment.astro`](../src/components/MemeMoment.astro), [`Page.astro`](../src/layouts/Page.astro) (eil. ~111–121)
- **Raktai:** `memes.items[3]` (`[title, body]`)

**LT / EN**

- Turinio poros suvienodintos per indeksą – gerai laikytis `VISUAL_CONTENT_MAP`.

**Ne locale**

- ~~`Page.astro` `alt`~~ – dabar `memes.sequenceImageAlts[]`.
- ~~`MemeMoment` sekcijos `aria-label`~~ – `memes.sectionAriaLabel`.
- **2026-04-29:** `MemeMoment` — kai `side="right"`, `lg` tinklelis **`0.75fr | 1.25fr`**, kad meme visada būtų **plačiame** stulpelyje; visi mounted PNG master **1600×900** — žr. [`VISUAL_CONTENT_MAP.md`](VISUAL_CONTENT_MAP.md), [`public/assets/memes/README.md`](../public/assets/memes/README.md).

**Veiksmai**

- [x] P1: `alt` / `aria-label` iš locale.

---

## 3. Meme 2 (`memes.items[0]`)

- **Pastabos:** kaip Meme 1; paveikslas `meme-01-ai-chaos.png`, `alt` EN `Page.astro`.

**Veiksmai**

- [x] P1: paveikslo `alt` – `memes.sequenceImageAlts` (žr. CC-10).

---

## 5. Kontekstas + moduliai (`#context`)

- **Failai:** [`ExecutiveModules.astro`](../src/components/ExecutiveModules.astro), [`InteractiveCopy.astro`](../src/components/InteractiveCopy.astro) (JS kompiliavimas)
- **Raktai:** `modules.context`, `modules.contextFootnote`, `modules.contextMapAriaLabel`, `modules.contextMapInjectLabel`, `modules.contextMapCaption`, `modules.items[]`, `modules.custom`, `modules.rulesPreview`, `modules.roleLine`, fallback placeholderiai JS
- **EN (shipped Option A):** `modules.eyebrow` = **Step 1 · Define context**; `workflowAriaLabel` = **Within Step 1: …**; `startHere` bridges to scenario via Promo without repeating Step numbers (no second gold CTA here). Žr. [`USER_JOURNEY.md`](USER_JOURNEY.md).

**LT**

- `context.badge` **„Išlieka“** (žr. P2).
- Modulių **eyebrow** ir pavyzdinės **`outputExampleJson`** eilutės – **LT** (**P3**); anglų etiketės pakeistos (pvz. Raudonoji komanda, Nuotaikos skaitymas, …).
- `roleLine`: „CEO patarėjas“ – OK su CEO politika (CC-1).

**EN**

- Vienodas modulių tonas su library.

**Lygiavimas**

- `InteractiveCopy` fallback placeholderiai (`[size, industry]` ir kt.) kai laukai tušti – anglų; žr. komentarą `InteractiveCopy.astro` (**P2**).

**Veiksmai**

- [x] P2: LT `context.badge` → **„Išlieka“** (EN lieka `PERSISTENT`).
- [x] P2: `InteractiveCopy` – komentaras apie angliškus placeholderius tuštiems laukams.
- [x] P3: modulių antraštės + pavyzdinės išvestys LT (`modules.items`, `modules.custom`).
- [x] **2026-04-28:** `contextCopyHint` (`ExecutiveModules.astro`) — aiškumas, kad kontekstas įeina per modulio **Copy full prompt**, ne kaip atskiras blokas.
- [x] **2026-04-29:** `modules.contextFootnote` — vienas sutrauktas puslapinio teksto blokas vietoj `contextWarning` + `contextCopyHint`; [`ContextFieldMap.astro`](../src/components/ds/ContextFieldMap.astro) (`ExecutiveModules.astro`) — 4 laukų → moduliai schema.

---

## 6. Promo juosta

- **Failai:** [`PromoBanner.astro`](../src/components/PromoBanner.astro)
- **Raktai:** `promoBanner.*`

**LT / EN**

- CTA hierarchija sutampa su konversijos kopėčiomis.
- **EN (shipped Option A):** `promoBanner.eyebrow` = **Prove it next**; `ariaLabel` = **Prove on a scenario before the full product.** Gold → `#demo`.

**Veiksmai**

- [x] **2026-04-28:** Hero/meta ir `promoBanner.*` vs `cta.*` — skirtingas funnelis (vidurinis **handoff** į PA + „demo pirmiau“ vs `#kit` **atsisiuntimas** + PA); antraštės ir body nekopijuoja tos pačios frazės; EN/LT lygiagrečiai.
- [x] **2026-04-28:** `promoBanner.secondaryCta` nebe „static demo“ — **practice / clarity** (`Try the clarity practice first` / `Pirmiau – aiškumo praktika`); sinchronizuota su `nav.proof` ir `demo.eyebrow`.
- [x] **2026-06-09:** Funnel continuity (tester #05) — gold **`Start the scenario`** → `#demo`; outlined PA **`Open the full app`**; tertiary sister → cloud. Meme index 2: `memes.delegationBridge` ties Delegation chip (not “scenario 1 of 5”).
- [x] **2026-08-09:** Promo title *Prove the framework on one scenario.*; tertiary **`Practice the framework`**; module **Impact filter**; context UI **Global Context Block**; spine micro-cut (40 zero-loss words).

---

## 7. Meme 3 (`memes.items[2]`)

- **Pastabos:** kaip Meme 1–2 (`delegation-bottleneck`).

**Veiksmai**

- [x] P1: `alt` – `memes.sequenceImageAlts` (žr. CC-10).

---

## 8. Aiškumo praktika (`#demo`)

- **Ženklinimas (EN/LT):** `nav.proof` = **Example** (friendly nav). `demo.eyebrow` = **Step 2 · Prove on a scenario** (macro ladder). `demo.followUpEyebrow` = **Download kit next** (bridge be Step skaičiaus). Clarity practice lieka turinio/feature pavadinime FAQ ir body kur reikia.

- **Failai:** [`ClarityDemo.astro`](../src/components/ClarityDemo.astro), [`InteractiveCopy.astro`](../src/components/InteractiveCopy.astro)
- **Raktai:** `demo.*`, `demo.scenarios.*` (incl. `title`, optional `decisionBullets`)

**LT**

- `scenarios.meeting.risks[0]`: **P0** `virsta` (žr. CC-8).
- Scenarijuose `ARR`, `Q3`, anglų terminai – segmento norma; ne traktuoti kaip klaidų be politikos keitimo.
- `insight` etiketė vs language-standard „insight avoidance“ – galima vėliau pervadinti į „signalas“ / „esmė“ (**P2** redakcija).

**EN (shipped 2026-06-09 — tester #06)**

- Headline: *Pick a scenario. Structure the decision.* — ne „Get the brief“; CTA **Copy decision prompt**.
- Vienas `max-w-5xl` panelis: chips + scenario `title` + brief stack (bottom line → decision → how to run it) + 3 tabai (**Risks and questions** / **Required input** / **Prompt preview**) + paste strip **reveal-on-copy** (parity su `#context`).
- Meeting: `decisionBullets` sąrašas; kiti scenarijai — pastraipa.

**Lygiavimas**

- Kiekvienas scenarijus turi paralelę LT/EN – po keitinių patikrinti abu. Nauji raktai (`title`, `promptTab`, …) — `lt.ts` angliški placeholderiai.

**Veiksmai**

- [x] LT meeting risk P0.
- [x] P2: bendra etiketė `demo.insight` LT → **„Pagrindinis signalas“**.
- [x] **2026-06-09:** Unified practice module UX + copy honesty (PR1 plan).

---

## 9. Meme 4 (`memes.items[5]`, `reward_2.png`)

- **Pastabos:** kaip kiti memai; turinys apie spausdinamą rinkinį.

**Veiksmai**

- [x] P1: `alt` – `memes.sequenceImageAlts` (žr. CC-10).

---

## 10. Saugumo patikra (`#safety-check`)

- **Failai:** [`SafetyCheck.astro`](../src/components/SafetyCheck.astro)
- **Raktai:** `safety.*`

**LT**

- `safety.title` „Naudok prieš siųsdami DI išvestį“ – taisyklingas DI vartojimas.

**Ne locale**

- ~~Eilutėse naudojamos~~ ketvirtajam punktui **`●`** vietoj silueto simbolio (**P2** – mažiau „emoji“ rizikos).

**Veiksmai**

- [x] P2: paskutinės eilutės ženklas pakeistas į geometrinį (**●**); ✓ / ⚠ / ? palikti kaip tipografinius simbolius (`aria-hidden`).

---

## 11. Rinkinio CTA (`#kit`)

- **Failai:** [`CourseCTA.astro`](../src/components/CourseCTA.astro)
- **Raktai:** `cta.*`

**LT / EN**

- „Pasiimk“ / „Take“ – imperatyvas antraštėje; derina su CTA agresyvumu.
- **EN (shipped Option A):** `cta.eyebrow` = **Step 3 · Download the kit**; `nav.kitPdf` = **What you get** (unchanged).

**Veiksmai**

- [x] **2026-04-28:** [`CourseCTA.astro`](../src/components/CourseCTA.astro) → `assets/downloads/executive-operating-kit.pdf` (failas repo); antrinė PA nuorašos UTM = `utm_source=leader&utm_medium=lead_magnet&utm_campaign=executive_prompt_library` — sutampa su [`UTM_MATRIX.md`](UTM_MATRIX.md). PDF statiniu URL be UTM — kaip matricoje.

---

## 12. Penki blokai (anatomija)

- **Failai:** [`PromptAnatomy.astro`](../src/components/PromptAnatomy.astro)
- **Raktai:** `anatomy.*` (įsk. `previewAriaLabel`, `definitionLabel`, `exampleLabel`, `onPageLead`, `referenceNote`; `items[].id|title|body|example|onPageLabel|onPageHref`)
- **Techninė pastaba:** sekcija **`id="anatomy"`**, antraštė **`#anatomy-heading`**. Uždarytoje santraukoje — 5 blokų žetonai + `referenceNote` (reference, ne forma). Išskleistame tinklelyje — kiekvienam blokui: apibrėžimas, **Example** juosta (visada užpildyta), **On this page** nuoroda.

**EN (shipped 2026-06-09 — reference UX)**

- `expandSummary`: *Reference — names the framework (not a form)*; subtitle nurodo, kad blokai jau įdiegti aukščiau.
- On-page nuorodos: Role/Context → `#context` / `#ctx-company`; Decision Logic/Output → `#demo`; Quality Check → `#safety-check`.
- Vizualiai: lengvos bordered kortelės, ne tušti input laukai.
- **EN (shipped Option A):** `anatomy.stepPrefix` = **Block** (ne Step); `referenceNote` nurodo, kad tai ne action sections (Context, Practice, Safety).

**Veiksmai**

- [x] P2: **`#anatomy`** + lokalizuotas žingsnio priešdėlis (`anatomy.stepPrefix`).
- [x] **2026-04-29:** uždarytos būsenos **preview** — blokų pavadinimų žetonai + `anatomy.previewAriaLabel`.
- [x] **2026-06-09:** reference bridge — example strip + in-page links; `items` objektų schema.

---

## 13. ROI kelias

- **Failai:** [`RoiPath.astro`](../src/components/RoiPath.astro)
- **Raktai:** `roiPath.*` (įsk. `steps[]`, `total`, `printableKitLink`)

**EN**

- `printableKitLink`: **P0** „banner“ (žr. CC-6).
- **EN (shipped Option A):** `panelProgressTemplate` = **Move {current} of 5**; `entryCta` = **Copy & run Move 1**; `title` = **One move today. Same rhythm each week.** — ne macro Step 1.

**LT**

- `printableKitLink` „Atidaryti atsisiuntimo juostą“ – suprantama; „juosta“ = UI download juosta – OK.

**Veiksmai**

- [x] EN `printableKitLink` P0.

---

## 14. DUK (`#faq`)

- **Failai:** [`Faq.astro`](../src/components/Faq.astro)
- **Raktai:** `faq.sectionTitle`, `faq.items[]`

**LT**

- Atsakymai aiškiai neigia duomenų siuntimą – gerai.
- Trečiame klausime CEO/COO – CC-1 (įterptas naujas antras FAQ apie įklijavimą į asistentus).
- **2026-04-28 (SEO iter. 2):** antras FAQ – intent įklijuoti į ChatGPT / Claude / Gemini; **DI** terminology, prekės ženklų pavadinimai įprasti.

**EN**

- „Quick answers“ – OK.
- **2026-04-28 (SEO iter. 2):** second FAQ slot – paste-into-assistant intent (after privacy); answer aligned with `beforeAfter.workflowLicenseNote`.
- **2026-06-09 (launch readiness):** FAQ Q1 + Executive OS answer distinguish client-side brief content from anonymous page views on `promptanatomy.pro`; `pasteIntoAssistant.lead` no longer claims “nothing leaves this page” (paste strip accuracy).
- **EN (shipped Option A):** FAQ Q1 answer references Global Context and Clarity practice by name (no Step numbers); `demo.followUpEyebrow` = **Download kit next**; JSON-LD demo label = **Step 2 clarity practice section**.

**JSON-LD**

- FAQ tekstas ateina iš tų pačių stringų – sinchronas su matomu HTML.

**Veiksmai**

- [x] **2026-04-28:** `npm run build` — 0 klaidų; `FAQPage` JSON-LD [`pageJsonLd.ts`](../src/utils/pageJsonLd.ts) map’ina `faq.items[]` (įskaitant `bullets` per `faqAnswerTextForSchema`).

---

## 15. Biblioteka (`#library`)

- **Failai:** [`PromptLibrary.astro`](../src/components/PromptLibrary.astro)
- **Raktai:** `library.*` (įsk. **`library.summaryLead`** vietoj `scanHint` + `instructions`), kategorijos, `prompts[]`, `outcome`, ilgi promptų šablonai

**LT**

- Kategorijos „CEO sprendimai“ / „COO vykdymas“ – CC-1.
- Promptų viduje šablonai – **instrukcijos LT**; pavyzdinių išvesčių blokai **`#context`** moduliuose lokalizuoti (**P3**). Visas **35 bibliotekos** rinkinys buvo jau lietuviškas (instrukcijos į DI).

**EN**

- Library titles sentence case where applicable.

**Veiksmai**

- [x] P3: katalogo 35× promptų instrukcijos LT (be papildomų keitinių); modulių pavyzdžiai – skaidrė **5**.

---

## 16. Porinės juosta

- **Failai:** [`Page.astro`](../src/layouts/Page.astro) footer
- **Raktai:** `footer.*`

**LT**

- ~~`brand` „Vadovo OS“ vs hero~~ – historical; LT UI frozen. Entity line uses EN hub contract placeholders in `lt.ts`.

**EN**

- Hub QW1b entity line: `footer.brand` + `footer.entityLink` — `Part of Prompt Anatomy · Training & checkout → promptanatomy.app` (exact). Executive OS kit reassurance lives in `footer.tagline`.

**Ne locale**

- Entity href via `buildEntityFooterUrl()` (`utm_source=pro`).

**Veiksmai**

- [x] P1: footeryje `aria-label` iš `a11y.footerLegalNavAria`.
- [x] **2026-08-09:** Hub entity footer (QW1b) integrated; founder remains on copyright line.

---

## Priedas: nešviečianti / istoriniai raktai

Anksčiau buvo `flowScheme`, `heroTrust`, `quickPractice`, `practiceSafety` lokaliuose failuose ir neįmontuoti komponentai. **2026-04-28** tie raktai išimti iš [`en.ts`](../src/content/locales/en.ts) / [`lt.ts`](../src/content/locales/lt.ts); `FlowScheme` / `HeroTrust` / `QuickPractice` komponentai pašalinti. Atkūrimui žiūrėk git istoriją.

## Vykdymo eiliškumas (rekomenduojama)

1. Uždaryti visus **P0** (cross-cutting + pažymėti skaidrėse).
2. **P1**: Hero / Meme `alt`+`aria`, footer teisinių nuorodų landmark, Hero ↔ footer LT prekės ženklo eilutė – **uždaryta** (žr. cross-cutting CC-9–10).
3. **P2**: ~~brūkšniai~~, ~~`id="anatomy"`~~, konteksto žyma, demo etiketė, clipboard fallback, SafetyCheck ženklas – **uždaryta** (žr. CC-4, CC-11, skaidrės 3, 5, 8, 10, 13).
4. **P3**: JSON-LD (**CC-12**), modulių pavyzdinių išvesčių LT, pirmojo memo `alt` sutapimas (`memeSequenceAlts[0]`), biblioteka – veiksmų nereikia (pilnos instrukcijos jau LT). **uždaryta**
5. Tolimesni eksperimentai: library PDF rinkinio vertimas į atskirą formatą ir pan.

---

*Dokumento versija sukurta pagal planą „Copy audit by slide“; atnaujinkite šį failą atlikdami copy P0/P1/P2/P3 darbus.*
