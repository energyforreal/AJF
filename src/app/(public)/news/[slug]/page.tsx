import type { Metadata } from "next";
import { ClosedModule } from "@/components/closed-module";

export const metadata: Metadata = {
  title: "Article",
  description: "This article address is not a published Animal Justice Foundation story.",
  robots: { index: false, follow: false },
};

export default function ArticlePage() {
  return (
    <ClosedModule
      title="Article unavailable"
      lede="There is no published article at this address."
      emptyTitle="Nothing to read"
    >
      Unpublished drafts stay off the public site.
    </ClosedModule>
  );
}
