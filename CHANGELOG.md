# Changelog

Daily project updates for the PromptAnatomy Executive OS landing page.

## 2026-04-26

### Added
- Created the Astro, Tailwind CSS, and TypeScript static landing page foundation.
- Added bilingual English/Lithuanian content in `src/content/copy.ts`.
- Added the static 3-minute clarity check with five executive scenarios.
- Added landing sections for hero, demo, before/after, meme slots, workflows, ROI, authority bridge, and final CTA.
- Added a proof strip near the top of the page to support the static demo and low-risk positioning.
- Added asset folders for memes, graphics, and screenshots.
- Added `docs/VISUAL_CONTENT_MAP.md` for meme, screenshot, and diagram planning.
- Added a meme asset evaluation canvas documenting the top 5 project-ready visuals and rejected alternatives.
- Added GitHub Pages deployment workflow.
- Added PR build CI and `.env.example` for GitHub Pages cold deploy settings.
- Added Cursor rules, project skill, and `AGENTS.md` for future AI-assisted development.
- Added document management, quality assurance, and codebase overview docs.

### Changed
- Replaced missing meme image references with launch-safe visual proof cards to avoid broken public assets.
- Hardened static demo language switching, list rendering, copy embedding, and clipboard handling.
- Normalized the Astro base path so GitHub Pages builds produce `/leader/` URLs from `BASE_PATH=/leader`.
- Upgraded Astro to clear the runtime XSS advisory and aligned CI/deploy workflows to Node 22.12.0.
- Replaced meme placeholders with selected uploaded PNG assets and bilingual captions.
- Expanded the meme section from 3 cards to a 5-card visual story: access, speed, structure, leadership system, results.
- Removed unused PNG meme assets to keep the project lean.
- Confirmed `public/assets/memes/` should retain only the five landing-page PNGs plus `README.md`.
- Updated meme asset documentation to separate landing-page images from social/course assets.
- Rewrote hero, CTA, and top-of-page copy for sharper CEO relevance.
- Improved all five static demo scenarios in English and Lithuanian.
- Updated page metadata with sharper SEO title, description, canonical URL, Open Graph, and Twitter card fields.
- Switched Tailwind integration from the Vite plugin to PostCSS to keep the production build stable.

### Verified
- Ran `npm run build` successfully with 0 Astro check errors and 0 warnings.
- Re-ran `npm run build` after audit fixes with 0 Astro check errors and 0 warnings.
