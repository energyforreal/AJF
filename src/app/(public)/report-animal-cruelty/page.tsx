import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Report animal cruelty",
  "Animal Justice Foundation does not provide an emergency response. Contact the relevant authorities if an animal is in immediate danger.",
  "/report-animal-cruelty",
);

export default function ReportAnimalCrueltyPage() {
  return (
    <ContentPage
      title="Report animal cruelty"
      lede="If an animal is in immediate danger, contact the police or the local authority responsible for animal welfare."
    >
      <Alert tone="danger" title="This is not an emergency service">
        AJF cannot dispatch a rescue and does not replace the Royal Malaysia Police or
        the Department of Veterinary Services. Use their published channels for urgent
        help. AJF has not listed phone numbers here.
      </Alert>
      <p>
        A private reporting form may be added later for non-emergency information that
        authorised staff can review. That form is not open. This page does not collect
        a location, a description, photographs, or your contact details.
      </p>
      <p>
        Do not confront someone you believe is harming an animal. Leave intervention
        to the authorities that have the power to act.
      </p>
    </ContentPage>
  );
}
