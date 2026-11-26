import { ContentPage } from "@/components/content-page";
import { Card } from "@/components/ui/card";
import { formationNotice, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Mission, vision, values, and governance status of Animal Justice Foundation, an organisation in formation in Malaysia.",
  "/about",
);

const principles = [
  {
    title: "Mission",
    body: "Build a trusted public platform that helps people in Malaysia act for animals with accurate information and accountable process.",
  },
  {
    title: "Vision",
    body: "A society where concern for animals becomes informed, lawful, and practical action.",
  },
  {
    title: "Brand line",
    body: "Law, compassion, and action guide how AJF speaks and what it publishes.",
  },
];

export default function AboutPage() {
  return (
    <ContentPage
      title="About AJF"
      lede="Animal Justice Foundation is being established as a Malaysia-oriented animal welfare and advocacy organisation."
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
        The public site, member accounts, and a moderated petition workflow come first.
        Fundraising and the merchandise store stay closed until their legal, financial,
        and operational requirements are met.
      </p>
    </ContentPage>
  );
}
