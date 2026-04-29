import { describe, expect, it } from "vitest";
import { LEADER_PAGE_DATE_MODIFIED, LEADER_PAGE_DATE_PUBLISHED } from "../constants/pageSeo";
import { SHIPPED_LOCALES } from "../constants/siteLocale";
import { buildLeaderPageJsonLd, faqAnswerTextForSchema, type FaqItem } from "./pageJsonLd";

describe("faqAnswerTextForSchema", () => {
  it("returns plain answer when no bullets", () => {
    const item: FaqItem = { q: "Q?", a: "Plain answer." };
    expect(faqAnswerTextForSchema(item)).toBe("Plain answer.");
  });

  it("appends bullet lines when bullets present", () => {
    const item: FaqItem = {
      q: "Q?",
      a: "Intro.",
      bullets: ["First", "Second"],
    };
    expect(faqAnswerTextForSchema(item)).toBe("Intro.\n• First\n• Second");
  });
});

describe("buildLeaderPageJsonLd", () => {
  const baseInput = {
    lang: "en" as const,
    localeCanonical: "https://example.github.io/leader/en/",
    socialImageUrl: "https://example.github.io/leader/og-image.png",
    meta: {
      title: "Test title",
      description: "Test description",
      socialImageAlt: "Alt text",
    },
    faqItems: [{ q: "One?", a: "A1" }] satisfies readonly FaqItem[],
  };

  it("emits schema.org context and four graph nodes", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@graph"]).toHaveLength(4);
  });

  it("sets WebPage dates from pageSeo constants", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    const webPage = data["@graph"].find((n) => n["@type"] === "WebPage") as Record<string, unknown>;
    expect(webPage.datePublished).toBe(LEADER_PAGE_DATE_PUBLISHED);
    expect(webPage.dateModified).toBe(LEADER_PAGE_DATE_MODIFIED);
    expect(webPage.name).toBe("Test title");
    expect(webPage.description).toBe("Test description");
    expect(webPage.inLanguage).toBe("en");
  });

  it("mirrors WebSite inLanguage from SHIPPED_LOCALES", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    const webSite = data["@graph"].find((n) => n["@type"] === "WebSite") as {
      inLanguage: readonly string[];
    };
    expect(webSite.inLanguage).toEqual([...SHIPPED_LOCALES]);
  });

  it("maps FAQ items to Question entities", () => {
    const data = buildLeaderPageJsonLd({
      ...baseInput,
      faqItems: [
        { q: "Q1", a: "A1" },
        { q: "Q2", a: "A2", bullets: ["b"] },
      ],
    });
    const faq = data["@graph"].find((n) => n["@type"] === "FAQPage") as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(faq.mainEntity).toHaveLength(2);
    expect(faq.mainEntity[0].name).toBe("Q1");
    expect(faq.mainEntity[1].acceptedAnswer.text).toContain("• b");
  });
});
