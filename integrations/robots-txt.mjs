import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { getSitemapIndexUrl } from "../scripts/lib/deploy-env.mjs";

const template = (sitemapUrl) => `# PromptAnatomy Executive OS — robots.txt
#
# Policy: maximum search + AI citation visibility (retrieval and training crawlers allowed).
# Human / LLM site summary: /llms.txt
#
# If you need "retrieval-only" later (block model training but allow live search), use
# targeted Disallow per user-agent and keep ChatGPT-User / PerplexityBot / OAI-SearchBot allowed.
# See docs/SOURCE_OF_TRUTH.md (SEO / GEO / AI crawlers).
#
# Sitemap URL is written at build time from SITE_URL + BASE_PATH (see astro.config.mjs).

User-agent: *
Allow: /

# OpenAI
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Anthropic
User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

# Google — Gemini / Bard training corpus (search + AI Overviews use Googlebot; keep Googlebot allowed via * above)
User-agent: Google-Extended
Allow: /

Sitemap: ${sitemapUrl}
`;

export default function robotsTxtIntegration() {
  return {
    name: "robots-txt",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const outPath = fileURLToPath(new URL("robots.txt", dir));
        writeFileSync(outPath, template(getSitemapIndexUrl()), "utf8");
      },
    },
  };
}
