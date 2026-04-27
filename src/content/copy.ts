export const supportedLanguages = ["en", "lt"] as const;

export type Language = (typeof supportedLanguages)[number];

export const uiCopy = {
  en: {
    meta: {
      title: "CEO/COO Executive Prompt Operating Kit | Prompt Anatomy",
      description:
        "Download a concise CEO/COO Max Value Kit with 7 starting prompts, a safety check, ROI workflow path, and a static clarity demo.",
    },
    a11y: {
      skipLink: "Skip to practice",
    },
    faq: {
      sectionTitle: "Common questions",
      items: [
        {
          q: "Is the kit free?",
          a: "Yes. This page and the printable kit are free. PromptAnatomy.app is the full platform when your team needs a shared operating standard.",
        },
        {
          q: "Will my data be sent anywhere?",
          a: "No. The site is static: we do not run analytics on this page, and browsing or copying text does not upload your content to our servers.",
        },
        {
          q: "How is this different from a generic prompt list?",
          a: "It is built around CEO and COO workflows—meetings, reports, decisions, delegation, and communication—with a safety check before anything leaves your desk.",
        },
        {
          q: "Do I need a PromptAnatomy account?",
          a: "No account is required to use this kit. Sign-in only matters when you move into the full product at PromptAnatomy.app.",
        },
        {
          q: "Which roles is the kit designed for?",
          a: "CEOs, COOs, and senior operators who repeat the same leadership rhythms every week and need decision-ready output, not novelty prompts.",
        },
      ],
    },
    nav: {
      product: "CEO/COO Max Value Kit",
      demo: "Start practice",
      system: "Full system",
      language: "Language",
    },
    hero: {
      eyebrow: "Free Executive Prompt Operating Kit",
      title: "Install a decision system, not another prompt list.",
      subtitle:
        "A concise CEO/COO kit for turning meetings, reports, decisions, delegation, communication, and risk checks into repeatable AI workflows. Start with the 2-minute practice, use the 7 recommended prompts, then move the system into PromptAnatomy.",
      primaryCta: "Download Max Value Kit",
      secondaryCta: "Start 2-minute practice",
      proofOne: "Short printable kit",
      proofTwo: "No login",
      proofThree: "Built on PromptAnatomy",
      visualLabel: "Operating kit preview",
      visualTitle: "Decision-ready output",
      visualInsight: "Clarify the trade-off, decision criteria, risk, and next action before the meeting starts.",
      visualRisk: "Risk: the team debates symptoms instead of deciding the operating trade-off.",
      visualAction: "Next action: copy the prompt, fill the brackets, and run the decision brief.",
    },
    proof: {
      eyebrow: "Why leaders use it",
      title: "A useful executive output before any theory.",
      items: [
        ["Decision first", "Every prompt points to a decision, risk, trade-off, owner, or next action."],
        ["Workflow native", "Built around meetings, reports, decisions, delegation, communication, and COO execution."],
        ["Low risk", "The page and download are static: no login, no data sent, no API key required."],
      ],
    },
    quickPractice: {
      eyebrow: "2-minute executive practice",
      title: "From fog to decision-ready output in four moves.",
      subtitle:
        "This is the sister-page practice pattern rebuilt for executives: messy request, structured prompt, usable output, and a 30-second safety check before it leaves your desk.",
      beforeTitle: "1. Fog",
      beforeText: "Prepare for tomorrow's leadership meeting.",
      beforeLabel: "What goes wrong",
      beforeBullets: ["No audience or decision owner.", "No trade-off or success criteria.", "No usable next action for the team."],
      afterTitle: "2. Structure",
      afterText:
        "Act as my executive operating partner. Use these notes to identify the decision needed, the trade-off, 3 risks, 3 questions, and the next action with owner and deadline.",
      afterLabel: "What improves",
      afterBullets: ["Clear decision frame.", "Risk and questions before discussion.", "Delegation-ready next action."],
      copyPrompt: "Copy structured prompt",
      copied: "Copied",
      prompt:
        "Act as my executive operating partner. Use these notes to identify the decision needed, the trade-off, 3 risks, 3 questions to ask, and the next action with owner and deadline. Notes: [PASTE NOTES].",
      resultTitle: "3. Result",
      resultText:
        "The meeting is not about status. It needs one prioritization decision, three risk checks, and one owner by Friday.",
      checkTitle: "4. Safety check",
      checkText:
        "Before using the output, verify facts, missing context, sensitive claims, and who owns the next action.",
    },
    safety: {
      eyebrow: "30-second executive safety check",
      title: "Do not send AI output before this check.",
      subtitle:
        "The kit includes a risk-control layer for anything going to a board, client, partner, or leadership team.",
      copyPrompt: "Copy safety prompt",
      copied: "Copied",
      items: [
        ["Fact risk", "What numbers, dates, names, or claims need source verification?"],
        ["Legal / reputation risk", "What wording could create legal, client, or trust exposure?"],
        ["Missing context", "What would a senior operator ask before acting on this output?"],
        ["Decision risk", "What decision does this output imply, and who owns it?"],
      ],
      prompt:
        "Act as an executive risk reviewer. Review this AI-generated text before I send or use it: [TEXT]. Context: [BOARD / CLIENT / TEAM / PARTNER]. Return 1) factual risks to verify, 2) legal or reputation risks, 3) missing context, 4) unclear decision or owner, 5) a safer revised version if needed.",
    },
    anatomy: {
      eyebrow: "Executive prompt anatomy",
      title: "Five blocks that keep AI useful for leadership work.",
      subtitle:
        "Use two or three blocks for quick work. Use all five when the output will affect clients, budget, reputation, or team direction.",
      items: [
        ["Role", "Who AI should act as and what business outcome it serves."],
        ["Context", "Facts, audience, constraints, assumptions, and what the team already knows."],
        ["Decision Logic", "Criteria, trade-offs, risks, reversibility, and timing."],
        ["Output", "Format, length, example, owner, deadline, or decision-ready structure."],
        ["Quality Check", "What to verify before using the answer with a client, board, or team."],
      ],
    },
    library: {
      eyebrow: "Full copyable executive library",
      title: "35 prompts across the work CEOs and COOs actually repeat.",
      subtitle:
        "Use the full page library as depth proof and a backup shelf. The first action is still one workflow, one prompt, one safety check.",
      starter: {
        eyebrow: "Start with 7",
        title: "Start with one prompt per leadership workflow.",
        subtitle:
          "Do not read a catalog first. Pick the workflow that costs the most time this week, copy one prompt, and run it with the safety check.",
        pickerEyebrow: "Pick this week's heaviest workflow",
        pickerHelp:
          "Tap the workflow that takes the most CEO or COO time this week. We will highlight the matching starter prompt.",
        note:
          "The printable Max Value Kit keeps these seven prompts, the safety check, and the weekly ROI path in one short asset.",
        downloadCta: "Download Max Value Kit",
      },
      copyPrompt: "Copy prompt",
      copied: "Copied",
      categories: [
        {
          title: "CEO Decisions",
          description: "Turn options, trade-offs, and uncertainty into a decision brief.",
          prompts: [
            {
              title: "Board-ready recommendation",
              outcome: "Recommendation, trade-offs, risks, and decision criteria.",
              prompt:
                "Act as a CEO operating partner. Analyze this decision: [DECISION]. Context: [FACTS]. Options: [OPTIONS]. Return 1 recommendation, 3 trade-offs, 3 risks, decision criteria, and the next action with owner and deadline.",
            },
            {
              title: "Reversible vs irreversible choice",
              outcome: "Separate decisions that need speed from decisions that need more proof.",
              prompt:
                "Classify this decision as reversible or irreversible: [DECISION]. Explain what evidence is enough, what risk remains, and whether we should decide now, run a test, or wait. Return a concise CEO brief.",
            },
            {
              title: "Trade-off map",
              outcome: "Show what the business gains, loses, delays, and risks.",
              prompt:
                "Map the trade-off in this decision: [DECISION]. Return what we gain, what we lose, what gets delayed, what risk increases, what risk decreases, and the decision I should make if speed matters most.",
            },
            {
              title: "Stop / continue / change",
              outcome: "Turn a messy initiative review into a clear executive call.",
              prompt:
                "Review this initiative: [INITIATIVE UPDATE]. Recommend whether to stop, continue, or change it. Include evidence, risk, opportunity cost, owner, and the next checkpoint date.",
            },
            {
              title: "Budget decision brief",
              outcome: "Make spend decisions with criteria and downside protection.",
              prompt:
                "Prepare a CEO budget decision brief for [SPEND / INVESTMENT]. Include strategic reason, expected return, downside risk, decision criteria, approval conditions, and what we will stop funding if this is approved.",
            },
          ],
        },
        {
          title: "COO Execution",
          description: "Find the bottleneck, owner, operating rhythm, and delivery risk.",
          prompts: [
            {
              title: "Delivery risk diagnosis",
              outcome: "Where execution is stuck and what must change this week.",
              prompt:
                "Act as a COO. Review this execution update: [UPDATE]. Identify the bottleneck, missing owner, delivery risk, dependency, and the one operating change to make this week.",
            },
            {
              title: "Operating rhythm reset",
              outcome: "Meeting cadence, metrics, owners, and escalation rules.",
              prompt:
                "Design a simple operating rhythm for [TEAM/PROJECT]. Include weekly cadence, decision points, metrics, owners, escalation triggers, and what should stop being discussed.",
            },
            {
              title: "Owner clarity",
              outcome: "Remove ambiguity around who decides, owns, supports, and escalates.",
              prompt:
                "Clarify ownership for [PROJECT / PROCESS]. Return decision owner, execution owner, supporting roles, escalation path, approval needed, and what each person must deliver by when.",
            },
            {
              title: "Escalation rule",
              outcome: "Define when teams should solve, escalate, or stop.",
              prompt:
                "Create escalation rules for [WORKFLOW]. Define what the team can decide alone, what requires COO/CEO input, what must stop immediately, and the signals that trigger escalation.",
            },
            {
              title: "Capacity constraint scan",
              outcome: "Find the real bottleneck before adding people or budget.",
              prompt:
                "Analyze this capacity problem: [SITUATION]. Identify the bottleneck, false bottlenecks, work to stop, work to sequence, owner, and the smallest change that would improve throughput this week.",
            },
          ],
        },
        {
          title: "Meetings",
          description: "Make leadership meetings about decisions, not status theatre.",
          prompts: [
            {
              title: "Decision meeting agenda",
              outcome: "Agenda that forces the trade-off and prevents drift.",
              prompt:
                "Create a leadership meeting agenda for [TOPIC]. Goal: make one decision. Include pre-read, decision question, trade-off, 3 questions to ask, timeboxes, and the closing owner/deadline.",
            },
            {
              title: "Post-meeting action extraction",
              outcome: "Clear owners, deadlines, risks, and open questions.",
              prompt:
                "Turn these meeting notes into an executive action log: [NOTES]. Return decisions made, open decisions, owners, deadlines, risks, and the first follow-up message to send.",
            },
            {
              title: "Pre-read extraction",
              outcome: "Prepare the meeting before the room burns time.",
              prompt:
                "Create a leadership pre-read from this material: [MATERIAL]. Include the decision needed, facts already known, assumptions, open questions, risks, and what each participant should prepare.",
            },
            {
              title: "Conflict resolution frame",
              outcome: "Turn disagreement into criteria, options, and a decision path.",
              prompt:
                "Frame this leadership disagreement: [DISAGREEMENT]. Separate facts, assumptions, interests, risks, decision criteria, and the smallest next decision that can move the team forward.",
            },
            {
              title: "Weekly leadership rhythm",
              outcome: "Keep weekly meetings focused on decisions and execution signals.",
              prompt:
                "Design a weekly leadership meeting rhythm for [TEAM]. Include recurring agenda, required inputs, decision slots, risk review, owner accountability, and what should move async.",
            },
          ],
        },
        {
          title: "Reports",
          description: "Extract signal from long updates without reading every page first.",
          prompts: [
            {
              title: "One-page executive brief",
              outcome: "Signal, risk, decision, and next action from a long report.",
              prompt:
                "Summarize this report for a CEO: [REPORT]. Return key signal, hidden risk, decision needed, 3 questions for the team, and one next action. Do not invent missing numbers.",
            },
            {
              title: "Risk signal scan",
              outcome: "Early warning signs across customers, revenue, delivery, and people.",
              prompt:
                "Scan this update for weak signals: [UPDATE]. Separate customer, revenue, delivery, people, and reputation risks. Mark each as low/medium/high and suggest what to verify next.",
            },
            {
              title: "KPI anomaly explanation",
              outcome: "Separate noise from an operating signal.",
              prompt:
                "Analyze this KPI anomaly: [DATA / CONTEXT]. Explain possible causes, what evidence supports each, what to verify next, and whether this needs a decision, monitoring, or immediate action.",
            },
            {
              title: "Customer risk brief",
              outcome: "Turn support and account noise into retention action.",
              prompt:
                "Create a customer risk brief from this information: [NOTES]. Identify accounts at risk, root causes, revenue exposure, owner, action in 7 days, and executive message if needed.",
            },
            {
              title: "Board summary",
              outcome: "Convert operating updates into board-level signal.",
              prompt:
                "Turn this operating update into a board summary: [UPDATE]. Include headline, progress, risks, decision needed, financial or customer impact, and the one question we need the board to help answer.",
            },
          ],
        },
        {
          title: "Delegation",
          description: "Convert executive intent into briefs your team can execute.",
          prompts: [
            {
              title: "Delegation brief",
              outcome: "Objective, context, constraints, quality bar, and review criteria.",
              prompt:
                "Turn this intent into a delegation brief: [INTENT]. Include objective, audience, context, constraints, deliverable format, quality criteria, examples to follow, and review deadline.",
            },
            {
              title: "Quality bar before review",
              outcome: "Reduce CEO rewrites by setting the standard upfront.",
              prompt:
                "Create a quality checklist for this task: [TASK]. Include must-have points, common mistakes, examples of good output, and what should be escalated before submission.",
            },
            {
              title: "Reviewer checklist",
              outcome: "Make review faster and less subjective.",
              prompt:
                "Create a reviewer checklist for [DELIVERABLE]. Include strategic fit, factual accuracy, audience clarity, risk, missing context, and pass/fail criteria.",
            },
            {
              title: "Owner handoff",
              outcome: "Move work from CEO head to owner execution.",
              prompt:
                "Create an owner handoff for [WORK]. Include context, decision already made, owner responsibilities, constraints, milestones, escalation rules, and first update format.",
            },
            {
              title: "Team instruction",
              outcome: "Turn intent into a team-ready task.",
              prompt:
                "Write a team instruction for [TASK]. Include why it matters, what done means, constraints, examples, owner, deadline, and how progress should be reported.",
            },
          ],
        },
        {
          title: "Communication",
          description: "Write clear messages for tense, urgent, or strategic moments.",
          prompts: [
            {
              title: "Tense update",
              outcome: "Calm, honest communication with a clear next step.",
              prompt:
                "Rewrite this leadership update so it is clear, calm, and non-defensive: [MESSAGE]. Structure it as fact, reason, impact, what changes, what stays the same, and next step.",
            },
            {
              title: "Partner/client message",
              outcome: "Executive-level message that protects trust and momentum.",
              prompt:
                "Draft a concise partner/client message about [SITUATION]. Tone: direct, warm, credible. Include the business context, decision, impact, and one clear next action. Keep it under 120 words.",
            },
            {
              title: "Internal change note",
              outcome: "Explain a change without creating uncertainty.",
              prompt:
                "Write an internal change note about [CHANGE]. Include what is changing, why, what stays the same, impact by team, decision owner, and where questions should go.",
            },
            {
              title: "Deadline shift",
              outcome: "Communicate delay without sounding defensive.",
              prompt:
                "Draft a deadline-shift message for [AUDIENCE]. Include the fact, reason, trade-off, new date, what we are doing to protect quality, and next update time.",
            },
            {
              title: "Partner proposal frame",
              outcome: "Move from polite text to business case.",
              prompt:
                "Frame this partner proposal: [IDEA]. Include strategic reason, value for partner, value for us, proof, risk, next step, and a concise executive opening paragraph.",
            },
          ],
        },
        {
          title: "Safety and Quality",
          description: "Check facts, reputation, missing context, and hallucination risk before output leaves the team.",
          prompts: [
            {
              title: "Executive send-check",
              outcome: "Final check before sending to board, client, partner, or team.",
              prompt:
                "Act as an executive risk reviewer. Review this text before I send it: [TEXT]. Context: [BOARD / CLIENT / TEAM / PARTNER]. Return factual risks, legal/reputation risks, missing context, unclear owner, and safer wording if needed.",
            },
            {
              title: "Hallucination scan",
              outcome: "Find claims that AI may have invented or overstated.",
              prompt:
                "Scan this AI output for possible hallucinations: [TEXT]. List unsupported claims, numbers, dates, named entities, assumptions, and what source would verify each one.",
            },
            {
              title: "Legal / reputation risk",
              outcome: "Catch wording that could create avoidable exposure.",
              prompt:
                "Review this message for legal, confidentiality, client trust, and reputation risk: [MESSAGE]. Return risk level, risky phrases, safer alternatives, and what must be approved before sending.",
            },
            {
              title: "Missing context check",
              outcome: "Identify what a senior leader would ask before acting.",
              prompt:
                "Review this output for missing context: [OUTPUT]. What facts, constraints, stakeholder views, risks, or decision criteria are missing before a CEO/COO should act on it?",
            },
            {
              title: "Decision owner check",
              outcome: "Make sure every recommendation has ownership.",
              prompt:
                "Check this recommendation for decision readiness: [RECOMMENDATION]. Identify decision owner, execution owner, deadline, success criteria, risks, and what would make this recommendation invalid.",
            },
          ],
        },
      ],
    },
    demo: {
      eyebrow: "Static clarity demo",
      title: "Preview the output shape.",
      subtitle:
        "The demo is simulated on purpose. It shows what one strong executive prompt should return without asking for private company data.",
      followUpEyebrow: "Keep the structure on your desk",
      followUpText:
        "The Max Value Kit puts the same insight, decision, risks, and next-action shape on a printable page next to your meetings.",
      followUpCta: "Download Max Value Kit",
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
        ["Structure creates control", "The shift is simple: stop guessing, define the input, and control the output."],
        ["Tools do not create speed", "Adding AI to the same unclear process only makes the bottleneck more visible."],
        ["Control creates results", "Random requests create random answers. Structured requests create decisions and next actions."],
        ["Leadership needs the system", "Your team may already be experimenting. The CEO needs a shared operating model."],
      ],
    },
    workflows: {
      eyebrow: "Where the library pays back",
      title: "Six executive workflows where better prompts save time.",
      items: [
        ["Decisions", "Compare options, trade-offs, reversibility, and timing."],
        ["COO execution", "Find bottlenecks, owners, dependencies, and delivery risk."],
        ["Meetings", "Turn scattered notes into decisions, risks, and agenda focus."],
        ["Reports", "Extract the signal from long updates without reading every page first."],
        ["Delegation", "Convert intent into briefs your team can execute."],
        ["Communication", "Draft clear messages for tense, urgent, or strategic moments."],
      ],
    },
    roiPath: {
      eyebrow: "5-hour weekly ROI path",
      title: "A practical route from one useful prompt to a leadership system.",
      subtitle:
        "The time-savings claim becomes believable when the kit is tied to repeatable weekly workflows, not abstract productivity.",
      steps: [
        ["5-15 min", "Safety check", "Review AI-generated text before it reaches a client, board, partner, or team."],
        ["20-40 min", "Report scan", "Extract signal, hidden risk, and decision needed from long updates."],
        ["20-45 min", "Decision prep", "Turn options into trade-offs, criteria, risks, and recommendation."],
        ["15-30 min", "Meeting cleanup", "Convert notes into decisions, owners, deadlines, and follow-up."],
        ["15-45 min", "Delegation brief", "Move intent from the CEO's head into an executable team brief."],
        ["10-30 min", "Tense communication", "Draft clear messages for change, delays, clients, or partners."],
      ],
      total: "Up to 5 hours/week per leader when used repeatedly across the leadership rhythm.",
    },
    visualBreak: {
      eyebrow: "Illustrative proof",
      title: "AI access is not executive control.",
      items: [
        ["Random prompts create random answers", "If the input has no decision frame, the output creates more work for the CEO."],
        ["The CEO becomes the editor bottleneck", "Without a quality bar, every delegated draft returns for rewriting."],
        ["A system creates leverage", "Shared prompts, checks, and output standards let the team move faster without lowering judgment."],
      ],
    },
    systemVisual: {
      eyebrow: "AI is an operating system",
      title: "The model gives capability. The process creates repeatable results.",
      flowCaption:
        "From messy input to a leadership-ready output, then into a shared team operating standard.",
      items: [
        ["Model", "What AI can generate."],
        ["Prompt kit", "How leaders define input, logic, and output."],
        ["Quality check", "How facts, risks, and ownership are controlled."],
        ["Team standard", "How the same workflow becomes reusable across meetings, reports, and delegation."],
      ],
    },
    roi: {
      eyebrow: "Business value",
      title: "Designed to prove value before rollout.",
      metrics: [
        ["35", "Executive prompts visible on the page"],
        ["2min", "Time to first useful practice"],
        ["7", "CEO/COO workflow categories"],
      ],
      note:
        "The goal is not to make executives study prompt engineering. The goal is to give them a useful operating kit, prove the output shape, and then install a repeatable system across the leadership team.",
    },
    authority: {
      eyebrow: "Brand architecture",
      title: "A practical lead magnet into the full PromptAnatomy system.",
      mother: "Mother platform",
      motherText: "PromptAnatomy.app remains the main AI Operating System and commercial destination.",
      sister: "Sister platform",
      sisterText: "The Lithuanian practical page proves the broader training method and team use cases.",
    },
    cta: {
      eyebrow: "Take the executive kit",
      title: "Take the short kit. Install the system when the team needs the standard.",
      subtitle:
        "Download the Max Value Kit for this week's leadership work. Use PromptAnatomy when you are ready to turn the same method into a repeatable team operating standard.",
      primary: "Download Max Value Kit",
      secondary: "Open PromptAnatomy.app",
    },
    footer: {
      brand: "PromptAnatomy · Executive OS",
      tagline: "Static lead magnet. No login, no data sent.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
  lt: {
    meta: {
      title: "CEO/COO vykdomasis promptų rinkinys | Prompt Anatomy",
      description:
        "Atsisiųskite trumpą CEO/COO Max Value Kit su 7 pradiniais promptais, saugumo patikra, ROI darbo eiga ir statiniu aiškumo demo.",
    },
    a11y: {
      skipLink: "Pereiti prie praktikos",
    },
    faq: {
      sectionTitle: "Dažni klausimai",
      items: [
        {
          q: "Ar rinkinys nemokamas?",
          a: "Taip. Šis puslapis ir spausdinamas rinkinys yra nemokami. PromptAnatomy.app – pilna platforma, kai komandai reikia bendros veiklos standarto.",
        },
        {
          q: "Ar mano duomenys bus kažkur siunčiami?",
          a: "Ne. Puslapis yra statinis: čia nevykdome analitikos, o naršymas ar teksto kopijavimas nekelia jūsų turinio į mūsų serverius.",
        },
        {
          q: "Kuo tai skiriasi nuo bendro promptų sąrašo?",
          a: "Sukurta CEO ir COO darbo eigoms – susitikimams, ataskaitoms, sprendimams, delegavimui ir komunikacijai – su saugumo patikra prieš siunčiant.",
        },
        {
          q: "Ar reikia PromptAnatomy paskyros?",
          a: "Rinkiniui paskyros nereikia. Prisijungimas aktualus tik naudojantis pilnu produktu PromptAnatomy.app.",
        },
        {
          q: "Kokioms rolėms skirtas rinkinys?",
          a: "CEO, COO ir vyresniems operatoriams, kurie kas kartoja tuos pačius vadovavimo ritmus ir reikia sprendimui paruošto rezultato, ne atsitiktinių promptų.",
        },
      ],
    },
    nav: {
      product: "CEO/COO Max Value Kit",
      demo: "Pradėti praktiką",
      system: "Pilna sistema",
      language: "Kalba",
    },
    hero: {
      eyebrow: "Nemokamas vadovo promptų operacinis rinkinys",
      title: "Įdiek sprendimų sistemą, ne dar vieną promptų sąrašą.",
      subtitle:
        "Trumpas CEO/COO rinkinys, kuris susitikimus, ataskaitas, sprendimus, delegavimą, komunikaciją ir rizikų patikras paverčia kartojamomis DI darbo eigomis. Pradėk nuo 2 min. praktikos, panaudok 7 rekomenduojamus promptus, o tada sistemą perkelk į PromptAnatomy.",
      primaryCta: "Atsisiųsti Max Value Kit",
      secondaryCta: "Pradėti 2 min. praktiką",
      proofOne: "Trumpas spausdinamas rinkinys",
      proofTwo: "Be prisijungimo",
      proofThree: "Pagrįsta PromptAnatomy",
      visualLabel: "Rinkinio peržiūra",
      visualTitle: "Sprendimui paruoštas rezultatas",
      visualInsight: "Išgrynink kompromisą, sprendimo kriterijus, riziką ir kitą veiksmą dar prieš susitikimą.",
      visualRisk: "Rizika: komanda aptarinės simptomus, užuot priėmusi operacinį sprendimą.",
      visualAction: "Kitas veiksmas: kopijuok promptą, užpildyk skliaustus ir paleisk sprendimo briefą.",
    },
    proof: {
      eyebrow: "Kodėl vadovai jį naudoja",
      title: "Pirma – naudingas vadovo rezultatas, ir tik tada teorija.",
      items: [
        ["Sprendimas – pirmas", "Kiekvienas promptas veda į sprendimą, riziką, kompromisą, savininką arba kitą veiksmą."],
        ["Tikros darbo eigos", "Susitikimai, ataskaitos, sprendimai, delegavimas, komunikacija ir COO vykdymas."],
        ["Mažai rizikos", "Puslapis ir atsisiuntimas yra statiniai: be prisijungimo, be duomenų siuntimo, be API raktų."],
      ],
    },
    quickPractice: {
      eyebrow: "2 min. vadovo praktika",
      title: "Nuo miglos iki sprendimui paruošto rezultato per keturis judesius.",
      subtitle:
        "Tai seserinio puslapio praktikos modelis, pritaikytas vadovams: miglota užklausa, struktūruotas promptas, naudingas rezultatas ir 30 sek. patikra prieš jį panaudojant.",
      beforeTitle: "1. Migla",
      beforeText: "Pasiruošk rytojaus vadovų susitikimui.",
      beforeLabel: "Kas stringa",
      beforeBullets: ["Nėra auditorijos ir sprendimo savininko.", "Nėra kompromiso ar sėkmės kriterijų.", "Nėra komandai naudingo kito veiksmo."],
      afterTitle: "2. Struktūra",
      afterText:
        "Veik kaip mano vadovo operacinis partneris. Pagal šiuos užrašus nustatyk reikalingą sprendimą, kompromisą, 3 rizikas, 3 klausimus ir kitą veiksmą su savininku bei terminu.",
      afterLabel: "Kas pagerėja",
      afterBullets: ["Aiškus sprendimo rėmas.", "Rizikos ir klausimai prieš diskusiją.", "Kitas veiksmas paruoštas deleguoti."],
      copyPrompt: "Kopijuoti struktūruotą promptą",
      copied: "Nukopijuota",
      prompt:
        "Veik kaip mano vadovo operacinis partneris. Pagal šiuos užrašus nustatyk reikalingą sprendimą, kompromisą, 3 rizikas, 3 klausimus komandai ir kitą veiksmą su savininku bei terminu. Užrašai: [ĮKLIJUOK UŽRAŠUS].",
      resultTitle: "3. Rezultatas",
      resultText:
        "Tai nėra statuso susitikimas. Reikia vieno prioriteto sprendimo, trijų rizikos patikrų ir vieno savininko iki penktadienio.",
      checkTitle: "4. Patikra",
      checkText:
        "Prieš naudodamas rezultatą, patikrink faktus, trūkstamą kontekstą, jautrius teiginius ir tai, kas valdo kitą veiksmą.",
    },
    safety: {
      eyebrow: "30 sek. vadovo saugumo patikra",
      title: "Nesiųsk DI rezultato be šios patikros.",
      subtitle:
        "Rinkinyje yra rizikos kontrolės sluoksnis viskam, kas keliauja valdybai, klientui, partneriui ar vadovų komandai.",
      copyPrompt: "Kopijuoti patikros promptą",
      copied: "Nukopijuota",
      items: [
        ["Faktų rizika", "Kokius skaičius, datas, vardus ar teiginius reikia patikrinti šaltinyje?"],
        ["Teisinė / reputacijos rizika", "Kokia formuluotė gali sukurti teisinę, kliento ar pasitikėjimo riziką?"],
        ["Trūkstamas kontekstas", "Ko paklaustų patyręs vadovas, prieš veikdamas pagal šį rezultatą?"],
        ["Sprendimo rizika", "Kokį sprendimą šis rezultatas numato ir kas už jį atsakingas?"],
      ],
      prompt:
        "Veik kaip vadovo rizikos peržiūrėtojas. Peržiūrėk šį DI parengtą tekstą prieš man jį siunčiant ar naudojant: [TEKSTAS]. Kontekstas: [VALDYBA / KLIENTAS / KOMANDA / PARTNERIS]. Grąžink 1) faktines rizikas patikrai, 2) teisines ar reputacijos rizikas, 3) trūkstamą kontekstą, 4) neaiškų sprendimą ar savininką, 5) saugesnę versiją, jei reikia.",
    },
    anatomy: {
      eyebrow: "Vadovo prompto anatomija",
      title: "Penki blokai, kad DI dirbtų vadovo lygiu.",
      subtitle:
        "Greitam darbui dažnai užtenka dviejų ar trijų blokų. Visus penkis naudok tada, kai rezultatas paveiks klientus, biudžetą, reputaciją ar komandos kryptį.",
      items: [
        ["Rolė", "Kokį vaidmenį atlieka DI ir kokiam verslo rezultatui jis tarnauja."],
        ["Kontekstas", "Faktai, auditorija, ribos, prielaidos ir tai, ką komanda jau žino."],
        ["Sprendimo logika", "Kriterijai, kompromisai, rizikos, grįžtamumas ir laikas."],
        ["Rezultatas", "Formatas, apimtis, pavyzdys, savininkas, terminas arba sprendimo struktūra."],
        ["Kokybės patikra", "Ką patikrinti, prieš naudojant atsakymą su klientu, valdyba ar komanda."],
      ],
    },
    library: {
      eyebrow: "Pilna kopijuojama vadovų biblioteka",
      title: "35 promptai darbams, kuriuos CEO ir COO kartoja nuolat.",
      subtitle:
        "Pilna puslapio biblioteka lieka kaip gylio įrodymas ir atsarginė lentyna. Pirmas veiksmas vis tiek yra viena darbo eiga, vienas promptas ir viena saugumo patikra.",
      starter: {
        eyebrow: "Pradėk nuo 7",
        title: "Pradėk nuo vieno prompto kiekvienai vadovų darbo eigai.",
        subtitle:
          "Neskaityk katalogo iš anksto. Pasirink darbo eigą, kuri šią savaitę kainuoja daugiausia laiko, nukopijuok vieną promptą ir paleisk jį kartu su saugumo patikra.",
        pickerEyebrow: "Pasirink šios savaitės sunkiausią darbo eigą",
        pickerHelp:
          "Pažymėk darbo eigą, kuri šią savaitę CEO ar COO kainuoja daugiausia laiko – paryškinsim atitinkamą startinį promptą.",
        note:
          "Spausdinamame Max Value Kit lape telpa šie septyni promptai, saugumo patikra ir savaitinis ROI kelias.",
        downloadCta: "Atsisiųsti Max Value Kit",
      },
      copyPrompt: "Kopijuoti promptą",
      copied: "Nukopijuota",
      categories: [
        {
          title: "CEO sprendimai",
          description: "Variantus, kompromisus ir neapibrėžtumą paversk sprendimo briefu.",
          prompts: [
            {
              title: "Rekomendacija valdybai",
              outcome: "Rekomendacija, kompromisai, rizikos ir sprendimo kriterijai.",
              prompt:
                "Veik kaip CEO operacinis partneris. Išanalizuok šį sprendimą: [SPRENDIMAS]. Kontekstas: [FAKTAI]. Variantai: [VARIANTAI]. Grąžink 1 rekomendaciją, 3 kompromisus, 3 rizikas, sprendimo kriterijus ir kitą veiksmą su savininku bei terminu.",
            },
            {
              title: "Grįžtamas ar negrįžtamas sprendimas",
              outcome: "Atskirk, kur reikia greičio, o kur – daugiau įrodymų.",
              prompt:
                "Suklasifikuok šį sprendimą kaip grįžtamą arba negrįžtamą: [SPRENDIMAS]. Paaiškink, kokių įrodymų pakanka, kokia rizika lieka ir ar turime spręsti dabar, testuoti ar laukti. Grąžink trumpą CEO briefą.",
            },
            {
              title: "Kompromiso žemėlapis",
              outcome: "Parodo, ką verslas gauna, praranda, atideda ir rizikuoja.",
              prompt:
                "Sudaryk šio sprendimo kompromiso žemėlapį: [SPRENDIMAS]. Grąžink ką laimime, ką prarandame, kas atidedama, kokia rizika didėja, kokia mažėja ir kokį sprendimą priimti, jei svarbiausias greitis.",
            },
            {
              title: "Stabdyti / tęsti / keisti",
              outcome: "Miglota iniciatyvos peržiūra tampa aiškiu vadovo sprendimu.",
              prompt:
                "Peržiūrėk šią iniciatyvą: [INICIATYVOS ATNAUJINIMAS]. Rekomenduok stabdyti, tęsti ar keisti. Įtrauk įrodymus, riziką, alternatyvią kainą, savininką ir kitą peržiūros datą.",
            },
            {
              title: "Biudžeto sprendimo briefas",
              outcome: "Išlaidų sprendimas su kriterijais ir rizikos apsauga.",
              prompt:
                "Paruošk CEO biudžeto sprendimo briefą dėl [IŠLAIDOS / INVESTICIJOS]. Įtrauk strateginę priežastį, tikėtiną grąžą, blogiausią riziką, sprendimo kriterijus, patvirtinimo sąlygas ir ką nustotume finansuoti, jei tai patvirtinama.",
            },
          ],
        },
        {
          title: "COO vykdymas",
          description: "Surask butelio kaklelį, savininką, ritmą ir pristatymo riziką.",
          prompts: [
            {
              title: "Pristatymo rizikos diagnostika",
              outcome: "Kur stringa vykdymas ir ką keisti šią savaitę.",
              prompt:
                "Veik kaip COO. Peržiūrėk šį vykdymo atnaujinimą: [ATNAUJINIMAS]. Nustatyk butelio kaklelį, trūkstamą savininką, pristatymo riziką, priklausomybę ir vieną operacinį pakeitimą šiai savaitei.",
            },
            {
              title: "Operacinio ritmo atstatymas",
              outcome: "Susitikimų ritmas, metrikos, savininkai ir eskalavimo taisyklės.",
              prompt:
                "Sukurk paprastą operacinį ritmą [KOMANDAI/PROJEKTUI]. Įtrauk savaitinį ritmą, sprendimo taškus, metrikas, savininkus, eskalavimo signalus ir ką nustoti aptarinėti.",
            },
            {
              title: "Savininkų aiškumas",
              outcome: "Pašalina neaiškumą, kas sprendžia, vykdo, padeda ir eskaluoja.",
              prompt:
                "Išgrynink atsakomybes šiam darbui: [PROJEKTAS / PROCESAS]. Grąžink sprendimo savininką, vykdymo savininką, palaikančias roles, eskalavimo kelią, reikalingą patvirtinimą ir kas ką turi pristatyti iki kada.",
            },
            {
              title: "Eskalavimo taisyklė",
              outcome: "Apibrėžia, kada komanda sprendžia, eskaluoja ar stabdo.",
              prompt:
                "Sukurk eskalavimo taisykles darbo eigai [DARBO EIGA]. Apibrėžk, ką komanda gali spręsti pati, kam reikia COO/CEO įsikišimo, ką stabdyti iškart ir kokie signalai įjungia eskalavimą.",
            },
            {
              title: "Pajėgumo ribos skenavimas",
              outcome: "Randa tikrą butelio kaklelį prieš pridedant žmones ar biudžetą.",
              prompt:
                "Išanalizuok šią pajėgumo problemą: [SITUACIJA]. Nustatyk butelio kaklelį, netikrus butelio kaklelius, ką stabdyti, ką sekuoti, savininką ir mažiausią pakeitimą, kuris pagerintų pralaidumą šią savaitę.",
            },
          ],
        },
        {
          title: "Susitikimai",
          description: "Vadovų susitikimus paversk sprendimais, o ne statuso teatru.",
          prompts: [
            {
              title: "Sprendimo susitikimo darbotvarkė",
              outcome: "Darbotvarkė, kuri priverčia spręsti kompromisą.",
              prompt:
                "Sukurk vadovų susitikimo darbotvarkę tema [TEMA]. Tikslas: priimti vieną sprendimą. Įtrauk paruošiamą medžiagą, sprendimo klausimą, kompromisą, 3 klausimus, laiko rėmus ir uždarymo savininką bei terminą.",
            },
            {
              title: "Veiksmų ištraukimas po susitikimo",
              outcome: "Aiškūs savininkai, terminai, rizikos ir atviri klausimai.",
              prompt:
                "Paversk šiuos susitikimo užrašus vadovo veiksmų žurnalu: [UŽRAŠAI]. Grąžink priimtus sprendimus, atvirus sprendimus, savininkus, terminus, rizikas ir pirmą tęstinę žinutę.",
            },
            {
              title: "Paruošiamosios medžiagos ištraukimas",
              outcome: "Paruošia susitikimą prieš švaistant laiką kambaryje.",
              prompt:
                "Sukurk vadovų paruošiamąją medžiagą iš šios medžiagos: [MEDŽIAGA]. Įtrauk reikalingą sprendimą, žinomus faktus, prielaidas, atvirus klausimus, rizikas ir ką kiekvienas dalyvis turi pasiruošti.",
            },
            {
              title: "Konflikto sprendimo rėmas",
              outcome: "Paverčia nesutarimą kriterijais, variantais ir sprendimo keliu.",
              prompt:
                "Sustruktūruok šį vadovų nesutarimą: [NESUTARIMAS]. Atskirk faktus, prielaidas, interesus, rizikas, sprendimo kriterijus ir mažiausią kitą sprendimą, kuris pajudintų komandą į priekį.",
            },
            {
              title: "Savaitinis vadovų ritmas",
              outcome: "Laiko savaitinius susitikimus ties sprendimais ir vykdymo signalais.",
              prompt:
                "Sukurk savaitinį vadovų susitikimo ritmą [KOMANDAI]. Įtrauk pasikartojančią darbotvarkę, privalomas įvestis, sprendimų blokus, rizikos peržiūrą, savininkų atsakomybę ir ką perkelti į asinchroninį formatą.",
            },
          ],
        },
        {
          title: "Ataskaitos",
          description: "Ištrauk signalą iš ilgų atnaujinimų dar prieš perskaitydamas viską.",
          prompts: [
            {
              title: "Vieno puslapio vadovo briefas",
              outcome: "Signalas, rizika, sprendimas ir kitas veiksmas iš ilgos ataskaitos.",
              prompt:
                "Apibendrink šią ataskaitą CEO lygiu: [ATASKAITA]. Grąžink pagrindinį signalą, paslėptą riziką, reikalingą sprendimą, 3 klausimus komandai ir vieną kitą veiksmą. Neišgalvok trūkstamų skaičių.",
            },
            {
              title: "Rizikos signalų skenavimas",
              outcome: "Ankstyvi klientų, pajamų, pristatymo ir reputacijos signalai.",
              prompt:
                "Perskenuok šį atnaujinimą dėl silpnų signalų: [ATNAUJINIMAS]. Atskirk klientų, pajamų, pristatymo, žmonių ir reputacijos rizikas. Pažymėk kiekvieną kaip žemą/vidutinę/aukštą ir pasiūlyk, ką tikrinti toliau.",
            },
            {
              title: "KPI anomalijos paaiškinimas",
              outcome: "Atskirk triukšmą nuo operacinio signalo.",
              prompt:
                "Išanalizuok šią KPI anomaliją: [DUOMENYS / KONTEKSTAS]. Paaiškink galimas priežastis, kokie įrodymai jas palaiko, ką tikrinti toliau ir ar reikia sprendimo, stebėjimo ar skubaus veiksmo.",
            },
            {
              title: "Kliento rizikos briefas",
              outcome: "Paverčia kliento aptarnavimo ir paskyros triukšmą išlaikymo veiksmu.",
              prompt:
                "Sukurk kliento rizikos briefą iš šios informacijos: [UŽRAŠAI]. Nustatyk rizikingas paskyras, priežastis, pajamų ekspoziciją, savininką, veiksmą per 7 dienas ir vadovo žinutę, jei reikia.",
            },
            {
              title: "Valdybos santrauka",
              outcome: "Operacinis atnaujinimas tampa valdybos lygio signalu.",
              prompt:
                "Paversk šį operacinį atnaujinimą valdybos santrauka: [ATNAUJINIMAS]. Įtrauk pagrindinę žinutę, progresą, rizikas, reikalingą sprendimą, finansinį ar kliento poveikį ir vieną klausimą, kuriame reikia valdybos pagalbos.",
            },
          ],
        },
        {
          title: "Delegavimas",
          description: "Vadovo intenciją paversk aiškiu briefu komandai.",
          prompts: [
            {
              title: "Delegavimo briefas",
              outcome: "Tikslas, kontekstas, ribos, kokybės kartelė ir peržiūros kriterijai.",
              prompt:
                "Paversk šią intenciją delegavimo briefu: [INTENCIJA]. Įtrauk tikslą, auditoriją, kontekstą, ribas, rezultato formatą, kokybės kriterijus, pavyzdžius ir peržiūros terminą.",
            },
            {
              title: "Kokybės kartelė prieš peržiūrą",
              outcome: "Mažiau CEO perrašymo, nes standartas aiškus iš anksto.",
              prompt:
                "Sukurk kokybės kontrolės sąrašą šiai užduočiai: [UŽDUOTIS]. Įtrauk privalomus punktus, dažnas klaidas, gero rezultato pavyzdžius ir ką eskaluoti prieš pateikiant.",
            },
            {
              title: "Peržiūrėtojo kontrolės sąrašas",
              outcome: "Peržiūra tampa greitesnė ir mažiau subjektyvi.",
              prompt:
                "Sukurk peržiūrėtojo kontrolės sąrašą šiam rezultatui: [REZULTATAS]. Įtrauk strateginį atitikimą, faktų tikslumą, auditorijos aiškumą, riziką, trūkstamą kontekstą ir tinka/netinka kriterijus.",
            },
            {
              title: "Savininko perdavimas",
              outcome: "Darbas iš CEO galvos pereina į savininko vykdymą.",
              prompt:
                "Sukurk savininko perdavimą darbui [DARBAS]. Įtrauk kontekstą, jau priimtą sprendimą, savininko atsakomybes, ribas, etapus, eskalavimo taisykles ir pirmo atnaujinimo formatą.",
            },
            {
              title: "Instrukcija komandai",
              outcome: "Vadovo intencija tampa komandai paruošta užduotimi.",
              prompt:
                "Parašyk instrukciją komandai užduočiai [UŽDUOTIS]. Įtrauk kodėl tai svarbu, ką reiškia padaryta, ribas, pavyzdžius, savininką, terminą ir kaip raportuoti progresą.",
            },
          ],
        },
        {
          title: "Komunikacija",
          description: "Rašyk aiškias žinutes įtemptais, skubiais ar strateginiais momentais.",
          prompts: [
            {
              title: "Įtemptas atnaujinimas",
              outcome: "Rami, sąžininga komunikacija su aiškiu kitu žingsniu.",
              prompt:
                "Perrašyk šį vadovo atnaujinimą, kad jis būtų aiškus, ramus ir negynybiškas: [ŽINUTĖ]. Struktūra: faktas, priežastis, poveikis, kas keičiasi, kas nesikeičia ir kitas žingsnis.",
            },
            {
              title: "Partnerio/kliento žinutė",
              outcome: "Vadovo lygio žinutė, kuri saugo pasitikėjimą ir tempą.",
              prompt:
                "Parašyk trumpą partnerio/kliento žinutę apie [SITUACIJA]. Tonas: tiesus, šiltas, patikimas. Įtrauk verslo kontekstą, sprendimą, poveikį ir vieną aiškų kitą veiksmą. Iki 120 žodžių.",
            },
            {
              title: "Vidinis pokyčio pranešimas",
              outcome: "Paaiškina pokytį nekuriant neapibrėžtumo.",
              prompt:
                "Parašyk vidinį pokyčio pranešimą apie [POKYTIS]. Įtrauk kas keičiasi, kodėl, kas nesikeičia, poveikį komandoms, sprendimo savininką ir kur keliauja klausimai.",
            },
            {
              title: "Termino pakeitimas",
              outcome: "Praneša apie vėlavimą negynybiškai.",
              prompt:
                "Paruošk termino keitimo žinutę auditorijai [AUDITORIJA]. Įtrauk faktą, priežastį, kompromisą, naują datą, ką darome kokybei apsaugoti ir kada bus kitas atnaujinimas.",
            },
            {
              title: "Partnerystės pasiūlymo rėmas",
              outcome: "Mandagus tekstas tampa verslo argumentu.",
              prompt:
                "Sustruktūruok šį partnerystės pasiūlymą: [IDĖJA]. Įtrauk strateginę priežastį, vertę partneriui, vertę mums, įrodymą, riziką, kitą žingsnį ir trumpą vadovo lygio pradžios pastraipą.",
            },
          ],
        },
        {
          title: "Saugumas ir kokybė",
          description: "Patikrink faktus, reputaciją, trūkstamą kontekstą ir haliucinacijų riziką, prieš naudodamas rezultatą.",
          prompts: [
            {
              title: "Vadovo siuntimo patikra",
              outcome: "Galutinė patikra prieš siunčiant valdybai, klientui, partneriui ar komandai.",
              prompt:
                "Veik kaip vadovo rizikos peržiūrėtojas. Peržiūrėk šį tekstą prieš man jį siunčiant: [TEKSTAS]. Kontekstas: [VALDYBA / KLIENTAS / KOMANDA / PARTNERIS]. Grąžink faktines rizikas, teisines/reputacijos rizikas, trūkstamą kontekstą, neaiškų savininką ir saugesnę formuluotę, jei reikia.",
            },
            {
              title: "Haliucinacijų skenavimas",
              outcome: "Randa teiginius, kuriuos DI galėjo išgalvoti ar pervertinti.",
              prompt:
                "Perskenuok šį DI rezultatą dėl galimų haliucinacijų: [TEKSTAS]. Išvardyk nepagrįstus teiginius, skaičius, datas, įvardintus subjektus, prielaidas ir kokiu šaltiniu tikrinti kiekvieną.",
            },
            {
              title: "Teisinė / reputacijos rizika",
              outcome: "Pagauna formuluotes, kurios kuria nereikalingą ekspoziciją.",
              prompt:
                "Peržiūrėk šią žinutę dėl teisinės, konfidencialumo, kliento pasitikėjimo ir reputacijos rizikos: [ŽINUTĖ]. Grąžink rizikos lygį, rizikingas frazes, saugesnes alternatyvas ir ką reikia patvirtinti prieš siunčiant.",
            },
            {
              title: "Trūkstamo konteksto patikra",
              outcome: "Nustato, ko vadovui trūksta prieš veikiant.",
              prompt:
                "Peržiūrėk šį rezultatą dėl trūkstamo konteksto: [REZULTATAS]. Kokių faktų, ribų, suinteresuotų pusių požiūrių, rizikų ar sprendimo kriterijų trūksta prieš CEO/COO veikiant?",
            },
            {
              title: "Sprendimo savininko patikra",
              outcome: "Užtikrina, kad rekomendacija turi atsakomybę.",
              prompt:
                "Patikrink šią rekomendaciją dėl sprendimo paruoštumo: [REKOMENDACIJA]. Nustatyk sprendimo savininką, vykdymo savininką, terminą, sėkmės kriterijus, rizikas ir kas padarytų rekomendaciją netinkamą.",
            },
          ],
        },
      ],
    },
    demo: {
      eyebrow: "Statinis aiškumo demo",
      title: "Peržiūrėk rezultato formą.",
      subtitle:
        "Demo sąmoningai simuliuotas. Jis parodo, ką turi grąžinti stiprus vadovo promptas, neprašant privačių įmonės duomenų.",
      followUpEyebrow: "Laikyk struktūrą po ranka",
      followUpText:
        "Max Value Kit ant spausdinto lapo palieka tą pačią įžvalgos, sprendimo, rizikų ir kito veiksmo formą šalia tavo susitikimų.",
      followUpCta: "Atsisiųsti Max Value Kit",
      messyInputLabel: "Verslo triukšmas",
      outputLabel: "Aiškus vadovo rezultatas",
      insight: "Pagrindinė įžvalga",
      decision: "Reikalingas sprendimas",
      risks: "Svarbiausios rizikos",
      questions: "Klausimai komandai",
      action: "Kitas veiksmas",
      copyPrompt: "Kopijuoti pavyzdinį promptą",
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
            "Mėnesio ataskaita turi 18 puslapių. Pajamos neauga, klientų netekimas šiek tiek didėja, produkto pristatymas vėl vėlavo, o klientų aptarnavimas mato daugiau skundų iš kelių svarbių klientų.",
          insight:
            "Ataskaitoje slepiasi klientų išlaikymo rizika. Skundai ir produkto vėlavimai gali būti ankstyvas signalas, kad klientų netekimas didės dar prieš pajamoms tai parodant.",
          decision:
            "Nuspręsti, ar kitas vadovų veiksmas yra augimo kampanija, klientų išlaikymo intervencija, ar produkto atstatymas.",
          risks: ["Stabilios pajamos sukuria klaidingą ramybę.", "Aptarnavimo simptomai atskiriami nuo produkto vėlavimų.", "Pardavimai stumia naujus klientus, kai esamos pajamos tampa rizikingos."],
          questions: ["Kurie klientai rizikingiausi?", "Kiek ARR susieta su vėluojančiais produkto darbais?", "Kokį klientui matomą pataisymą galime pristatyti per 14 dienų?"],
          action:
            "Prieš tvirtinant augimo kampaniją paprašyti vieno puslapio klientų netekimo rizikos santraukos.",
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
      title: "Nemokyk anatomijos pirmiausia. Pirmiausia parodyk rezultatą.",
      beforeTitle: "Atsitiktinis DI naudojimas",
      beforeText: "Pasiruošk rytojaus vadovų susitikimui.",
      beforeBullets: ["Neaiški auditorija", "Nėra sprendimo rėmo", "Nėra kokybės kartelės"],
      afterTitle: "Vadovo darbo eiga",
      afterText:
        "Pagal šiuos užrašus nustatyk reikalingą sprendimą, paslėptas rizikas, klausimus komandai ir kitą veiksmą.",
      afterBullets: ["Aiškus rezultatas", "Sprendimo logika", "Paruošta deleguoti"],
    },
    memes: {
      eyebrow: "Vizualus įrodymas",
      title: "Problema – ne prieiga prie DI. Problema – kontrolė.",
      items: [
        ["Prieigos neužtenka", "Be struktūros DI kuria chaosą. Su kontrole jis kuria vadovui naudingą rezultatą."],
        ["Struktūra kuria kontrolę", "Pokytis paprastas: nustok spėlioti, aiškiai apibrėžk įvestį ir valdyk rezultatą."],
        ["Įrankiai greičio nesukuria", "DI, prijungtas prie neaiškaus proceso, tik greičiau atskleidžia butelio kaklelį."],
        ["Kontrolė kuria rezultatus", "Atsitiktinės užklausos kuria atsitiktinius atsakymus. Struktūra kuria sprendimus ir kitus veiksmus."],
        ["Vadovui reikia sistemos", "Komanda jau gali eksperimentuoti. Vadovui reikia bendro veikimo modelio."],
      ],
    },
    workflows: {
      eyebrow: "Kur biblioteka atsiperka",
      title: "Šešios vadovų darbo eigos, kur geresni promptai taupo laiką.",
      items: [
        ["Sprendimai", "Palyginti variantus, kompromisus, grįžtamumą ir laiką."],
        ["COO vykdymas", "Rasti butelio kaklelius, savininkus, priklausomybes ir pristatymo riziką."],
        ["Susitikimai", "Iš padrikų užrašų gauti sprendimus, rizikas ir aiškią darbotvarkę."],
        ["Ataskaitos", "Ištraukti signalą iš ilgų atnaujinimų dar prieš skaitant viską."],
        ["Delegavimas", "Paversti vadovo intenciją aiškiu briefu komandai."],
        ["Komunikacija", "Paruošti aiškias žinutes įtemptoms ar strateginėms situacijoms."],
      ],
    },
    roiPath: {
      eyebrow: "5 val. savaitinės naudos kelias",
      title: "Praktinis kelias nuo vieno naudingo prompto iki vadovų sistemos.",
      subtitle:
        "Laiko taupymo pažadas tampa patikimas tada, kai rinkinys susietas su kartojamomis savaitinėmis darbo eigomis, ne abstrakčiu produktyvumu.",
      steps: [
        ["5-15 min", "Saugumo patikra", "Peržiūrėti DI tekstą prieš klientą, valdybą, partnerį ar komandą."],
        ["20-40 min", "Ataskaitos skenavimas", "Ištraukti signalą, paslėptą riziką ir reikalingą sprendimą iš ilgų atnaujinimų."],
        ["20-45 min", "Sprendimo paruošimas", "Variantus paversti kompromisais, kriterijais, rizikomis ir rekomendacija."],
        ["15-30 min", "Susitikimo sutvarkymas", "Užrašus paversti sprendimais, savininkais, terminais ir tolesniais veiksmais."],
        ["15-45 min", "Delegavimo briefas", "Vadovo intenciją perkelti į komandai vykdomą briefą."],
        ["10-30 min", "Įtempta komunikacija", "Paruošti aiškias žinutes pokyčiams, vėlavimams, klientams ar partneriams."],
      ],
      total: "Iki 5 val. per savaitę vienam vadovui, kai naudojama kartotinai vadovų ritme.",
    },
    visualBreak: {
      eyebrow: "Iliustratyvus įrodymas",
      title: "Prieiga prie DI nėra vadovo kontrolė.",
      items: [
        ["Atsitiktiniai promptai kuria atsitiktinius atsakymus", "Jei įvestis neturi sprendimo rėmo, rezultatas sukuria daugiau darbo vadovui."],
        ["CEO tampa redagavimo butelio kakleliu", "Be kokybės kartelės kiekvienas deleguotas juodraštis grįžta perrašymui."],
        ["Sistema kuria svertą", "Bendri promptai, patikros ir rezultato standartai leidžia komandai judėti greičiau neprarandant sprendimo kokybės."],
      ],
    },
    systemVisual: {
      eyebrow: "DI yra operacinė sistema",
      title: "Modelis duoda galimybes. Procesas sukuria kartojamus rezultatus.",
      flowCaption:
        "Nuo miglotos įvesties iki vadovui paruošto rezultato ir bendro komandos operacinio standarto.",
      items: [
        ["Modelis", "Ką DI gali sugeneruoti."],
        ["Promptų rinkinys", "Kaip vadovai apibrėžia įvestį, logiką ir rezultatą."],
        ["Kokybės patikra", "Kaip kontroliuojami faktai, rizikos ir atsakomybė."],
        ["Komandos standartas", "Kaip ta pati darbo eiga kartojama susitikimuose, ataskaitose ir delegavime."],
      ],
    },
    roi: {
      eyebrow: "Verslo vertė",
      title: "Sukurta parodyti vertę prieš diegimą.",
      metrics: [
        ["35", "Vadovų promptai matomi puslapyje"],
        ["2min", "Laikas iki pirmos naudingos praktikos"],
        ["7", "CEO/COO darbo eigų kategorijos"],
      ],
      note:
        "Tikslas nėra versti vadovus studijuoti promptų inžineriją. Tikslas yra duoti naudingą operacinį rinkinį, parodyti rezultato formą ir tada įdiegti kartojamą sistemą vadovų komandoje.",
    },
    authority: {
      eyebrow: "Prekės ženklo architektūra",
      title: "Praktinis tiltas į pilną PromptAnatomy sistemą.",
      mother: "Motininė platforma",
      motherText: "PromptAnatomy.app lieka pagrindinė DI operacinė sistema ir komercinė kryptis.",
      sister: "Seserinė platforma",
      sisterText: "Praktinis lietuviškas puslapis įrodo platesnį mokymo metodą ir komandinį pritaikymą.",
    },
    cta: {
      eyebrow: "Pasiimk vadovo rinkinį",
      title: "Pasiimk trumpą rinkinį. Sistemą diek tada, kai komandai reikia standarto.",
      subtitle:
        "Atsisiųsk Max Value Kit šios savaitės vadovų darbui. PromptAnatomy naudok tada, kai tą patį metodą nori paversti kartojamu komandos operaciniu standartu.",
      primary: "Atsisiųsti Max Value Kit",
      secondary: "Atidaryti PromptAnatomy.app",
    },
    footer: {
      brand: "PromptAnatomy · Vadovo OS",
      tagline: "Statinis vadovo rinkinys. Be prisijungimo, be duomenų siuntimo.",
      privacy: "Privatumas",
      terms: "Sąlygos",
    },
  },
} as const;
