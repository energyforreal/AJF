import type { Metadata } from "next";
import { ClosedModule } from "@/components/closed-module";

export const metadata: Metadata = {
  title: "Product",
  description: "This address is not a published product in the Animal Justice Foundation catalogue.",
  robots: { index: false, follow: false },
};

export default function ProductPage() {
  return (
    <ClosedModule
      title="Product unavailable"
      lede="There is no product at this address."
      emptyTitle="Nothing to purchase"
    >
      The catalogue is empty, so this page does not show a price or accept an order.
    </ClosedModule>
  );
}
