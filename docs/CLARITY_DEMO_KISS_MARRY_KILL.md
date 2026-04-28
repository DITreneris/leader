# ClarityDemo skaidrė — KISS · Marry · Kill

Tikslas: demo sekcija (`#demo`, `ClarityDemo.astro`) per kelias sekundes skaitoma kaip **įrankis**, ne kaip konsultacinė „schema viename sakinyje“, su **viena logika** tarp kortelių ir kopijuojamo prompto.

Šaltinis turiniui: `src/content/locales/en.ts` ir `src/content/locales/lt.ts` → `demo` (scenario chips, brief, disclosures, follow-up).

---

## KISS — greitai, mažai rizikos, iš karto aiškiau

**Ką laikyti (neliesti be priežasties)**

- Scenarijų **chips** + trijų laukų **Brief** (sprendimas → kitas veiksmas → įžvalga) — gera vizualinė hierarchija.
- **Copy prompt** + `data-*` kabliukai (`InteractiveCopy.astro`) — veikianti interakcija.
- **Show details / Show input** — disclosure modelis (ne apkrauna pagal nutylėjimą).
- LT paantraštė jau santykinai konkreti: *„Sprendimas ir kitas veiksmas, kai reikia.“* — geras KISS atskaitos tonas EN.

**Greiti pataisymai (tik copy, abiejose kalbose)**

1. **EN `demo.subtitle`** — pakeisti „Decision, owner-shaped next action, on demand.“ į **vieną konkrečią mintį** be marketinginių tuštumų (analogiška LT arba: sprendimas + kitas žingsnis vienu sakiniu).
2. **Communication (ir analogiškai kiti scenarijai, jei sakiniai „tankūs“)**  
   - **Decision:** išmesti arba pakeisti neoperacionalizuotą „honest frame“ / „sąžiningą rėmą“ į **trumpą pasirinkimą**: kokybė vs apimtis vs resursai (be moralinės etiketės).  
   - **Next action:** ne penki reikalavimai vienoje eilutėje — **du trumpi sakiniai** arba **trumpas sąrašas** tais pačiais žodžiais (copijuojamas tekstas `en.ts`/`lt.ts` gali naudoti `\n` tik jei komponente `white-space` leis — dabar `<p>`; saugiau: **2 sakiniai** arba **„Įtrauk: …“ + 3–5 trumpi fragmentai per kablelį → geriau 2 eilutės proza**).
3. **`communication.prompt` (EN + LT)** — suderinti su kortelėmis: į promptą įrašyti tą pačią struktūrą (faktas, priežastis, poveikis, kas nesikeičia, kitas žingsnis), tonas: aišku, ramiai, ne gynybiškai.

**Priėmimo kriterijus (KISS sprintui)**

- Paantraštė skaitoma per 2 s be „kas čia buzzword‘ai“.
- Communication bloke nėra žodžių, kurių negalima patikrinti („švarus rėmas“, „owner-shaped“).
- Kopijuojamas promptas **gali būti įklijuotas** ir duoda tą pačią logiką, ką rodo Brief.

---

## MARRY — į ką investuoti ilgiau (branduolys)

1. **Vienas kontraktas: Brief ↔ prompt**  
   Kiekvienam iš 5 scenarijų: `decision`, `action`, `insight` ir `prompt` turi būti **iš tos pačios „istorijos“**; `prompt` neturi būti bendras placeholderis, jei viršuje parodyta specifinė struktūra.

2. **2 sekundžių testas visiems scenarijams**  
   Kiekvienam: vienas pagrindinis sąmonės vienetas per lauką; jei neįmanoma — **skaidyti į du sakinius** (copy lygis, be naujo UI).

3. **Dvikalbystė kaip taisyklė**  
   Bet koks `demo.scenarios.*` pakeitimas — **visada EN + LT** viename PR / vienoje iteracijoje (`executive-landing-improvement` SKILL).

4. **(Fazė 2, pasirinktinai)** „Santuoka“ su kodu: generuoti kopijuojamą tekstą iš žinomų laukų (`decision`+`action`+`insight`+`input`), kad **nebegalėtų išsikirsti** copy ir prompt. Tai jau `ClarityDemo.astro` / `InteractiveCopy.astro` pokytis — planuoti atskirai, po copy sutvarkymo.

---

## KILL — ką nutraukti / nebeleisti grįžti

| Kas | Kodėl |
|-----|--------|
| **„Owner-shaped“**, **„on demand“** ir panašūs diferenciatoriai be apibrėžimo | Skaitosi kaip tuščias SaaS kalbos sluoksnis, ne instrukcija. |
| **„Honest frame“ / „sąžiningas rėmas“** be kriterijaus | Neįvykdoma taisyklė; pakeisti konkrečiu pasirinkimu. |
| **Viename sakinyje 5+ imperatyvų** (nebent sąraše ar atskirose eilutėse) | Suteikia „spagečių“ jausmą; mažina momentinį supratimą. |
| **Promptas, kuris ignoruoja matomą briefą** | Naikina pasitikėjimą demo; laikyti klaida, ne funkcija. |

---

## Vykdymo eiliškumas (rekomenduojama)

1. EN subtitle + Communication EN/LT (KISS).  
2. **Prompt** sutapimas su Communication struktūra (KISS).  
3. Peržiūra likusių keturių scenarijų pagal tą patį 2 s + Brief↔prompt testą (Marry light).  
4. Jei po to vis dar jaučiasi dubliavimas su `#context` — atskiras sprendimas (informacinė arkliuko nuoroda virš demo arba 1 eilutė „Čia pavyzdys be tavo konteksto lauko“).

---

## Failai

| Kas | Kur |
|-----|-----|
| Demo copy | `src/content/locales/en.ts`, `src/content/locales/lt.ts` → `demo` |
| Markup | `src/components/ClarityDemo.astro` |
| Scenarijų perjungimas, kopijavimas | `src/components/InteractiveCopy.astro` |
| Copy į naršyklę | `src/layouts/Page.astro` → `__PA_COPY__` |
