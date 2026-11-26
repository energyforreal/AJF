import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Campaigns",
  "Approved Animal Justice Foundation campaigns will be listed here. None are published yet.",
  "/campaigns",
);

export default function CampaignsPage() {
  return (
    <ClosedModule
      title="Campaigns"
      lede="Campaigns appear in this directory after AJF approves them for publication."
      emptyTitle="No campaigns published"
    >
      Pending work stays off this page. AJF will not display invented campaign goals or
      results.
    </ClosedModule>
  );
}
