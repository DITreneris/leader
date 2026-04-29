/**
 * Deployed landing semver — single source of truth is root `package.json` (`version` field).
 * Bump with releases (see `docs/DOCUMENT_MANAGEMENT.md` — Versioning).
 */
import pkg from "../../package.json";

export const APP_VERSION = pkg.version;
