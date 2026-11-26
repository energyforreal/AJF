# AJF Website --- Comprehensive Product & Engineering Specification

**Project:** Animal Justice Foundation (AJF)\
**Brand line:** Law \| Compassion \| Action\
**Primary market:** Malaysia\
**Launch strategy:** MVP, then progressive expansion\
**Development environment:** Cursor IDE\
**Hosting:** Vercel

## 1. Executive summary

AJF is being established as a Malaysia-oriented animal welfare and
advocacy organisation. Its website is intended to be an integrated
platform, not merely an informational NGO website. It will combine:

1.  Public organisational website and educational content.
2.  Public petition submissions with AJF moderation before publication.
3.  Donation and fundraising workflows using PayPal.
4.  Integrated AJF merchandise e-commerce.
5.  User accounts and personal dashboards.
6.  Administration for campaigns, users, content, orders, and reporting.

AJF is currently in formation. Build and test the donation system, but
keep live fundraising disabled until AJF's legal status, banking
arrangements, PayPal eligibility, and applicable Malaysian requirements
are confirmed. Do not claim charitable registration, tax deductibility,
or approval that has not been obtained.

### Product vision

Create a trusted digital platform that turns concern for animals into
informed, responsible and practical action.

### Product principles

-   Animal welfare first.
-   Trust, accuracy and financial transparency.
-   Privacy by design and data minimisation.
-   Responsible advocacy and moderation.
-   Secure-by-default engineering.
-   Mobile-first experience.
-   Accessible design, targeting WCAG 2.2 AA.
-   Incremental, tested delivery.

## 2. Confirmed project decisions

  Area               Decision
  ------------------ ----------------------------------------------------
  Organisation       Animal Justice Foundation
  Abbreviation       AJF
  Brand line         Law \| Compassion \| Action
  Primary market     Malaysia
  Legal status       Organisation in formation
  Launch strategy    MVP
  Petition model     Public submission; AJF approval before publication
  Payment provider   PayPal
  Hosting            Vercel
  IDE                Cursor
  Frontend           Next.js App Router
  Language           TypeScript
  Styling            Tailwind CSS
  Database           Supabase PostgreSQL
  Authentication     Supabase Auth
  File storage       Supabase Storage
  Default currency   MYR
  Initial language   English
  Future language    Bahasa Malaysia
  Source control     GitHub

### Decisions still to confirm

Do not invent these values. Keep them configurable or mark them pending:

-   Final registered legal name, registration number and address.
-   Production domain and official contact details.
-   Approved bank and PayPal Business account details.
-   Any tax-exempt or donation approval.
-   Donation receipt wording and accounting treatment.
-   Shipping provider, rates, delivery zones and fulfilment commitments.
-   Product catalogue, SKUs and return policy.
-   Final logo artwork and brand usage rules.
-   Named administrators and office holders.
-   Privacy retention periods and operational data controller details.

## 3. Brand identity and design system

### 3.1 Brand positioning

AJF should feel credible, modern, compassionate, professional and
action-oriented. Take general inspiration from established animal
welfare and conservation organisations, but do not copy their logos,
distinctive layouts, or protected brand assets.

### 3.2 Colour palette

  -----------------------------------------------------------------------
  Token             Name              Hex               Usage
  ----------------- ----------------- ----------------- -----------------
  `forest`          Forest green      `#174D32`         Header, footer,
                                                        hero, strong
                                                        emphasis

  `primary`         AJF green         `#23834B`         Primary buttons,
                                                        links, active
                                                        states

  `leaf`            Leaf green        `#72A875`         Secondary accents

  `sage`            Sage              `#DCE9D9`         Soft panels and
                                                        cards

  `cream`           Warm cream        `#F7F8F2`         Main background

  `ink`             Charcoal          `#202820`         Primary text

  `muted`           Muted grey        `#66716A`         Secondary text

  `white`           White             `#FFFFFF`         Content surfaces

  `warning`         Amber             `#B7791F`         Warnings

  `danger`          Muted red         `#B94141`         Errors and
                                                        destructive
                                                        actions
  -----------------------------------------------------------------------

### 3.3 Design rules

-   Forest green for strong brand surfaces and navigation.
-   AJF green for primary calls to action.
-   Cream and white for readable content.
-   Sage as a subtle secondary background.
-   Check text and interface contrast; never rely on colour alone.
-   Use properly licensed animal photography.
-   Avoid graphic or distressing imagery in prominent public areas. Warn
    users before displaying sensitive evidence.
