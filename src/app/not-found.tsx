import Link from "next/link";
import { ContentPage } from "@/components/content-page";

export default function NotFound() {
  return (
    <ContentPage
      title="Page not found"
      lede="This address is not part of the Animal Justice Foundation website."
    >
      <p>
        <Link href="/" className="font-semibold text-primary underline">
          Return to the homepage
        </Link>
      </p>
    </ContentPage>
  );
}
