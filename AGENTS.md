<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Animal Justice Foundation

Read this file and `docs/product-specification.md` before changing the platform.

## Working rules

- Inspect existing code before editing. Do not rewrite the app for a small change.
- Implement one milestone at a time. Do not start the next milestone before review.
- Identify affected routes, components, services, tables, and policies before a broad change.
- Validate untrusted input on the server.
- Enforce authorisation on the server and in Supabase row-level security. Hiding a link is not access control.
- The service-role key stays in server-side code.
- Add loading, empty, error, and success states for interactive features.
- Use migrations for schema changes.
- Test allowed and forbidden behaviour.
- Run lint, typecheck, tests, and the production build. Report commands and actual results. Never claim a check passed unless it was run.
- Do not invent registration numbers, tax status, impact figures, testimonials, contact details, or catalogue items.
- `DONATIONS_LIVE_ENABLED` stays `false` until legal and operational approval is explicit. A feature flag does not replace that approval.
- Do not claim charitable registration, tax deductibility, or Section 44(6) approval.

## Milestones

1. Foundation — public shell (this release).
2. Authentication and roles.
3. Petition engine.
4. Donations (sandbox; live collection stays off).
5. E-commerce.
6. Administration and content.
7. Launch readiness.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Supabase, PayPal, Vercel. Currency is MYR in integer minor units. The first language is English.
