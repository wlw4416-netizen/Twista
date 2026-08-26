import Link from "next/link";
import { Badge, Container, SiteFooter, SiteHeader } from "@/components/ui";
import type { Article } from "@/data/site";

export function ArticleChrome({
  article,
  children,
}: {
  article: Article;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader current="/articles" />
      <Container className="py-6">
        <p className="mb-4 text-sm text-muted">
          <Link href="/articles" className="underline-offset-2 hover:underline">
            読み物
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{article.title}</span>
        </p>
        <article className="rounded-[22px] border border-line bg-white p-6 shadow-[4px_4px_0_rgba(17,17,17,0.12)] sm:p-8">
          <header className="mb-6">
            <Badge>{article.category}</Badge>
            <h1 className="mt-2 text-2xl sm:text-3xl">{article.title}</h1>
            <p className="text-muted">{article.lede}</p>
          </header>
          <div className="prose-article max-w-none space-y-4 [&_a]:font-bold [&_a]:text-pink-deep [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-pink [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-8 [&_h2]:border-b-4 [&_h2]:border-sun [&_h2]:pb-1 [&_h2]:text-xl [&_h2]:font-black [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
            {children}
          </div>
        </article>
      </Container>
      <SiteFooter />
    </>
  );
}
