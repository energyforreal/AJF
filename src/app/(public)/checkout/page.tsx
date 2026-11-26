import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Checkout",
  "Checkout is how a person’s purchase would be completed. It is unavailable while the catalogue is empty.",
  "/checkout",
);

export default function CheckoutPage() {
  return (
    <ClosedModule
      title="Checkout"
      lede="Checkout is how a person’s purchase would be completed. It opens when AJF has products it can fulfil and a confirmed shipping arrangement."
      emptyTitle="Checkout is unavailable"
    >
      Shipping zones, rates, and the payment provider for goods are still unconfirmed.
      This page does not collect a delivery address or card details.
    </ClosedModule>
  );
}
