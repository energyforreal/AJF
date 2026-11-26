import type { Metadata } from "next";

export const siteName = "Animal Justice Foundation";
export const siteAbbreviation = "AJF";
export const brandLine = "Law | Compassion | Action";

export const formationNotice =
  "Animal Justice Foundation is an organisation in formation. A registration number, registered address, and official contact details have not been published.";

export const legalDraftNotice =
  "Draft for review. This page will be replaced after qualified Malaysian legal advice. It is not a final policy, and it does not create charitable, tax, or regulatory status.";

export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/animal-welfare", label: "Animal welfare" },
  { href: "/petitions", label: "Petitions" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/news", label: "News" },
  { href: "/store", label: "Store" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export const policyNav: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refunds", label: "Refunds" },
  { href: "/shipping", label: "Shipping" },
  { href: "/community-guidelines", label: "Community guidelines" },
  { href: "/donate", label: "Fundraising" },
];

export const publicPaths = [
  "/",
  "/about",
  "/animal-welfare",
  "/campaigns",
  "/petitions",
  "/petitions/submit",
  "/donate",
  "/store",
  "/cart",
  "/checkout",
  "/impact",
  "/volunteer",
  "/report-animal-cruelty",
  "/news",
  "/contact",
  "/privacy",
  "/terms",
  "/refunds",
  "/shipping",
  "/community-guidelines",
] as const;

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url =
    configured && configured.length > 0 ? configured : "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "en_MY",
      type: "website",
    },
  };
}
