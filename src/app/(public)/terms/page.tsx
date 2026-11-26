import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Terms of use",
  "Draft terms of use for the Animal Justice Foundation website. These terms are not yet a final agreement.",
  "/terms",
);

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of use"
      lede="These draft terms describe a public information site for an organisation in formation."
      draft
    >
      <p>
        The website provides information about Animal Justice Foundation. It does not,
        by itself, create membership, a donation, or a contract of sale.
      </p>
      <p>
        Petitions published later will be expressions of public support. Signing one
        will not be a court filing, a police report, or an official submission to a
        government body.
      </p>
      <p>
        AJF may refuse, edit, or remove material that breaks the community guidelines
        once those guidelines are adopted. Accounts, payments, and orders will have
        their own terms before they open.
      </p>
    </ContentPage>
  );
}
