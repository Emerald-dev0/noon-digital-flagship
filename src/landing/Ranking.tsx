import { Search } from 'lucide-react'
import { LP } from '../data/landing'
import { shell } from './LpUi'

type Shot = (typeof LP.ranking.shots)[number]

function searchUrl(term: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}`
}

function SerpCard({ shot }: { shot: Shot }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative">
        <img
          src={shot.image}
          alt={`YouTube search results for "${shot.term}"`}
          loading="lazy"
          className="block w-full"
        />
        {shot.ring && (
          <>
            <span className="pointer-events-none absolute rounded-lg border-[3px] border-blush-500" style={shot.ring} />
            <span
              className="absolute rounded-md bg-blush-500 px-2 py-1 text-[11px] font-bold text-navy-950"
              style={{ left: shot.ring.left, top: `calc(${shot.ring.top} - 26px)` }}
            >
              Our client
            </span>
          </>
        )}
      </div>
      <a
        href={searchUrl(shot.term)}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5"
        title={`Search "${shot.term}" on YouTube`}
      >
        <span className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-full border border-slate-300 py-2 pl-4 pr-3 transition-colors group-hover:border-brand-400">
          <span className="truncate text-sm text-navy-900">{shot.term}</span>
          <Search className="h-4 w-4 shrink-0 text-slate-500" />
        </span>
        <span className="shrink-0 text-xs font-medium text-slate-400">{shot.client}</span>
      </a>
    </article>
  )
}

export function Ranking() {
  const { ranking } = LP

  return (
    <section id="ranking" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className={shell}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Search</p>
        <h2 className="mt-3 font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
          Videos ranking on search
        </h2>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-slate-500 md:text-lg">{ranking.sub}</p>

        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ranking.shots.map((shot) => (
            <SerpCard key={shot.term} shot={shot} />
          ))}
        </div>

        <p className="mt-12 text-sm font-bold text-navy-900">Try it yourself:</p>
        <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
          {ranking.terms.map((t) => (
            <a
              key={t.term}
              href={searchUrl(t.term)}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-2.5 transition-colors hover:border-brand-400 sm:gap-3 sm:pl-5"
            >
              <span className="text-sm font-medium text-navy-900">{t.term}</span>
              <Search className="h-4 w-4 text-slate-400" />
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t.note}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
