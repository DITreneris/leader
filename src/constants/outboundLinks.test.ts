import { describe, expect, it } from "vitest";
import {
  PROMPT_ANATOMY_ORIGIN,
  PROMPT_ANATOMY_PRIVACY_URL,
  PROMPT_ANATOMY_TERMS_URL,
  UTM_SOURCE_ENTITY_FOOTER,
  UTM_SOURCE_LEADER,
  buildConsumerAiUrl,
  buildEntityFooterUrl,
  buildPromptAnatomyUrl,
  buildSisterHubUrl,
  buildTelegramUrl,
  PROMPT_ANATOMY_SISTER_HUB_ORIGIN,
} from "./outboundLinks";

describe("outboundLinks", () => {
  it("uses leader as utm_source for sister hub", () => {
    const url = buildSisterHubUrl({ medium: "modules", campaign: "sister_hub" });
    const u = new URL(url);
    expect(u.origin + u.pathname).toBe(`${PROMPT_ANATOMY_SISTER_HUB_ORIGIN}/`);
    expect(u.searchParams.get("utm_source")).toBe(UTM_SOURCE_LEADER);
    expect(u.searchParams.get("utm_medium")).toBe("modules");
    expect(u.searchParams.get("utm_campaign")).toBe("sister_hub");
  });

  it("uses leader as utm_source for PromptAnatomy home", () => {
    const url = buildPromptAnatomyUrl({ medium: "hero", campaign: "primary" });
    const u = new URL(url);
    expect(u.origin + u.pathname).toBe(`${PROMPT_ANATOMY_ORIGIN}/`);
    expect(u.searchParams.get("utm_source")).toBe(UTM_SOURCE_LEADER);
    expect(u.searchParams.get("utm_medium")).toBe("hero");
    expect(u.searchParams.get("utm_campaign")).toBe("primary");
  });

  it("builds entity footer URL with pro ecosystem UTM (QW1b)", () => {
    const url = buildEntityFooterUrl();
    const u = new URL(url);
    expect(u.origin + u.pathname).toBe(`${PROMPT_ANATOMY_ORIGIN}/`);
    expect(u.searchParams.get("utm_source")).toBe(UTM_SOURCE_ENTITY_FOOTER);
    expect(u.searchParams.get("utm_source")).toBe("pro");
    expect(u.searchParams.get("utm_medium")).toBe("entity_footer");
    expect(u.searchParams.get("utm_campaign")).toBe("ecosystem");
  });

  it("builds Telegram URL with social UTM", () => {
    const url = buildTelegramUrl();
    const u = new URL(url);
    expect(u.hostname).toBe("t.me");
    expect(u.pathname).toBe("/prompt_anatomy");
    expect(u.searchParams.get("utm_source")).toBe(UTM_SOURCE_LEADER);
    expect(u.searchParams.get("utm_medium")).toBe("social");
    expect(u.searchParams.get("utm_campaign")).toBe("telegram");
  });

  it.each([
    ["context", "context_paste"] as const,
    ["demo", "demo_paste"] as const,
  ])("buildConsumerAiUrl surface %s uses medium %s", (surface, medium) => {
    const url = buildConsumerAiUrl({ surface, provider: "chatgpt" });
    const u = new URL(url);
    expect(u.searchParams.get("utm_source")).toBe(UTM_SOURCE_LEADER);
    expect(u.searchParams.get("utm_medium")).toBe(medium);
    expect(u.searchParams.get("utm_campaign")).toBe("chatgpt");
  });

  it("buildConsumerAiUrl sets provider campaign per provider", () => {
    const claude = buildConsumerAiUrl({ surface: "demo", provider: "claude" });
    expect(new URL(claude).searchParams.get("utm_campaign")).toBe("claude");
  });

  it("exposes legal URLs on promptanatomy origin", () => {
    expect(PROMPT_ANATOMY_PRIVACY_URL.startsWith(PROMPT_ANATOMY_ORIGIN)).toBe(true);
    expect(PROMPT_ANATOMY_TERMS_URL.startsWith(PROMPT_ANATOMY_ORIGIN)).toBe(true);
    expect(PROMPT_ANATOMY_PRIVACY_URL).toContain("/privacy");
    expect(PROMPT_ANATOMY_TERMS_URL).toContain("/terms");
  });
});
