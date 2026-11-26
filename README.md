# Animal Justice Foundation

Public website for Animal Justice Foundation (AJF) — Law | Compassion | Action. The organisation is in formation in Malaysia.

This repository is the Phase 0 public shell: design system, navigation, and honest placeholder pages. Accounts, petitions, payments, and the store are later milestones. Live fundraising is off.

The product specification is in [docs/product-specification.md](docs/product-specification.md). Contributor rules are in [AGENTS.md](AGENTS.md).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Copy `.env.example` to `.env.local` when you need local variables. Leave `DONATIONS_LIVE_ENABLED=false`. Do not commit secrets.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub Actions runs the same checks. It does not deploy.

## Routes

Public pages cover the organisation, petitions, campaigns, news, store, cart, checkout, donations, impact, volunteering, cruelty reporting, contact, and draft policies. Donation pages explain that fundraising is closed and do not show a payment button. Forms on this shell do not store personal data.

Account and admin routes are not part of this phase.
