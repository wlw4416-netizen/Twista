import Link from "next/link";
import { Badge, Container, SiteFooter, SiteHeader } from "@/components/ui";
import { ARTICLES } from "@/data/site";

export const metadata = { title: "読み物" };

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader current="/articles" />
      <Container className="grid gap-4 py-6">
        <section className="rounded-[22px] border border-line bg-white p-5 shadow-[4px_4px_0_rgba(17,17,17,0.12)]">
          <Badge>Articles</Badge>
          <h1 className="mt-2">読み物</h1>
          <p>ルール解説・構築の考え方・多人数戦のコツを記事として整理します。</p>
        </section>
        <section className="grid gap-4 sm:grid-cols-2">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="rounded-[22px] border border-line bg-white p-5 shadow-[4px_4px_0_rgba(17,17,17,0.12)] hover:border-pink"
            >
              <h3 className="mt-0 text-lg">{article.title}</h3>
              <p className="text-sm text-muted">
                カテゴリ: {article.category} | {article.status}
              </p>
              <p>{article.summary}</p>
            </Link>
          ))}
        </section>
      </Container>
      <SiteFooter />
    </>
  );
}