-   Use consistent typography, spacing, radii, shadows and component
    states.
-   Avoid excessive gradients, animation and autoplay media.
-   Ensure logo legibility on light and dark backgrounds.
-   Support mobile, tablet and desktop layouts.

### 3.4 Reusable UI components

Build shared components for navigation, footer, buttons, form fields,
validation, cards, badges, alerts, progress bars, dialogs, pagination,
petition cards, signature counters, donation selectors, product cards,
product galleries, admin tables, loading states, empty states and error
states.

## 4. Information architecture and sitemap

### 4.1 Public routes

  Route                      Purpose
  -------------------------- -----------------------------------------------
  `/`                        Homepage
  `/about`                   Mission, vision, values and governance status
  `/animal-welfare`          Education and resources
  `/campaigns`               Campaign directory
  `/petitions`               Published petition directory
  `/petitions/[slug]`        Petition detail and signing
  `/petitions/submit`        Submit a petition for review
  `/donate`                  Donation information and approved campaigns
  `/donate/[slug]`           Donation campaign detail
  `/store`                   Merchandise catalogue
  `/store/[slug]`            Product detail
  `/cart`                    Shopping cart
  `/checkout`                Checkout
  `/impact`                  Verified impact and transparency
  `/volunteer`               Volunteer interest
  `/report-animal-cruelty`   Private animal welfare incident report
  `/news`                    News and articles
  `/news/[slug]`             Article detail
  `/contact`                 Contact and enquiry form
  `/privacy`                 Privacy notice
  `/terms`                   Terms of use
  `/refunds`                 Refund policy
  `/shipping`                Shipping policy
  `/community-guidelines`    Petition and community rules

### 4.2 Authentication and account routes

`/login`, `/register`, `/verify-email`, `/forgot-password`,
`/reset-password`, `/account`, `/account/profile`, `/account/petitions`,
`/account/signatures`, `/account/donations`, `/account/orders`,
`/account/privacy`.

### 4.3 Administration routes

`/admin`, `/admin/petitions`, `/admin/signatures`, `/admin/donations`,
`/admin/fundraising`, `/admin/products`, `/admin/inventory`,
`/admin/orders`, `/admin/users`, `/admin/content`,
`/admin/animal-reports`, `/admin/volunteers`, `/admin/reports`,
`/admin/audit-log`, `/admin/settings`.

All admin routes require server-side authorisation. Hiding navigation
links is not access control.

## 5. Homepage requirements

The homepage should include:

1.  Header with AJF logo and clear navigation.
2.  Hero section with an animal-focused image, concise headline and
    calls to action.
3.  Primary actions: explore petitions, learn about AJF, visit the
    store. Show donation actions only when fundraising is enabled.
4.  Featured approved campaigns.
5.  Featured published petitions with accurate verified signature
    counts.
6.  Mission and values section.
7.  Verified impact and transparency information.
8.  AJF Store preview.
9.  News and educational resources.
10. Volunteer call to action.
11. Consent-based newsletter signup.
12. Footer with policies, contact details and legal wording.

Acceptance criteria: mobile and desktop navigation work; primary links
resolve; no invented statistics or testimonials appear; donation actions
respect the feature flag; images have suitable alt text; metadata is
present; no browser console errors.

## 6. Petition and campaign platform

The petition module is a core feature. It should provide a familiar,
shareable campaign experience while enforcing moderation, privacy and
signature integrity.

### 6.1 Petition lifecycle

`draft → pending_review → published → closed / successful`

A submission may also be `rejected`. Rejected and pending petitions must
not be publicly listed.

A published petition is one of two kinds:

-   **AJF Official.** Written by staff. Someone other than the author
    still reviews it before publication.
-   **Community.** Started by a supporter and reviewed against the
    community guidelines.

The directory can filter All, AJF Official, and Community. Pending and
rejected petitions stay unlisted for both kinds. Official does not mean
published without review.

### 6.2 Submission fields

Required: title, short summary, detailed issue description, requested
action, a short list of asks, the decision-maker the petition addresses
(a council, ministry, or other body), category, submitter name and
email, agreement to community guidelines and privacy notice.

Optional: cover image, supporting references, suggested signature goal,
and relevant jurisdiction or location.

### 6.3 Moderation

-   Every public submission enters `pending_review`.
-   Moderators can approve, reject or request changes.
-   Only authorised moderators or super administrators can publish.
-   Petition creators cannot approve their own petitions. The same rule
    applies to the staff author of an AJF Official petition.
