import { EyeIcon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { CountUp } from '../components/ui/CountUp'
import { Em, Reveal, SectionHead, shell } from './LpUi'
import { YouTubeLite } from './VideoBits'
import { cn } from '../utils/cn'

// The actual videos, laid out like a channel's videos tab.
// Press play on any of them — they're all live on YouTube.
export function OurWork() {
  const { work } = LP

  return (
    <section id="work" className="bg-ink-900 py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          dark
          title={<>Our <Em>work.</Em></>}
          sub={work.note}
        />

        <Reveal className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
          {work.stats.map((s) => (
            <p key={s.l} className="flex items-baseline text-sm text-white/50">
              <span className="font-helv text-2xl font-bold tracking-tight text-white md:text-[1.7rem]">
                <CountUp value={s.v} />
              </span>
              <span className="ml-2">{s.l}</span>
            </p>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {work.videos.map((id, i) => (
            <Reveal key={id} delay={(i % 4) * 0.05} className={cn(i === 0 && 'col-span-2')}>
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <YouTubeLite
                  id={id}
                  title={`Client video ${i + 1}`}
                  rounded="rounded-lg"
                  className="ring-1 ring-white/10"
                />
                {work.labels[id] && (
                  <p className="mt-2 flex items-center gap-1.5 text-[13px] font-bold text-white/85">
                    <EyeIcon size={15} strokeWidth={2} className="shrink-0 text-blush-400" />
                    {work.labels[id]}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
