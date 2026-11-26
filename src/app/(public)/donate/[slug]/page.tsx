import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { donationsLiveEnabled } from "@/lib/features";

export const metadata: Metadata = {
  title: "Donation campaign",
  description: "This fundraising address is not open for donations.",
  robots: { index: false, follow: false },
};

export default function DonationCampaignPage() {
  const donationsOpen = donationsLiveEnabled();

  return (
    <ContentPage
      title="Campaign unavailable"
      lede="There is no open fundraising campaign at this address."
    >
      <Alert tone="warning" title={donationsOpen ? "No payment form" : "Fundraising is closed"}>
        This page does not show amounts or a PayPal button, and it does not store donor
        details.
      </Alert>
    </ContentPage>
  );
}
