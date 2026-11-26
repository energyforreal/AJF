import { ContentPage } from "@/components/content-page";
import { EmptyState } from "@/components/ui/empty-state";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Impact",
  "Verified impact and financial transparency for Animal Justice Foundation. No figures are published yet.",
  "/impact",
);

export default function ImpactPage() {
  return (
    <ContentPage
      title="Impact and transparency"
      lede="AJF will publish financial information only when it is reconciled and approved."
    >
      <p>
        A future report will name the period, the total received, programme allocation,
        administration expenditure, refunds, the method used, and any relevant
        statements. Those fields stay empty until real records exist.
      </p>
      <EmptyState title="No approved figures">
        This page does not show totals, charts, or testimonials.
      </EmptyState>
    </ContentPage>
  );
}
