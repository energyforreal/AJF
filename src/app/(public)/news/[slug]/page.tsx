import type { Metadata } from "next";
import { ClosedModule } from "@/components/closed-module";

export const metadata: Metadata = {
  title: "Article",
  description: "This address is not a published Animal Justice Foundation story.",
  robots: { index: false, follow: false },
};

export default function ArticlePage() {
  return (
    <ClosedModule
      title="Article unavailable"
      lede="There is no story here yet for you to read."
      emptyTitle="Nothing to read"
    >
      Unpublished drafts stay off the public site.
    </ClosedModule>
  );
}
