import { Badge, Container, SiteFooter, SiteHeader } from "@/components/ui";
import { DeckBrowser } from "@/components/DeckBrowser";

export const metadata = { title: "デッキ一覧" };

export default function DecksPage() {
  return (
    <>
      <SiteHeader current="/decks" />
      <Container className="grid gap-4 py-6">
        <section className="rounded-[22px] border border-line bg-white p-5 shadow-[4px_4px_0_rgba(17,17,17,0.12)]">
          <Badge>Decks</Badge>
          <h1 className="mt-2">デッキ一覧</h1>
          <p>
            公開デッキをタグで絞り込めます。カード名・デッキ名はサイト用の作例です。
          </p>
        </section>
        <DeckBrowser />
      </Container>
      <SiteFooter />
    </>
  );
}
