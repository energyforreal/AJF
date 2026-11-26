import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Store",
  "The Animal Justice Foundation merchandise catalogue. No products are listed until AJF can fulfil them.",
  "/store",
);

export default function StorePage() {
  return (
    <ClosedModule
      title="Store"
      lede="The catalogue lists only products AJF has approved and can fulfil."
      emptyTitle="No products yet"
    >
      Prices, variants, and stock will be managed by AJF. Nothing on this page can be
      added to a cart.
    </ClosedModule>
  );
}
