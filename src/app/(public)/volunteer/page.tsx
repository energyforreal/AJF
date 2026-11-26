import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Volunteer",
  "People who want to give time to Animal Justice Foundation. Applications are not open yet.",
  "/volunteer",
);

export default function VolunteerPage() {
  return (
    <ContentPage
      title="Volunteer"
      lede="Many people already give time to animals near them. AJF will invite volunteers when roles, supervision, and safeguarding steps are defined."
    >
      <Alert tone="info" title="Applications are closed">
        Thank you for being willing. This page does not collect your name, email, or
        availability.
      </Alert>
      <p>
        Future roles may include research, events, content review, and practical support
        beside animals and the people who care for them. AJF will describe each role,
        the time involved, and who to contact before asking anyone to apply.
      </p>
    </ContentPage>
  );
}
