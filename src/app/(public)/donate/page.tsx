import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { EmptyState } from "@/components/ui/empty-state";
import { donationsLiveEnabled } from "@/lib/features";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Donate",
  "Fundraising for Animal Justice Foundation is closed while legal status, banking, and PayPal eligibility are confirmed.",
  "/donate",
);

export default function DonatePage() {
  const donationsOpen = donationsLiveEnabled();

  return (
    <ContentPage
      title="Donate"
      lede="AJF will collect donations only after its legal and payment arrangements are confirmed."
    >
      {donationsOpen ? (
        <Alert tone="warning" title="Payment setup is still closed">
          The fundraising flag is on, and this release still has no payment form. A
          browser visit does not record a donation.
        </Alert>
      ) : (
        <Alert tone="warning" title="Fundraising is closed">
          Live donation collection stays off while AJF confirms its legal structure,
          banking, PayPal eligibility, and tax treatment. AJF does not claim that gifts
          are tax deductible.
        </Alert>
      )}
      <EmptyState title="No open campaigns">
        Suggested amounts, recurring gifts, and PayPal checkout are not shown. Donor
        records are not collected on this page.
      </EmptyState>
    </ContentPage>
  );
}
