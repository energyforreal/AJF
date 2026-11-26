import { ClosedModule } from "@/components/closed-module";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "News",
  "News and articles from Animal Justice Foundation. No articles are published yet.",
  "/news",
);

export default function NewsPage() {
  return (
    <ClosedModule
      title="News"
      lede="Articles are published by AJF editors. Nothing is listed yet."
      emptyTitle="No articles"
    >
      When an article is ready, it will have its own address, title, and description.
    </ClosedModule>
  );
}
