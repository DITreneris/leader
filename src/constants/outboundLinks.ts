/**
 * Canonical outbound URLs + UTM for the Executive OS landing (`utm_source=leader`).
 * @see docs/UTM_MATRIX.md
 */

export const UTM_SOURCE_LEADER = "leader";

export const PROMPT_ANATOMY_ORIGIN = "https://www.promptanatomy.app";
export const PROMPT_ANATOMY_SISTER_HUB_ORIGIN = "https://promptanatomy.cloud";

const PROMPT_HOME = `${PROMPT_ANATOMY_ORIGIN.replace(/\/$/, "")}/`;
const SISTER_HUB_HOME = `${PROMPT_ANATOMY_SISTER_HUB_ORIGIN.replace(/\/$/, "")}/`;

/** PromptAnatomy home with tracked medium/campaign */
export function buildPromptAnatomyUrl(params: { medium: string; campaign: string }): string {
  const u = new URL(PROMPT_HOME);
  u.searchParams.set("utm_source", UTM_SOURCE_LEADER);
  u.searchParams.set("utm_medium", params.medium);
  u.searchParams.set("utm_campaign", params.campaign);
  return u.toString();
}

export const PROMPT_ANATOMY_PRIVACY_URL = `${PROMPT_ANATOMY_ORIGIN.replace(/\/$/, "")}/privacy`;
export const PROMPT_ANATOMY_TERMS_URL = `${PROMPT_ANATOMY_ORIGIN.replace(/\/$/, "")}/terms`;

/** PromptAnatomy sister hub with tracked medium/campaign (secondary learning path, not primary product handoff) */
export function buildSisterHubUrl(params: { medium: string; campaign: string }): string {
  const u = new URL(SISTER_HUB_HOME);
  u.searchParams.set("utm_source", UTM_SOURCE_LEADER);
  u.searchParams.set("utm_medium", params.medium);
  u.searchParams.set("utm_campaign", params.campaign);
  return u.toString();
}

const TELEGRAM_BASE = "https://t.me/prompt_anatomy";

/** Telegram channel; UTM preserved when the client forwards query string */
export function buildTelegramUrl(): string {
  const u = new URL(TELEGRAM_BASE);
  u.searchParams.set("utm_source", UTM_SOURCE_LEADER);
  u.searchParams.set("utm_medium", "social");
  u.searchParams.set("utm_campaign", "telegram");
  return u.toString();
}

const CONSUMER_AI_ORIGINS = {
  chatgpt: "https://chatgpt.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
} as const;

export type ConsumerAiProvider = keyof typeof CONSUMER_AI_ORIGINS;

/** Paste-strip links after Copy prompt — ChatGPT / Claude / Gemini with surface-specific medium */
export function buildConsumerAiUrl(params: {
  surface: "context" | "demo";
  provider: ConsumerAiProvider;
}): string {
  const origin = CONSUMER_AI_ORIGINS[params.provider];
  const u = new URL(origin);
  const medium = params.surface === "context" ? "context_paste" : "demo_paste";
  u.searchParams.set("utm_source", UTM_SOURCE_LEADER);
  u.searchParams.set("utm_medium", medium);
  u.searchParams.set("utm_campaign", params.provider);
  return u.toString();
}
