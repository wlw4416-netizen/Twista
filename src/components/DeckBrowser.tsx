"use client";

import { useMemo, useState } from "react";
import { DECK_TAGS, DECKS, type DeckTagId } from "@/data/site";

export function DeckBrowser() {
  const [tag, setTag] = useState<"all" | DeckTagId>("all");
  const visible = useMemo(
    () => (tag === "all" ? DECKS : DECKS.filter((deck) => deck.tags.includes(tag))),
    [tag],
  );
  const label = DECK_TAGS.find((item) => item.id === tag)?.label ?? tag;
  const count =
    visible.length === DECKS.length
      ? `全 ${DECKS.length} 件を表示`
      : `${visible.length} / ${DECKS.length} 件を表示（タグ: ${label}）`;

  return (
    <>
      <section className="rounded-[22px] border border-line bg-white p-5 shadow-[4px_4px_0_rgba(17,17,17,0.12)]">
        <h2 id="filter-heading" className="mt-0 text-xl">
          タグでフィルタ
        </h2>
        <p className="text-sm text-muted" aria-live="polite">
          {count}
        </p>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="デッキのタグ">
          {DECK_TAGS.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === tag}
              onClick={() => setTag(item.id)}
              className={`rounded-full border px-3 py-1 text-sm font-bold ${
                item.id === tag
                  ? "border-ink bg-pink text-white"
                  : "border-line bg-sun hover:border-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-4 grid gap-4 sm:grid-cols-2" aria-live="polite">
        {visible.length === 0 ? (
          <p className="text-muted">このタグに該当するデッキがありません。</p>
        ) : (
          visible.map((deck) => (
            <article key={deck.title} className="rounded-[22px] border border-line bg-white p-5 shadow-[4px_4px_0_rgba(17,17,17,0.12)]">
              <h3 className="mt-0 text-lg">{deck.title}</h3>
              <p className="text-sm text-muted">{deck.leads}</p>
              <p>{deck.summary}</p>
              <p className="mt-3 flex flex-wrap gap-1.5">
                {deck.tags.map((id) => (
                  <span
                    key={id}
                    className="rounded-full bg-sun px-2 py-0.5 text-xs font-bold"
                  >
                    {DECK_TAGS.find((item) => item.id === id)?.label ?? id}
                  </span>
                ))}
              </p>
            </article>
          ))
        )}
      </section>
    </>
  );
}
