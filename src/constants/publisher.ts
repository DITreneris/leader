/** Publisher / author trust fields for JSON-LD, footer, and llms.txt. */
export const PUBLISHER_NAME = "Prompt Anatomy";

export const AUTHOR_NAME = "Tomas Staniulis";

export const CONTACT_EMAIL = "info@promptanatomy.app";

export const MAILING_ADDRESS =
  "Prompt Anatomy, 1311 Park St, Unit #654, Alameda, CA 94501, US";

/** Short locality for visible footer (full street in JSON-LD only). */
export const MAILING_ADDRESS_LOCALITY = "Alameda, CA";

export const MAILING_STREET = "1311 Park St, Unit #654";

export const MAILING_LOCALITY = "Alameda";

export const MAILING_REGION = "CA";

export const MAILING_POSTAL_CODE = "94501";

export const MAILING_COUNTRY = "US";

export function buildContactMailtoUrl(): string {
  return `mailto:${CONTACT_EMAIL}`;
}
