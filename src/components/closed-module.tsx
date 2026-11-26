import { EmptyState } from "@/components/ui/empty-state";

type ClosedModuleProps = {
  title: string;
  lede: string;
  emptyTitle: string;
  children: React.ReactNode;
};

export function ClosedModule({ title, lede, emptyTitle, children }: ClosedModuleProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="font-serif text-4xl text-forest">{title}</h1>
      <p className="mt-4 text-lg text-ink">{lede}</p>
      <div className="mt-8">
        <EmptyState title={emptyTitle}>{children}</EmptyState>
      </div>
    </article>
  );
}
