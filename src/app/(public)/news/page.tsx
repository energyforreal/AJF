import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "News",
  "Stories from Animal Justice Foundation for people who want to understand an animal’s situation. No articles are published yet.",
  "/news",
);

export default function NewsPage() {
  return (
    <ClosedModule
      title="News"
      lede="A story here should help a person understand an animal’s situation. Editors publish articles when they are ready. Nothing is listed yet."
      emptyTitle="Nothing to read yet"
    >
      When an article is ready for you, it will have its own address, title, and
      description.
    </ClosedModule>
  );
}
