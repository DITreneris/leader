# Definition of Done

Single completion router for agents and humans. **Do not duplicate** checklists here — follow links for depth.

## Universal minimum (every task)

- `npm test` and `npm run build` pass (0 Astro check errors; 0 warnings).
- No backend, login, AI API calls, or user data storage unless explicitly approved.
- [`CHANGELOG.md`](../CHANGELOG.md) entry when the change is user-visible, structural, documentation, or deploy-related.
- **Conflict order:** [`src/layouts/Page.astro`](../src/layouts/Page.astro) → docs → [`AGENTS.md`](../AGENTS.md) → `.cursor/rules/` → skill.

## Task router

| If you changed… | Also verify | Deep checklist |
|-----------------|-------------|----------------|
| Locale copy (`en.ts`) | English-only edits; run language-standard audit gate; do not update `lt.ts` prose | [`COPY_AUDIT_BY_SLIDE.md`](COPY_AUDIT_BY_SLIDE.md) |
| Visuals / CSS / new section | DS tokens; one primary CTA per major section | [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md), [`VISUAL_CONTENT_MAP.md`](VISUAL_CONTENT_MAP.md) |
| Outbound / UTM links | `outboundLinks.test.ts` green | [`UTM_MATRIX.md`](UTM_MATRIX.md) |
| SEO / FAQ / `llms.txt` | Four Global Context fields consistent; bump `LEADER_PAGE_DATE_MODIFIED` in [`pageSeo.ts`](../src/constants/pageSeo.ts) | [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) — SEO / GEO / AI crawl |
| Memes | Three beats on page; run `npm run optimize:memes` if PNG changed | [`MEME_PRIORITY_REGISTRY.md`](MEME_PRIORITY_REGISTRY.md) |
| Deploy / env | Dual-deploy smoke per host; `npm run verify:build` with same `SITE_URL` + `BASE_PATH` as build | [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) — Dual-deploy smoke |
| Verify scripts / CI guardrails | `npm run build` then `npm run verify` (or CI `verify:build` step) | [`docs/COMMANDS.md`](COMMANDS.md), [`localeParity.test.ts`](../src/content/locales/localeParity.test.ts) |
| Executive library / `llms-full.txt` | Run `npm run generate:llms-full`; commit `public/llms-full.txt` | [`docs/COMMANDS.md`](COMMANDS.md) |
| Docs-only META adaptation | Follow META doc; merge into `en.ts` via language-standard | [`PROMPTS_US_LOCALIZATION_META.md`](PROMPTS_US_LOCALIZATION_META.md) |

## Release and PR

- **Pull request:** [`.github/pull_request_template.md`](../.github/pull_request_template.md)
- **Full release:** [`QUALITY_ASSURANCE.md`](QUALITY_ASSURANCE.md) — Release Readiness

## Explicitly not done

- Build passes but `en.ts` keys drift from `lt.ts` structure (add English placeholders in `lt.ts` if you changed keys — do not maintain LT prose while frozen).
- User-visible copy changed without a `CHANGELOG.md` entry.
- Stale doc counts (e.g. meme beats) left wrong when you touched related files.
- Outbound URLs hand-rolled instead of [`outboundLinks.ts`](../src/constants/outboundLinks.ts).
