import Link from "next/link";
import { ContentPage } from "@/components/content-page";

export default function NotFound() {
  return (
    <ContentPage
      title="Page not found"
      lede="You were looking for a page on this site, and it is not here."
    >
      <p>
        <Link href="/" className="font-semibold text-primary underline">
          Return to the homepage
        </Link>
      </p>
    </ContentPage>
  );
}
