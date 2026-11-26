import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { donationsLiveEnabled } from "@/lib/features";
import { pageMetadata, siteName } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata(
    siteName,
    "Animal Justice Foundation is a Malaysia-oriented animal welfare organisation in formation. Law, compassion, and action.",
    "/",
  ),
  title: { absolute: siteName },
};

const values = [
  {
    title: "Animal welfare first",
    body: "Decisions start from the welfare of animals and the people who care for them.",
  },
  {
    title: "Trust and accuracy",
    body: "Public claims, signature counts, and financial figures are published only when they can be verified.",
  },
  {
    title: "Privacy by design",
    body: "The platform collects the minimum personal data needed for each purpose.",
  },
  {
    title: "Responsible advocacy",
    body: "Petitions are moderated before publication. Online signatures are public support, not a court filing or a government submission.",
  },
];

export default function HomePage() {
  const donationsOpen = donationsLiveEnabled();

  return (
    <>
      <section className="bg-forest text-white" aria-labelledby="hero-title">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-sage">
              Malaysia · Organisation in formation
            </p>
            <h1 id="hero-title" className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Concern for animals, turned into responsible action.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-sage">
              Animal Justice Foundation is being established to share clear information,
              host moderated public petitions, and, when legally ready, report its work
              with financial transparency.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/petitions">Explore petitions</Button>
              <Button href="/about" variant="secondary">
                Learn about AJF
              </Button>
              <Button href="/store" variant="secondary">
                Visit the store
              </Button>
              {donationsOpen ? <Button href="/donate">Donate</Button> : null}
            </div>
            <p className="mt-6 max-w-xl text-sm text-sage">
              Licensed animal photography will be added when artwork is approved. This
              hero uses the AJF colour system.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="relative min-h-56 overflow-hidden rounded-2xl bg-primary/40 ring-1 ring-white/20"
          >
            <div className="absolute inset-8 rounded-full border border-cream/50" />
            <div className="absolute inset-16 rounded-full bg-leaf/50" />
          </div>
        </div>
      </section>

      <Section
        id="campaigns"
        title="Featured campaigns"
        lede="Approved campaigns will be listed here. None are published yet."
      >
        <EmptyState title="No approved campaigns">
          Campaign pages open after AJF reviews and publishes them. This section will
          not show placeholder campaigns.
        </EmptyState>
      </Section>

      <Section
        id="petitions"
        title="Published petitions"
        lede="Signature counts on this site will include verified signatures only."
        tone="sage"
      >
        <EmptyState title="No published petitions">
          A petition appears here after moderation. Pending and rejected petitions stay
          off the public site.
        </EmptyState>
        <div className="mt-6">
          <Button href="/petitions" variant="secondary">
            View the petition directory
          </Button>
        </div>
      </Section>

      <Section id="mission" title="Mission and values">
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-serif text-xl text-forest">{value.title}</h3>
              <p className="mt-2 text-ink">{value.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        title="Verified impact"
        lede="Impact figures are published only after they are reconciled and approved."
        tone="sage"
      >
        <EmptyState title="No impact figures yet">
          AJF will not display statistics, testimonials, or financial totals until they
          come from approved records.
        </EmptyState>
        <div className="mt-6">
          <Button href="/impact" variant="secondary">
            Read about transparency
          </Button>
        </div>
      </Section>

      <Section
        id="store"
        title="AJF Store"
        lede="Merchandise will be listed only when AJF can fulfil the order."
      >
        <EmptyState title="The catalogue is empty">
          Products, prices, and shipping rates have not been published. Checkout is
          unavailable.
        </EmptyState>
        <div className="mt-6">
          <Button href="/store" variant="secondary">
            Visit the store
          </Button>
        </div>
      </Section>

      <Section
        id="news"
        title="News and resources"
        lede="Articles and educational resources will be added by AJF editors."
        tone="sage"
      >
        <EmptyState title="No articles yet">
          News and animal-welfare resources will appear here when they are ready to
          publish.
        </EmptyState>
      </Section>

      <Section id="volunteer" title="Volunteer">
        <Card>
          <h3 className="font-serif text-xl text-forest">Offer your time later</h3>
          <p className="mt-2 text-ink">
            Volunteer applications are closed while roles and safeguarding steps are
            defined. The interest form does not collect personal details yet.
          </p>
          <div className="mt-4">
            <Button href="/volunteer" variant="secondary">
              Read about volunteering
            </Button>
          </div>
        </Card>
      </Section>

      <Section id="newsletter" title="Newsletter" tone="sage">
        <Card>
          <NewsletterSignup />
        </Card>
      </Section>
    </>
  );
}
