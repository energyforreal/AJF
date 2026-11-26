import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Campaigns",
  "Public appeals from Animal Justice Foundation that you can read and stand behind. None are published yet.",
  "/campaigns",
);

export default function CampaignsPage() {
  return (
    <ClosedModule
      title="Campaigns"
      lede="A campaign is a public appeal for animals that you can read and stand behind. It appears here only after AJF has approved it."
      emptyTitle="No campaigns are public yet"
    >
      Work still in preparation stays off this page. AJF does not invent campaign goals
      or results.
    </ClosedModule>
  );
}
