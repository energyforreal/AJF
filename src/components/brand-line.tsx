import { cn } from "@/lib/cn";

const parts = ["Law", "Compassion", "Action"] as const;

type BrandLineProps = {
  className?: string;
};

export function BrandLine({ className }: BrandLineProps) {
  return (
    <p className={cn("text-xs tracking-wide", className)}>
      {parts.map((part, index) => (
        <span key={part}>
          {index > 0 ? (
            <span aria-hidden="true"> | </span>
          ) : null}
          {index > 0 ? <span className="sr-only">, </span> : null}
          {part}
        </span>
      ))}
    </p>
  );
}