-   Record every moderation decision in an audit log.
-   Support internal notes and user-facing rejection reasons.
-   Allow users to report published petitions.
-   Only authorised staff can close or mark a campaign successful.
-   Campaign updates must have an attributable publisher.

### 6.4 Public petition page

Display the kind (AJF Official or Community), title, image, summary,
full description, the decision-maker, the short list of asks, creator
display name subject to privacy preferences, verified signature count,
goal, a progress bar of verified signatures only, sign action, share
controls, campaign updates and related petitions.

Share controls are copy link and WhatsApp. The page states that a
signature is public support. It is not a court filing or a government
submission.

Never expose signer email addresses, private contact details or exact
home addresses. Do not show sample signature totals or sample signers.

### 6.5 Signing workflow

1.  Visitor opens a published petition.
2.  Visitor enters name and email, plus only justified additional
    information.
3.  Visitor sees the privacy notice, a choice to show their name on the
    petition, and a separate opt-in for campaign email. Signing does
    not opt the person into email.
4.  Server validates and normalises the email.
5.  Create a pending signature and send a verification link.
6.  Store only a hash of the single-use, expiring verification token.
7.  On successful verification, mark the signature `verified`.
8.  Only verified signatures count publicly. A signature stored only in
    the browser does not count.
9.  Provide signature withdrawal and applicable privacy-rights
    workflows.

### 6.6 Anti-abuse controls

-   Unique constraint on petition and normalised email.
-   Rate limits and bot protection.
-   Email verification.
-   Expiring single-use tokens.
-   Server-side signature counting.
-   Moderation and exceptional-change audit trail.
-   Abuse reporting.
-   Do not represent online signatures as formal legal filings or
    official government submissions.

### 6.7 Petition acceptance criteria

-   Visitors can read published petitions.
-   Pending and rejected petitions are not publicly accessible.
-   New public submissions enter moderation.
-   Client requests cannot publish petitions.
-   Duplicate signatures are rejected safely.
-   Unverified signatures do not count.
-   Signer email remains private.
-   Moderation actions are role-protected and audited.
-   Petition pages have canonical URLs and share metadata.
-   The directory can filter All, AJF Official, and Community.
-   Share actions offer copy link and WhatsApp.
-   The page states that a signature is public support, not a court
    filing or a government submission.

### 6.8 Prototype decisions

A client-only preview explored petition layout, programmes, donations,
and a shop. The public shell does not copy that preview. These claims
from it stay unpublished:

-   Legal identity, an SSM number, a registered address, a production
    domain, named counsel, or case write-ups. The preview footer stated
    a Berhad name and an SSM reference. The organisation is still in
    formation. Do not claim charitable registration, tax deductibility,
    or Section 44(6) approval.
-   Sample signature totals, sample signers, impact figures, prices,
    shipping rates, and neutering fees.
-   A rescue desk that issues case numbers. Urgent reports stay with
    the police and the Department of Veterinary Services. The cruelty
    report page is not an emergency service.
-   Payment methods other than PayPal, and a live donate control.
    `DONATIONS_LIVE_ENABLED` stays `false` until legal and operational
    approval is explicit.
-   The preview palette and its single-page hash navigation. Colour
    tokens in the design system stay the source of truth.

Use these preview patterns only in the milestone that owns them, and
only with real records:

-   Phase 2 uses section 6 for the petition directory, the public page,
    and the verified sign form.
-   Phase 3 may use suggested amounts, once or monthly frequency, and a
    fund picker. Live collection stays off. Do not present sample
    amounts as money received.
-   Phase 4 may split shipping between West Malaysia and Sabah and
    Sarawak once the rates are confirmed.
-   The preview homepage line stays unused until a programme page
    describes work AJF actually runs.

### 6.9 Unscheduled programme notes

These ideas are not routes and not a milestone. Do not add pages for
them until a later review schedules the work:

-   Trap, neuter, vaccinate, release, and manage.
-   A feeder and rescue network.
-   Legal-defence cases and a legal-help request.
-   Internships.
-   Neuter sponsorship by companies and communities, listed only with
    written consent.
-   Wildlife guides and council partnerships.

Animal Welfare Act wording is published only after it is checked
against the Act. Guide structure waits for the content milestone.

## 7. Donations and fundraising

### 7.1 Legal launch gate

AJF is in formation. The donation UI, data model, PayPal Sandbox
integration and tests may be developed, but live donation collection
must remain disabled until legal and operational eligibility is
confirmed.

