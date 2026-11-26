import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-primary text-white hover:bg-forest",
  secondary: "border border-forest bg-white text-forest hover:bg-sage",
} as const;

const baseClass =
  "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-center font-semibold";

type Variant = keyof typeof variants;

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(baseClass, variants[variant], className);

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (href && disabled) {
    return (
      <span className={cn(classes, "cursor-not-allowed opacity-60")} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <button
      type={type}
      className={cn(classes, "disabled:cursor-not-allowed disabled:opacity-60")}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
