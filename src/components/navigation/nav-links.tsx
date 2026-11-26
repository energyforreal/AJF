"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/site";

type NavLinksProps = {
  links: NavItem[];
  stacked?: boolean;
  tone?: "inverse" | "ink";
};

export function NavLinks({ links, stacked = false, tone = "inverse" }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex gap-1", stacked ? "flex-col" : "flex-row flex-wrap")}>
      {links.map((link) => {
        const current =
          pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={current ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-3 underline-offset-4 hover:underline",
                tone === "inverse" ? "text-white" : "text-ink",
                current && "underline",
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