Before activation, confirm Malaysian legal structure, fundraising
requirements, banking arrangements, PayPal account eligibility and tax
treatment with qualified Malaysian advisers. Do not claim tax
deductibility or Section 44(6) approval unless formally obtained.

### 7.2 Donation features

When enabled: one-time donations, monthly recurring donations subject to
provider eligibility, custom and suggested amounts, campaign-specific
donations, optional anonymous public acknowledgement, donor history,
payment status, receipts, refunds and transparent financial reporting.

### 7.3 Donation records

Store internal donation ID, donor ID if registered, necessary donor
details, campaign ID, amount in integer minor units, ISO currency code,
frequency, anonymity preference, status and timestamps.

Keep the donation business record separate from the payment transaction
record.

### 7.4 Suggested statuses

`created`, `pending`, `completed`, `failed`, `refunded`,
`partially_refunded`.

Recurring subscriptions also require provider subscription ID,
subscription state, billing events and cancellation state.

### 7.5 Transparency

Publish financial information only when reconciled and approved. Show
reporting period, total received, programme allocation, administration
expenditure, refunds, methodology and relevant financial statements. Do
not publish invented figures.

## 8. AJF e-commerce store

### 8.1 Product categories

Potential categories include apparel, accessories, drinkware,
stationery, pet accessories and gift bundles. Only list products AJF has
approved and can fulfil.

### 8.2 Product data

Each product supports name, slug, description, category, images, status,
variants, SKU, size/colour options, price in minor units, currency,
stock, shipping weight/dimensions if needed, and SEO metadata.

### 8.3 Cart and checkout

-   Add, remove and update quantities.
-   Support product variants.
-   Revalidate price and stock on the server.
-   Never trust browser-supplied prices or totals.
-   Display shipping and applicable taxes clearly.
-   Prevent checkout with unavailable stock.
-   Collect only information needed for fulfilment.

### 8.4 Order lifecycle

`cart → checkout → pending_payment → paid → processing → shipped → completed`

Other states may include `cancelled`, `payment_failed` and `refunded`.

### 8.5 Inventory

-   Use atomic stock updates.
-   Prevent overselling during concurrent checkouts.
-   Define stock reservation expiry.
-   Release reservations on failed or expired payments.
-   Record adjustments and responsible administrator.
-   Maintain inventory movement history.

### 8.6 Order snapshots

Preserve product name, SKU, variant, quantity, unit price and currency
at purchase time. Later catalogue edits must not rewrite historical
order items.

## 9. User accounts and roles

### 9.1 Member capabilities

Members may manage their profile, submit petitions, view their own
petition status, sign published petitions, view signature history, view
their own orders, and access donation history when enabled.

### 9.2 Roles

  Role              Permissions
  ----------------- ------------------------------------------
  Super Admin       Full platform administration
  Moderator         Petition review and community moderation
  Finance Manager   Donation and financial reporting
  Store Manager     Products, inventory and orders
  Content Editor    Public content and articles
  Member            Standard account functions

Users must not assign or elevate their own roles. Role changes require
trusted server-side administration and an audit record. Apply least
privilege and enforce access in both server logic and database RLS.

## 10. Animal welfare reporting --- planned module

Possible fields: animal type, incident category, date/time, location
with precision controls, description, optional evidence, reporter
contact and consent.

Reports are private by default. Restrict access to authorised staff.
Validate uploads for type, size and safety. Do not encourage
confrontation or unsafe intervention. Explain that the portal is not an
emergency response service and provide appropriate guidance to contact
relevant authorities. Define retention and deletion procedures.

## 11. Administration dashboard

### Overview

Show pending petition reviews, published and closed petitions, verified
signatures, orders requiring processing, low-stock products, donation
activity only when enabled, and recent admin actions. Do not seed
production dashboards with fake metrics.

### Capabilities

-   **Petitions:** review, approve, reject, request edits, close,
    publish updates, review abuse reports, export authorised data.
-   **Donations:** inspect reconciled transactions, failures and
    refunds; manage campaigns; export authorised reports.
-   **Store:** manage products, variants, stock, orders, fulfilment,
    returns and refunds.
-   **Users:** search accounts, suspend where justified, assign roles
    through controlled workflows.
-   **Content:** manage pages, articles, media, navigation and
    revisions.
-   **Audit:** record actor, action, target, timestamp and safe
    metadata.

Restrict audit access and avoid unnecessary personal data in audit
payloads.

## 12. Technical architecture

