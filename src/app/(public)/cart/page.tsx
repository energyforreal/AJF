import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Cart",
  "Your Animal Justice Foundation shopping cart. The store has no products yet.",
  "/cart",
);

export default function CartPage() {
  return (
    <ClosedModule
      title="Cart"
      lede="The cart is empty because the catalogue has no products."
      emptyTitle="No items"
    >
      Prices are calculated on the server when checkout exists. This page does not
      accept quantities or payment details.
    </ClosedModule>
  );
}
