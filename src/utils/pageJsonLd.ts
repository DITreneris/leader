import { LEADER_PAGE_DATE_MODIFIED, LEADER_PAGE_DATE_PUBLISHED } from "../constants/pageSeo";
import { SHIPPED_LOCALES } from "../constants/siteLocale";
import type { Language } from "../content/copy";

const motherOrgId = "https://www.promptanatomy.app/#organization";
const motherSiteId = "https://www.promptanatomy.app/#website";

export type FaqItem = {
  q: string;
  a: string;
  bullets?: readonly string[];
  handoff?: "sister_hub";
};

const SISTER_HUB_CANONICAL = "https://promptanatomy.cloud/";

/** Single plain-text answer for schema.org FAQPage crawlers. */
export function faqAnswerTextForSchema(item: FaqItem): string {
  const base = !item.bullets?.length
    ? item.a
    : `${item.a}\n${item.bullets.map((b) => `• ${b}`).join("\n")}`;
  if (item.handoff === "sister_hub") {
    return `${base}\nFramework practice: ${SISTER_HUB_CANONICAL}`;
  }
  return base;
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
