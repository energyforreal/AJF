import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/navigation/nav-links";
import { cn } from "@/lib/cn";
import { donationsLiveEnabled } from "@/lib/features";
import { primaryNav, type NavItem } from "@/lib/site";

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
            className="inline-flex min-h-11 items-center rounded-md px-3 text-ink underline-offset-4 hover:underline"
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
    <header className="border-b border-forest/10 bg-white text-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          aria-label="Animal Justice Foundation home"
          className="inline-flex shrink-0 rounded-sm"
        >
          <Logo alt="" priority className="h-20 w-auto sm:h-24" />
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <Suspense fallback={<NavFallback links={links} />}>
            <NavLinks links={links} tone="ink" />
          </Suspense>
        </nav>
        <details className="relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center rounded-md px-3 font-semibold">
            Menu
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 z-20 mt-2 min-w-56 rounded-xl bg-white p-3 text-ink shadow-lg ring-1 ring-forest/15"
          >
            <Suspense fallback={<NavFallback links={links} stacked />}>
              <NavLinks links={links} stacked tone="ink" />
            </Suspense>
          </nav>
        </details>
      </div>
    </header>
  );
}
