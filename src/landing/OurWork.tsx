import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { YouTubeLite } from './VideoBits'
import { cn } from '../utils/cn'

const INITIAL = 6

export function OurWork() {
  const { work } = LP
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? work.videos : work.videos.slice(0, INITIAL)

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className={shell}>
        <SectionHead eyebrow={work.eyebrow} title={work.title} sub={work.sub} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((id, i) => (
            <Reveal key={id} delay={(i % 3) * 0.08}>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-2 shadow-[0_16px_40px_-26px_rgba(23,51,127,0.45)] transition-all duration-300 hover:-translate-y-1">
                <YouTubeLite id={id} title={`Client work video ${i + 1}`} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-navy-900 transition-all hover:border-brand-200 hover:text-brand-700"
          >
            {expanded ? 'Show fewer videos' : `Show all ${work.videos.length} videos`}
            <ChevronDown className={cn('h-4 w-4 transition-transform duration-300', expanded && 'rotate-180')} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
