import { Badge, Container, Panel, SiteFooter, SiteHeader } from "@/components/ui";

export const metadata = { title: "ルール" };

const TOC = [
  { id: "storyboard", label: "ストーリーボードとデッキ" },
  { id: "construction", label: "構築ルール" },
  { id: "setup", label: "対戦前の準備" },
  { id: "play", label: "ゲームの進行" },
  { id: "victory", label: "勝利条件" },
];

export default function RulesPage() {
  return (
    <>
      <SiteHeader current="/rules" />
      <Container className="grid gap-4 py-6">
        <Panel>
          <Badge>Rules</Badge>
          <h1 className="mt-2">ルール集約ページ</h1>
          <nav className="mt-4 rounded-[18px] bg-sun p-4" aria-label="このページ内">
            <h2 className="mt-0 text-base">目次</h2>
            <ol className="mb-0 space-y-1 pl-5">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </Panel>

        <Panel id="storyboard">
          <h2 className="mt-0">ストーリーボードとデッキ</h2>
          <ul className="m-0 space-y-1 pl-5">
            <li>主演としてキャラクター・カードを<strong>2枚</strong>選ぶ（同名キャラクター・カードは不可）</li>
            <li>主題歌としてアクション・歌・カードを<strong>1枚</strong>選ぶ</li>
            <li>この3枚を合わせて<strong>ストーリーボード</strong>と呼ぶ</li>
            <li>山札に混ぜず、ゲーム中は常に参照できる形で提示しておく（公開情報）</li>
            <li>山札（ドローするデッキ本体）は<strong>57枚以上</strong>。各カードは原則として同名1枚まで</li>
          </ul>
        </Panel>

        <Panel id="construction">
          <h2 className="mt-0">構築ルール</h2>
          <ul className="m-0 space-y-1 pl-5">
            <li>使用できるインク色は、ストーリーボード3枚に含まれる色に限定する（最大3色）</li>
            <li>ストーリーボードに含まれるカードは山札には入れない</li>
            <li>同名カードは各1枚まで（公式のデッキ構築ルールと同様の制限を想定）</li>
            <li>カードプール（使用セット）はプレイグループで合意する</li>
          </ul>
        </Panel>

        <Panel id="setup">
          <h2 className="mt-0">対戦前の準備</h2>
          <ul className="m-0 space-y-1 pl-5">
            <li>プレイ人数と座席順を決める</li>
            <li>各プレイヤーはストーリーボードを提示し、山札をシャッフルする</li>
            <li>先攻プレイヤーを決める（合意した方法でよい）</li>
          </ul>
        </Panel>

        <Panel id="play">
          <h2 className="mt-0">ゲームの進行</h2>
          <ul className="m-0 space-y-1 pl-5">
            <li>ターンは座席の時計回りに進む</li>
            <li>ストーリーボードのカードは、公式ルールでプレイ可能なタイミングでプレイしてよい</li>
            <li>ストーリーボードのカードをすべてプレイし終えたあとも、山札と場のカードでゲームは継続する</li>
            <li>多人数戦なので、ターゲットの選び方や合意形成はプレイグループで事前に擦り合わせるとスムーズ</li>
          </ul>
        </Panel>

        <Panel id="victory">
          <h2 className="mt-0">勝利条件</h2>
          <ul className="m-0 space-y-1 pl-5">
            <li>
              <strong>25ロア</strong>を最初に獲得したプレイヤーの勝利
            </li>
            <li>同時に達成した場合の扱いは、事前にハウスルールとして決めておく</li>
          </ul>
        </Panel>
      </Container>
      <SiteFooter />
    </>
  );
}
