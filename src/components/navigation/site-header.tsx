import Link from "next/link";
import { Suspense } from "react";
import { BrandLine } from "@/components/brand-line";
import { NavLinks } from "@/components/navigation/nav-links";
import { cn } from "@/lib/cn";
import { donationsLiveEnabled } from "@/lib/features";
import { primaryNav, siteAbbreviation, type NavItem } from "@/lib/site";

function NavFallback({
  links,
  stacked = false,
}: {
  links: NavItem[];
  stacked?: boolean;
}) {
  return (
    <ul className={cn("flex gap-1", stacked ? "flex-col" : "flex-row flex-wrap")}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex min-h-11 items-center rounded-md px-3 text-white underline-offset-4 hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const links = donationsLiveEnabled()
    ? [...primaryNav, { href: "/donate", label: "Donate" }]
    : primaryNav;

  return (
    <header className="bg-forest text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="rounded-sm" aria-label="Animal Justice Foundation home">
          <span className="block font-serif text-2xl leading-none">{siteAbbreviation}</span>
          <BrandLine className="mt-1 text-sage" />
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <Suspense fallback={<NavFallback links={links} />}>
            <NavLinks links={links} />
          </Suspense>
        </nav>
        <details className="relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center rounded-md px-3 font-semibold">
            Menu
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 z-20 mt-2 min-w-56 rounded-xl bg-forest p-3 shadow-lg ring-1 ring-white/20"
          >
            <Suspense fallback={<NavFallback links={links} stacked />}>
              <NavLinks links={links} stacked />
            </Suspense>
          </nav>
        </details>
      </div>
    </header>
  );
}
