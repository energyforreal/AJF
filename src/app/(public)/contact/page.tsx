import { ContentPage } from "@/components/content-page";
import { Alert } from "@/components/ui/alert";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Contact Animal Justice Foundation. Official contact details are not confirmed, and this page does not store enquiries.",
  "/contact",
);

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      lede="If you have a question, you deserve a real person and a real address. Official email, phone, and postal address will be published when they are confirmed."
    >
      <Alert tone="info" title="Enquiries are not collected here">
        There is no contact form on this page, so a message cannot be stored or sent.
      </Alert>
      <p>
        Until those details exist, AJF cannot receive your enquiry, a media request, or
        a privacy request through this site. Please check again after the organisation
        confirms how to reach it.
      </p>
    </ContentPage>
  );
}
