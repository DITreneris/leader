import { describe, expect, it } from "vitest";
import { GOOGLE_SITE_VERIFICATION, LEADER_PAGE_DATE_MODIFIED, LEADER_PAGE_DATE_PUBLISHED } from "./pageSeo";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

describe("pageSeo dates", () => {
  it("uses ISO 8601 date strings", () => {
    expect(LEADER_PAGE_DATE_PUBLISHED).toMatch(ISO_DATE);
    expect(LEADER_PAGE_DATE_MODIFIED).toMatch(ISO_DATE);
  });

  it("keeps modified on or after published", () => {
    expect(LEADER_PAGE_DATE_MODIFIED >= LEADER_PAGE_DATE_PUBLISHED).toBe(true);
  });
});

describe("Google Search Console", () => {
  it("keeps the HTML-tag verification token", () => {
    expect(GOOGLE_SITE_VERIFICATION).toBe("IeoNpDUYy1zwRqccCAO41IxZwUW2MHvKzleVbLJkArE");
  });
});
