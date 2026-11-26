import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Shipping",
  "Draft shipping policy for Animal Justice Foundation. Delivery zones, rates, and the carrier are unconfirmed.",
  "/shipping",
);

export default function ShippingPage() {
  return (
    <ContentPage
      title="Shipping"
      lede="The store cannot ship orders because no carrier, zones, or rates have been confirmed."
      draft
    >
      <p>
        A final policy will name the delivery area, how shipping is calculated, and
        what AJF commits to after payment. Until that policy exists, checkout stays
        closed and the catalogue stays empty.
      </p>
    </ContentPage>
  );
}
