import Link from "next/link";
import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Petitions",
  "Published Animal Justice Foundation petitions. Only moderated petitions are listed, and only verified signatures count.",
  "/petitions",
);

export default function PetitionsPage() {
  return (
    <ClosedModule
      title="Petitions"
      lede="Every public petition is reviewed before it is published. Verified signatures are the only signatures that count."
      emptyTitle="No published petitions"
    >
      <p>
        Pending and rejected petitions are not listed. Signer email addresses stay
        private.
      </p>
      <p className="mt-3">
        <Link href="/petitions/submit" className="font-semibold text-primary underline">
          Read how to submit a petition
        </Link>
      </p>
    </ClosedModule>
  );
}
