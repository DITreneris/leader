export const supportedLanguages = ["en", "lt"] as const;

export type Language = (typeof supportedLanguages)[number];

export const uiCopy = {
  en: {
    nav: {
      product: "Executive Clarity Check",
      demo: "Try the demo",
      system: "Full system",
      language: "Language",
    },
    hero: {
      eyebrow: "For CEOs and COOs who use AI, but not yet as a system",
      title: "Find the decision inside the noise.",
      subtitle:
        "Paste messy meeting notes, a report, an email thread, or a strategic question. Get the key insight, decision, risks, questions, and next action in under 5 minutes.",
      primaryCta: "Try the 3-minute check",
      secondaryCta: "See the operating system",
      proofOne: "No login",
      proofTwo: "No data sent",
      proofThree: "Built on PromptAnatomy",
      visualLabel: "Executive output",
      visualTitle: "Tomorrow's leadership meeting",
      visualInsight: "The team is mixing three topics, but only one decision is blocking progress.",
      visualRisk: "Risk: the meeting becomes status reporting instead of trade-off resolution.",
      visualAction: "Next action: name the owner, decision criteria, and Friday deadline.",
    },
    proof: {
      eyebrow: "Why this works",
      title: "One useful executive output before any theory.",
      items: [
        ["Outcome first", "The page shows clarity before teaching the method."],
        ["Workflow native", "Built around meetings, reports, decisions, delegation, and communication."],
        ["Low risk", "The demo is static: no login, no data sent, no API key required."],
      ],
    },
    demo: {
      eyebrow: "Static clarity demo",
      title: "Choose one CEO situation.",
      subtitle:
        "The demo is simulated on purpose. It shows the shape of a useful AI output without asking for private company data.",
      messyInputLabel: "Business noise",
      outputLabel: "Executive clarity output",
      insight: "Key insight",
      decision: "Decision needed",
      risks: "Top risks",
      questions: "Questions to ask",
      action: "Next action",
      copyPrompt: "Copy sample prompt",
      copied: "Copied",
      scenarios: {
        meeting: {
          label: "Meeting",
          input:
            "Tomorrow's leadership meeting includes Q3 delivery delays, a weaker sales forecast, and pressure to freeze hiring. Each department sent different notes, and nobody agrees which topic matters most.",
          insight:
            "This is not a status meeting. It is a prioritization decision: protect near-term revenue delivery or preserve hiring discipline.",
          decision:
            "Choose which Q3 initiatives stay protected, which pause, and who owns the recommendation by Friday.",
          risks: ["The meeting turns into updates instead of a decision.", "Sales and delivery use different assumptions.", "Hiring freeze becomes a blanket policy instead of a targeted choice."],
          questions: ["Which initiative affects revenue this quarter?", "What capacity is truly missing?", "What would we stop doing if we protect this priority?"],
          action:
            "Open with the trade-off, force one decision, and end with owner, criteria, and deadline.",
          prompt:
            "Analyze these leadership meeting notes for a CEO. Return the key insight, decision needed, 3 risks, 3 questions to ask, and one next action.",
        },
        report: {
          label: "Report",
          input:
            "The monthly report is 18 pages. Revenue is flat, churn is slightly up, product delivery slipped again, and support says complaints are increasing from several key accounts.",
          insight:
            "The report hides a retention risk. Support complaints and delayed delivery may be early signals that churn will worsen before revenue shows it.",
          decision:
            "Decide whether the next leadership action is growth push, retention intervention, or product recovery.",
          risks: ["Flat revenue creates false confidence.", "Support symptoms are treated separately from product delays.", "Sales pushes for new logos while existing ARR becomes exposed."],
          questions: ["Which accounts are most at risk?", "How much ARR is tied to delayed product work?", "What customer-facing fix can ship in 14 days?"],
          action:
            "Request a one-page churn-risk brief before approving the next growth campaign.",
          prompt:
            "Summarize this business report for a CEO. Find the hidden signal, decision needed, 3 risks, 3 questions, and one next action.",
        },
        decision: {
          label: "Decision",
          input:
            "We can launch a new service line now, wait until Q4, or test it quietly with two existing clients. Sales wants speed, operations warns about delivery quality, and finance wants proof before spending.",
          insight:
            "This is not yet a launch decision. It is a risk-sizing decision: what can be tested without creating operational debt.",
          decision:
            "Approve a controlled pilot only if success criteria, owner, budget limit, and stop conditions are written first.",
          risks: ["Full launch distracts the core team.", "Waiting loses momentum without reducing uncertainty.", "A pilot without stop rules becomes a hidden launch."],
          questions: ["What is the smallest proof that matters?", "What failure signal would stop the pilot?", "Who owns delivery without weakening the core business?"],
          action:
            "Run a 30-day pilot with two clients and review against pre-agreed success and stop metrics.",
          prompt:
            "Help a CEO decide between these options. Return recommendation, trade-offs, risks, decision criteria, and next action.",
        },
        delegation: {
          label: "Delegation",
          input:
            "I need to delegate a partner proposal, but previous drafts missed the strategic angle. The team wrote polite text, not a business case, and I had to rewrite most of it myself.",
          insight:
            "The bottleneck is not writing. The team lacks the decision context, audience outcome, and quality bar.",
          decision:
            "Define the proposal's business objective and approval criteria before requesting another draft.",
          risks: ["The CEO stays the editor instead of the decision maker.", "The team optimizes wording instead of strategic outcome.", "The partner receives a generic offer."],
          questions: ["What must the partner believe after reading?", "What is the non-negotiable business angle?", "What example shows the quality bar?"],
          action:
            "Send a delegation brief with objective, audience, strategic angle, constraints, format, and review criteria.",
          prompt:
            "Turn this into a delegation brief. Include objective, context, constraints, output format, and quality criteria.",
        },
        communication: {
          label: "Communication",
          input:
            "We need to tell the team a major deadline is moving. People are already tense, and I do not want the message to sound defensive, vague, or like we are hiding the real reason.",
          insight:
            "The message must reduce uncertainty first. Then it should name the trade-off, what changes, and what does not change.",
          decision:
            "Choose the honest frame: quality protection, scope control, or resource constraint.",
          risks: ["Vague language increases anxiety.", "Too much context sounds defensive.", "No next step creates speculation."],
          questions: ["What changes for the team tomorrow?", "What remains unchanged?", "Where should questions go?"],
          action:
            "Send a short message with fact, reason, impact, unchanged commitments, and next step.",
          prompt:
            "Rewrite this leadership message. Make it clear, calm, non-defensive, and action-oriented.",
        },
      },
    },
    beforeAfter: {
      eyebrow: "Before / after",
      title: "Do not teach the anatomy first. Show the result first.",
      beforeTitle: "Random AI use",
      beforeText: "Prepare for tomorrow's leadership meeting.",
      beforeBullets: ["No audience", "No decision frame", "No quality bar"],
      afterTitle: "Executive workflow",
      afterText:
        "Use these notes to identify the decision needed, hidden risks, questions to ask, and next action for the leadership team.",
      afterBullets: ["Clear outcome", "Decision logic", "Delegation-ready"],
    },
    memes: {
      eyebrow: "Visual proof",
      title: "The problem is not access to AI. It is control.",
      items: [
        ["Access is not enough", "Without structure, AI creates chaos. With control, it creates useful executive output."],
        ["Tools do not create speed", "Adding AI to the same unclear process only makes the bottleneck more visible."],
        ["Structure creates control", "The shift is simple: stop guessing, define the input, and control the output."],
        ["Leadership needs the system", "Your team may already be experimenting. The CEO needs a shared operating model."],
        ["Control creates results", "Random requests create random answers. Structured requests create decisions and next actions."],
      ],
    },
    workflows: {
      eyebrow: "CEO use cases",
      title: "Five places where leaders lose time.",
      items: [
        ["Meetings", "Turn scattered notes into decisions, risks, and agenda focus."],
        ["Reports", "Extract the signal from long updates without reading every page first."],
        ["Decisions", "Compare options, trade-offs, reversibility, and timing."],
        ["Delegation", "Convert intent into briefs your team can execute."],
        ["Communication", "Draft clear messages for tense, urgent, or strategic moments."],
      ],
    },
    roi: {
      eyebrow: "Business value",
      title: "Designed to prove ROI quickly.",
      metrics: [
        ["5h", "Potential time saved per leader each week"],
        ["3min", "Target time to first useful insight"],
        ["5", "Core executive workflows in the MVP"],
      ],
      note:
        "The goal is not to make CEOs study AI methods. The goal is to help them experience useful clarity, then install the repeatable system across the team.",
    },
    authority: {
      eyebrow: "Brand architecture",
      title: "A lean executive bridge into the full PromptAnatomy system.",
      mother: "Mother platform",
      motherText: "PromptAnatomy.app remains the main AI Operating System and commercial destination.",
      sister: "Sister platform",
      sisterText: "The practical Lithuanian learning page proves the training method and team use cases.",
    },
    cta: {
      eyebrow: "Next step",
      title: "Install AI workflows across your leadership team.",
      subtitle:
        "Use this landing page to create the aha moment. Use the full PromptAnatomy system to teach the repeatable method.",
      primary: "Open PromptAnatomy.app",
      secondary: "View Lithuanian practical page",
    },
  },
  lt: {
    nav: {
      product: "Vadovo aiškumo patikra",
      demo: "Išbandyti demo",
      system: "Pilna sistema",
      language: "Kalba",
    },
    hero: {
      eyebrow: "Vadovams, kurie jau naudoja DI, bet dar ne kaip sistemą",
      title: "Raskite sprendimą verslo triukšme.",
      subtitle:
        "Įklijuokite susitikimo užrašus, ataskaitą, laiškų giją ar strateginį klausimą. Gaukite pagrindinę įžvalgą, sprendimą, rizikas, klausimus ir kitą veiksmą per mažiau nei 5 minutes.",
      primaryCta: "Išbandyti 3 min. patikrą",
      secondaryCta: "Žiūrėti veikimo sistemą",
      proofOne: "Be prisijungimo",
      proofTwo: "Duomenys nesiunčiami",
      proofThree: "Pagal PromptAnatomy",
      visualLabel: "Vadovo rezultatas",
      visualTitle: "Rytojaus vadovų susitikimas",
      visualInsight: "Komanda maišo tris temas, bet progresą blokuoja vienas sprendimas.",
      visualRisk: "Rizika: susitikimas taps statuso aptarimu, o ne pasirinkimo išsprendimu.",
      visualAction: "Kitas veiksmas: savininkas, sprendimo kriterijai ir penktadienio terminas.",
    },
    proof: {
      eyebrow: "Kodėl tai veikia",
      title: "Pirmiausia naudingas vadovo rezultatas, tik tada teorija.",
      items: [
        ["Rezultatas pirmas", "Puslapis parodo aiškumą prieš aiškindamas metodą."],
        ["Tikros darbo eigos", "Susitikimai, ataskaitos, sprendimai, delegavimas ir komunikacija."],
        ["Maža rizika", "Demo yra statinis: be prisijungimo, be duomenų siuntimo, be API rakto."],
      ],
    },
    demo: {
      eyebrow: "Statinis aiškumo demo",
      title: "Pasirinkite vieną vadovo situaciją.",
      subtitle:
        "Demo sąmoningai simuliuotas. Jis parodo, kaip atrodo naudingas DI rezultatas, neprašant privačių įmonės duomenų.",
      messyInputLabel: "Verslo triukšmas",
      outputLabel: "Aiškus vadovo rezultatas",
      insight: "Pagrindinė įžvalga",
      decision: "Reikalingas sprendimas",
      risks: "Svarbiausios rizikos",
      questions: "Klausimai komandai",
      action: "Kitas veiksmas",
      copyPrompt: "Kopijuoti pavyzdinę užklausą",
      copied: "Nukopijuota",
      scenarios: {
        meeting: {
          label: "Susitikimas",
          input:
            "Rytojaus vadovų susitikime bus Q3 pristatymo vėlavimai, silpnesnė pardavimų prognozė ir spaudimas stabdyti įdarbinimą. Kiekvienas skyrius atsiuntė skirtingus užrašus, ir niekas nesutaria, kuri tema svarbiausia.",
          insight:
            "Tai nėra statuso susitikimas. Tai prioritetų sprendimas: saugoti trumpalaikį pajamų pristatymą ar išlaikyti įdarbinimo discipliną.",
          decision:
            "Nuspręsti, kurios Q3 iniciatyvos saugomos, kurios stabdomos ir kas iki penktadienio pateikia rekomendaciją.",
          risks: ["Susitikimas virs atnaujinimų aptarimu, ne sprendimu.", "Pardavimai ir pristatymas remsis skirtingomis prielaidomis.", "Įdarbinimo stabdymas taps bendra politika, o ne tiksliniu pasirinkimu."],
          questions: ["Kuri iniciatyva keičia šio ketvirčio pajamas?", "Kokio pajėgumo iš tikrųjų trūksta?", "Ko atsisakytume, jei saugome šį prioritetą?"],
          action:
            "Pradėti nuo pasirinkimo, priversti vieną sprendimą ir baigti savininku, kriterijais bei terminu.",
          prompt:
            "Išanalizuok šiuos vadovų susitikimo užrašus CEO lygiu. Grąžink pagrindinę įžvalgą, reikalingą sprendimą, 3 rizikas, 3 klausimus ir vieną kitą veiksmą.",
        },
        report: {
          label: "Ataskaita",
          input:
            "Mėnesio ataskaita turi 18 puslapių. Pajamos neauga, churn šiek tiek didėja, produkto pristatymas vėl vėlavo, o klientų aptarnavimas mato daugiau skundų iš kelių svarbių klientų.",
          insight:
            "Ataskaitoje slepiasi klientų išlaikymo rizika. Skundai ir produkto vėlavimai gali būti ankstyvas signalas, kad churn blogės dar prieš pajamoms tai parodant.",
          decision:
            "Nuspręsti, ar kitas vadovų veiksmas yra augimo kampanija, klientų išlaikymo intervencija, ar produkto atstatymas.",
          risks: ["Stabilios pajamos sukuria klaidingą ramybę.", "Aptarnavimo simptomai atskiriami nuo produkto vėlavimų.", "Pardavimai stumia naujus klientus, kai esamos pajamos tampa rizikingos."],
          questions: ["Kurie klientai rizikingiausi?", "Kiek ARR susieta su vėluojančiais produkto darbais?", "Kokį klientui matomą pataisymą galime pristatyti per 14 dienų?"],
          action:
            "Prieš tvirtinant augimo kampaniją paprašyti vieno puslapio churn rizikos santraukos.",
          prompt:
            "Apibendrink šią verslo ataskaitą CEO lygiu. Rask paslėptą signalą, reikalingą sprendimą, 3 rizikas, 3 klausimus ir vieną kitą veiksmą.",
        },
        decision: {
          label: "Sprendimas",
          input:
            "Galime naują paslaugą paleisti dabar, laukti Q4 arba tyliai testuoti su dviem esamais klientais. Pardavimai nori greičio, operacijos įspėja dėl kokybės, finansai nori įrodymų prieš išlaidas.",
          insight:
            "Tai dar ne paleidimo sprendimas. Tai rizikos dydžio sprendimas: ką galima patikrinti nesukuriant operacinės skolos.",
          decision:
            "Patvirtinti kontroliuojamą pilotą tik jei prieš startą surašyti sėkmės kriterijai, savininkas, biudžeto riba ir stabdymo sąlygos.",
          risks: ["Pilnas paleidimas blaškys pagrindinę komandą.", "Laukimas praras tempą nesumažindamas neapibrėžtumo.", "Pilotas be stabdymo taisyklių taps paslėptu paleidimu."],
          questions: ["Koks mažiausias įrodymas svarbus?", "Koks nesėkmės signalas sustabdytų pilotą?", "Kas valdys pristatymą nesilpnindamas pagrindinio verslo?"],
          action:
            "Paleisti 30 dienų pilotą su dviem klientais ir vertinti pagal iš anksto sutartas sėkmės bei stabdymo metrikas.",
          prompt:
            "Padėk CEO pasirinkti tarp šių variantų. Grąžink rekomendaciją, kompromisus, rizikas, sprendimo kriterijus ir kitą veiksmą.",
        },
        delegation: {
          label: "Delegavimas",
          input:
            "Reikia deleguoti partnerystės pasiūlymą, bet ankstesni juodraščiai praleido strateginį kampą. Komanda parašė mandagų tekstą, ne verslo argumentą, todėl didžiąją dalį turėjau perrašyti pats.",
          insight:
            "Butelio kaklelis nėra rašymas. Komandai trūksta sprendimo konteksto, auditorijos rezultato ir kokybės kartelės.",
          decision:
            "Prieš prašant naujo juodraščio apibrėžti pasiūlymo verslo tikslą ir patvirtinimo kriterijus.",
          risks: ["Vadovas lieka redaktoriumi, ne sprendimų priėmėju.", "Komanda optimizuoja tekstą, ne strateginį rezultatą.", "Partneris gaus bendrinį pasiūlymą."],
          questions: ["Kuo partneris turi patikėti perskaitęs?", "Koks verslo kampas yra nederamas keisti?", "Koks pavyzdys parodo kokybės kartelę?"],
          action:
            "Nusiųsti delegavimo briefą su tikslu, auditorija, strateginiu kampu, ribomis, formatu ir vertinimo kriterijais.",
          prompt:
            "Paversk tai delegavimo briefu. Įtrauk tikslą, kontekstą, ribas, formatą ir kokybės kriterijus.",
        },
        communication: {
          label: "Komunikacija",
          input:
            "Turime komandai pranešti, kad svarbus terminas keičiasi. Žmonės jau įsitempę, nenoriu, kad žinutė skambėtų gynybiškai, miglotai ar taip, lyg slepiame tikrą priežastį.",
          insight:
            "Žinutė pirmiausia turi sumažinti neapibrėžtumą. Tada ji turi įvardyti pasirinkimą, kas keičiasi ir kas nesikeičia.",
          decision:
            "Pasirinkti sąžiningą rėmą: kokybės apsauga, apimties kontrolė ar resursų riba.",
          risks: ["Neaiški kalba didins nerimą.", "Per daug konteksto skambės gynybiškai.", "Be kito žingsnio atsiras spekuliacijos."],
          questions: ["Kas komandai keičiasi rytoj?", "Kas nesikeičia?", "Kur keliauti su klausimais?"],
          action:
            "Siųsti trumpą žinutę: faktas, priežastis, poveikis, kas nesikeičia ir kitas žingsnis.",
          prompt:
            "Perrašyk šią vadovo žinutę. Padaryk ją aiškią, ramią, negynybišką ir orientuotą į veiksmą.",
        },
      },
    },
    beforeAfter: {
      eyebrow: "Prieš / po",
      title: "Pirma parodykite rezultatą, ne mokykite anatomijos.",
      beforeTitle: "Atsitiktinis DI naudojimas",
      beforeText: "Paruošk rytojaus vadovų susitikimui.",
      beforeBullets: ["Neaiški auditorija", "Nėra sprendimo rėmo", "Nėra kokybės kartelės"],
      afterTitle: "Vadovo darbo eiga",
      afterText:
        "Pagal šiuos užrašus nustatyk reikalingą sprendimą, paslėptas rizikas, klausimus komandai ir kitą veiksmą.",
      afterBullets: ["Aiškus rezultatas", "Sprendimo logika", "Tinka deleguoti"],
    },
    memes: {
      eyebrow: "Vizualus įrodymas",
      title: "Problema ne prieiga prie DI. Problema yra kontrolė.",
      items: [
        ["Prieigos neužtenka", "Be struktūros DI kuria chaosą. Su kontrole jis kuria vadovui naudingą rezultatą."],
        ["Įrankiai nesukuria greičio", "Pridėtas DI prie neaiškaus proceso tik greičiau parodo butelio kaklelį."],
        ["Struktūra sukuria kontrolę", "Pokytis paprastas: nustoti spėlioti, aiškiai apibrėžti įvestį ir valdyti rezultatą."],
        ["Vadovui reikia sistemos", "Komanda jau gali eksperimentuoti. Vadovui reikia bendro veikimo modelio."],
        ["Kontrolė kuria rezultatus", "Atsitiktinės užklausos kuria atsitiktinius atsakymus. Struktūra kuria sprendimus ir kitus veiksmus."],
      ],
    },
    workflows: {
      eyebrow: "Vadovų naudojimo atvejai",
      title: "Penkios vietos, kur vadovai praranda laiką.",
      items: [
        ["Susitikimai", "Iš padrikų užrašų gauti sprendimus, rizikas ir aiškią darbotvarkę."],
        ["Ataskaitos", "Ištraukti signalą iš ilgų atnaujinimų dar prieš skaitant viską."],
        ["Sprendimai", "Palyginti variantus, kompromisus, grįžtamumą ir laiką."],
        ["Delegavimas", "Paversti vadovo intenciją aiškiu briefu komandai."],
        ["Komunikacija", "Paruošti aiškias žinutes įtemptoms ar strateginėms situacijoms."],
      ],
    },
    roi: {
      eyebrow: "Verslo vertė",
      title: "Sukurta greitai parodyti naudą.",
      metrics: [
        ["5h", "Galimai sutaupoma vienam vadovui per savaitę"],
        ["3min", "Tikslinis laikas iki naudingos įžvalgos"],
        ["5", "Pagrindinės vadovų darbo eigos MVP versijoje"],
      ],
      note:
        "Tikslas nėra versti vadovus studijuoti DI metodus. Tikslas yra greitai parodyti aiškumo naudą ir tada įdiegti kartojamą sistemą komandoje.",
    },
    authority: {
      eyebrow: "Prekės ženklo architektūra",
      title: "Trumpas vadovų kelias į pilną PromptAnatomy sistemą.",
      mother: "Motininė platforma",
      motherText: "PromptAnatomy.app lieka pagrindinė AI Operating System ir komercinė kryptis.",
      sister: "Seserinė platforma",
      sisterText: "Praktinis lietuviškas puslapis įrodo mokymo metodą ir komandinį pritaikymą.",
    },
    cta: {
      eyebrow: "Kitas žingsnis",
      title: "Įdiekite DI darbo eigas vadovų komandoje.",
      subtitle:
        "Šis puslapis sukuria aha momentą. Pilna PromptAnatomy sistema išmoko kartojamo metodo.",
      primary: "Atidaryti PromptAnatomy.app",
      secondary: "Žiūrėti lietuvišką praktinį puslapį",
    },
  },
} as const;
