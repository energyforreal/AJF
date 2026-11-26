import { ContentPage } from "@/components/content-page";
import { EmptyState } from "@/components/ui/empty-state";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Impact",
  "How Animal Justice Foundation will account to the people who support it, and to the animals that this work is meant to help. No figures are published yet.",
  "/impact",
);

export default function ImpactPage() {
  return (
    <ContentPage
      title="Impact and transparency"
      lede="Trust is owed to the people who will give money, and to the animals that money is meant to help. AJF publishes financial information only when it is reconciled and approved."
    >
      <p>
        When there is something real to report, the page will name the period, the total
        received, programme allocation, administration expenditure, refunds, the method
        used, and any relevant statements. Those fields stay empty until real records
        exist.
      </p>
      <EmptyState title="Nothing to count yet">
        Totals, charts, and testimonials stay off this page until they come from
        approved records.
      </EmptyState>
    </ContentPage>
  );
}
