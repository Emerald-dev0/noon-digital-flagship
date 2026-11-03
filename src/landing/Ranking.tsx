import { motion } from 'framer-motion'
import { Crown02Icon, Search01Icon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'

type Shot = (typeof LP.ranking.shots)[number]

function searchUrl(term: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}`
}

function SerpCard({ shot, index }: { shot: Shot; index: number }) {
  const isTop = shot.client.includes('#1')
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-paper shadow-[0_18px_40px_-26px_rgba(10,8,16,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_54px_-24px_rgba(122,62,238,0.45)]">
      <div className="relative">
        <img
          src={shot.image}
          alt={`YouTube search results for "${shot.term}"`}
          loading="lazy"
          className="block w-full border-b border-ink-900/5"
        />
        {shot.ring && (
          <>
            <motion.span
              className="pointer-events-none absolute rounded-lg border-[3px] border-blush-500"
              style={shot.ring}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.25 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="absolute rounded-md bg-ink-900 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
              style={{ left: shot.ring.left, top: `calc(${shot.ring.top} - 26px)` }}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.45 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Our client
            </motion.span>
          </>
        )}
        {isTop && (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-blush-500 px-2.5 py-1 text-[11px] font-bold text-ink-900 shadow-md">
            <Crown02Icon size={13} strokeWidth={2.2} />
            Ranking #1
          </span>
        )}
      </div>
      <a
        href={searchUrl(shot.term)}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5"
        title={`Search "${shot.term}" on YouTube`}
      >
        <span className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-full border border-ink-900/15 py-2 pl-4 pr-2.5 transition-colors duration-200 group-hover:border-brand-400">
          <span className="truncate text-sm font-medium text-ink-900">{shot.term}</span>
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink-900 text-white">
            <Search01Icon size={12} strokeWidth={2.4} />
          </span>
        </span>
        <span className="shrink-0 text-xs font-medium text-slate-400">{shot.client}</span>
      </a>
    </article>
  )
}

export function Ranking() {
  const { ranking } = LP

  return (
    <section id="ranking" className="py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          label="YouTube search"
          title={<>Videos ranking <Em>on search.</Em></>}
          sub={ranking.sub}
        />

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {ranking.shots.map((shot, i) => (
            <Reveal key={shot.term} delay={(i % 3) * 0.07}>
              <SerpCard shot={shot} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="text-sm font-bold text-ink-900">Try it yourself:</p>
          <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {ranking.terms.map((t) => (
              <a
                key={t.term}
                href={searchUrl(t.term)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-ink-900/15 bg-paper py-2.5 pl-4 pr-2.5 shadow-[0_10px_24px_-16px_rgba(10,8,16,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 sm:gap-3 sm:pl-5"
              >
                <span className="text-sm font-medium text-ink-900">{t.term}</span>
                <Search01Icon size={15} strokeWidth={2.2} className="text-slate-400" />
                <span className="flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blush-500" />
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
