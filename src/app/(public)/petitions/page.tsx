import Link from "next/link";
import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Petitions",
  "Published Animal Justice Foundation petitions. Each one is a person’s ask for animals, read before it is listed. Only verified signatures count.",
  "/petitions",
);

export default function PetitionsPage() {
  return (
    <ClosedModule
      title="Petitions"
      lede="A petition is one person’s ask on behalf of animals. It is published only after someone at AJF has read it. Only verified signatures count."
      emptyTitle="No petitions are public yet"
    >
      <p>
        Nothing is public yet. A petition still in review, or one that was declined,
        stays off this list. The email address of a person who signs stays private.
      </p>
      <p className="mt-3">
        <Link href="/petitions/submit" className="font-semibold text-primary underline">
          Read how to submit a petition
        </Link>
      </p>
    </ClosedModule>
  );
}
