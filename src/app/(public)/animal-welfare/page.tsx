import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { EmptyState } from "@/components/ui/empty-state";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Animal welfare",
  "Educational resources from Animal Justice Foundation. Guides will be published when they are ready.",
  "/animal-welfare",
);

export default function AnimalWelfarePage() {
  return (
    <ContentPage
      title="Animal welfare"
      lede="AJF will publish practical, sourced information about animal welfare in Malaysia."
    >
      <p>
        Educational pages will explain issues in plain language and point readers to
        responsible next steps. Graphic evidence will stay out of prominent public
        areas, with a warning before any sensitive material.
      </p>
      <EmptyState title="Resources are being prepared">
        No guides are published yet. This page does not offer veterinary diagnosis or
        emergency response.
      </EmptyState>
      <p>
        <Link href="/report-animal-cruelty" className="font-semibold text-primary underline">
          Read what to do if you see animal cruelty
        </Link>
      </p>
    </ContentPage>
  );
}
