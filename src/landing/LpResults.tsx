import { Check } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { CountUp } from '../components/ui/CountUp'
import { cn } from '../utils/cn'

function Points({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[15px] font-medium text-slate-600">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {point}
        </li>
      ))}
    </ul>
  )
}

// His ask: blur out the "your 10% is £2,907.80" part of the screenshot.
function CashScreenshot() {
  const { cash } = LP.results
  return (
    <figure>
      <div className="relative overflow-hidden rounded-xl">
        <img src={cash.image} alt="Client confirming £29,078 cash collected" className="block w-full" loading="lazy" />
        <span className="absolute left-[84.5%] top-[56%] h-[26%] w-[15%] rounded bg-black/30 backdrop-blur-[7px]" />
        <span className="absolute left-[7%] top-[78%] h-[21%] w-[17%] rounded bg-black/30 backdrop-blur-[7px]" />
      </div>
      <figcaption className="mt-3 text-xs font-medium text-slate-400">{cash.caption}</figcaption>
    </figure>
  )
}

// He said we can design this one instead of using the raw screenshot.
function CallsChart() {
  const { calls } = LP.results
  const max = Math.max(...calls.bars.map((b) => b.calls))

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Calls booked by source — 30 days</p>
      <ul className="mt-5 space-y-4">
        {calls.bars.map((bar) => (
          <li key={bar.source} className="grid grid-cols-[80px_1fr_28px] items-center gap-3">
            <span className={cn('text-[13px] font-semibold', bar.highlight ? 'text-navy-900' : 'text-slate-400')}>
              {bar.source}
            </span>
            <span className="h-3 overflow-hidden rounded-full bg-slate-100">
              <span
                className={cn('block h-full rounded-full', bar.highlight ? 'bg-brand-600' : 'bg-slate-300')}
                style={{ width: `${Math.max((bar.calls / max) * 100, bar.calls > 0 ? 4 : 0)}%` }}
              />
            </span>
            <span className={cn('text-right font-archivo text-sm font-extrabold tabular-nums', bar.highlight ? 'text-brand-700' : 'text-slate-400')}>
              {bar.calls}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function LpResults() {
  const { results } = LP

  return (
    <section id="results" className="py-20 md:py-28">
      <div className={shell}>
        <SectionHead title={results.title} sub={results.sub} />

        <div className="mt-14 space-y-20 md:space-y-24">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-600">{results.cash.client}</p>
                <p className="mt-4 font-archivo text-6xl font-extrabold tracking-tight text-navy-900 md:text-7xl">
                  <CountUp value={results.cash.value} />
                </p>
                <p className="mt-3 max-w-md text-lg text-slate-500">{results.cash.label}</p>
                <Points items={results.cash.points} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_50px_-24px_rgba(10,21,48,0.25)]">
                <CashScreenshot />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_50px_-24px_rgba(10,21,48,0.25)] md:p-8 lg:order-1">
                <CallsChart />
              </div>
              <div className="lg:order-2">
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-600">{results.calls.client}</p>
                <p className="mt-4 font-archivo text-6xl font-extrabold tracking-tight text-navy-900 md:text-7xl">
                  <CountUp value={results.calls.value} />
                  <span className="ml-3 align-middle font-sans text-xl font-semibold text-slate-400">calls / month</span>
                </p>
                <p className="mt-3 max-w-md text-lg text-slate-500">{results.calls.label}</p>
                <Points items={results.calls.points} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
