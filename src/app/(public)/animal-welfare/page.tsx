import { ContentPage } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Animal welfare",
  "Practical guidance from Animal Justice Foundation for people who want to help an animal carefully. Guides will be published when they are ready.",
  "/animal-welfare",
);

const topics = [
  {
    title: "An animal being harmed",
    body: "If you have seen an animal in immediate danger, contact the authorities. AJF cannot dispatch a rescue. A fuller guide is not published yet.",
    href: "/report-animal-cruelty",
    label: "Read what to do",
  },
  {
    title: "An animal that needs everyday care",
    body: "Neighbours and carers already look after animals in streets and homes. This page is not veterinary advice, and a fuller guide is not published yet.",
    href: "/about",
    label: "Learn about AJF",
  },
  {
    title: "A campaign or petition you want to understand",
    body: "A petition is public support after someone at AJF has read it. It is not a court filing. A fuller guide is not published yet.",
    href: "/petitions",
    label: "View the petition directory",
  },
];

export default function AnimalWelfarePage() {
  return (
    <ContentPage
      title="Animal welfare"
      lede="When you are unsure what an animal needs, a clear guide should help you choose a careful next step. AJF will publish practical, sourced information about animal welfare in Malaysia."
    >
      <p>
        These pages will explain an issue in plain language and point you toward a
        responsible next step. Graphic evidence stays out of prominent public areas,
        with a warning before any sensitive material.
      </p>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <Card key={topic.href}>
            <h2 className="font-serif text-2xl text-forest">{topic.title}</h2>
            <p className="mt-2">{topic.body}</p>
            <div className="mt-4">
              <Button href={topic.href} variant="secondary">
                {topic.label}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </ContentPage>
  );
}
