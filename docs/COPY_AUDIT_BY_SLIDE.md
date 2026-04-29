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
| CC-5 | EN `authority.sisterTitle` | buvo lietuviškas tekstas anglų faile (**P0 pataisyta**: angliškas pavadinimas). | P0 |
| CC-6 | EN `roiPath.printableKitLink` | „band“ → „banner“ (**P0 pataisyta**). | P0 |
| CC-7 | LT `meta.socialImageAlt` | gramatinis derinimas (**P0 pataisyta**). | P0 |
| CC-8 | LT `demo.scenarios.meeting.risks[0]` | `virs` → **`virsta`** (**P0 pataisyta**). | P0 |
| CC-9 | Hero (`Hero.astro`) | Logotipo eilutė, `aria-label`, meniu – perkelta į `a11y.*` (**P1 įgyvendinta**). LT `brandSubtag` sutampa su footer „Vadovo OS“. | P1 |
| CC-10 | Meme (`Page.astro` + `MemeMoment.astro`) | `img alt` (`memes.sequenceImageAlts`) ir sekcijos `aria-label` (`memes.sectionAriaLabel`) lokalizuoti (**P1 įgyvendinta**). | P1 |
| CC-11 | `InteractiveCopy.astro` | Fallback `manualMessage()` pagal `html[lang]` LT/EN jei trūksta `copyManual` (**P2 įgyvendinta**). | P2 |
| CC-12 | JSON-LD | **`WebPage`** `primaryImageOfPage` ImageObject su **`description: meta.socialImageAlt`**; **`FAQPage.inLanguage`** = puslapio locale (**P3**). | P3 |
| CC-US | Shipped EN = US English | `en.ts` ir kitas **viešas** angliškas tekstas — **American English**; vengti UK rašybos ir junginių (`behaviour`, `organisation`, `whilst`, ir pan.). Žr. [`.cursor/rules/language-standard.mdc`](../.cursor/rules/language-standard.mdc) — **US English (shipped default)**. **2026-04-28:** grep `en.ts` + `public/assets/downloads/*.html` — UK šablonų atitikmenų nėra; **banga (kitas etapas):** pakartotinis grep po konversijos/atitikties copy — vis dar be UK žodžių šablonų. | P1 |

---

## Skaidžių žemėlapis (indeksas)

| # | Skaidrė | Anchor | Pagrindiniai raktai |
|---|---------|--------|---------------------|
| 0 | Puslapio karkasas | `<head>`, skip | `meta.*`, `a11y.*`, JSON-LD |
| 1 | Hero | (header + hero blokas) | `nav.*`, `hero.*`, `heroArtifact.*`, `heroBento.*` |
| 2 | Meme 1 | — | `memes.items[3]` |
| 3 | Prieš / po | — | `beforeAfter.*` |
| 4 | Meme 2 | — | `memes.items[0]` |
| 5 | Kontekstas + moduliai | `#context` | `modules.*` |
| 6 | Promo juosta | — | `promoBanner.*` |
| 7 | Meme 3 | — | `memes.items[2]` |
| 8 | Aiškumo praktika | `#demo` | `demo.*` |
| 9 | Meme 4 | — | `memes.items[5]` |
| 10 | Saugumo patikra | `#safety-check` | `safety.*` |
| 11 | Rinkinio CTA | `#kit` | `cta.*` |
| 12 | Authority tiltas | `#bridge` | `authority.*` |
| 13 | Penki blokai (anatomija) | `#anatomy` | `anatomy.*` |
| 14 | ROI kelias | — | `roiPath.*` |
| 15 | Meme 5 | — | `memes.items[4]` |
| 16 | DUK | `#faq` | `faq.*` |
| 17 | Biblioteka | `#library` | `library.*` |
| 18 | Porinės juosta | `<footer>` | `footer.*` |

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

## 1. Hero (antraštė + HeroBento)

- **Failai:** [`Hero.astro`](../src/components/Hero.astro), [`HeroBento.astro`](../src/components/HeroBento.astro)
- **Raktai:** `nav.*`, `hero.*`, `heroArtifact.*`, `heroBento.*`

**LT**

- `hero.title` / `subtitle`: tonas „tu“ netiesiogiai vykdomajame plane – OK.
- `heroArtifact`: „brief“ žargonas – sąmoningas (`brief'o` vietoje galima vienoda „brief“/„briefas forma visur – P2).

**EN**

- `hero.title` „From AI noise to decision.“ – rinkodarinė ellipsis; formaliau būtų „… to a decision“ – neprivaloma.

**Lygiavimas**

- Pirminis (auksinis) CTA – **in-page** `href="#context"` su `hero.secondaryCta` (be UTM).
- Antrinis (kontūrinis) CTA keliauja į PromptAnatomy su `utm_medium=hero` ir `utm_campaign=primary` (`docs/UTM_MATRIX.md`).

