/**
 * Canonical outbound URLs + UTM for the Executive OS landing (`utm_source=leader`).
 * @see docs/UTM_MATRIX.md
 */

export const UTM_SOURCE_LEADER = "leader";

export const PROMPT_ANATOMY_ORIGIN = "https://www.promptanatomy.app";

const PROMPT_HOME = `${PROMPT_ANATOMY_ORIGIN.replace(/\/$/, "")}/`;

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

/** Sister operational hub — GitHub Pages CEO */
export function buildCeoBridgeUrl(): string {
  const u = new URL("https://ditreneris.github.io/ceo/");
  u.searchParams.set("utm_source", UTM_SOURCE_LEADER);
  u.searchParams.set("utm_medium", "bridge");
  u.searchParams.set("utm_campaign", "sister");
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

export function buildBeforeAfterWorkflowSearchParams(campaign: string): URLSearchParams {
  return new URLSearchParams({
    utm_source: UTM_SOURCE_LEADER,
    utm_medium: "before_after_workflow",
    utm_campaign: campaign,
  });
}
