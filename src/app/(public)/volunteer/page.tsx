import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Volunteer",
  "Volunteer interest for Animal Justice Foundation. Applications are not open yet.",
  "/volunteer",
);

export default function VolunteerPage() {
  return (
    <ContentPage
      title="Volunteer"
      lede="AJF will invite volunteers when roles, supervision, and safeguarding steps are defined."
    >
      <Alert tone="info" title="Applications are closed">
        This page does not collect your name, email, or availability.
      </Alert>
      <p>
        Future roles may include research, events, content review, and practical
        support. AJF will describe each role, the time involved, and who to contact
        before asking anyone to apply.
      </p>
    </ContentPage>
  );
}
