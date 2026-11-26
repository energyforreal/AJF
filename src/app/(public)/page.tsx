import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import { donationsLiveEnabled } from "@/lib/features";
import { pageMetadata, siteName } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata(
    siteName,
    "Animal Justice Foundation is a Malaysia-oriented animal welfare organisation in formation. It exists so people can act carefully for animals.",
    "/",
  ),
  title: { absolute: siteName },
};

const actions = [
  {
    title: "Report animal cruelty",
    body: "If an animal is in immediate danger, contact the authorities. AJF is not an emergency service.",
    href: "/report-animal-cruelty",
    label: "Read what to do",
  },
  {
    title: "Explore petitions",
    body: "A petition appears only after a person at AJF has read it.",
    href: "/petitions",
    label: "View the petition directory",
  },
  {
    title: "Learn about AJF",
    body: "The organisation is in formation and does not claim registration or tax status.",
    href: "/about",
    label: "Read about AJF",
  },
];

const values = [
  {
    title: "Animal welfare first",
    body: "Every decision starts with the animal, and with the person who feeds, treats, or speaks for that animal.",
  },
  {
    title: "Trust and accuracy",
    body: "You should be able to check a public claim, a signature count, or a money figure. AJF publishes them only when they can be verified.",
  },
  {
    title: "Privacy by design",
    body: "If you share a name or an email, AJF keeps only what that purpose needs.",
  },
  {
    title: "Responsible advocacy",
    body: "A petition is read before it is published. Your signature is your public support. It is not a court filing or a government submission.",
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
              When an animal is in trouble, people should know what they can do.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-sage">
              Neighbours, carers, and witnesses already see animals that need help.
              Animal Justice Foundation is being established to publish clear information,
              host petitions only after a person has reviewed them, and report money only
              when the records are real.
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
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/photos/hero-pug.jpg"
              alt="A black pug in a denim jacket looks toward the camera."
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section
        id="act"
        title="What you can do now"
        lede="These are steps you can take on this site today. Campaigns, figures, and guides appear only when they are real."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {actions.map((action) => (
            <Card key={action.href}>
              <h3 className="font-serif text-xl text-forest">{action.title}</h3>
              <p className="mt-2 text-ink">{action.body}</p>
              <div className="mt-4">
                <Button href={action.href} variant="secondary">
                  {action.label}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="campaigns"
        title="Featured campaigns"
        lede="A campaign is a public appeal you can read and stand behind. None are published yet."
      >
        <EmptyState title="No campaigns are public yet">
          When one is published, it will name a real situation and a real ask. This
          section will not show placeholder campaigns.
        </EmptyState>
      </Section>

      <Section
        id="petitions"
        title="Published petitions"
        lede="Each signature is a person. Counts on this site include verified signatures only."
        tone="sage"
      >
        <EmptyState title="No petitions are public yet">
          A petition appears here after someone at AJF has read it. Pending and rejected
          petitions stay off the public site.
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
        lede="People who give, and the animals that money is meant to help, deserve figures that have been checked."
        tone="sage"
      >
        <EmptyState title="No figures to share yet">
          Statistics, testimonials, and financial totals appear only when they come from
          approved records.
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
        lede="A purchase is one way a person can stand with this work. Merchandise is listed only when AJF can fulfil the order."
      >
        <EmptyState title="Nothing is for sale yet">
          Products, prices, and shipping rates have not been published, so checkout is
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
        lede="Stories and guides are for people who want to understand an animal’s situation, and what they can do."
        tone="sage"
      >
        <EmptyState title="No stories yet">
          News and animal-welfare resources appear here when an editor has prepared them
          for you to read.
        </EmptyState>
      </Section>

      <Section id="volunteer" title="Volunteer">
        <Card>
          <h3 className="font-serif text-xl text-forest">There will be a place for your time</h3>
          <p className="mt-2 text-ink">
            People already give time to animals in their own streets and homes. Volunteer
            applications stay closed while roles and safeguarding steps are defined. The
            volunteer page does not collect your name or contact details.
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
