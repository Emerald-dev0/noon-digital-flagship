import { BadgeCheck, CalendarCheck2, EyeOff } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { CountUp } from '../components/ui/CountUp'
import { cn } from '../utils/cn'

/* The cash screenshot with the client's "your 10% is £2,907.80" line blurred,
   exactly as asked on the Loom. Blur boxes are %-positioned over that text. */
function CashScreenshot() {
  const { cash } = LP.results
  return (
    <figure className="relative mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
      <img src={cash.image} alt="Client message confirming cash collected" className="block w-full" loading="lazy" />
      {/* redaction: end of the "Total cash collected…" line ("Your 10% on that is") */}
      <span className="absolute left-[84.5%] top-[56%] h-[26%] w-[15%] rounded-md bg-black/25 backdrop-blur-[7px]" />
      {/* redaction: the "£2,907.80." line */}
      <span className="absolute left-[7%] top-[78%] h-[21%] w-[17%] rounded-md bg-black/25 backdrop-blur-[7px]" />
      <figcaption className="absolute bottom-2.5 right-3 inline-flex items-center gap-1.5 rounded-full bg-navy-950/70 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur">
        <EyeOff className="h-3 w-3" />
        Sensitive detail blurred
      </figcaption>
    </figure>
  )
}

function CallsDashboard() {
  const { calls } = LP.results
  const max = Math.max(...calls.bars.map((b) => b.calls))

  return (
    <div className="mt-6 rounded-2xl bg-slate-50/90 p-5 ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Calls booked by source
        </p>
        <CalendarCheck2 className="h-4 w-4 text-brand-500" />
      </div>
      <ul className="mt-4 space-y-3.5">
        {calls.bars.map((bar) => (
          <li key={bar.source} className="grid grid-cols-[84px_1fr_30px] items-center gap-3">
            <span
              className={cn(
                'text-[13px] font-semibold',
                bar.highlight ? 'text-navy-900' : 'text-slate-400',
              )}
            >
              {bar.source}
            </span>
            <span className="h-2.5 overflow-hidden rounded-full bg-slate-200/80">
              <span
                className={cn(
                  'block h-full rounded-full',
                  bar.highlight
                    ? 'bg-gradient-to-r from-brand-600 to-sky-400'
                    : 'bg-slate-300',
                )}
                style={{ width: `${Math.max((bar.calls / max) * 100, bar.calls > 0 ? 4 : 0)}%` }}
              />
            </span>
            <span
              className={cn(
                'text-right text-[13px] font-bold tabular-nums',
                bar.highlight ? 'text-brand-700' : 'text-slate-400',
              )}
            >
              {bar.calls}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[13px] font-bold text-brand-700 ring-1 ring-brand-100">
        <BadgeCheck className="h-3.5 w-3.5" />
        {calls.share}
      </p>
    </div>
  )
}

export function LpResults() {
  const { results } = LP

  return (
    <section id="results" className="relative py-24 md:py-32">
      <div className={shell}>
        <SectionHead eyebrow={results.eyebrow} title={results.title} sub={results.sub} />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Result 1 — £29,078 cash collected (screenshot) */}
          <Reveal>
            <article className="h-full rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_-32px_rgba(23,51,127,0.45)] md:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                {results.cash.client}
              </p>
              <div className="mt-3 text-5xl font-extrabold tracking-tight text-navy-900 md:text-6xl">
                <CountUp value={results.cash.value} />
              </div>
              <p className="mt-2 text-base text-slate-500">{results.cash.label}</p>
              <CashScreenshot />
              <p className="mt-3 text-xs font-medium text-slate-400">{results.cash.caption}</p>
            </article>
          </Reveal>

          {/* Result 2 — 37 calls booked (designed, per client's Loom) */}
          <Reveal delay={0.12}>
            <article className="h-full rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_-32px_rgba(23,51,127,0.45)] md:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                {results.calls.client}
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-5xl font-extrabold tracking-tight text-navy-900 md:text-6xl">
                  <CountUp value={results.calls.value} />
                </span>
                <span className="text-lg font-bold text-slate-400">calls / month</span>
              </div>
              <p className="mt-2 text-base text-slate-500">{results.calls.label}</p>
              <CallsDashboard />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
