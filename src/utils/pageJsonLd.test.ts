import { describe, expect, it } from "vitest";
import { LEADER_PAGE_DATE_MODIFIED, LEADER_PAGE_DATE_PUBLISHED } from "../constants/pageSeo";
import { AUTHOR_NAME, CONTACT_EMAIL, MAILING_POSTAL_CODE } from "../constants/publisher";
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

  it("appends section anchor hint for schema parity", () => {
    const item: FaqItem = {
      q: "How do I start?",
      a: "Fill context first.",
      sectionAnchor: "context",
      sectionLinkLabel: "Open Global Context",
    };
    expect(faqAnswerTextForSchema(item)).toContain("Global Context section: #context");
  });

  it("appends sister hub URL for framework handoff FAQ items", () => {
    const item: FaqItem = {
      q: "New to structured prompts?",
      a: "Framework basics live on the sister site.",
      handoff: "sister_hub",
    };
    expect(faqAnswerTextForSchema(item)).toContain("https://promptanatomy.cloud/");
  });
});

describe("buildLeaderPageJsonLd", () => {
  const baseInput = {
    lang: "en" as const,
    pageCanonical: "https://example.github.io/leader/",
    socialImageUrl: "https://example.github.io/leader/og-image.png",
    meta: {
      title: "Test title",
      description: "Test description",
      socialImageAlt: "Alt text",
    },
    faqItems: [{ q: "One?", a: "A1" }] satisfies readonly FaqItem[],
  };

  it("emits schema.org context and five graph nodes", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@graph"]).toHaveLength(5);
  });

  it("sets WebPage dates from pageSeo constants", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    const webPage = data["@graph"].find((n) => n["@type"] === "WebPage") as Record<string, unknown>;
    expect(webPage.datePublished).toBe(LEADER_PAGE_DATE_PUBLISHED);
    expect(webPage.dateModified).toBe(LEADER_PAGE_DATE_MODIFIED);
    expect(webPage.name).toBe("Test title");
    expect(webPage.description).toBe("Test description");
    expect(webPage.inLanguage).toBe("en-US");
  });

  it("links WebPage mainEntity to FAQPage and author to Person", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    const webPage = data["@graph"].find((n) => n["@type"] === "WebPage") as {
      mainEntity: { "@id": string };
      author: { "@id": string };
    };
    expect(webPage.mainEntity["@id"]).toBe(`${baseInput.pageCanonical}#faq`);
    expect(webPage.author["@id"]).toBe(`${baseInput.pageCanonical}#author`);
  });

  it("emits Person with author name and email", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    const person = data["@graph"].find((n) => n["@type"] === "Person") as {
      name: string;
      email: string;
    };
    expect(person.name).toBe(AUTHOR_NAME);
    expect(person.email).toBe(CONTACT_EMAIL);
  });

  it("uses EN-primary Organization name with US mailing address", () => {
    const data = buildLeaderPageJsonLd(baseInput);
    const org = data["@graph"].find((n) => n["@type"] === "Organization") as {
      name: string;
      address: { postalCode: string };
    };
    expect(org.name).toBe("Prompt Anatomy");
    expect(org.address.postalCode).toBe(MAILING_POSTAL_CODE);
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
