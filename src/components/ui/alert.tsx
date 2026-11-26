import { cn } from "@/lib/cn";

const tones = {
  info: "border-primary",
  warning: "border-warning",
  danger: "border-danger",
} as const;

type AlertProps = {
  children: React.ReactNode;
  title?: string;
  tone?: keyof typeof tones;
};

export function Alert({ children, title, tone = "info" }: AlertProps) {
  return (
    <div
      role={tone === "danger" ? "alert" : "status"}
      className={cn(
        "rounded-xl border-l-4 bg-white px-4 py-3 text-ink",
        tones[tone],
      )}
    >
      {title ? <p className="font-semibold text-forest">{title}</p> : null}
      <div className={title ? "mt-1" : undefined}>{children}</div>
    </div>
  );
}
