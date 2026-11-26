import Link from "next/link";
import { BrandLine } from "@/components/brand-line";
import { formationNotice, policyNav, primaryNav, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">AJF</p>
          <BrandLine className="mt-2 text-sage" />
          <p className="mt-4 text-sm text-sage">{formationNotice}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide text-sage">Explore</h2>
          <ul className="mt-3 space-y-1">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/report-animal-cruelty"
                className="inline-flex min-h-11 items-center hover:underline"
              >
                Report animal cruelty
              </Link>
            </li>
            <li>
              <Link href="/impact" className="inline-flex min-h-11 items-center hover:underline">
                Impact
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Policies">
          <h2 className="text-sm font-semibold tracking-wide text-sage">Policies</h2>
          <ul className="mt-3 space-y-1">
            {policyNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-sage">
          {siteName}. Official contact details are pending.
        </p>
      </div>
    </footer>
  );
}
