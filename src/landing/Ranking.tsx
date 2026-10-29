import { ArrowUpRight, Search } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'

type Shot = (typeof LP.ranking.shots)[number]

function SerpCard({ shot }: { shot: Shot }) {
  return (
    <article className="w-[340px] shrink-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-28px_rgba(23,51,127,0.45)] sm:w-[420px]">
      <div className="relative">
        <img src={shot.image} alt={`YouTube search results for "${shot.term}"`} className="block w-full" loading="lazy" />
        {shot.ring && (
          <span
            className="pointer-events-none absolute rounded-xl border-[3px] border-brand-500 shadow-[0_0_0_4px_rgba(47,107,255,0.25)]"
            style={shot.ring}
          />
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold text-white shadow-lg">
          ← Our client
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-sm font-bold text-navy-900">
            <Search className="h-3.5 w-3.5 shrink-0 text-brand-600" />
            <span className="truncate">“{shot.term}”</span>
          </p>
          <p className="mt-0.5 truncate text-[13px] text-slate-400">{shot.client}</p>
        </div>
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(shot.term)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-100 transition-colors hover:bg-brand-100"
        >
          Search it live
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  )
}

export function Ranking() {
  const { ranking } = LP
  // repeat the real screenshots so the marquee loop feels full
  const row = [...ranking.shots, ...ranking.shots, ...ranking.shots, ...ranking.shots]

  return (
    <section id="ranking" className="relative bg-[#f6f8fe] py-24 md:py-32">
      <div className={shell}>
        <SectionHead eyebrow={ranking.eyebrow} title={ranking.title} sub={ranking.sub} />
      </div>

      <Reveal className="relative mt-14" delay={0.1}>
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee gap-5 px-5 py-2 [--marquee-duration:65s] hover:[animation-play-state:paused]">
            {row.map((shot, i) => (
              <SerpCard key={`${shot.term}-${i}`} shot={shot} />
            ))}
          </div>
        </div>
      </Reveal>

      <div className={shell}>
        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {ranking.terms.map((t) => (
            <a
              key={t.term}
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(t.term)}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white py-2 pl-4 pr-2 text-sm font-semibold text-navy-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200"
            >
              <Search className="h-4 w-4 text-brand-600" />
              “{t.term}”
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600 ring-1 ring-emerald-100">
                {t.note}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
