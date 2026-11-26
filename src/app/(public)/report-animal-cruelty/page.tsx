import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Report animal cruelty",
  "If an animal is in immediate danger, contact the authorities. Animal Justice Foundation does not provide an emergency response.",
  "/report-animal-cruelty",
);

export default function ReportAnimalCrueltyPage() {
  return (
    <ContentPage
      title="Report animal cruelty"
      lede="If you have seen an animal in immediate danger, that animal needs the police or the local authority responsible for animal welfare. Contact them."
    >
      <Alert tone="danger" title="This is not an emergency service">
        AJF cannot dispatch a rescue and does not replace the Royal Malaysia Police or
        the Department of Veterinary Services. Use their published channels for urgent
        help. AJF has not listed phone numbers here.
      </Alert>
      <p>
        If the danger is not immediate, a private form may later let you pass
        information to a person at AJF who can review it. That form is not open. This
        page does not collect a location, a description, photographs, or your contact
        details.
      </p>
      <p>
        Your instinct may be to step in. Do not confront someone you believe is harming
        an animal. Leave intervention to the authorities that have the power to act.
      </p>
    </ContentPage>
  );
}
