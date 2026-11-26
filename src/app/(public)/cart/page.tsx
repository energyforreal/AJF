import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Cart",
  "Your Animal Justice Foundation shopping cart. There is nothing to buy yet.",
  "/cart",
);

export default function CartPage() {
  return (
    <ClosedModule
      title="Cart"
      lede="Your cart is empty. There is nothing to buy yet, because the catalogue has no products."
      emptyTitle="No items"
    >
      When checkout exists, prices will be calculated on the server. This page does not
      accept quantities or payment details.
    </ClosedModule>
  );
}
