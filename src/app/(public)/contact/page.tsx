import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Contact Animal Justice Foundation. Official contact details are pending and this page does not store enquiries.",
  "/contact",
);

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      lede="Official email, phone, and postal address will be published when they are confirmed."
    >
      <Alert tone="info" title="Enquiries are not collected here">
        There is no contact form on this page, so a message cannot be stored or sent.
      </Alert>
      <p>
        Until those details exist, AJF cannot receive website enquiries, media
        requests, or privacy requests through this site. Check this page again after
        the organisation confirms its contact channels.
      </p>
    </ContentPage>
  );
}