**Ne locale**

- ~~Logotipo eilutė / aria~~ – dabar iš `a11y.*` (**P1**).

**Veiksmai**

- [x] P1: Hero kietojo teksto i18n (`a11y.logoAriaLabel`, `brandSubtag`, `openMobileMenu`, `nav*Aria`, `languageToggleAria`).
- [x] **2026-04-28:** Du hero CTA (`Hero.astro`): `#context` (auksinis, be UTM) + PA outbound (kontūrinis, su UTM).

---

## 2. Meme 1 (`memes.items[3]`)

- **Failai:** [`MemeMoment.astro`](../src/components/MemeMoment.astro), [`Page.astro`](../src/layouts/Page.astro) (eil. ~111–121)
- **Raktai:** `memes.items[3]` (`[title, body]`)

**LT / EN**

- Turinio poros suvienodintos per indeksą – gerai laikytis `VISUAL_CONTENT_MAP`.

**Ne locale**

- ~~`Page.astro` `alt`~~ – dabar `memes.sequenceImageAlts[]`.
- ~~`MemeMoment` sekcijos `aria-label`~~ – `memes.sectionAriaLabel`.

**Veiksmai**

- [x] P1: `alt` / `aria-label` iš locale.

---

## 3. Prieš / po

- **Failai:** [`BeforeAfter.astro`](../src/components/BeforeAfter.astro)
- **Raktai:** `beforeAfter.*`

**LT**

- `promptBody` / `promptAnatomyBody`: aiškūs, vykdomasis tonas – gerai.
- Skyryba: ilgieji brūkšniai – žr. CC-4.

**EN**

- Headline sentence case – laikytis.

**Veiksmai**

- [x] P2: brūkšnių suvienodinimas `lt.ts` (žr. CC-4).

---

## 4. Meme 2 (`memes.items[0]`)

- **Pastabos:** kaip Meme 1; paveikslas `meme-01-ai-chaos.png`, `alt` EN `Page.astro`.

**Veiksmai**

- [x] P1: paveikslo `alt` – `memes.sequenceImageAlts` (žr. CC-10).

---

## 5. Kontekstas + moduliai (`#context`)

- **Failai:** [`ExecutiveModules.astro`](../src/components/ExecutiveModules.astro), [`InteractiveCopy.astro`](../src/components/InteractiveCopy.astro) (JS kompiliavimas)
- **Raktai:** `modules.context`, `modules.contextFootnote`, `modules.contextMapAriaLabel`, `modules.contextMapInjectLabel`, `modules.contextMapCaption`, `modules.items[]`, `modules.custom`, `modules.rulesPreview`, `modules.roleLine`, fallback placeholderiai JS

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

**Veiksmai**

- [x] **2026-04-28:** Hero/meta ir `promoBanner.*` vs `cta.*` — skirtingas funnelis (vidurinis **handoff** į PA + „demo pirmiau“ vs `#kit` **atsisiuntimas** + PA); antraštės ir body nekopijuoja tos pačios frazės; EN/LT lygiagrečiai.
- [x] **2026-04-28:** `promoBanner.secondaryCta` nebe „static demo“ — **practice / clarity** (`Try the clarity practice first` / `Pirmiau – aiškumo praktika`); sinchronizuota su `nav.proof` ir `demo.eyebrow`.

---

## 7. Meme 3 (`memes.items[2]`)

- **Pastabos:** kaip Meme 1–2 (`delegation-bottleneck`).

**Veiksmai**

- [x] P1: `alt` – `memes.sequenceImageAlts` (žr. CC-10).

---

## 8. Aiškumo praktika (`#demo`)

- **Ženklinimas (EN/LT):** bendra etikete vadinama **`Clarity practice` / `Aiškumo praktika`** — `nav.proof`, `demo.eyebrow`, Promo antrinė nuoroda `promoBanner.secondaryCta`.

- **Failai:** [`ClarityDemo.astro`](../src/components/ClarityDemo.astro)
- **Raktai:** `demo.*`, `demo.scenarios.meeting | report | decision | delegation | communication`

**LT**

- `scenarios.meeting.risks[0]`: **P0** `virsta` (žr. CC-8).
- Scenarijuose `ARR`, `Q3`, anglų terminai – segmento norma; ne traktuoti kaip klaidų be politikos keitimo.
- `insight` etiketė vs language-standard „insight avoidance“ – galima vėliau pervadinti į „signalas“ / „esmė“ (**P2** redakcija).

**EN**

- Demo rizikų sąrašai – Oxford comma kur sąrašai (EN).

**Lygiavimas**

- Kiekvienas scenarijus turi paralelę LT/EN – po keitinių patikrinti abu.

**Veiksmai**

- [x] LT meeting risk P0.
- [x] P2: bendra etiketė `demo.insight` LT → **„Pagrindinis signalas“**.

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

