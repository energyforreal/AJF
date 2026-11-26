import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { legalDraftNotice } from "@/lib/site";

type ContentPageProps = {
  title: string;
  lede: string;
  children: React.ReactNode;
  draft?: boolean;
};

export function ContentPage({ title, lede, children, draft = false }: ContentPageProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-4xl text-forest">{title}</h1>
        {draft ? <Badge tone="warning">Draft</Badge> : null}
      </div>
      <p className="mt-4 text-lg text-ink">{lede}</p>
      {draft ? (
        <div className="mt-6">
          <Alert tone="warning" title="Pending legal review">
            {legalDraftNotice}
          </Alert>
        </div>
      ) : null}
      <div className="mt-8 space-y-4 text-ink">{children}</div>
    </article>
  );
}
