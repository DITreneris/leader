# Quality Assurance

## Quality Goal

The page should feel premium, load fast, and make sense to a CEO in under 10 seconds. Quality is measured by clarity, speed, trust, and conversion focus.

## Required Checks

Run after meaningful code, copy, style, or config changes:

```bash
npm run build
```

The build must finish with:

- 0 Astro check errors
- 0 Astro check warnings
- Successful static build

## Product QA Checklist

- The page still has one clear primary promise.
- The static clarity demo is easy to understand without instructions.
- CTAs still point toward the full PromptAnatomy system.
- The page does not become a prompt-engineering lesson.
- No backend, login, AI API call, database, or user data storage was added unintentionally.
- English and Lithuanian copy stay aligned.

## Content QA Checklist

- Headlines are short and executive.
- Copy uses business language: decision, risk, trade-off, next action, delegation, ROI.
- Claims are specific and believable.
- ROI language stays cautious unless backed by proof.
- Links to `https://www.promptanatomy.app/` and `https://ditreneris.github.io/lead/` remain correct.

## Visual QA Checklist

- Mobile order is clear: headline, value, CTA or useful visual.
- The primary CTA is visible above the fold on common screen sizes.
- Gradients, glass cards, and memes support the message rather than distract.
- Meme placeholders should be replaced with optimized assets before public launch.
- Diagrams should use SVG where possible.
- Screenshots and larger raster assets should use AVIF/WebP when possible.

## Accessibility QA Checklist

- Buttons and links have clear text.
- Interactive elements are reachable and understandable.
- Color contrast remains strong on the dark background.
- Images should have meaningful alt text when they communicate information.
- Decorative images should use empty alt text when implemented.

## Performance QA Checklist

- Keep the page static-first.
- Avoid adding heavy client-side JavaScript.
- Do not lazy-load above-the-fold hero visuals.
- Lazy-load below-the-fold images when real assets are added.
- Define image dimensions or aspect ratio to avoid layout shift.

## Release Readiness

Before publishing:

1. Run `npm run build`.
2. Check desktop and mobile layouts.
3. Test language switching.
4. Test all scenario tabs in the clarity demo.
5. Test prompt copy button.
6. Test outbound links.
7. Add a daily entry to `CHANGELOG.md`.
