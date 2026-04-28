import type { Language } from "../content/copy";

const motherOrgId = "https://www.promptanatomy.app/#organization";
const motherSiteId = "https://www.promptanatomy.app/#website";

type FaqItem = { q: string; a: string };

/** JSON-LD graph for CEO/COO landing FAQ + WebPage (Organization + WebSite reused from mother product). */
export function buildLeaderPageJsonLd(input: {
  lang: Language;
  localeCanonical: string;
  socialImageUrl: string;
  meta: { title: string; description: string };
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
        inLanguage: ["en", "lt"],
      },
      {
        "@type": "WebPage",
        "@id": `${localeCanonical}#webpage`,
        url: localeCanonical,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": motherSiteId },
        about: { "@id": motherOrgId },
        inLanguage: lang,
        primaryImageOfPage: { "@type": "ImageObject", url: socialImageUrl },
      },
      {
        "@type": "FAQPage",
        "@id": `${localeCanonical}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