### 12.1 Technology stack

  -----------------------------------------------------------------------
  Layer                   Technology              Responsibility
  ----------------------- ----------------------- -----------------------
  Frontend                Next.js App Router      Pages and layouts

  Language                TypeScript              Type safety

  UI                      Tailwind CSS            Styling

  Components              React components        Reusable interface

  Backend                 Next.js Route Handlers  Server-side logic
                          / Server Actions        

  Database                Supabase PostgreSQL     Persistent data

  Authentication          Supabase Auth           Identity and sessions

  Storage                 Supabase Storage        Media and uploads

  Payments                PayPal REST APIs        Checkout and
                                                  subscriptions

  Email                   Transactional email     Verification and
                          provider                notifications

  Hosting                 Vercel                  Deployment and CDN

  Source control          GitHub                  Versioning
  -----------------------------------------------------------------------

### 12.2 Architecture pattern

Use a modular monolith for the MVP. Separate feature logic while
deploying one Next.js application. Do not introduce microservices
without a demonstrated need.

Layers: 1. Presentation: pages, layouts and UI. 2. Application: route
handlers, server actions, validation and orchestration. 3.
Domain/features: petitions, donations, commerce, content and accounts.
4. Infrastructure: Supabase, PayPal, email, storage and logging.

### 12.3 Suggested project structure

``` text
ajf-platform/
├── AGENTS.md
├── README.md
├── docs/
│   ├── product-specification.md
│   ├── implementation-plan.md
│   ├── database-design.md
│   ├── security-and-privacy.md
│   └── deployment.md
├── public/
│   ├── images/
│   ├── logo/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   ├── (auth)/
│   │   ├── account/
│   │   ├── admin/
│   │   └── api/
│   ├── components/
│   │   ├── ui/
│   │   ├── navigation/
│   │   ├── petitions/
│   │   ├── donations/
│   │   ├── store/
│   │   └── admin/
│   ├── features/
│   │   ├── auth/
│   │   ├── petitions/
│   │   ├── donations/
│   │   ├── ecommerce/
│   │   ├── content/
│   │   └── animal-reports/
│   ├── lib/
│   │   ├── supabase/
│   │   ├── paypal/
│   │   ├── email/
│   │   ├── security/
│   │   └── validation/
│   ├── services/
│   ├── types/
│   └── utils/
├── supabase/
│   ├── migrations/
│   └── seed/
├── tests/
└── package.json
```

Adapt the existing starter rather than moving files without a reason.

## 13. Database design

### 13.1 Core tables

  Table                      Purpose
  -------------------------- -------------------------------
  `profiles`                 User profile and preferences
  `user_roles`               Role assignments
  `petitions`                Petition campaigns, kind, and decision-maker
  `petition_signatures`      Signatures and verification
  `petition_updates`         Campaign updates
  `petition_reports`         Abuse/content reports
  `donation_campaigns`       Fundraising definitions
  `donations`                Donation records
  `products`                 Product catalogue
  `product_variants`         SKU, options, price and stock
  `product_categories`       Product classification
  `carts` / `cart_items`     Shopping carts
  `orders` / `order_items`   Purchases and snapshots
  `payment_transactions`     Provider payment records
  `payment_webhook_events`   Idempotent webhook processing
  `inventory_movements`      Stock adjustment history
  `addresses`                Shipping addresses
  `articles`                 News and education
  `volunteer_applications`   Volunteer interest
  `animal_reports`           Restricted incident reports
  `audit_logs`               Administrative activity
  `newsletter_subscribers`   Consent-based subscribers

### 13.2 Data conventions

-   UUID primary keys where appropriate.
-   `timestamptz` timestamps.
-   Monetary values as integer minor units with ISO 4217 currency codes.
-   Explicit statuses, constraints, foreign keys and indexes.
-   Minimise sensitive data.
-   Store private uploads in private buckets.
-   Keep provider IDs separate from internal IDs.
-   Preserve immutable order snapshots.
-   Record consent timestamps and notice versions where appropriate.

### 13.3 RLS and database security

Enable RLS on every table exposed to client access.

-   Users access only their own profile and permitted fields.
-   Users cannot grant themselves roles.
-   Public visitors read only published petitions and active products.
-   Creators manage only their own eligible pending petitions.
-   Moderators perform moderation actions.
-   Donors access only their own donation records.
-   Customers access only their own orders.
-   Financial writes are restricted to trusted server-side services.
-   Webhook tables are not writable by ordinary clients.
-   Animal reports are restricted to authorised roles.

The Supabase service-role key must remain in trusted server-side code
and must never be exposed to the browser.

## 14. PayPal integration

