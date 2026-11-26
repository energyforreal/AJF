import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Store",
  "Merchandise from Animal Justice Foundation, for people who want to support the work. No products are listed until AJF can fulfil them.",
  "/store",
);

export default function StorePage() {
  return (
    <ClosedModule
      title="Store"
      lede="Something you buy can be a quiet way to stand with animals. The catalogue lists only products AJF has approved and can fulfil."
      emptyTitle="Nothing is for sale yet"
    >
      Prices, variants, and stock will be set by AJF. You cannot add anything on this
      page to a cart.
    </ClosedModule>
  );
}
