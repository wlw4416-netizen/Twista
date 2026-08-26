import Link from "next/link";
import { ArticleChrome } from "@/components/ArticleChrome";
import { ARTICLES } from "@/data/site";

const article = ARTICLES.find((item) => item.slug === "multiplayer-tips")!;

export const metadata = { title: article.title };

export default function MultiplayerTipsPage() {
  return (
    <ArticleChrome article={article}>
      <p>
        原稿作成中です。<Link href="/articles">読み物一覧へ戻る</Link> /{" "}
        <Link href="/rules">ルール集約ページ</Link>
      </p>
    </ArticleChrome>
  );
}
