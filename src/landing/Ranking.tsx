import { Search } from 'lucide-react'
import { LP } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'

type Shot = (typeof LP.ranking.shots)[number]

function searchUrl(term: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}`
}

function SerpCard({ shot }: { shot: Shot }) {
  return (
    <article className="w-[320px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:w-[380px]">
      <div className="relative">
        <img src={shot.image} alt={`YouTube search results for "${shot.term}"`} className="block w-full" loading="lazy" />
        {shot.ring && (
          <>
            <span className="pointer-events-none absolute rounded-lg border-[3px] border-brand-600" style={shot.ring} />
            <span
              className="absolute rounded-md bg-brand-600 px-2 py-1 text-[11px] font-bold text-white"
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
        className="group flex items-center gap-3 px-4 py-3.5"
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
  const base = [...ranking.shots, ...ranking.shots, ...ranking.shots]
  const row = [...base, ...base]

  return (
    <section id="ranking" className="bg-[#f6f8fc] py-20 md:py-28">
      <div className={shell}>
        <SectionHead title={<>Videos ranking on <Em>search</Em></>} sub={ranking.sub} />
      </div>

      <Reveal className="mt-12" delay={0.05}>
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee gap-4 px-4 py-1 [--marquee-duration:60s] hover:[animation-play-state:paused]">
            {row.map((shot, i) => (
              <SerpCard key={`${shot.term}-${i}`} shot={shot} />
            ))}
          </div>
        </div>
      </Reveal>

      <div className={shell}>
        <Reveal className="mt-12">
          <p className="text-sm font-bold text-navy-900">Try it yourself:</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {ranking.terms.map((t) => (
              <a
                key={t.term}
                href={searchUrl(t.term)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full border border-slate-300 bg-white py-2.5 pl-5 pr-2.5 transition-colors hover:border-brand-400"
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
        </Reveal>
      </div>
    </section>
  )
}
