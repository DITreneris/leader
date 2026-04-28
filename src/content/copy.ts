export const supportedLanguages = ["en", "lt"] as const;

export type Language = (typeof supportedLanguages)[number];

export const uiCopy = {
  en: {
    meta: {
      title: "CEO/COO Executive Prompt Operating Kit | Prompt Anatomy",
      description:
        "Standardize leadership AI: fewer mistakes, faster decisions, clearer outcomes. Free static kit and demo—no login. PromptAnatomy when your team needs one operating standard.",
    },
    a11y: {
      skipLink: "Skip to practice",
      copyManual: "Copy blocked: select the prompt text above, then press Ctrl+C (or ⌘+C on Mac).",
    },
    faq: {
      sectionTitle: "Common questions",
      items: [
        {
          q: "Is the kit free?",
          a: "Yes. This page and the printable kit are free. PromptAnatomy is the full platform for a team-wide standard.",
        },
        {
          q: "Will my data be sent anywhere?",
          a: "No. This site is static: no analytics here, and copying text does not upload your content.",
        },
        {
          q: "How is this different from a generic prompt list?",
          a: "CEO/COO workflows (meetings, reports, decisions, delegation, comms) plus a safety check before you send output.",
        },
        {
          q: "Do I need a PromptAnatomy account?",
          a: "Not for this kit. Sign in only when you use the full product.",
        },
        {
          q: "Which roles is the kit designed for?",
          a: "CEOs, COOs, and senior operators who need decision-ready output every week—not toy prompts.",
        },
      ],
    },
    nav: {
      product: "CEO/COO Max Value Kit",
      practice: "2-minute practice",
      proof: "Static demo",
      system: "How the OS fits",
      library: "Prompt library",
      demo: "See how it works",
      language: "Language",
      kitPdf: "Kit (PDF)",
    },
    hero: {
      eyebrow: "Free CEO/COO kit · Executive control surface for AI",
      title: "From chaotic AI output to controlled decisions in seven days.",
      subtitle:
        "Standardize how your team uses AI: fewer mistakes, faster decisions, clearer outcomes—without another vague prompt list.",
      primaryCta: "See the 2-minute practice",
      secondaryCta: "Open PromptAnatomy.app",
      proofOne: "Short printable kit",
      proofTwo: "No login",
      proofThree: "Built on PromptAnatomy",
      visualLabel: "Operating kit preview",
      visualTitle: "Decision-ready output",
      visualInsight: "Clarify the trade-off, decision criteria, risk, and next action before the meeting starts.",
      visualRisk: "Risk: the team debates symptoms instead of deciding the operating trade-off.",
      visualAction: "Next action: copy the prompt, fill the brackets, and run the decision brief.",
    },
    heroTrust: {
      showPlaceholderLogos: false,
      logosEyebrow: "Adoption signal",
      logosTitle: "Where leadership teams standardize AI output",
      logosNote: "Customer logos appear here when provided.",
      logosAria: "Customer logos",
      logoSlots: ["Enterprise", "Growth", "Operations", "Board-facing"],
      outcomesEyebrow: "Outcomes operators care about",
      outcomes: [
        "Less rework between “the model said it” and “we can decide.”",
        "Clearer briefs before board, client, partner, or all-hands sees noise.",
        "One repeatable method: prompts, checks, owners, next actions.",
      ],
    },
    flowScheme: {
      eyebrow: "How it works",
      a11yLabel: "Example flow: concrete request, PromptAnatomy structure applied, decision-ready output with KPIs and owners.",
      bridgeNote:
        "Same pattern as the practice block below: role, context, decision logic, output, then the 30-second safety check.",
      inputLabel: "Input",
      inputExample: "Prepare a Q2 marketing strategy.",
      middleLabel: "PromptAnatomy",
      middleBadge: "Structure applied",
      outputLabel: "Output",
      outputBullets: [
        "Clear KPIs, constraints, and decision criteria",
        "Channel plan with trade-offs and risks",
        "Sequenced actions with owners and dates",
      ],
      nextStepHint: "Next: the 2-minute practice below",
    },
    proof: {
      eyebrow: "Why leaders use it",
      title: "Output first—then theory.",
      items: [
        ["Decision first", "Every prompt aims at a decision, risk, trade-off, owner, or next action."],
        ["Workflow native", "Meetings, reports, decisions, delegation, comms, COO execution—by design."],
        ["Low risk", "Static page and download: no login, no data sent, no API key."],
      ],
    },
    quickPractice: {
      eyebrow: "2-minute executive practice",
      title: "From fog to decision-ready output in four moves.",
      subtitleLead: "Turn any request into a decision in under 2 minutes.",
      subtitleTrail: "Messy request → structured prompt → decision-ready output → 30-second risk shield.",
      promptBlockLabel: "Copyable template",
      previewHint: "Copy pulls the full template. This box is only a preview.",
      beforeTitle: "1. Fog",
      beforeText: "Prepare for tomorrow's leadership meeting.",
      beforeLabel: "What goes wrong",
      beforeBullets: ["No decision question.", "No owner.", "No success criteria."],
      afterTitle: "2. Structure",
      structureHelper:
        "Define four things, then let the model fill the brief.",
      afterLabel: "What you get from this pattern",
      afterBullets: ["Decision question", "Output shape", "Constraints", "Owner + deadline"],
      copyPrompt: "Copy template",
      copied: "Copied",
      prompt:
        "Role: Act as my executive operating partner.\nTask: Turn this into a decision brief.\nInput: [PASTE NOTES]\nOutput: 1 decision, 3 risks, 3 questions, 1 next action (owner + deadline).\nConstraints: No invented numbers. Flag missing context.",
      resultTitle: "3. Result",
      resultMicro: "Example output shape (not your data)",
      resultText:
        "The meeting is not about status. It needs one prioritization decision, three risk checks, and one owner by Friday.",
      checkTitle: "4. Safety check",
      checkText:
        "30-second risk shield: facts verified, sensitive claims flagged, missing context called out, owner clear.",
      checkBridge: "Run the safety prompt before anything goes to board, client, partner, or team.",
      ctaText: "Test this with your next meeting.",
      ctaDemo: "Open static demo",
      ctaDemoHref: "#demo",
      ctaHref: "https://www.promptanatomy.app/?utm_source=leader&utm_medium=practice_band&utm_campaign=demo_followup",
      ctaLabel: "Open PromptAnatomy",
      safetyAnchorLabel: "Full safety prompt to copy",
    },
    safety: {
      eyebrow: "30-second executive safety check",
      title: "Do not send AI output before this check.",
      subtitle: "For board, client, partner, or team: verify facts, exposure, and ownership before it ships.",
      processLabel: "Run the 4 checks in order",
      promptBlockLabel: "Full prompt to copy",
      previewHint: "Copy pulls the full prompt. This box is only a preview.",
      copyPrompt: "Copy safety prompt",
      copied: "Copied",
      items: [
        ["Are the facts verified?", "What numbers, dates, names, or claims need source verification?"],
        ["Is the wording risky?", "What wording could create legal, client, or trust exposure?"],
        ["What context is missing?", "What would a senior operator ask before acting on this output?"],
        ["Who owns the decision?", "What decision does this output imply, and who owns it?"],
      ],
      prompt:
        "Act as an executive risk reviewer. Review this AI-generated text before I send or use it: [TEXT]. Context: [BOARD / CLIENT / TEAM / PARTNER]. Return 1) factual risks to verify, 2) legal or reputation risks, 3) missing context, 4) unclear decision or owner, 5) a safer revised version if needed.",
    },
    anatomy: {
      eyebrow: "Executive prompt anatomy",
      title: "Five blocks that keep AI useful for leadership work.",
      expandSummary: "Five blocks (expand)",
      subtitle:
        "Quick work: two or three blocks. High-stakes output: use all five.",
      items: [
        ["Role", "Who AI should act as and what business outcome it serves."],
        ["Context", "Facts, audience, constraints, assumptions, and what the team already knows."],
        ["Decision Logic", "Criteria, trade-offs, risks, reversibility, and timing."],
        ["Output", "Format, length, example, owner, deadline, or decision-ready structure."],
        ["Quality Check", "What to verify before using the answer with a client, board, or team."],
      ],
    },
    library: {
      eyebrow: "Full copyable library",
      title: "35 prompts for recurring CEO/COO work.",
      subtitle: "Open only what you need: one workflow, one prompt, one safety check.",
      starter: {
        eyebrow: "Start with 7",
        title: "One starter per workflow—then go deeper if you need it.",
        subtitle:
          "Pick this week’s worst time sink, copy the starter, run the safety check.",
        pickerEyebrow: "Pick this week's heaviest workflow",
        pickerHelp: "We highlight the starter prompt for that workflow.",
        note: "Printable kit: 7 starters + safety check + weekly path on one page.",
        downloadCta: "Download Max Value Kit",
      },
      copyPrompt: "Copy prompt",
      copied: "Copied",
      revealPrompt: "Reveal prompt",
      pdfAgain: "Download the PDF kit again",
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
      subtitle: "Simulated on purpose: shows the output shape a strong executive prompt should produce—no private data required.",
      promptBlockLabel: "Sample prompt to copy",
      previewHint: "Copy pulls the full prompt. This box is only a preview.",
      followUpEyebrow: "Keep the structure on your desk",
      followUpText: "The printable kit carries the same insight → decision → risks → next-action shape into your week.",
      followUpCta: "Download Max Value Kit",
      pdfAgain: "Get the PDF again",
      messyInputLabel: "Business noise",
      connectorCaption: "Transforms",
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
    roiPath: {
      eyebrow: "5-hour weekly ROI path",
      title: "From one useful prompt to a weekly leadership habit.",
      subtitle: "Rough time if you use the kit across your real weekly rhythm—not abstract “productivity.”",
      centerLabel: "Executive week",
      centerText: "Six repeatable moves that turn AI into decision-ready output.",
      panelLabel: "Selected step",
      panelHint: "Copy grabs a prompt template for this step.",
      copyPrompt: "Copy prompt",
      copied: "Copied",
      steps: [
        {
          id: "safety",
          accent: "risk",
          time: "5-15 min",
          action: "Check before you send",
          value: "Avoid a client/board mistake before it ships.",
          description: "Review AI-generated text before it reaches a client, board, partner, or team.",
          prompt:
            "Act as an executive risk reviewer. Review this text before I send it: [TEXT]. Context: [BOARD / CLIENT / TEAM / PARTNER]. Return 1) facts to verify, 2) legal/reputation risks, 3) missing context, 4) unclear decision/owner, 5) safer wording.",
        },
        {
          id: "scan",
          accent: "analysis",
          time: "20-40 min",
          action: "Scan for signal",
          value: "Find hidden risk + decision before the meeting.",
          description: "Extract signal, hidden risk, and decision needed from long updates.",
          prompt:
            "Summarize this long update for a CEO: [UPDATE]. Return key signal, hidden risk, decision needed, 3 questions for the team, and one next action. Do not invent missing numbers.",
        },
        {
          id: "decision",
          accent: "decision",
          time: "20-45 min",
          action: "Prepare the decision",
          value: "Trade-offs, criteria, risks—written before you decide.",
          description: "Turn options into trade-offs, criteria, risks, and recommendation.",
          prompt:
            "Act as my CEO operating partner. Analyze this decision: [DECISION]. Context: [FACTS]. Options: [OPTIONS]. Return 1 recommendation, 3 trade-offs, 3 risks, decision criteria, and the next action with owner and deadline.",
        },
        {
          id: "meeting",
          accent: "execution",
          time: "15-30 min",
          action: "Clean up the meeting",
          value: "Notes become decisions, owners, deadlines.",
          description: "Convert notes into decisions, owners, deadlines, and follow-up.",
          prompt:
            "Turn these meeting notes into an executive action log: [NOTES]. Return decisions made, open decisions, owners, deadlines, risks, and the first follow-up message to send.",
        },
        {
          id: "delegation",
          accent: "execution",
          time: "15-45 min",
          action: "Delegate with a brief",
          value: "Move work from your head into an executable plan.",
          description: "Move intent from the CEO's head into an executable team brief.",
          prompt:
            "Turn this intent into a delegation brief: [INTENT]. Include objective, audience, context, constraints, deliverable format, quality criteria, examples, review deadline, and escalation triggers.",
        },
        {
          id: "comms",
          accent: "communication",
          time: "10-30 min",
          action: "Send a clear message",
          value: "Reduce uncertainty with one credible update.",
          description: "Draft clear messages for change, delays, clients, or partners.",
          prompt:
            "Rewrite this leadership message so it is clear, calm, and non-defensive: [MESSAGE]. Structure it as fact, reason, impact, what changes, what stays the same, and next step.",
        },
      ],
      total: "~5 hours/week → fewer decision mistakes, clearer ownership, safer outbound communication.",
      printableOneLiner: "Six moves ≈ ~5h/week — same rhythm on one printable page.",
      printableKitLink: "Open download band",
    },
    systemVisual: {
      eyebrow: "AI is an operating system",
      title: "The model gives capability. The process creates repeatable results.",
      flowCaption: "Messy input → clear output → shared team standard.",
      items: [
        ["Model", "Raw generation capacity."],
        ["Prompt kit", "How you define input, logic, and output."],
        ["Quality check", "Facts, risks, ownership before send."],
        ["Team standard", "Same flow across meetings, reports, delegation."],
      ],
    },
    authority: {
      eyebrow: "Brand architecture",
      title: "Lead magnet into the full PromptAnatomy system.",
      chooseNext: "Choose one next step",
      mother: "Mother platform",
      motherText: "PromptAnatomy.app: full AI operating system and commercial home.",
      sisterEyebrow: "Sister hub",
      sisterTitle: "DI Operacinis Centras",
      sisterText:
        "CEO/COO hub on GitHub Pages: mode-based prompts, weekly priorities, and a template library (Prompt Anatomy spin-off).",
      sisterLink: "Open the sister CEO/COO hub →",
    },
    cta: {
      eyebrow: "Take the executive kit",
      title: "Take the short kit. Install the system when the team needs the standard.",
      subtitle:
        "Download the Max Value Kit for this week. Open PromptAnatomy when you want the same method as a team-wide standard.",
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
        "Standartizuok vadovybės DI naudojimą: mažiau klaidų, greitesni sprendimai, aiškesni rezultatai. Nemokamas statinis rinkinys ir demo—be prisijungimo. PromptAnatomy—kai komandai reikia vieno standarto.",
    },
    a11y: {
      skipLink: "Pereiti prie praktikos",
      copyManual:
        "Kopijavimas užblokuotas: pažymėk prompto tekstą aukščiau ir spausk Ctrl+C (arba ⌘+C Mac).",
    },
    faq: {
      sectionTitle: "Dažni klausimai",
      items: [
        {
          q: "Ar rinkinys nemokamas?",
          a: "Taip. Puslapis ir spausdinamas rinkinys nemokami. PromptAnatomy – pilna platforma bendram standartui.",
        },
        {
          q: "Ar mano duomenys bus kažkur siunčiami?",
          a: "Ne. Puslapis statinis: analitikos čia nėra, kopijavimas nekelia turinio pas mus.",
        },
        {
          q: "Kuo tai skiriasi nuo bendro promptų sąrašo?",
          a: "CEO/COO darbo eigos (susitikimai, ataskaitos, sprendimai, delegavimas, komunikacija) ir patikra prieš siunčiant.",
        },
        {
          q: "Ar reikia PromptAnatomy paskyros?",
          a: "Rinkiniui ne. Prisijunk tik naudodamas pilną produktą.",
        },
        {
          q: "Kokioms rolėms skirtas rinkinys?",
          a: "CEO, COO ir vyresniems operatoriams, kuriems reikia sprendimui paruošto rezultato kas savaitę—ne žaislinių promptų.",
        },
      ],
    },
    nav: {
      product: "CEO/COO Max Value Kit",
      practice: "2 min. praktika",
      proof: "Statinė demo",
      system: "Kaip telpa sistema",
      library: "Promptų biblioteka",
      demo: "Žiūrėti kaip veikia",
      language: "Kalba",
      kitPdf: "Rinkinys (PDF)",
    },
    hero: {
      eyebrow: "Nemokamas CEO/COO rinkinys · Vadovo valdymo paviršius DI",
      title: "Nuo chaotiškų DI atsakymų iki valdomų sprendimų per 7 dienas.",
      subtitle:
        "Standartizuok, kaip komanda naudoja DI: mažiau klaidų, greitesni sprendimai, aiškūs rezultatai—ne dar vienas miglotas promptų sąrašas.",
      primaryCta: "Žiūrėti 2 min. praktiką",
      secondaryCta: "Atidaryti PromptAnatomy.app",
      proofOne: "Trumpas spausdinamas rinkinys",
      proofTwo: "Be prisijungimo",
      proofThree: "Pagrįsta PromptAnatomy",
      visualLabel: "Rinkinio peržiūra",
      visualTitle: "Sprendimui paruoštas rezultatas",
      visualInsight: "Išgrynink kompromisą, sprendimo kriterijus, riziką ir kitą veiksmą dar prieš susitikimą.",
      visualRisk: "Rizika: komanda aptarinės simptomus, užuot priėmusi operacinį sprendimą.",
      visualAction: "Kitas veiksmas: kopijuok promptą, užpildyk skliaustus ir paleisk sprendimo briefą.",
    },
    heroTrust: {
      showPlaceholderLogos: false,
      logosEyebrow: "Pasitikėjimo signalas",
      logosTitle: "Kur vadovybės komandos standartizuoja DI išvestį",
      logosNote: "Čia bus rodomi klientų logotipai, kai jie bus pateikti.",
      logosAria: "Klientų logotipai",
      logoSlots: ["Enterprise", "Augimas", "Operacijos", "Tarybai"],
      outcomesEyebrow: "Rezultatai, kuriais rūpinasi operatorius",
      outcomes: [
        "Mažiau perdarymo tarp „modelis taip pasakė“ ir „galime spręsti“.",
        "Aiškesni briefai prieš tai, kai taryba, klientas ar komanda mato triukšmą.",
        "Vienas kartojamas metodas: promptai, patikros, savininkai, kiti veiksmai.",
      ],
    },
    flowScheme: {
      eyebrow: "Kaip tai veikia",
      a11yLabel:
        "Pavyzdinė eiga: konkreti užklausa, pritaikyta PromptAnatomy struktūra, sprendimui paruošta išvestis su KPI ir savininkais.",
      bridgeNote:
        "Tas pats šablonas kaip žemiau esančioje praktikoje: rolė, kontekstas, sprendimo logika, išvestis, tada 30 sek. saugumo patikra.",
      inputLabel: "Įvestis",
      inputExample: "Paruošk Q2 marketingo strategiją.",
      middleLabel: "PromptAnatomy",
      middleBadge: "Struktūra pritaikyta",
      outputLabel: "Išvestis",
      outputBullets: [
        "Aiškūs KPI, ribos ir sprendimo kriterijai",
        "Kanalų planas su kompromisais ir rizikomis",
        "Veiksmų seka su savininkais ir datomis",
      ],
      nextStepHint: "Toliau: 2 min. praktika žemiau",
    },
    proof: {
      eyebrow: "Kodėl vadovai jį naudoja",
      title: "Pirmiausia rezultatas—paskui teorija.",
      items: [
        ["Sprendimas – pirmas", "Kiekvienas promptas orientuotas į sprendimą, riziką, kompromisą, savininką arba kitą veiksmą."],
        ["Tikros darbo eigos", "Susitikimai, ataskaitos, sprendimai, delegavimas, komunikacija, COO vykdymas—pagal dizainą."],
        ["Mažai rizikos", "Statinis puslapis ir failas: be prisijungimo, be duomenų siuntimo, be API rakto."],
      ],
    },
    quickPractice: {
      eyebrow: "2 min. vadovo praktika",
      title: "Nuo miglos iki sprendimui paruošto rezultato per keturis judesius.",
      subtitleLead: "Bet kurią užklausą paversk sprendimu per mažiau nei 2 min.",
      subtitleTrail: "Miglota užklausa → struktūruotas promptas → naudingas rezultatas → 30 sek. rizikos skydas prieš siunčiant.",
      promptBlockLabel: "Kopijuojamas šablonas",
      previewHint: "Kopijuojant paimamas pilnas šablonas. Čia – tik peržiūra.",
      beforeTitle: "1. Migla",
      beforeText: "Pasiruošk rytojaus vadovų susitikimui.",
      beforeLabel: "Kas stringa",
      beforeBullets: ["Nėra sprendimo klausimo.", "Nėra savininko.", "Nėra sėkmės kriterijų."],
      afterTitle: "2. Struktūra",
      structureHelper:
        "Apibrėžk keturis dalykus, tada DI užpildys briefą.",
      afterLabel: "Ką duoda šis šablonas",
      afterBullets: ["Sprendimo klausimas", "Rezultato forma", "Ribos", "Savininkas + terminas"],
      copyPrompt: "Kopijuoti šabloną",
      copied: "Nukopijuota",
      prompt:
        "Rolė: Veik kaip mano vadovo operacinis partneris.\nUžduotis: Paversk tai sprendimo briefu.\nĮvestis: [ĮKLIJUOK UŽRAŠUS]\nRezultatas: 1 sprendimas, 3 rizikos, 3 klausimai, 1 kitas veiksmas (savininkas + terminas).\nRibos: Neišgalvok skaičių. Pažymėk trūkstamą kontekstą.",
      resultTitle: "3. Rezultatas",
      resultMicro: "Pavyzdinė išvestis (ne tavo duomenys)",
      resultText:
        "Tai nėra statuso susitikimas. Reikia vieno prioriteto sprendimo, trijų rizikos patikrų ir vieno savininko iki penktadienio.",
      checkTitle: "4. Patikra",
      checkText:
        "30 sek. rizikos skydas: patikrinti faktai, pažymėti jautrūs teiginiai, aiškus kontekstas ir savininkas.",
      checkBridge: "Paleisk saugumo promptą prieš siunčiant valdybai, klientui, partneriui ar komandai.",
      ctaText: "Išbandyk su savo kito susitikimo užrašais.",
      ctaDemo: "Atidaryti statinę demo",
      ctaDemoHref: "#demo",
      ctaHref: "https://www.promptanatomy.app/?utm_source=leader&utm_medium=practice_band&utm_campaign=demo_followup",
      ctaLabel: "Atidaryti PromptAnatomy",
      safetyAnchorLabel: "Pilnas saugumo promptas kopijavimui",
    },
    safety: {
      eyebrow: "30 sek. vadovo saugumo patikra",
      title: "Nesiųsk DI rezultato be šios patikros.",
      subtitle: "Valdybai, klientui, partneriui ar komandai: patikrink faktus, riziką ir savininką prieš siunčiant.",
      processLabel: "Patikrink 4 rizikas prieš siųsdamas",
      promptBlockLabel: "Pilnas kopijuojamas promptas",
      previewHint: "Kopijuojant paimamas pilnas promptas. Čia – tik peržiūra.",
      copyPrompt: "Kopijuoti patikros promptą",
      copied: "Nukopijuota",
      items: [
        ["Ar faktai patikrinti?", "Kokius skaičius, datas, vardus ar teiginius reikia patikrinti šaltinyje?"],
        ["Ar formuluotė rizikinga?", "Kokia formuluotė gali sukurti teisinę, kliento ar pasitikėjimo riziką?"],
        ["Ko trūksta kontekste?", "Ko paklaustų patyręs vadovas, prieš veikdamas pagal šį rezultatą?"],
        ["Kas atsako už sprendimą?", "Kokį sprendimą šis rezultatas numato ir kas už jį atsakingas?"],
      ],
      prompt:
        "Veik kaip vadovo rizikos peržiūrėtojas. Peržiūrėk šį DI parengtą tekstą prieš man jį siunčiant ar naudojant: [TEKSTAS]. Kontekstas: [VALDYBA / KLIENTAS / KOMANDA / PARTNERIS]. Grąžink 1) faktines rizikas patikrai, 2) teisines ar reputacijos rizikas, 3) trūkstamą kontekstą, 4) neaiškų sprendimą ar savininką, 5) saugesnę versiją, jei reikia.",
    },
    anatomy: {
      eyebrow: "Vadovo prompto anatomija",
      title: "Penki blokai, kad DI dirbtų vadovo lygiu.",
      expandSummary: "Penki blokai (išskleisti)",
      subtitle: "Greitam darbui: du ar trys blokai. Didelė rizika: visi penki.",
      items: [
        ["Rolė", "Kokį vaidmenį atlieka DI ir kokiam verslo rezultatui jis tarnauja."],
        ["Kontekstas", "Faktai, auditorija, ribos, prielaidos ir tai, ką komanda jau žino."],
        ["Sprendimo logika", "Kriterijai, kompromisai, rizikos, grįžtamumas ir laikas."],
        ["Rezultatas", "Formatas, apimtis, pavyzdys, savininkas, terminas arba sprendimo struktūra."],
        ["Kokybės patikra", "Ką patikrinti, prieš naudojant atsakymą su klientu, valdyba ar komanda."],
      ],
    },
    library: {
      eyebrow: "Pilna kopijuojama biblioteka",
      title: "35 promptai pasikartojančiam CEO/COO darbui.",
      subtitle: "Kategorijas atidaryk, kai reikia. Taisyklė: viena eiga, vienas promptas, viena patikra.",
      starter: {
        eyebrow: "Pradėk nuo 7",
        title: "Vienas startinis promptas darbo eiga—gilyn tik jei reikia.",
        subtitle:
          "Pasirink savaitės didžiausią laiko dėžę, kopijuok atitinkamą starterį, paleisk saugumo patikrą.",
        pickerEyebrow: "Pasirink šios savaitės sunkiausią darbo eigą",
        pickerHelp: "Paryškiname startinį promptą tai darbo eigai.",
        note: "Spausdintame rinkinyje: septyni starteriai, patikra ir savaitės kelias viename lape.",
        downloadCta: "Atsisiųsti Max Value Kit",
      },
      copyPrompt: "Kopijuoti promptą",
      copied: "Nukopijuota",
      revealPrompt: "Rodyti pilną promptą",
      pdfAgain: "Atsisiųsti PDF rinkinį dar kartą",
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
        "Sąmoningai simuliuota: rodo rezultato formą be privačių įmonės duomenų.",
      promptBlockLabel: "Pavyzdinis kopijuojamas promptas",
      previewHint: "Kopijuojant paimamas pilnas promptas. Čia – tik peržiūra.",
      followUpEyebrow: "Laikyk struktūrą po ranka",
      followUpText:
        "Spausdinamas rinkinys perneša tą pačią įžvalga → sprendimas → rizikos → kitas veiksmas į savaitę.",
      followUpCta: "Atsisiųsti Max Value Kit",
      pdfAgain: "PDF dar kartą",
      messyInputLabel: "Verslo triukšmas",
      connectorCaption: "Virsta",
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
    roiPath: {
      eyebrow: "5 val. savaitinės naudos kelias",
      title: "Nuo vieno naudingo prompto iki savaitės įpročio.",
      subtitle:
        "Apytikslė trukmė, jei naudoji rinkinį savo tikroje savaitinėje eigoje—ne abstrakčiam „produktyvumui“.",
      centerLabel: "Vadovo savaitė",
      centerText: "Šeši kartojami žingsniai, kurie paverčia DI sprendimui paruoštu rezultatu.",
      panelLabel: "Pasirinktas žingsnis",
      panelHint: "Kopijuoji šio žingsnio prompto šabloną.",
      copyPrompt: "Kopijuoti promptą",
      copied: "Nukopijuota",
      steps: [
        {
          id: "safety",
          accent: "risk",
          time: "5-15 min",
          action: "Patikrink prieš siųsdamas",
          value: "Išvengi klaidos klientui ar valdybai prieš išsiunčiant.",
          description: "Peržiūrėti DI tekstą prieš klientą, valdybą, partnerį ar komandą.",
          prompt:
            "Veik kaip vadovo rizikos peržiūrėtojas. Peržiūrėk šį tekstą prieš man jį siunčiant: [TEKSTAS]. Kontekstas: [VALDYBA / KLIENTAS / KOMANDA / PARTNERIS]. Grąžink 1) faktus patikrai, 2) teisines/reputacijos rizikas, 3) trūkstamą kontekstą, 4) neaiškų sprendimą/savininką, 5) saugesnę formuluotę.",
        },
        {
          id: "scan",
          accent: "analysis",
          time: "20-40 min",
          action: "Išfiltruok signalą",
          value: "Randi paslėptą riziką ir sprendimą dar prieš susitikimą.",
          description: "Ištraukti signalą, paslėptą riziką ir reikalingą sprendimą iš ilgų atnaujinimų.",
          prompt:
            "Apibendrink šį ilgą atnaujinimą CEO lygiu: [ATNAUJINIMAS]. Grąžink pagrindinį signalą, paslėptą riziką, reikalingą sprendimą, 3 klausimus komandai ir vieną kitą veiksmą. Neišgalvok trūkstamų skaičių.",
        },
        {
          id: "decision",
          accent: "decision",
          time: "20-45 min",
          action: "Suformuok sprendimą",
          value: "Kompromisai, kriterijai, rizikos—užrašyta prieš sprendžiant.",
          description: "Variantus paversti kompromisais, kriterijais, rizikomis ir rekomendacija.",
          prompt:
            "Veik kaip mano CEO operacinis partneris. Išanalizuok sprendimą: [SPRENDIMAS]. Kontekstas: [FAKTAI]. Variantai: [VARIANTAI]. Grąžink 1 rekomendaciją, 3 kompromisus, 3 rizikas, sprendimo kriterijus ir kitą veiksmą su savininku bei terminu.",
        },
        {
          id: "meeting",
          accent: "execution",
          time: "15-30 min",
          action: "Sutvarkyk po susitikimo",
          value: "Užrašai tampa sprendimais, savininkais, terminais.",
          description: "Užrašus paversti sprendimais, savininkais, terminais ir tolesniais veiksmais.",
          prompt:
            "Paversk šiuos susitikimo užrašus vadovo veiksmų žurnalu: [UŽRAŠAI]. Grąžink priimtus sprendimus, atvirus sprendimus, savininkus, terminus, rizikas ir pirmą tęstinę žinutę.",
        },
        {
          id: "delegation",
          accent: "execution",
          time: "15-45 min",
          action: "Deleguok per briefą",
          value: "Darbas išeina iš galvos į komandai vykdomą planą.",
          description: "Vadovo intenciją perkelti į komandai vykdomą briefą.",
          prompt:
            "Paversk šią intenciją delegavimo briefu: [INTENCIJA]. Įtrauk tikslą, auditoriją, kontekstą, ribas, rezultato formatą, kokybės kriterijus, pavyzdžius, peržiūros terminą ir eskalavimo signalus.",
        },
        {
          id: "comms",
          accent: "communication",
          time: "10-30 min",
          action: "Komunikuok aiškiai",
          value: "Mažini neapibrėžtumą viena patikima žinute.",
          description: "Paruošti aiškias žinutes pokyčiams, vėlavimams, klientams ar partneriams.",
          prompt:
            "Perrašyk šią vadovo žinutę, kad ji būtų aiški, rami ir negynybiška: [ŽINUTĖ]. Struktūra: faktas, priežastis, poveikis, kas keičiasi, kas nesikeičia ir kitas žingsnis.",
        },
      ],
      total: "~5 val. per savaitę → mažiau sprendimo klaidų, aiškesnė atsakomybė, saugesnė komunikacija.",
      printableOneLiner: "Šeši žingsniai ≈ ~5 val./sav. — tas pats ritmas viename spausdinamame lape.",
      printableKitLink: "Atidaryti atsisiuntimo juostą",
    },
    systemVisual: {
      eyebrow: "DI yra operacinė sistema",
      title: "Modelis duoda galimybes. Procesas sukuria kartojamus rezultatus.",
      flowCaption: "Miglota įvestis → aiškus rezultatas → bendras komandos standartas.",
      items: [
        ["Modelis", "Žali generavimo pajėgumai."],
        ["Promptų rinkinys", "Kaip apibrėži įvestį, logiką ir rezultatą."],
        ["Kokybės patikra", "Faktai, rizikos, savininkas prieš siunčiant."],
        ["Komandos standartas", "Ta pati eiga: susitikimai, ataskaitos, delegavimas."],
      ],
    },
    authority: {
      eyebrow: "Prekės ženklo architektūra",
      title: "Vedlys į pilną PromptAnatomy sistemą.",
      chooseNext: "Pasirink vieną kitą žingsnį",
      mother: "Motininė platforma",
      motherText: "PromptAnatomy.app: pilna DI operacinė sistema ir komercinis namai.",
      sisterEyebrow: "Seserinis centras",
      sisterTitle: "DI Operacinis Centras",
      sisterText:
        "CEO/COO operacinis centras: režimai, savaitės prioritetai ir šablonų biblioteka („Promptų anatomijos“ spin-offas).",
      sisterLink: "Atidaryti seserinį CEO/COO centrą →",
    },
    cta: {
      eyebrow: "Pasiimk vadovo rinkinį",
      title: "Pasiimk trumpą rinkinį. Sistemą diek tada, kai komandai reikia standarto.",
      subtitle:
        "Atsisiųsk Max Value Kit šiai savaitei. PromptAnatomy atidaryk, kai nori to paties metodo kaip komandos standarto.",
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