### 14.1 Environments

Use separate credentials and configuration for local Sandbox, Vercel
Preview Sandbox, and Production Live. Live credentials are used only
after approval.

### 14.2 Server-side capabilities

-   Obtain and safely cache PayPal OAuth tokens.
-   Create orders on the server.
-   Validate order ownership and amount.
-   Capture payment server-side where applicable.
-   Verify webhook signatures.
-   Process events idempotently.
-   Reconcile provider state with internal records.
-   Support authorised refunds.
-   Handle cancellations, declines, duplicate events, timeouts and
    retries.

### 14.3 Security

-   A browser success redirect never proves payment.
-   Never trust client-supplied final amounts.
-   Verify webhook authenticity before financial state changes.
-   Use unique provider event IDs for deduplication.
-   Store provider identifiers and safe event metadata.
-   Do not log secrets or unnecessary personal/payment data.
-   Document payment state transitions.

### 14.4 Currency and feature flags

MYR is the default currency. Any additional currency must be explicitly
supported and configured. Confirm PayPal account support, settlement,
conversion, and displayed-price rules before enabling it.

Keep donation and live payment functionality disabled by default. A
feature flag does not replace legal or operational approval.

## 15. Security, privacy and compliance

### 15.1 Application security

-   Validate untrusted inputs on the server.
-   Use Supabase's recommended SSR session handling.
-   Protect against XSS, injection, CSRF where relevant, IDOR and public
    endpoint abuse.
-   Rate-limit login, registration, submissions, signatures and contact
    forms.
-   Use secure HTTP headers and an appropriate Content Security Policy.
-   Restrict upload type, size and access.
-   Keep dependencies updated.
-   Use least-privilege credentials.
-   Separate Preview and Production secrets and databases where
    practical.
-   Avoid exposing internal errors to users.

### 15.2 Malaysian privacy considerations

Design for applicable Malaysian personal data protection requirements,
including the Personal Data Protection Act 2010 and amendments/rules in
force at launch. Obtain qualified Malaysian legal advice.

Provide clear privacy notices, purpose-specific consent where required,
data minimisation, access/correction workflows, withdrawal/deletion
handling where applicable, retention and disposal rules, vendor
controls, incident response and transparent handling of international
transfers.

A consent checkbox alone does not establish compliance.

### 15.3 Legal review

Obtain qualified Malaysian review of organisational statements,
fundraising terms, privacy notice, terms of use, petition guidelines,
donation terms, e-commerce terms, refunds, shipping, animal-report
disclaimers, copyright and takedown processes.

## 16. SEO, content and discoverability

Implement unique titles and descriptions, canonical URLs, Open Graph
metadata, sitemap, robots directives, semantic headings, descriptive alt
text, clean URLs, and structured data only where accurate.

Do not expose private account or signer details in metadata. Prevent
indexing of private account and admin pages.

## 17. Accessibility and user experience

Target WCAG 2.2 AA:

-   Keyboard-operable controls.
-   Visible focus states.
-   Semantic HTML and associated labels.
-   Screen-reader announcements for status and validation.
-   Sufficient contrast.
-   Meaningful alt text.
-   Captions/transcripts where relevant.
-   No colour-only communication.
-   Reduced-motion support.
-   Clear errors and recovery guidance.
-   Suitable mobile touch targets.

Test key journeys using keyboard-only navigation and at least one screen
reader.

## 18. Performance and reliability

-   Prefer server components.
-   Use client components only for required interactions.
-   Optimise image formats and sizes.
-   Lazy-load non-critical media.
-   Avoid unnecessary client JavaScript.
-   Index database queries based on observed patterns.
-   Paginate large lists.
-   Cache only public non-sensitive data deliberately.
-   Never publicly cache private account or financial information.
-   Monitor production errors and performance.
-   Establish Supabase backup and recovery procedures.
-   Document recovery responsibilities and objectives.

Set measurable performance budgets and verify them; do not claim
performance without measurement.

## 19. Testing strategy

### Test layers

1.  Unit tests for validation, permissions, calculations and state
    transitions.
2.  Integration tests for database operations and server services.
3.  End-to-end user journey tests.
4.  RLS and access-control tests.
5.  PayPal Sandbox tests.
6.  Accessibility tests.
7.  Responsive browser tests.
8.  Production build and deployment checks.

### Critical scenarios

**Authentication** - Registration, email verification, login, logout and
password reset. - Expired session. - Unauthorised admin access. -
Attempted role escalation.

