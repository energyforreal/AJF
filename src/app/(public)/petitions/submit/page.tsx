import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Submit a petition",
  "Ask Animal Justice Foundation to consider a petition. Submissions are not open yet, and each one will be read before it can be published.",
  "/petitions/submit",
);

export default function SubmitPetitionPage() {
  return (
    <ContentPage
      title="Submit a petition"
      lede="When this opens, your petition will be read before anything is published. The form is not open."
    >
      <Alert tone="info" title="Submissions are closed">
        This page does not collect a title, description, name, or email address.
      </Alert>
      <h2 className="font-serif text-2xl text-forest">What a submission will ask for</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Title and short summary</li>
        <li>A detailed description of the issue and the action requested</li>
        <li>A category, plus optional location and references</li>
        <li>The submitter’s name and email</li>
        <li>Agreement to the community guidelines and privacy notice</li>
      </ul>
      <p>
        The person who writes a petition cannot approve it. Only an authorised moderator
        can publish one. An online signature is a show of support from a person. It is
        not a formal legal filing or an official government submission.
      </p>
    </ContentPage>
  );
}
