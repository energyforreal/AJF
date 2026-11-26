import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Community guidelines",
  "Draft community guidelines that protect animals, the people named in a post, and the people who read it.",
  "/community-guidelines",
);

export default function CommunityGuidelinesPage() {
  return (
    <ContentPage
      title="Community guidelines"
      lede="These draft rules protect animals, the people named in a post, and the people who read it. They will apply to petitions, updates, and reports once those features open."
      draft
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>Describe the issue accurately and say what action you are asking for.</li>
        <li>Keep graphic or distressing evidence out of public pages.</li>
        <li>Do not encourage confrontation or unsafe intervention.</li>
        <li>Do not post another person’s private contact details or home address.</li>
        <li>Treat an online signature as public support, not as a legal filing.</li>
      </ul>
      <p>
        AJF may reject a submission, ask for changes, or close a published petition.
        The person who wrote a petition cannot approve it. Moderation decisions will
        be recorded.
      </p>
    </ContentPage>
  );
}
