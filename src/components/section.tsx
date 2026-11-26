type SectionProps = {
  id: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  tone?: "cream" | "sage";
};

export function Section({ id, title, lede, children, tone = "cream" }: SectionProps) {
  return (
    <section aria-labelledby={id} className={tone === "sage" ? "bg-sage/60" : undefined}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 id={id} className="font-serif text-3xl text-forest">
          {title}
        </h2>
        {lede ? <p className="mt-3 max-w-2xl text-lg text-ink">{lede}</p> : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
