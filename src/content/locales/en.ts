export const enCopy = {
    meta: {
      title: "CEO/COO Executive Decision Kit | Prompt Anatomy",
      description:
        "One executive workflow turns business noise into decision briefs with owners, risks, and deadlines. Static kit and demo—no login. Full team standard on PromptAnatomy.app.",
      socialImageAlt: "Prompt Anatomy — CEO/COO Executive OS static kit and social preview.",
    },
    a11y: {
      skipLink: "Skip to the context fields",
      copyManual: "Copy blocked: select the prompt text above, then press Ctrl+C (or ⌘+C on Mac).",
      logoAriaLabel: "Prompt Anatomy Executive OS",
      brandWordmark: "Prompt Anatomy",
      brandSubtag: "Executive OS",
      openMobileMenu: "Open menu",
      navPrimaryAria: "Primary",
      navMobileAria: "Mobile primary",
      languageToggleAria: "Language",
      footerLegalNavAria: "Footer links",
    },
    faq: {
      sectionTitle: "Quick answers",
      sisterHubLinkLabel: "Open framework practice on promptanatomy.cloud",
      items: [
        {
          q: "Does this send my data?",
          a: "Your brief text and context fields stay on your device—we do not upload them when you copy. On promptanatomy.pro, anonymous page views may be collected; nothing you type is sent to us.",
          bullets: [],
        },
        {
          q: "Can I paste this into ChatGPT, Claude, or Gemini?",
          a: "Yes. Copy here, paste into any assistant your org allows. This page does not connect to those tools.",
          bullets: [],
        },
        {
          q: "What is PromptAnatomy Executive OS?",
          a:
            "A static one-page decision operating kit for CEOs/COOs: Global Context Block plus executive modules so leadership briefs to AI stay consistent—no login, no upload of what you type. The full product and team standard are on promptanatomy.app.",
          bullets: [],
        },
        {
          q: "What is the Global Context Block?",
          a:
            "Four shared fields for every brief—company, current goal, main constraint, key bottleneck—so outputs stay decision-grade. Add a module (strategy, risk, board prep, etc.) to compile one send-ready brief.",
          bullets: [],
        },
        {
          q: "What is this vs a prompt list?",
          a: "A CEO/COO decision workflow, not beginner prompt training. The model only generates; this kit pins down input, logic, and the output shape you actually ship.",
          bullets: [
            "One context block + modules compiled into a single prompt, plus a printable PDF kit.",
            "Same brief standard and safety checks before board, client, or team sees output.",
          ],
        },
        {
          q: "New to structured prompts?",
          a: "Framework basics and a short practice path live on our sister site. This page stays focused on executive decision operations—context, modules, and decision-grade output.",
          bullets: [],
          handoff: "sister_hub",
        },
        {
          q: "Need a PromptAnatomy account?",
          a: "Not for this kit. Use the full app only when you want the whole OS.",
          bullets: [],
        },
      ],
    },
    nav: {
      practice: "Context",
      proof: "Clarity practice",
      kitPdf: "Kit download",
    },
    hero: {
      eyebrow: "Executive decision kit",
      title: "From AI noise to decision.",
      subtitle: "One brief with owner, risks, deadline, next action.",
      inPageCta: "Start with context",
      productCta: "Open PromptAnatomy.app",
      ctaMeta: "Free · No login · copy in 2 min",
    },
    heroDiagram: {
      ariaLabel:
        "Example executive decision flow: noise through context and module to a sample decision brief with risks and next action.",
      label: "Example",
      caption: "From scattered input to one owner-ready brief",
      pipelineAriaLabel: "Three steps: noise, context, compiled module",
      pipeline: [
        { label: "Noise", desc: "Reports, KPIs, opinions" },
        { label: "Context", desc: "Goal, constraint, owner" },
        { label: "Module", desc: "Compiled prompt" },
      ],
      engine: {
        title: "Decision brief",
        subtitle: "After one paste",
      },
      sampleAriaLabel: "Sample brief sections: decision, risks, next action",
      sample: {
        decision: {
          label: "Decision",
          line: "Delay EU expansion; focus US enterprise — Owner: CEO",
        },
        risks: {
          label: "Risks",
          line: "Runway tightens if Q3 hiring continues",
        },
        nextAction: {
          label: "Next action",
          line: "CFO models two scenarios by Friday",
        },
      },
    },
    beforeAfter: {
      eyebrow: "Proof in one screen",
      a11yLabel: "Diagram of decision-ready brief shape.",
    },
    pasteIntoAssistant: {
      ariaLabel: "After copy: open an approved AI assistant and paste the prompt",
      lead: "Your prompt stays on your device until you paste it elsewhere.",
      continueLabel: "Continue in:",
      openChatgpt: "Open ChatGPT",
      openClaude: "Open Claude",
      openGemini: "Open Gemini",
      licenseNote: "Use your org-licensed provider and account; follow each vendor's terms and plan limits.",
    },
    promoBanner: {
      ariaLabel: "Next step: clarity practice before full product.",
      eyebrow: "Next step",
      title: "Run clarity practice on a real scenario.",
      subtitle: "Five static scenarios—then take the kit or open PromptAnatomy.",
      primaryCta: "Open clarity practice",
      secondaryCta: "Open PromptAnatomy.app",
      sisterCta: "Framework basics → promptanatomy.cloud",
    },
    modules: {
      eyebrow: "Global context + modules",
      title: "Define context once. Run any executive module.",
      subtitle: "",
      startHere: "Fill 4 fields, then copy a module (start with Decision impact).",
      context: {
        title: "Global context block",
        subtitle: "Required once. Used in every module.",
        badge: "PERSISTENT",
        companyLabel: "Company",
        companyPlaceholder: "e.g., Series B B2B SaaS, 150 employees",
        goalLabel: "Current goal",
        goalPlaceholder: "e.g., Increase enterprise retention by 15% in Q3",
        constraintLabel: "Main constraint",
        constraintPlaceholder: "e.g., Flat headcount budget, 60 days left",
        bottleneckLabel: "Key bottleneck",
        bottleneckPlaceholder: "e.g., Engineering speed vs Sales promises",
      },
      contextFootnote: "",
      /** Screen reader label for the 4-field → modules schematic above the context form. */
      contextMapAriaLabel: "How global context fields flow into compiled prompts",
      /** Short center chip in the field map (destination). */
      contextMapInjectLabel: "Into modules",
      /** One line under the field map diagram. */
      contextMapCaption: "",
      rulesPreview: {
        title: "Built-in rules",
        items: [
          "No generic advice. If context is missing, ask up to 3 targeted questions first.",
          "Do not invent numbers or facts. Flag what must be verified.",
          "Output must be decision-grade: recommendation, risks, owners, deadlines.",
        ],
      },
      roleLine: "ROLE: Tier-1 CEO advisor (strategy + operator)",
      missingContextRule: "If context is missing, ask up to 3 targeted questions first.",
      jsonFirstRule:
        "Output must be plain text. Use short bullets, label sections, and include owners + deadlines where possible.",
      taskLabel: "Task",
      outputLabel: "Expected output (readable)",
      explanationLabel: "Explanation",
      copyButton: "Copy full prompt",
      copiedButton: "Copied",
      items: [
        {
          id: "redTeam",
          eyebrow: "1. Red team",
          title: "Strategy breaker",
          subtitle: "Stress-test strategy before calendar time.",
          taskFormat: "Stress-test: [Insert your strategy or plan here]",
          outputExampleJson: `Verdict: Proceed / Revise / Kill

Top 3 risks (ranked):
- Risk:
  - Hidden assumption:
  - Early warning signal:
  - Mitigation (next action + owner + deadline):

Kill criteria:
- ...

First 48h moves:
- Action — Owner — Deadline`,
        },
        {
          id: "sentiment",
          eyebrow: "2. Sentiment",
          title: "Culture decoder",
          subtitle: "Feedback into actions that change morale.",
          taskFormat: "Analyze: [Paste team feedback, survey results, or raw text here]",
          outputExampleJson: `Core emotion (1 line):

Top 3 real issues:
- ...

Unspoken problem:

Actions (next Town Hall):
- Action — Owner — Deadline

Risks if ignored:
- ...`,
        },
        {
          id: "secondOrder",
          eyebrow: "3. 2nd-order",
          title: "Decision impact",
          subtitle: "Second- and third-order effects before you commit.",
          taskFormat: "Evaluate: [Describe a pending decision here]",
          outputExampleJson: `Recommendation: Go / Delay / Reject

Immediate benefit:

2nd-order effects (6–12m):
- ...

3rd-order risks (12–24m):
- ...

Reversibility: Reversible / Partially reversible / Irreversible

Next actions:
- Action — Owner — Deadline`,
        },
        {
          id: "communication",
          eyebrow: "4. Comms",
          title: "CEO voice",
          subtitle: "Clear stance + one CTA, not defensive.",
          taskFormat: "Rewrite: [Paste draft email, memo, or announcement here]",
          outputExampleJson: `Stance (1 line):

Message (≤150 words):

Call to action (1 line):

Risks of misinterpretation:
- ...`,
        },
        {
          id: "premortem",
          eyebrow: "5. Pre-mortem",
          title: "Competitive attack",
          subtitle: "Assume failure. Find the weak point now.",
          taskFormat: "Act as a competitor CEO attacking my current setup.",
          outputExampleJson: `Competitor’s best attack:

Your blind spot:

Weakest point:

Defensive move (now):
- Action — Owner — Deadline

Hardening checklist:
- ...`,
        },
        {
          id: "timeAudit",
          eyebrow: "6. Time audit",
          title: "Leverage filter",
          subtitle: "Cut, delegate, focus rules for next week.",
          taskFormat: "Analyze: [Paste list of your calendar events/tasks for the week]",
          outputExampleJson: `Top 20% impact:
- ...

Bottom 30% to delegate:
- Task — Delegate to — When

Eliminate now:
- ...

3 focus rules (next week):
- ...`,
        },
      ],
      custom: {
        eyebrow: "7. Custom",
        title: "Custom module",
        subtitle: "Your task and output shape. Same context + rules.",
        taskLabel: "Task format",
        taskPlaceholder: "e.g., Diagnose: [Paste weekly exec update here]",
        outputLabel: "Expected output (readable)",
        outputPlaceholder:
          "Recommendation:\n\nTop risks:\n- ...\n\nNext actions:\n- Action — Owner — Deadline\n\nNotes:\n- ...",
        validationError: "Add a task description before copying.",
        copyButton: "Copy custom prompt",
        copiedButton: "Copied",
      },
    },
    safety: {
      eyebrow: "Safety check",
      title: "Run this before you send AI output.",
      subtitle: "Four checks before anything ships.",
      processLabel: "4 checks",
      promptBlockLabel: "Prompt to copy",
      previewHint: "",
      copyPrompt: "Copy safety prompt",
      copied: "Copied",
      items: [
        ["Facts verified", "What numbers, dates, names, or claims need source verification?"],
        ["Risk wording", "What wording could create legal, client, or trust exposure?"],
        ["Missing context", "What would a senior operator ask before acting on this output?"],
        ["Decision owner", "What decision does this output imply, and who owns it?"],
      ],
      prompt:
        "Act as an executive risk reviewer. Review this AI-generated text before I send or use it: [TEXT]. Context: [BOARD / CLIENT / TEAM / PARTNER]. Return 1) factual risks to verify, 2) legal or reputation risks, 3) missing context, 4) unclear decision or owner, 5) a safer revised version if needed.",
    },
    anatomy: {
      eyebrow: "Executive prompt anatomy",
      title: "Five blocks for leadership-grade AI output.",
      expandSummary: "Five blocks (expand)",
      subtitle:
        "A prompt is the instruction that shapes the reply. Use 2–3 blocks for speed; all five before board or client sends.",
      /** Aria-label for the closed-state chip list of block names. */
      previewAriaLabel: "Five blocks at a glance",
      /** Micro-label before block number in the expanded grid (e.g. “Step 1”). */
      stepPrefix: "Step",
      items: [
        ["Role", "Who AI plays as and the business outcome."],
        ["Context", "Audience, constraints, facts the team already has."],
        ["Decision Logic", "Criteria, trade-offs, reversibility, timing."],
        ["Output", "Format, owner, deadline, decision-ready shape."],
        ["Quality Check", "Verify before client, board, or team sees it."],
      ],
    },
    library: {
      eyebrow: "Copy-ready library",
      title: "CEO/COO prompt library",
      subtitle: "35 prompts for recurring leadership work.",
      summaryLead: "Copy one by category—no login.",
      navAriaLabel: "Prompt categories",
      promptSingular: "prompt",
      promptPlural: "prompts",
      defaultHintTitle: "Start with CEO Decisions",
      defaultHintBody: "When options are messy or ownership is unclear.",
      copyPrompt: "Copy prompt",
      copied: "Copied",
      revealPrompt: "Reveal prompt",
      pdfAgain: "Need the PDF again? Jump to the kit download.",
      categories: [
        {
          title: "CEO Decisions",
          description: "Decision briefs from messy options.",
          prompts: [
            {
              title: "Board-ready recommendation",
              outcome: "Recommendation, trade-offs, risks, decision criteria.",
              prompt:
                "Act as a CEO operating partner. Analyze this decision: [DECISION]. Context: [FACTS]. Options: [OPTIONS]. Return 1 recommendation, 3 trade-offs, 3 risks, decision criteria, and the next action with owner and deadline.",
            },
            {
              title: "Reversible vs irreversible choice",
              outcome: "Speed vs proof decisions, separated.",
              prompt:
                "Classify this decision as reversible or irreversible: [DECISION]. Explain what evidence is enough, what risk remains, and whether we should decide now, run a test, or wait. Return a concise CEO brief.",
            },
            {
              title: "Trade-off map",
              outcome: "Gains, losses, delays, and risks mapped.",
              prompt:
                "Map the trade-off in this decision: [DECISION]. Return what we gain, what we lose, what gets delayed, what risk increases, what risk decreases, and the decision I should make if speed matters most.",
            },
            {
              title: "Stop / continue / change",
              outcome: "Messy initiative → clear executive call.",
              prompt:
                "Review this initiative: [INITIATIVE UPDATE]. Recommend whether to stop, continue, or change it. Include evidence, risk, opportunity cost, owner, and the next checkpoint date.",
            },
            {
              title: "Budget decision brief",
              outcome: "Spend with criteria and downside protection.",
              prompt:
                "Prepare a CEO budget decision brief for [SPEND / INVESTMENT]. Include strategic reason, expected return, downside risk, decision criteria, approval conditions, and what we will stop funding if this is approved.",
            },
          ],
        },
        {
          title: "COO Execution",
          description: "Bottlenecks, owners, rhythm, risks.",
          prompts: [
            {
              title: "Delivery risk diagnosis",
              outcome: "Where execution is stuck this week.",
              prompt:
                "Act as a COO. Review this execution update: [UPDATE]. Identify the bottleneck, missing owner, delivery risk, dependency, and the one operating change to make this week.",
            },
            {
              title: "Operating rhythm reset",
              outcome: "Cadence, metrics, owners, escalation rules.",
              prompt:
                "Design a simple operating rhythm for [TEAM/PROJECT]. Include weekly cadence, decision points, metrics, owners, escalation triggers, and what should stop being discussed.",
            },
            {
              title: "Owner clarity",
              outcome: "Who decides, owns, supports, escalates.",
              prompt:
                "Clarify ownership for [PROJECT / PROCESS]. Return decision owner, execution owner, supporting roles, escalation path, approval needed, and what each person must deliver by when.",
            },
            {
              title: "Escalation rule",
              outcome: "When to solve, escalate, or stop.",
              prompt:
                "Create escalation rules for [WORKFLOW]. Define what the team can decide alone, what requires COO/CEO input, what must stop immediately, and the signals that trigger escalation.",
            },
            {
              title: "Capacity constraint scan",
              outcome: "Real bottleneck before adding headcount.",
              prompt:
                "Analyze this capacity problem: [SITUATION]. Identify the bottleneck, false bottlenecks, work to stop, work to sequence, owner, and the smallest change that would improve throughput this week.",
            },
          ],
        },
        {
          title: "Meetings",
          description: "Decisions, not status theatre.",
          prompts: [
            {
              title: "Decision meeting agenda",
              outcome: "Forces trade-off, prevents drift.",
              prompt:
                "Create a leadership meeting agenda for [TOPIC]. Goal: make one decision. Include pre-read, decision question, trade-off, 3 questions to ask, timeboxes, and the closing owner/deadline.",
            },
            {
              title: "Post-meeting action extraction",
              outcome: "Owners, deadlines, risks, open questions.",
              prompt:
                "Turn these meeting notes into an executive action log: [NOTES]. Return decisions made, open decisions, owners, deadlines, risks, and the first follow-up message to send.",
            },
            {
              title: "Pre-read extraction",
              outcome: "Prepare before the room burns time.",
              prompt:
                "Create a leadership pre-read from this material: [MATERIAL]. Include the decision needed, facts already known, assumptions, open questions, risks, and what each participant should prepare.",
            },
            {
              title: "Conflict resolution frame",
              outcome: "Disagreement → criteria and decision path.",
              prompt:
                "Frame this leadership disagreement: [DISAGREEMENT]. Separate facts, assumptions, interests, risks, decision criteria, and the smallest next decision that can move the team forward.",
            },
            {
              title: "Weekly leadership rhythm",
              outcome: "Decisions and execution signals only.",
              prompt:
                "Design a weekly leadership meeting rhythm for [TEAM]. Include recurring agenda, required inputs, decision slots, risk review, owner accountability, and what should move async.",
            },
          ],
        },
        {
          title: "Reports",
          description: "Signal from long updates, fast.",
          prompts: [
            {
              title: "One-page executive brief",
              outcome: "Signal, risk, decision, next action.",
              prompt:
                "Summarize this report for a CEO: [REPORT]. Return key signal, hidden risk, decision needed, 3 questions for the team, and one next action. Do not invent missing numbers.",
            },
            {
              title: "Risk signal scan",
              outcome: "Early warnings across customer, revenue, delivery, people.",
              prompt:
                "Scan this update for weak signals: [UPDATE]. Separate customer, revenue, delivery, people, and reputation risks. Mark each as low/medium/high and suggest what to verify next.",
            },
            {
              title: "KPI anomaly explanation",
              outcome: "Noise vs operating signal.",
              prompt:
                "Analyze this KPI anomaly: [DATA / CONTEXT]. Explain possible causes, what evidence supports each, what to verify next, and whether this needs a decision, monitoring, or immediate action.",
            },
            {
              title: "Customer risk brief",
              outcome: "Support noise → retention action.",
              prompt:
                "Create a customer risk brief from this information: [NOTES]. Identify accounts at risk, root causes, revenue exposure, owner, action in 7 days, and executive message if needed.",
            },
            {
              title: "Board summary",
              outcome: "Operating update → board signal.",
              prompt:
                "Turn this operating update into a board summary: [UPDATE]. Include headline, progress, risks, decision needed, financial or customer impact, and the one question we need the board to help answer.",
            },
          ],
        },
        {
          title: "Delegation",
          description: "Intent your team can execute.",
          prompts: [
            {
              title: "Delegation brief",
              outcome: "Objective, constraints, quality bar, review criteria.",
              prompt:
                "Turn this intent into a delegation brief: [INTENT]. Include objective, audience, context, constraints, deliverable format, quality criteria, examples to follow, and review deadline.",
            },
            {
              title: "Quality bar before review",
              outcome: "Standard upfront, fewer CEO rewrites.",
              prompt:
                "Create a quality checklist for this task: [TASK]. Include must-have points, common mistakes, examples of good output, and what should be escalated before submission.",
            },
            {
              title: "Reviewer checklist",
              outcome: "Faster, less subjective review.",
              prompt:
                "Create a reviewer checklist for [DELIVERABLE]. Include strategic fit, factual accuracy, audience clarity, risk, missing context, and pass/fail criteria.",
            },
            {
              title: "Owner handoff",
              outcome: "CEO head → owner execution.",
              prompt:
                "Create an owner handoff for [WORK]. Include context, decision already made, owner responsibilities, constraints, milestones, escalation rules, and first update format.",
            },
            {
              title: "Team instruction",
              outcome: "Intent → team-ready task.",
              prompt:
                "Write a team instruction for [TASK]. Include why it matters, what done means, constraints, examples, owner, deadline, and how progress should be reported.",
            },
          ],
        },
        {
          title: "Communication",
          description: "Clear messages when stakes are high.",
          prompts: [
            {
              title: "Tense update",
              outcome: "Calm, honest, clear next step.",
              prompt:
                "Rewrite this leadership update so it is clear, calm, and non-defensive: [MESSAGE]. Structure it as fact, reason, impact, what changes, what stays the same, and next step.",
            },
            {
              title: "Partner/client message",
              outcome: "Trust and momentum protected.",
              prompt:
                "Draft a concise partner/client message about [SITUATION]. Tone: direct, warm, credible. Include the business context, decision, impact, and one clear next action. Keep it under 120 words.",
            },
            {
              title: "Internal change note",
              outcome: "Change without uncertainty.",
              prompt:
                "Write an internal change note about [CHANGE]. Include what is changing, why, what stays the same, impact by team, decision owner, and where questions should go.",
            },
            {
              title: "Deadline shift",
              outcome: "Delay without sounding defensive.",
              prompt:
                "Draft a deadline-shift message for [AUDIENCE]. Include the fact, reason, trade-off, new date, what we are doing to protect quality, and next update time.",
            },
            {
              title: "Partner proposal frame",
              outcome: "Polite text → business case.",
              prompt:
                "Frame this partner proposal: [IDEA]. Include strategic reason, value for partner, value for us, proof, risk, next step, and a concise executive opening paragraph.",
            },
          ],
        },
        {
          title: "Safety and Quality",
          description: "Verify facts, risk, and ownership before send.",
          prompts: [
            {
              title: "Executive send-check",
              outcome: "Final check before outbound send.",
              prompt:
                "Act as an executive risk reviewer. Review this text before I send it: [TEXT]. Context: [BOARD / CLIENT / TEAM / PARTNER]. Return factual risks, legal/reputation risks, missing context, unclear owner, and safer wording if needed.",
            },
            {
              title: "Hallucination scan",
              outcome: "Claims AI may have invented.",
              prompt:
                "Scan this AI output for possible hallucinations: [TEXT]. List unsupported claims, numbers, dates, named entities, assumptions, and what source would verify each one.",
            },
            {
              title: "Legal / reputation risk",
              outcome: "Wording that creates exposure.",
              prompt:
                "Review this message for legal, confidentiality, client trust, and reputation risk: [MESSAGE]. Return risk level, risky phrases, safer alternatives, and what must be approved before sending.",
            },
            {
              title: "Missing context check",
              outcome: "What a senior leader would ask first.",
              prompt:
                "Review this output for missing context: [OUTPUT]. What facts, constraints, stakeholder views, risks, or decision criteria are missing before a CEO/COO should act on it?",
            },
            {
              title: "Decision owner check",
              outcome: "Every recommendation has ownership.",
              prompt:
                "Check this recommendation for decision readiness: [RECOMMENDATION]. Identify decision owner, execution owner, deadline, success criteria, risks, and what would make this recommendation invalid.",
            },
          ],
        },
      ],
    },
    demo: {
      eyebrow: "Clarity practice",
      title: "Pick a scenario. Get the brief.",
      subtitle: "",
      scenarioHint: "",
      briefLabel: "Brief",
      detailsTab: "Details",
      inputTab: "Input",
      secondaryPanelHint: "",
      secondaryTablistAriaLabel: "Brief extras",
      promptBlockLabel: "Sample prompt to copy",
      previewHint: "",
      followUpEyebrow: "Keep the structure on your desk",
      followUpText: "Same structure in the printable kit (below).",
      followUpCta: "Download Max Value Kit",
      pdfAgain: "jump to the kit download.",
      scenarioLiveStatus: "Scenario: {scenario}. Brief updated.",
      messyInputLabel: "Business noise",
      connectorCaption: "Transforms",
      outputLabel: "Executive clarity output",
      insight: "Bottom line",
      decision: "Decision needed",
      risks: "Top risks",
      questions: "Questions to ask",
      action: "Next action",
      copyPrompt: "Copy prompt",
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
            "Open with the trade-off in one sentence. Then force one decision and close with owner, criteria, and deadline.",
          prompt:
            "Analyze these leadership meeting notes for a CEO. Return the bottom line (one sentence), the decision needed (one sentence), 3 risks, 3 questions to ask, and one next action.",
        },
        report: {
          label: "Report",
          input:
            "Monthly report: 18 pages. Revenue flat, churn up slightly, delivery slipped, support flags complaints from key accounts.",
          insight:
            "The report hides a retention risk. Support complaints and delayed delivery may be early signals that churn will worsen before revenue shows it.",
          decision:
            "Choose the next leadership move: growth push, retention intervention, or product recovery.",
          risks: ["Flat revenue creates false confidence.", "Support symptoms are treated separately from product delays.", "Sales pushes for new logos while existing ARR becomes exposed."],
          questions: ["Which accounts are most at risk?", "How much ARR is tied to delayed product work?", "What customer-facing fix can ship in 14 days?"],
          action:
            "Request a one-page churn-risk brief before approving the next growth campaign.",
          prompt:
            "Summarize this business report for a CEO. Return the bottom line (hidden signal, one sentence), the decision needed (one sentence), 3 risks, 3 questions, and one next action.",
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
            "Help a CEO decide between these options. Return the bottom line (one sentence), the decision needed (one sentence), 3 risks, 3 questions, a recommendation with trade-offs and decision criteria, and one next action.",
        },
        delegation: {
          label: "Delegation",
          input:
            "I need to delegate a partner proposal. Past drafts missed the strategic angle—polite text, not a business case.",
          insight:
            "The bottleneck is not writing. The team lacks the decision context, audience outcome, and quality bar.",
          decision:
            "Define the proposal's business objective and approval criteria before requesting another draft.",
          risks: ["The CEO stays the editor instead of the decision maker.", "The team optimizes wording instead of strategic outcome.", "The partner receives a generic offer."],
          questions: ["What must the partner believe after reading?", "What is the non-negotiable business angle?", "What example shows the quality bar?"],
          action:
            "Send a delegation brief. Spell out objective, audience, strategic angle, constraints, deliverable format, and review criteria.",
          prompt:
            "Turn this into a delegation brief. Include objective, audience, strategic angle, context, constraints, deliverable format, and review criteria (what good looks like).",
        },
        communication: {
          label: "Communication",
          input:
            "We need to tell the team a major deadline is moving. People are already tense, and I do not want the message to sound defensive, vague, or like we are hiding the real reason.",
          insight:
            "The message must reduce uncertainty first. Then it should name the trade-off, what changes, and what does not change.",
          decision:
            "Pick the main narrative: protect quality, reduce scope, or name the resource limit.",
          risks: ["Vague language increases anxiety.", "Too much context sounds defensive.", "No next step creates speculation."],
          questions: ["What changes for the team tomorrow?", "What remains unchanged?", "Where should questions go?"],
          action:
            "Draft a short internal message. Lead with the fact and why it happened, then state impact, what stays committed, and one clear next step.",
          prompt:
            "Rewrite this leadership message for internal team comms. Structure the output as: Fact — Reason — Impact — What stays committed (unchanged) — Next step. Tone: clear, calm, direct—not defensive. Message or notes to improve: [paste here]",
        },
      },
    },
    memes: {
      eyebrow: "Visual proof",
      title: "The problem is not access to AI. It is control.",
      sectionAriaLabel: "Executive proof moment",
      /** Order matches `Page.astro` MemeMoment sequence (indices 3, 0, 2, 5). */
      sequenceImageAlts: [
        "Meme: clear decision brief",
        "Meme: AI chaos",
        "Meme: delegation bottleneck",
        "Meme: keep the executive kit structure on your desk",
      ] as const,
      items: [
        ["AI chaos", "Without structure, output becomes noise."],
        ["Structure creates control", "Define the input. Control the output."],
        ["Delegation bottleneck", "If the brief is vague, you become the editor."],
        ["Control creates results", "Random requests create random answers."],
        ["Leadership needs the system", "Your team may already be experimenting. The CEO needs a shared operating model."],
        ["Keep the structure on your desk", "Printable kit—same shape on paper."],
      ],
    },
    roiPath: {
      eyebrow: "Weekly ROI path",
      title: "One step today. Same rhythm each week.",
      subtitle: "Five moves, 5–45 minutes each.",
      centerLabel: "Executive week",
      centerText: "",
      entryCta: "Copy & run Step 1 (15–40 min)",
      panelAriaLabel: "Weekly step detail",
      panelProgressTemplate: "Step {current} of 5",
      panelHint: "Copies this step’s prompt so you can run it now.",
      useStepCopy: "Copy & run",
      safetyJump: "Open Safety Check →",
      copyPrompt: "Copy & run",
      copied: "Copied",
      steps: [
        {
          id: "outbound",
          accent: "risk",
          time: "15-40 min",
          action: "Review & send clearly",
          value: "Catch risks before send; land a structured, credible update.",
          description: "Risk-check and rewrite outbound messages for clarity.",
          prompt:
            "Act as an executive communications partner. Draft or text to improve: [TEXT]. Audience: [BOARD / CLIENT / TEAM / PARTNER]. \n\n1) RISK PASS — Before anything ships, return: facts to verify; legal/reputation risks; missing context; unclear decision/owner; wording that should be safer.\n\n2) FINAL MESSAGE — Rewrite the text to be clear, calm, and non-defensive. Structure: fact — reason — impact — what changes — what stays the same — next step. Resolve material issues from the risk pass in the final wording.",
        },
        {
          id: "scan",
          accent: "analysis",
          time: "20-40 min",
          action: "Scan for signal",
          value: "Find hidden risk + decision before the meeting.",
          description: "Signal, hidden risk, and decision from long updates.",
          prompt:
            "Summarize this long update for a CEO: [UPDATE]. Return key signal, hidden risk, decision needed, 3 questions for the team, and one next action. Do not invent missing numbers.",
        },
        {
          id: "decision",
          accent: "decision",
          time: "20-45 min",
          action: "Prepare the decision",
          value: "Trade-offs, criteria, risks—written before you decide.",
          description: "Trade-offs, criteria, risks, and a clear call.",
          prompt:
            "Act as my CEO operating partner. Analyze this decision: [DECISION]. Context: [FACTS]. Options: [OPTIONS]. Return 1 recommendation, 3 trade-offs, 3 risks, decision criteria, and the next action with owner and deadline.",
        },
        {
          id: "meeting",
          accent: "execution",
          time: "15-30 min",
          action: "Clean up the meeting",
          value: "Notes become decisions, owners, deadlines.",
          description: "Decisions, owners, deadlines, follow-up.",
          prompt:
            "Turn these meeting notes into an executive action log: [NOTES]. Return decisions made, open decisions, owners, deadlines, risks, and the first follow-up message to send.",
        },
        {
          id: "delegation",
          accent: "execution",
          time: "15-45 min",
          action: "Delegate with a brief",
          value: "Move work from your head into an executable plan.",
          description: "Intent into a brief the team can execute.",
          prompt:
            "Turn this intent into a delegation brief: [INTENT]. Include objective, audience, context, constraints, deliverable format, quality criteria, examples, review deadline, and escalation triggers.",
        },
      ],
      total: "~5 hrs/week → fewer bad calls, clearer owners, safer sends.",
      printableOneLiner: "Five moves ≈ ~5h/week — same rhythm on one printable page.",
      printableKitLink: "Get the printable kit (PDF)",
    },
    cta: {
      eyebrow: "Executive kit",
      title: "Download the kit. Set the team standard on PromptAnatomy when you need it.",
      subtitle: "",
      primary: "Download Max Value Kit",
      secondary: "Open PromptAnatomy team standard",
    },
    footer: {
      brand: "PromptAnatomy · Executive OS",
      tagline: "Static kit. No login. No data sent.",
      versionAria: "Site version",
      telegram: "Telegram",
      privacy: "Privacy",
      terms: "Terms",
    },
} as const;
