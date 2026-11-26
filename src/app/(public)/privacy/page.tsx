import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy",
  "Draft privacy notice for Animal Justice Foundation. Personal data is not collected on this public shell.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy notice"
      lede="This draft describes the public website as it works today. A full notice will be published before AJF collects personal data."
      draft
    >
      <h2 className="font-serif text-2xl text-forest">Who is responsible</h2>
      <p>
        The data controller’s legal name, registration details, and contact channel are
        pending. They will be added here before accounts, petitions, donations, or
        orders begin.
      </p>
      <h2 className="font-serif text-2xl text-forest">What this site does today</h2>
      <p>
        These pages are informational. The newsletter field is disabled. Contact,
        petition, volunteer, cruelty-report, and checkout forms do not store
        submissions. There is no account system in this release.
      </p>
      <h2 className="font-serif text-2xl text-forest">What may be collected later</h2>
      <p>
        Future features may need an email address, a display name, petition content,
        donation records, or delivery details. Each purpose will be described in an
        updated notice, with the retention period once it is decided. AJF intends to
        collect only what that purpose requires.
      </p>
      <h2 className="font-serif text-2xl text-forest">Your rights</h2>
      <p>
        Malaysian personal data protection requirements, including the Personal Data
        Protection Act 2010 and the rules in force at launch, will shape the final
        notice. Access, correction, and withdrawal routes will be described when a
        contact channel exists. A checkbox alone will not be treated as compliance.
      </p>
    </ContentPage>
  );
}
