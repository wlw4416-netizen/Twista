import Link from "next/link";
import { ArticleChrome } from "@/components/ArticleChrome";
import { ARTICLES } from "@/data/site";

const article = ARTICLES.find((item) => item.slug === "rules-changelog")!;

export const metadata = { title: article.title };

export default function RulesChangelogPage() {
  return (
    <ArticleChrome article={article}>
      <p>
        準備中です。<Link href="/articles">読み物一覧へ戻る</Link>
      </p>
    </ArticleChrome>
  );
}
