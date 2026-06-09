# Roadmap (open backlog)

Living list of **open** product and maintenance work for PromptAnatomy Executive OS (Leader). Shipped baseline lives in [`src/layouts/Page.astro`](../src/layouts/Page.astro), [`docs/CODEBASE_OVERVIEW.md`](CODEBASE_OVERVIEW.md), and [`CHANGELOG.md`](../CHANGELOG.md).

Historical decisions and long-form strategy: [`docs/STRATEGIC_REVISION_PLAN.md`](STRATEGIC_REVISION_PLAN.md) (decision log + archive).

---

## Conversion and CTA (open)

| Item | Intent | Notes |
|------|--------|--------|
| PDF touchpoint dedup | One canonical “when to download” story | PDF still appears in nav, demo follow-up, `#kit`, library — see strategic plan §4.1 |
| PromoBanner position experiment | Move strip after `#demo` if analytics show mid-funnel bounce | P0 kept position; swap+copy only |
| Hero key naming | Done in P2 (`inPageCta` / `productCta`) | — |

---

## Content and UX (open, no new sections without intent)

| Item | Intent | Notes |
|------|--------|--------|
| Safety + practice narrative merge | One “risk shield” story; SafetyCheck as appendix/collapsible | Strategic plan §5.2 |
| ROI path trim | Shorter copy; mobile-linear canonical story | §5.3 |
| Prompt anatomy default closed | Already `<details>`; revisit copy density | §5.3 |
| Trust strip | Real logos/quotes or stay hidden | No placeholder labels |

---

## Ecosystem (open)

| Item | Owner | Notes |
|------|-------|--------|
| Sister repo reciprocal CTA | `DITreneris/lead` | Text link to `promptanatomy.pro/en/` after lesson / in promo-handoff |
| Executive output checklist UI | Leader P3 | Static self-check after demo (owner, deadline, trade-off, risk) — not framework quiz |

---

## Maintenance (open)

| Item | Intent |
|------|--------|
| Expand Playwright | Demo copy success path, FAQ sister link smoke |
| `STRATEGIC_REVISION_PLAN.md` trim | Keep decision log; point here for open items |
| Quarterly doc freshness | See [`DOCUMENT_MANAGEMENT.md`](DOCUMENT_MANAGEMENT.md) |

---

## Explicitly out of scope (MVP)

- Backend, login, AI API calls, analytics beyond anonymous page views on Vercel
- Slide lesson UX, emp/mgr library tabs, framework quiz (sister hub)
- Expanding the 35-prompt library as primary story spine
