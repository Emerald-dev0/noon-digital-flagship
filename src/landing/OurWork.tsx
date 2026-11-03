import { LP } from '../data/landing'
import { shell } from './LpUi'
import { YouTubeLite } from './VideoBits'

// The actual videos, laid out like a channel's videos tab.
// Static on purpose — press play on any of them.
export function OurWork() {
  const { work } = LP

  return (
    <section id="work" className="border-t border-slate-200 bg-[#f7f7f5] py-16 md:py-24">
      <div className={shell}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Some bangers</p>
            <h2 className="mt-3 font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
              Our work.
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-slate-500">{work.note}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy-900/10 pt-6">
          {work.stats.map((s) => (
            <p key={s.l} className="text-sm text-slate-500">
              <span className="font-helv text-2xl font-bold tracking-tight text-navy-900 md:text-[1.7rem]">{s.v}</span>
              <span className="ml-2">{s.l}</span>
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {work.videos.map((id, i) => (
            <div key={id}>
              <YouTubeLite
                id={id}
                title={`Client video ${i + 1}`}
                rounded="rounded-lg"
                className="ring-1 ring-black/10"
              />
              {work.labels[id] && <p className="mt-2 text-[13px] font-bold text-navy-900">{work.labels[id]}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
