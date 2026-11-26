import { ContentPage } from "@/components/content-page";
import { Card } from "@/components/ui/card";
import { formationNotice, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Animal Justice Foundation is for people and animals in Malaysia. The organisation is still in formation.",
  "/about",
);

const principles = [
  {
    title: "Mission",
    body: "Help people in Malaysia act for the animals they live and work beside, with accurate information and a process they can account for.",
  },
  {
    title: "Vision",
    body: "A Malaysia where concern for an animal becomes informed, lawful, and practical help.",
  },
  {
    title: "Brand line",
    body: "Law, compassion, and action are how AJF speaks to people, and how it decides what to publish.",
  },
];

export default function AboutPage() {
  return (
    <ContentPage
      title="About AJF"
      lede="Animal Justice Foundation is being established for people and animals who share streets, homes, and work in Malaysia."
    >
      <p>{formationNotice}</p>
      <p>
        AJF does not claim charitable registration, tax deductibility, or any approval
        that has not been obtained. Named office holders will be published when they
        are confirmed.
      </p>
      <div className="grid gap-4">
        {principles.map((item) => (
          <Card key={item.title}>
            <h2 className="font-serif text-2xl text-forest">{item.title}</h2>
            <p className="mt-2">{item.body}</p>
          </Card>
        ))}
      </div>
      <h2 className="font-serif text-2xl text-forest">What this website will hold</h2>
      <p>
        First comes a public site, member accounts, and petitions that a person reviews
        before they are published. Fundraising and the store stay closed until the
        legal, financial, and operational requirements are met.
      </p>
    </ContentPage>
  );
}
