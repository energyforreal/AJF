import { ContentPage } from "@/components/content-page";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Refunds",
  "Draft refund policy for Animal Justice Foundation. No products or donations are being accepted.",
  "/refunds",
);

export default function RefundsPage() {
  return (
    <ContentPage
      title="Refunds"
      lede="No orders or donations are being taken, so there is nothing to refund through this website."
      draft
    >
      <p>
        Before any product is sold, AJF will publish who may request a return, the
        time limit, the condition of the goods, and how a refund is paid. Before any
        donation is accepted, AJF will publish how a donor can ask about a refund and
        how that request is recorded.
      </p>
      <p>
        Those rules are unconfirmed. This draft does not promise a refund period or a
        payment method.
      </p>
    </ContentPage>
  );
}
