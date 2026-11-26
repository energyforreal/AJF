import { cn } from "@/lib/cn";

const tones = {
  sage: "bg-sage text-forest",
  forest: "bg-forest text-white",
  warning: "border border-warning bg-white text-ink",
} as const;

type BadgeProps = {
  children: React.ReactNode;
  tone?: keyof typeof tones;
};

export function Badge({ children, tone = "sage" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full px-3 text-sm font-semibold",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