**Petitions** - Submission enters moderation. - Pending petition is not
public. - Only moderator can publish. - Creator cannot approve own
petition. - Duplicate signature rejected. - Unverified signature
excluded. - Expired token rejected. - Signer email not exposed.

**Donations** - Live collection remains disabled. - Sandbox amount is
calculated server-side. - Forged webhook rejected. - Duplicate webhook
is idempotent. - Failed payment does not complete donation. - Refund
updates state correctly.

**E-commerce** - Price is recalculated server-side. - Insufficient stock
blocks checkout. - Concurrent checkout cannot oversell. - Failed payment
releases reservation as designed. - Customer cannot read another
customer's order. - Historical order snapshot remains unchanged.

**Administration** - Roles have only permitted access. - Role changes
are audited. - Sensitive reports are restricted. - Exports are
authorised and logged.

### Definition of done

A feature is not complete until server validation and authorisation
exist, RLS is tested, loading/empty/error/success states are present,
relevant automated tests pass, lint/typecheck/build pass, documentation
is updated, and unresolved risks are recorded.

## 20. Deployment and environments

### 20.1 Vercel environments

  Environment   Purpose
  ------------- --------------------------------------------
  Local         Developer workstation
  Preview       Pull request and feature branch validation
  Production    Public AJF website

### 20.2 Environment variables

``` dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

PAYPAL_ENVIRONMENT=sandbox
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_WEBHOOK_ID=

DONATIONS_LIVE_ENABLED=false
```

Only values safe for browser exposure may use `NEXT_PUBLIC_`. Confirm
current Supabase key conventions for the selected SDK/project.

### 20.3 Deployment process

1.  Develop locally.
2.  Run lint, type checks, tests and build.
3.  Push a feature branch to GitHub.
4.  Review Vercel Preview.
5.  Apply migrations to the correct environment.
6.  Verify environment variables and auth URLs.
7.  Merge approved changes.
8.  Deploy to Production.
9.  Run smoke tests.
10. Monitor errors and payment webhooks.

Do not run destructive production migrations without a reviewed plan and
backup.

## 21. Development roadmap

### Phase 0 --- Foundation

-   Review starter and `AGENTS.md`.
-   Establish design tokens and public shell.
-   Configure local environment and Supabase.
-   Establish Git workflow and CI.
-   **Exit:** public shell builds, runs locally and deploys to Preview.

### Phase 1 --- Authentication and roles

-   Supabase SSR auth.
-   Registration, email verification, login, logout and password
    recovery.
-   Profile provisioning.
-   Role management.
-   Protected account/admin routes.
-   RLS tests.
-   **Exit:** authentication and access-control tests pass.

### Phase 2 --- Petition engine

-   Submission form and moderation queue.
-   Approve/reject workflow.
-   Public petition pages, following section 6: kind filters,
    decision-maker, asks, copy link, and WhatsApp.
-   Verified signatures.
-   Duplicate prevention and anti-abuse controls.
-   Updates and sharing.
-   **Exit:** complete petition lifecycle works securely.

### Phase 3 --- Donations

-   Donation campaigns.
-   PayPal Sandbox.
-   Webhook verification.
-   Transaction ledger and reconciliation.
-   Receipts and donor history.
-   Legal approval checklist.
-   **Exit:** Sandbox tests pass; live collection remains disabled
    pending approval.

### Phase 4 --- E-commerce

-   Catalogue and variants.
-   Inventory.
-   Cart and checkout.
-   PayPal Sandbox payment.
-   Orders and fulfilment.
-   Shipping and refunds.
-   **Exit:** test purchase and order lifecycle pass.

### Phase 5 --- Administration and content

-   Admin overview.
-   Content management.
-   User management.
-   Financial and commerce reporting.
-   Audit logs.
-   Volunteer and animal-report workflows as scoped.
-   **Exit:** role-specific administration works and is audited.

### Phase 6 --- Launch readiness

-   Legal and policy review.
-   Privacy and security assessment.
-   Accessibility and performance testing.
-   Backup/recovery verification.
-   Production domain and Vercel configuration.
-   Operational support process.
-   **Exit:** technical, legal and operational release gates signed off.

## 22. Cursor IDE working protocol

Cursor is the primary development environment. Keep `AGENTS.md` in the
repository root and use Agent mode for scoped tasks.

### Cursor rules

