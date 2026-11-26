import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { EmptyState } from "@/components/ui/empty-state";
import { donationsLiveEnabled } from "@/lib/features";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Donate",
  "A gift to Animal Justice Foundation is a person’s support for animals. Fundraising is closed while legal status, banking, and PayPal eligibility are confirmed.",
  "/donate",
);

export default function DonatePage() {
  const donationsOpen = donationsLiveEnabled();

  return (
    <ContentPage
      title="Donate"
      lede="Giving is one way a person stands with animals. AJF will collect donations only after its legal and payment arrangements are confirmed."
    >
      {donationsOpen ? (
        <Alert tone="warning" title="Payment setup is still closed">
          The fundraising flag is on, and this release still has no payment form. A
          browser visit does not record a donation.
        </Alert>
      ) : (
        <Alert tone="warning" title="Fundraising is closed">
          Thank you for wanting to give. Live donation collection stays off while AJF
          confirms its legal structure, banking, PayPal eligibility, and tax treatment.
          AJF does not claim that gifts are tax deductible.
        </Alert>
      )}
      <EmptyState title="No appeal is open">
        Suggested amounts, recurring gifts, and PayPal checkout are not shown. This page
        does not collect a donor’s details.
      </EmptyState>
    </ContentPage>
  );
}