**Veiksmai**

- [x] **2026-04-28:** [`CourseCTA.astro`](../src/components/CourseCTA.astro) → `assets/downloads/executive-operating-kit.pdf` (failas repo); antrinė PA nuorašos UTM = `utm_source=leader&utm_medium=lead_magnet&utm_campaign=executive_prompt_library` — sutampa su [`UTM_MATRIX.md`](UTM_MATRIX.md). PDF statiniu URL be UTM — kaip matricoje.

---

## 12. Authority tiltas (`#bridge`)

- **Failai:** [`AuthorityBridge.astro`](../src/components/AuthorityBridge.astro)
- **Raktai:** `authority.*`

**LT**

- `sisterTitle` / `sisterText` / `sisterLink`: DI / CEO/COO – suderinta su CC-1, CC-2.

**EN**

- `sisterTitle`: **P0** – anglų kalba (ne LT santrauka).
- `motherText`, `sisterText`: „AI operating system“ – EN OK.

**Lygiavimas**

- Po EN `sisterTitle` taisymo – patikrinti, ar prasme atitinka LT `sisterTitle`.

**Veiksmai**

- [x] EN `authority.sisterTitle` P0.

---

## 13. Penki blokai (anatomija)

- **Failai:** [`PromptAnatomy.astro`](../src/components/PromptAnatomy.astro)
- **Raktai:** `anatomy.*` (įsk. `previewAriaLabel` — uždarytos būsenos žetonų sąrašo `aria-label`)
- **Techninė pastaba:** sekcija **`id="anatomy"`**, antraštė **`#anatomy-heading`** (nav / deep link). Uždarytoje santraukoje rodomi **5 blokų pavadinimai** kaip kompaktiški žetonai; išskleistame tinklelyje — pilni aprašymai.

**Veiksmai**

- [x] P2: **`#anatomy`** + lokalizuotas žingsnio priešdėlis (`anatomy.stepPrefix`).
- [x] **2026-04-29:** uždarytos būsenos **preview** — blokų pavadinimų žetonai + `anatomy.previewAriaLabel`.

---

## 14. ROI kelias

- **Failai:** [`RoiPath.astro`](../src/components/RoiPath.astro)
- **Raktai:** `roiPath.*` (įsk. `steps[]`, `total`, `printableKitLink`)

**EN**

- `printableKitLink`: **P0** „banner“ (žr. CC-6).

**LT**

- `printableKitLink` „Atidaryti atsisiuntimo juostą“ – suprantama; „juosta“ = UI download juosta – OK.

**Veiksmai**

- [x] EN `printableKitLink` P0.

---

## 15. Meme 5 (`memes.items[4]`)

- **Pastabos:** `meme-02-meeting-overload.png`, kaip kiti memai.

**Veiksmai**

- [x] P1: `alt` – `memes.sequenceImageAlts` (žr. CC-10).

---

## 16. DUK (`#faq`)

- **Failai:** [`Faq.astro`](../src/components/Faq.astro)
- **Raktai:** `faq.sectionTitle`, `faq.items[]`

**LT**

- Atsakymai aiškiai neigia duomenų siuntimą – gerai.
- Trečiame klausime CEO/COO – CC-1 (įterptas naujas antras FAQ apie įklijavimą į asistentus).
- **2026-04-28 (SEO iter. 2):** antras FAQ – intent įklijuoti į ChatGPT / Claude / Gemini; **DI** terminology, prekės ženklų pavadinimai įprasti.

**EN**

- „Quick answers“ – OK.
- **2026-04-28 (SEO iter. 2):** second FAQ slot – paste-into-assistant intent (after privacy); answer aligned with `beforeAfter.workflowLicenseNote`.

**JSON-LD**

- FAQ tekstas ateina iš tų pačių stringų – sinchronas su matomu HTML.

**Veiksmai**

- [x] **2026-04-28:** `npm run build` — 0 klaidų; `FAQPage` JSON-LD [`pageJsonLd.ts`](../src/utils/pageJsonLd.ts) map’ina `faq.items[]` (įskaitant `bullets` per `faqAnswerTextForSchema`).

---

## 17. Biblioteka (`#library`)

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

## 18. Porinės juosta

- **Failai:** [`Page.astro`](../src/layouts/Page.astro) footer
- **Raktai:** `footer.*`

**LT**

- ~~`brand` „Vadovo OS“ vs hero~~ – **suvienodinta** (`a11y.brandSubtag`).

**EN**

- „Executive OS“ – brand line.

**Ne locale**

- Nuoroda `promptanatomy.app` – fiksuota.

**Veiksmai**

- [x] P1: footeryje `aria-label` iš `a11y.footerLegalNavAria` (EN „Legal“, LT „Teisinės nuorodos“); Hero `brandSubtag` LT sutampa su `footer.brand` („Vadovo OS“).

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
