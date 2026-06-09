import { LEADER_PAGE_DATE_MODIFIED, LEADER_PAGE_DATE_PUBLISHED } from "../constants/pageSeo";
import {
  AUTHOR_NAME,
  CONTACT_EMAIL,
  MAILING_COUNTRY,
  MAILING_LOCALITY,
  MAILING_POSTAL_CODE,
  MAILING_REGION,
  MAILING_STREET,
} from "../constants/publisher";
import { SHIPPED_LOCALES } from "../constants/siteLocale";
import type { Language } from "../content/copy";

const motherOrgId = "https://www.promptanatomy.app/#organization";
const motherSiteId = "https://www.promptanatomy.app/#website";

export type FaqSectionAnchor = "context" | "demo" | "kit" | "safety";

const SECTION_ANCHOR_HREF: Record<FaqSectionAnchor, string> = {
  context: "#context",
  demo: "#demo",
  kit: "#kit",
  safety: "#safety-check",
};

const SECTION_ANCHOR_SCHEMA_LABEL: Record<FaqSectionAnchor, string> = {
  context: "Global Context section",
  demo: "Step 2 clarity practice section",
  kit: "Kit download section",
  safety: "Safety check section",
};

export type FaqItem = {
  q: string;
  a: string;
  bullets?: readonly string[];
  handoff?: "sister_hub";
  sectionAnchor?: FaqSectionAnchor;
  sectionLinkLabel?: string;
};

const SISTER_HUB_CANONICAL = "https://promptanatomy.cloud/";

/** Single plain-text answer for schema.org FAQPage crawlers. */
export function faqAnswerTextForSchema(item: FaqItem): string {
  const base = !item.bullets?.length
    ? item.a
    : `${item.a}\n${item.bullets.map((b) => `• ${b}`).join("\n")}`;
  const parts = [base];
  if (item.sectionAnchor) {
    parts.push(
      `${SECTION_ANCHOR_SCHEMA_LABEL[item.sectionAnchor]}: ${SECTION_ANCHOR_HREF[item.sectionAnchor]}`,
    );
  }
  if (item.handoff === "sister_hub") {
    parts.push(`Framework practice: ${SISTER_HUB_CANONICAL}`);
  }
  return parts.join("\n");
}

/** JSON-LD graph for CEO/COO landing FAQ + WebPage (Organization + WebSite reused from mother product). */
export function buildLeaderPageJsonLd(input: {
  lang: Language;
  pageCanonical: string;
  socialImageUrl: string;
  /** Mirrors `<meta name="description">`, `<title>`, and `og:image:alt`. */
  meta: { title: string; description: string; socialImageAlt: string };
  faqItems: readonly FaqItem[];
}) {
  const { lang, pageCanonical, socialImageUrl, meta, faqItems } = input;
  const authorId = `${pageCanonical}#author`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": motherOrgId,
        name: "Prompt Anatomy",
        alternateName: ["Promptų anatomija", "PromptAnatomy"],
        url: "https://www.promptanatomy.app/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.promptanatomy.app/og-image.png",
        },
        email: CONTACT_EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: MAILING_STREET,
          addressLocality: MAILING_LOCALITY,
          addressRegion: MAILING_REGION,
          postalCode: MAILING_POSTAL_CODE,
          addressCountry: MAILING_COUNTRY,
        },
        sameAs: ["https://www.promptanatomy.app/"],
      },
      {
        "@type": "WebSite",
        "@id": motherSiteId,
        url: "https://www.promptanatomy.app/",
        name: "Prompt Anatomy",
        publisher: { "@id": motherOrgId },
        inLanguage: [...SHIPPED_LOCALES],
      },
      {
        "@type": "Person",
        "@id": authorId,
        name: AUTHOR_NAME,
        email: CONTACT_EMAIL,
      },
      {
        "@type": "WebPage",
        "@id": `${pageCanonical}#webpage`,
        url: pageCanonical,
        name: meta.title,
        description: meta.description,
        keywords: [
          "executive decision operating kit",
          "CEO COO decision brief",
          "executive risk review prompt",
          "owner deadline next action",
        ],
        datePublished: LEADER_PAGE_DATE_PUBLISHED,
        dateModified: LEADER_PAGE_DATE_MODIFIED,
        isPartOf: { "@id": motherSiteId },
        about: { "@id": motherOrgId },
        author: { "@id": authorId },
        mainEntity: { "@id": `${pageCanonical}#faq` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: socialImageUrl,
          width: 1200,
          height: 630,
          caption: meta.socialImageAlt,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageCanonical}#faq`,
        inLanguage: lang,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: faqAnswerTextForSchema(item) },
        })),
      },
    ],
  };
}
