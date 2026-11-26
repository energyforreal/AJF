import type { Metadata } from "next";
import { ClosedModule } from "@/components/closed-module";

export const metadata: Metadata = {
  title: "Petition",
  description: "This address is not a published Animal Justice Foundation petition.",
  robots: { index: false, follow: false },
};

export default function PetitionDetailPage() {
  return (
    <ClosedModule
      title="Petition unavailable"
      lede="There is no published petition at this address."
      emptyTitle="Nothing to sign"
    >
      A petition that has not been published stays private, including the people who
      might have signed it. This page does not show signer details or a signature count.
    </ClosedModule>
  );
}
