type EmptyStateProps = {
  title: string;
  children: React.ReactNode;
};

export function EmptyState({ title, children }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-leaf bg-sage/50 px-6 py-8">
      <h3 className="font-serif text-xl text-forest">{title}</h3>
      <div className="mt-2 max-w-2xl text-ink">{children}</div>
    </div>
  );
}
