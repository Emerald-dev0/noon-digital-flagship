import { LP } from '../data/landing'
import { Reveal, shell } from './LpUi'
import { YouTubeLite } from './VideoBits'

function WorkRow({ ids, reverse = false, duration, offset }: { ids: string[]; reverse?: boolean; duration: string; offset: number }) {
  const row = [...ids, ...ids]
  return (
    <div
      className="flex w-max animate-marquee gap-4 px-4 focus-within:[animation-play-state:paused] hover:[animation-play-state:paused]"
      style={{ '--marquee-duration': duration, animationDirection: reverse ? 'reverse' : undefined } as React.CSSProperties}
    >
      {row.map((id, i) => (
        <div key={`${id}-${i}`} className="w-[262px] shrink-0 sm:w-[360px] lg:w-[400px]">
          <YouTubeLite id={id} title={`Client video ${offset + (i % ids.length) + 1}`} rounded="rounded-xl" className="shadow-[0_18px_40px_-20px_rgba(10,21,48,0.45)] ring-1 ring-black/10" />
          {LP.work.labels[id] && <p className="mt-2.5 text-[13px] font-bold text-navy-900">{LP.work.labels[id]}</p>}
        </div>
      ))}
    </div>
  )
}

export function OurWork() {
  const { work } = LP
  const first = work.videos.slice(0, 9)
  const second = work.videos.slice(9)

  return (
    <section
      id="work"
      className="overflow-hidden bg-[#faf6ef] py-16 md:py-28"
      style={{
        backgroundImage:
          'linear-gradient(rgba(10,21,48,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(10,21,48,0.045) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    >
      <div className={shell}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
              Our work.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs text-[15px] leading-relaxed text-slate-500">{work.note}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy-900/10 pt-6">
          {work.stats.map((s) => (
            <p key={s.l} className="text-sm text-slate-500">
              <span className="font-helv text-2xl font-bold tracking-tight text-navy-900 md:text-[1.7rem]">{s.v}</span>
              <span className="ml-2">{s.l}</span>
            </p>
          ))}
        </Reveal>
      </div>

      <div
        className="mt-10 space-y-4 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 4%, black 96%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 4%, black 96%, transparent)',
        }}
      >
        <WorkRow ids={first} duration="85s" offset={0} />
        <WorkRow ids={second} duration="95s" offset={9} reverse />
      </div>
    </section>
  )
}
