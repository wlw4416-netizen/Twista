export const SITE = {
  name: "ツイン・スターリング",
  short: "ツイスタ",
  tagline: "自分だけのミュージカル映画の上演を目指す",
  unofficial: "このページは非公式のファンルール案です。",
};

export type DeckTagId = "beginner" | "midrange" | "combo" | "multiplayer";

export const DECK_TAGS: { id: "all" | DeckTagId; label: string }[] = [
  { id: "all", label: "全て" },
  { id: "beginner", label: "初心者向け" },
  { id: "midrange", label: "中速" },
  { id: "combo", label: "コンボ" },
  { id: "multiplayer", label: "多人数戦向け" },
];

export type Deck = {
  title: string;
  leads: string;
  summary: string;
  tags: DeckTagId[];
};

export const DECKS: Deck[] = [
  {
    title: "月光のステージ",
    leads: "主演: エルサ / ラプンツェル | 主題歌: 輝く未来",
    summary: "継続的なドローと盤面維持で終盤に伸びるバランス型。",
    tags: ["midrange", "multiplayer"],
  },
  {
    title: "海底オーケストラ",
    leads: "主演: アリエル / セバスチャン | 主題歌: アンダー・ザ・シー",
    summary: "テンポ重視で序盤から展開するアグロ寄り構成。",
    tags: ["beginner", "multiplayer"],
  },
  {
    title: "夢の王国レビュー",
    leads: "主演: ミッキー / ミニー | 主題歌: 星に願いを",
    summary: "全体シナジーを活かして安定してロアを積み上げる。",
    tags: ["beginner", "midrange"],
  },
  {
    title: "星屑カーテンコール",
    leads: "主演: ティンカー・ベル / ピーター・パン | 主題歌: 第二の星へ",
    summary: "小回りの効くコンボパーツを束ね、一気にロアを狙う構成（例）。",
    tags: ["combo", "multiplayer"],
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  status: "公開" | "近日公開";
  summary: string;
  lede: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "why-twista",
    title: "ツイン・スターリングを作ったわけ＆その魅力",
    category: "ルール委員会寄稿",
    status: "公開",
    summary: "統率者戦とのつながり、スカーとのエピソード、ツイスタの3つの魅力とコミュニケーション。",
    lede: "ツイン・スターリング・ルール委員会のぜる氏による寄稿です。ツイスタのルール設計の背景と、このフォーマットの魅力を語っていただきました。",
  },
  {
    slug: "beginner-guide",
    title: "はじめてのツイスタ構築ガイド",
    category: "初心者向け",
    status: "公開",
    summary: "主演2枚と主題歌1枚の選び方、色の縛り、山札の組み方までを一通り。",
    lede: "ストーリーボードの決め方から山札の色の縛りまで、初めてデッキを組むときのチェックリストです。",
  },
  {
    slug: "multiplayer-tips",
    title: "多人数戦で重要な立ち回り",
    category: "プレイング",
    status: "近日公開",
    summary: "ヘイト管理と交渉のメモ。本文は順次追加予定です。",
    lede: "ヘイト管理・交渉・盤面評価のメモをここに載せます。",
  },
  {
    slug: "rules-changelog",
    title: "ルール更新履歴まとめ",
    category: "お知らせ",
    status: "近日公開",
    summary: "サイト上のルール文言の変更を時系列で残す予定です。",
    lede: "サイト上のルール文言の変更点を、日付つきで追えるようにする予定です。",
  },
];

export const HISTORY = [
  { date: "2026/08/26", text: "チラシの雰囲気に合わせて配色とトップをアレンジ" },
  { date: "2026/08/26", text: "Next.js でサイトを作り直し（twista-HP）" },
  { date: "2026/04/18", text: "デッキ一覧のデータ駆動化・タグフィルタ、読み物の記事ページ土台、ルールページの追記" },
  { date: "2026/04/06", text: "初版ページを作成。概要と基本ルール、ポータル土台を公開" },
];