-   Read `AGENTS.md` before work.
-   Inspect existing code before editing.
-   Do not rewrite the whole app for a small feature.
-   Identify affected routes, components, services, tables and policies.
-   Present a concise plan before broad changes.
-   Implement one complete vertical slice at a time.
-   Use migrations for schema changes.
-   Test allowed and forbidden behaviour.
-   Run lint, type checks, tests and production build.
-   Report exact files changed and commands executed.
-   Never claim tests passed unless run.
-   Do not start the next milestone before review.

### Standard Cursor task prompt

``` text
Read AGENTS.md and relevant project documentation first.

Task: [SPECIFIC FEATURE OR MILESTONE]

Before coding:
1. Inspect the existing implementation.
2. Identify affected routes, components, services, database tables and RLS policies.
3. Identify security, privacy and migration implications.
4. Present a concise implementation plan.

Implementation:
1. Follow the approved architecture and product specification.
2. Preserve existing working functionality.
3. Validate all untrusted inputs server-side.
4. Enforce authorization server-side and in Supabase RLS.
5. Add loading, empty, error and success states.
6. Add tests for expected and forbidden behaviour.
7. Update documentation and environment examples.

Verification:
- Run lint.
- Run TypeScript checks.
- Run relevant tests.
- Run production build.
- Report commands and actual results.

At completion, report:
- Files created and modified.
- Database migrations and application steps.
- Environment variables.
- Tests and results.
- Security considerations.
- Known limitations.
- Recommended next task.

Do not implement unrelated future milestones.
```

### Git workflow

Use sequential feature branches from `main`, merging each completed
milestone after review:

-   `foundation`
-   `authentication`
-   `petition-engine`
-   `donation-engine`
-   `ecommerce`
-   `admin-dashboard`
-   `production-readiness`

Avoid nested branches unless collaboration requires them.

## 23. MVP release acceptance checklist

### Public website

-   [ ] Brand and navigation consistent.
-   [ ] Pages responsive.
-   [ ] About, contact, privacy, terms and community guidelines
    available.
-   [ ] No false organisational, financial or impact claims.
-   [ ] SEO metadata and sitemap configured.

### Authentication

-   [ ] Registration and verification work.
-   [ ] Login, logout and recovery work.
-   [ ] Profiles provisioned safely.
-   [ ] Role escalation prevented.
-   [ ] Account/admin routes protected.

### Petitions

-   [ ] Public submission enters moderation.
-   [ ] Moderators can approve and reject.
-   [ ] Only published petitions are public.
-   [ ] Official and Community petitions can be filtered, and a creator
    cannot approve their own petition.
-   [ ] Signatures are email verified.
-   [ ] Duplicate/unverified signatures excluded.
-   [ ] Signer privacy and withdrawal processes exist.
-   [ ] Share actions offer copy link and WhatsApp.
-   [ ] The page states that a signature is public support, not a court
    filing or a government submission.

### Donations

-   [ ] Donations disabled while legal eligibility is pending.
-   [ ] PayPal Sandbox works.
-   [ ] Webhooks verified and idempotent.
-   [ ] Donation and payment records are separate.
-   [ ] Receipts and reporting tested.
-   [ ] No unsupported tax claims.

### Store

-   [ ] Products and variants manageable.
-   [ ] Prices validated server-side.
-   [ ] Cart and checkout work.
-   [ ] Stock cannot be oversold.
-   [ ] Payment and order states reconcile.
-   [ ] Shipping, refund and return policies published.

### Administration

-   [ ] Role-specific permissions enforced.
-   [ ] Moderation and financial actions audited.
-   [ ] Sensitive reports private.
-   [ ] Exports authorised and logged.

### Production

-   [ ] CI checks pass.
-   [ ] Production build passes.
-   [ ] RLS/security tests pass.
-   [ ] Accessibility review complete.
-   [ ] Legal and privacy review complete.
-   [ ] Backups and recovery verified.
-   [ ] Vercel production configured.
-   [ ] Live payments explicitly approved.

## 24. Final product direction

AJF should be one integrated platform with shared identity, consistent
design, central administration, and clear separation between advocacy,
fundraising and commerce.

Its three strategic engines are:

1.  **Advocacy:** Petitions, campaigns, education and responsible animal
    welfare reporting.
2.  **Funding:** Approved fundraising, donation records and transparent
    financial reporting.
3.  **Commerce:** AJF merchandise, orders, inventory and fulfilment.

The first release should prioritise a reliable public website, secure
user accounts and a complete moderated petition workflow. Donations and
e-commerce should be developed and tested in controlled environments,
then activated only when their legal, financial and operational
prerequisites are satisfied.

**AJF --- Law \| Compassion \| Action**
