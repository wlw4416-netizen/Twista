import Link from "next/link";
import { Container, Panel, SiteFooter, SiteHeader, StepBadge } from "@/components/ui";
import { HISTORY, SITE } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader current="/" />
      <Container className="grid gap-5 py-6 lg:grid-cols-[250px_1fr]">
        <aside className="h-fit rounded-[22px] border border-line bg-white p-4 shadow-[4px_4px_0_rgba(17,17,17,0.12)] lg:sticky lg:top-24">
          <h2 className="mt-0 text-lg font-black">メニュー</h2>
          <ol className="m-0 space-y-1 pl-5 font-bold">
            <li>
              <a href="#portal">ポータル</a>
            </li>
            <li>
              <a href="#about">ツイスタとは</a>
            </li>
            <li>
              <Link href="/decks">デッキ一覧</Link>
            </li>
            <li>
              <Link href="/articles">読み物</Link>
            </li>
            <li>
              <Link href="/rules">ルール</Link>
            </li>
            <li>
              <a href="#history">更新履歴</a>
            </li>
          </ol>
        </aside>

        <div className="grid gap-4">
          <section className="rounded-[22px] border border-line bg-white p-6 shadow-[4px_4px_0_rgba(17,17,17,0.12)] sm:p-8">
            <p className="inline-block rounded-r-full bg-pink px-4 py-1 text-sm font-black text-white">
              いざ、対戦！
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              ツイン・スターリング
              <br />
              遊び方ガイド
            </h1>
            <p className="mt-3 text-lg font-bold">{SITE.tagline}</p>
            <p className="mt-3 max-w-2xl">
              ディズニーロルカナの非公式多人数戦です。
              <span className="mark">主演2枚</span>と
              <span className="mark">主題歌1枚</span>
              をストーリーボードにして、
              <span className="em-red">一番最初に25ロア</span>
              を獲得した人が勝ちます。
            </p>
          </section>

          <Panel id="portal">
            <h2 className="mt-0 font-black">ポータル</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { href: "/decks", step: "01", title: "デッキ一覧", body: "作例デッキをタグで絞り込み。" },
                { href: "/articles", step: "02", title: "読み物", body: "なぜ作ったか、初心者ガイド。" },
                { href: "/rules", step: "03", title: "ルール", body: "構築・進行・勝利条件のハブ。" },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="flex gap-3 rounded-[18px] border border-line bg-sun/50 p-4 hover:bg-sun"
                >
                  <StepBadge n={card.step} />
                  <span>
                    <h3 className="mt-0 text-base font-black">{card.title}</h3>
                    <p className="m-0 text-sm">{card.body}</p>
                  </span>
                </Link>
              ))}
            </div>
          </Panel>

          <Panel id="about">
            <h2 className="mt-0 border-b-4 border-pink pb-1 font-black">
              ツイン・スターリング（ツイスタ）とは
            </h2>
            <p>
              2体の主演キャラクターと1枚の主題歌を決め、それらを中心としたデッキを組んで遊ぶ多人数戦です。選出した3枚は
              <span className="mark">ストーリーボード</span>
              と呼びます。
            </p>
            <p>
              交流が目的の遊び方です。ルールはマジック：ザ・ギャザリングの
              <span className="mark">統率者</span>
              を参考にしています。
            </p>
          </Panel>

          <Panel>
            <h2 className="mt-0 border-b-4 border-alert pb-1 font-black">デッキの構成</h2>
            <ul className="m-0 space-y-1 pl-5">
              <li>主演に設定するキャラクター・カード2枚（同名キャラクター・カードの選出は不可）</li>
              <li>主題歌に設定するアクション・歌・カード1枚</li>
              <li>
                その他カード<span className="em-red">57枚以上</span>
              </li>
              <li>各カード1枚ずつのみ使用可能</li>
              <li>主演キャラクターと主題歌の同色インク（最大3種類）のカードが使用可能</li>
            </ul>
          </Panel>

          <Panel>
            <h2 className="mt-0 border-b-4 border-step pb-1 font-black">ゲームの進行</h2>
            <ul className="m-0 space-y-1 pl-5">
              <li>各プレイヤーはストーリーボードのカードをデッキに混ぜず、提示しておく</li>
              <li>開始プレイヤーを決め、手札を決定させる</li>
              <li>開始プレイヤーもスタートフェイズのドローを行う</li>
              <li>ターン進行は時計回りに行う</li>
              <li>
                ストーリーボードのカードをすべてプレイし、一番最初に
                <span className="em-red">25ロア</span>
                を獲得したプレイヤーが勝利
              </li>
            </ul>
          </Panel>

          <Panel id="history">
            <h2 className="mt-0 font-black">更新履歴</h2>
            <ul className="m-0 list-none p-0">
              {HISTORY.map((item) => (
                <li key={item.date + item.text} className="border-t border-line py-2 first:border-t-0 first:pt-0">
                  <strong>{item.date}</strong> — {item.text}
                </li>
              ))}
            </ul>
          </Panel>

          <Link
            href="/rules"
            className="rounded-[18px] bg-pink py-4 text-center text-lg font-black text-white shadow-[4px_4px_0_#111]"
          >
            ルールをくわしく見る →
          </Link>
        </div>
      </Container>
      <SiteFooter />
    </>
  );
}
