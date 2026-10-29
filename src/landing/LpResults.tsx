import { Check } from 'lucide-react'
import { LP } from '../data/landing'
import { CountUp } from '../components/ui/CountUp'
import { Em, Reveal, SectionHead, shell } from './LpUi'
import { cn } from '../utils/cn'

function Points({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[15px] font-medium text-slate-700">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {point}
        </li>
      ))}
    </ul>
  )
}

function OutlierThumbs({ thumbs }: { thumbs: readonly string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Videos we made for them</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {thumbs.map((src) => (
          <img key={src} src={src} alt="" loading="lazy" className="aspect-video w-full rounded-lg object-cover ring-1 ring-black/10" />
        ))}
      </div>
    </div>
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

// He said we can design this one instead of the raw screenshot.
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

function CasePanel({
  tag,
  headline,
  media,
  thumbs,
  points,
}: {
  tag: string
  headline: string
  media: React.ReactNode
  thumbs: readonly string[]
  points: readonly string[]
}) {
  return (
    <Reveal>
      <article className="rounded-[2rem] bg-[#eff3ff] p-6 md:p-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-600">{tag}</p>
        <h3 className="mt-3 max-w-2xl text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-navy-900">
          {headline}
        </h3>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-2xl bg-white p-4 shadow-[0_20px_44px_-22px_rgba(10,21,48,0.3)] md:p-5">{media}</div>
          <div className="flex flex-col justify-between gap-7 py-1">
            <OutlierThumbs thumbs={thumbs} />
            <Points items={points} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function LpResults() {
  const { results } = LP

  return (
    <section id="results" className="py-20 md:py-28">
      <div className={shell}>
        <SectionHead
          title={<>Results speak for <Em>themselves</Em></>}
          sub="Screenshots over slogans. Two clients, tracked to the pound and the booked call."
        />

        <div className="mt-12 space-y-6">
          <CasePanel
            tag={results.cash.tag}
            headline={results.cash.headline}
            media={<CashScreenshot />}
            thumbs={results.cash.thumbs}
            points={results.cash.points}
          />
          <CasePanel
            tag={results.calls.tag}
            headline={results.calls.headline}
            media={
              <div className="p-2 md:p-3">
                <p className="font-archivo text-5xl font-extrabold tracking-tight text-navy-900">
                  <CountUp value={results.calls.value} />
                  <span className="ml-2 align-middle font-sans text-base font-semibold text-slate-400">calls / month</span>
                </p>
                <div className="mt-6">
                  <CallsChart />
                </div>
              </div>
            }
            thumbs={results.calls.thumbs}
            points={results.calls.points}
          />
        </div>
      </div>
    </section>
  )
}
