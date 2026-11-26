import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Submit a petition",
  "Petition submission for Animal Justice Foundation is not open yet. Public submissions will enter moderation before publication.",
  "/petitions/submit",
);

export default function SubmitPetitionPage() {
  return (
    <ContentPage
      title="Submit a petition"
      lede="Public submissions will enter review before anything is published. This form is not open."
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
        A creator will not be able to approve their own petition. Only an authorised
        moderator can publish one. An online signature is a show of support. It is not
        a formal legal filing or an official government submission.
      </p>
    </ContentPage>
  );
}
