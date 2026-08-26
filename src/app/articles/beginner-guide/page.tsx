import { ArticleChrome } from "@/components/ArticleChrome";
import { ARTICLES } from "@/data/site";

const article = ARTICLES.find((item) => item.slug === "beginner-guide")!;

export const metadata = { title: article.title };

export default function BeginnerGuidePage() {
  return (
    <ArticleChrome article={article}>
      <h2>1. ストーリーボードを先に決める</h2>
      <p>
        通常の構築と違い、ツイスタでは最初に「物語の顔」となる3枚を固定します。迷ったら次の順で決めると失敗しにくいです。
      </p>
      <ol>
        <li>
          <strong>主演2枚</strong> … 盤面に出したいキャラクター・カードから選ぶ。同名は不可なので、別名のキャラクター同士にすると制約が減ります。
        </li>
        <li>
          <strong>主題歌1枚</strong> … アクション・歌・カードから1枚。盤面のテンポやリカバリーに寄せるか、勝ち筋に直結するかはデッキの性格次第です。
        </li>
      </ol>
      <p>
        この3枚が<strong>ストーリーボード</strong>で、山札には入れず提示しておきます。
      </p>

      <h2>2. 使える色はストーリーボードで決まる</h2>
      <p>
        山札に入れられるカードのインク色は、ストーリーボード3枚に含まれる色に限定します（最大3色）。ここがツイスタの構築上いちばん大きなガードレールです。
      </p>
      <ul>
        <li>主演が二色、主題歌がそのどちらかと同じ色なら、実質その二色デッキになります。</li>
        <li>主題歌が第三色を持つと、三色デッキになりマナ基盤の設計が難しくなります。初手は二色か、慣れていてから三色がおすすめです。</li>
      </ul>

      <h2>3. 山札は57枚以上（ストーリーボードは別）</h2>
      <p>
        <strong>山札（ドローする山）は57枚以上</strong>です。ストーリーボード3枚は山に混ぜません。同名カードは原則1枚まで、という公式寄りの制限を想定しています。
      </p>

      <h2>4. 多人数戦を見越した「止め」と「伸ばし」</h2>
      <p>
        人数が増えると除去や横並びが増えがちです。序盤だけ尖らせず、<strong>手札を補える手段</strong>や
        <strong>盤面を立て直すカード</strong>を少し多めに確保すると卓が崩れにくいです。
      </p>
    </ArticleChrome>
  );
}
