# Document Management

## Principle

Keep documentation useful, short, and close to the work. This is a lean one-page product, so documentation should prevent confusion without becoming a second project.

## Source Of Truth

- Product direction: `AGENTS.md` and `.cursor/rules/project-direction.mdc`
- Page architecture: `docs/CODEBASE_OVERVIEW.md`
- Development commands: `README.md`
- Quality process: `docs/QUALITY_ASSURANCE.md`
- Daily updates: `CHANGELOG.md`
- Bilingual marketing copy: `src/content/copy.ts`

## Document Rules

- Update docs only when behavior, structure, workflow, or quality expectations change.
- Keep each doc focused on one job.
- Prefer bullets and checklists over long explanations.
- Do not duplicate detailed page copy in docs; link to `src/content/copy.ts` as the source.
- Keep plan files separate. Do not edit `.cursor/plans` or global plan files unless explicitly requested.

## When To Update

Update `README.md` when:

- Commands change.
- Setup steps change.
- Dependencies or deployment assumptions change.

Update `docs/CODEBASE_OVERVIEW.md` when:

- The page flow changes.
- Major folders or responsibilities change.
- Static/demo constraints change.

Update `docs/QUALITY_ASSURANCE.md` when:

- New checks are added.
- Quality expectations change.
- Deployment or release validation changes.

Update `CHANGELOG.md` daily when:

- A visible page change is made.
- A content, design, or asset change is made.
- Project guidance or build/deploy setup changes.

## Daily Update Format

Use this format in `CHANGELOG.md`:

```markdown
## YYYY-MM-DD

### Added
- New things introduced.

### Changed
- Existing things improved or adjusted.

### Fixed
- Bugs or quality issues resolved.

### Verified
- Checks run, for example `npm run build`.
```

Remove empty sections if they are not relevant.
