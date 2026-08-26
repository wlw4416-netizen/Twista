import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ホーム`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "ディズニーロルカナの非公式多人数戦フォーマット「ツイン・スターリング」（通称ツイスタ）の紹介・ルール・デッキ・読み物。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${noto.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
