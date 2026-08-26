import Link from "next/link";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/decks", label: "デッキ一覧" },
  { href: "/articles", label: "読み物" },
  { href: "/rules", label: "ルール" },
];

export function TwistaMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      role="img"
    >
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#111" strokeWidth="3" />
      <circle cx="32" cy="32" r="24" fill="#ff4d2e" />
      <path
        d="M20 22h24v6H36v18h-8V28h-8z"
        fill="#fff"
      />
    </svg>
  );
}

export function StepBadge({ n }: { n: string }) {
  return (
    <span className="inline-flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full bg-step text-white shadow-[3px_3px_0_#111]">
      <span className="text-[9px] font-bold leading-none tracking-widest">STEP</span>
      <span className="text-lg font-black leading-none">{n}</span>
    </span>
  );
}

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b-4 border-ink bg-white">
      <div className="mx-auto flex w-[min(1100px,92%)] items-center justify-between gap-4 py-2.5">
        <Link href="/" className="flex items-center gap-2 font-black tracking-wide">
          <TwistaMark className="h-11 w-11" />
          <span>
            {SITE.name}
            <span className="ml-2 text-xs font-bold text-pink">TWISTA</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm font-bold">
          {LINKS.map((link) => {
            const active = current === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 ${
                  active ? "bg-pink text-white" : "hover:bg-sun"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-10">
      <div className="bg-pink-deep py-4 text-center text-sm font-bold text-white">
        非公式ファンフォーマットです。公式ルールの置き換えではありません。
      </div>
      <div className="bg-orange py-3 text-center text-xs font-bold text-white">
        {SITE.unofficial} ディズニー・ロルカナおよび関連名称は権利者に帰属します。
      </div>
    </footer>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[min(1100px,92%)] ${className}`}>{children}</div>
  );
}

export function Panel({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`rounded-[22px] border border-line bg-white p-5 shadow-[4px_4px_0_rgba(17,17,17,0.12)] ${className}`}
    >
      {children}
    </section>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 inline-block rounded-full bg-sun px-2.5 py-0.5 text-xs font-black tracking-wide">
      {children}
    </p>
  );
}
