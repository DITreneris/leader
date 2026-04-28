import { LEADER_PAGE_DATE_MODIFIED, LEADER_PAGE_DATE_PUBLISHED } from "../constants/pageSeo";
import { SHIPPED_LOCALES } from "../constants/siteLocale";
import type { Language } from "../content/copy";

const motherOrgId = "https://www.promptanatomy.app/#organization";
const motherSiteId = "https://www.promptanatomy.app/#website";

export type FaqItem = { q: string; a: string; bullets?: readonly string[] };

/** Single plain-text answer for schema.org FAQPage crawlers. */
export function faqAnswerTextForSchema(item: FaqItem): string {
  if (!item.bullets?.length) return item.a;
  return `${item.a}\n${item.bullets.map((b) => `• ${b}`).join("\n")}`;
}

/** JSON-LD graph for CEO/COO landing FAQ + WebPage (Organization + WebSite reused from mother product). */
export function buildLeaderPageJsonLd(input: {
  lang: Language;
  localeCanonical: string;
  socialImageUrl: string;
  /** Mirrors `<meta name="description">`, `<title>`, and `og:image:alt`. */
  meta: { title: string; description: string; socialImageAlt: string };
  faqItems: readonly FaqItem[];
}) {
  const { lang, localeCanonical, socialImageUrl, meta, faqItems } = input;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": motherOrgId,
        name: "Promptų anatomija",
        alternateName: "Prompt Anatomy",
        url: "https://www.promptanatomy.app",
        logo: {
          "@type": "ImageObject",
          url: "https://www.promptanatomy.app/og-image.png",
        },
        sameAs: ["https://www.promptanatomy.app/"],
      },
      {
        "@type": "WebSite",
        "@id": motherSiteId,
        url: "https://www.promptanatomy.app",
        name: "Prompt Anatomy",
        publisher: { "@id": motherOrgId },
        inLanguage: [...SHIPPED_LOCALES],
      },
      {
        "@type": "WebPage",
        "@id": `${localeCanonical}#webpage`,
        url: localeCanonical,
        name: meta.title,
        description: meta.description,
        datePublished: LEADER_PAGE_DATE_PUBLISHED,
        dateModified: LEADER_PAGE_DATE_MODIFIED,
        isPartOf: { "@id": motherSiteId },
        about: { "@id": motherOrgId },
        inLanguage: lang,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: socialImageUrl,
          description: meta.socialImageAlt,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${localeCanonical}#faq`,
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
