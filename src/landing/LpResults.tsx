import { Check } from 'lucide-react'
import { LP } from '../data/landing'
import { CountUp } from '../components/ui/CountUp'
import { Em, Reveal, SectionHead, shell } from './LpUi'

function Points({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[15px] font-medium text-white/70">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {point}
        </li>
      ))}
    </ul>
  )
}

function CardHeader({ avatar, name, meta, chip }: { avatar: string; name: string; meta: string; chip: string }) {
  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <img src={avatar} alt={name} loading="lazy" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15" />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-bold text-white">{name}</p>
          <p className="truncate text-xs text-white/40">{meta}</p>
        </div>
      </div>
      <span className="hidden shrink-0 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300 ring-1 ring-emerald-300/25 min-[400px]:block">
        {chip}
      </span>
    </header>
  )
}

// His ask: blur out the "your 10% is £2,907.80" part of the screenshot.
function CashScreenshot() {
  const { cash } = LP.results
  return (
    <figure>
      <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
        <img src={cash.image} alt="Client confirming cash collected from the content" className="block w-full" loading="lazy" />
        <span className="absolute left-[80%] top-[57%] h-[20%] w-[19.5%] rounded bg-black/40 backdrop-blur-[7px]" />
        <span className="absolute left-[9.5%] top-[74%] h-[18%] w-[13%] rounded bg-black/40 backdrop-blur-[7px]" />
      </div>
      <figcaption className="mt-3 text-xs font-medium text-white/35">{cash.caption}</figcaption>
    </figure>
  )
}

function CallsPanel() {
  const { calls } = LP.results
  return (
    <figure>
      <div className="rounded-xl bg-white p-4 sm:p-5">
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          {calls.stats.map((s) => (
            <div key={s.l} className="px-2 text-center first:pl-0 last:pr-0 sm:px-4">
              <p className="font-archivo text-[1.7rem] font-extrabold leading-none tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
                <CountUp value={s.v} />
              </p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[11px] sm:tracking-[0.12em]">{s.l}</p>
            </div>
          ))}
        </div>
        <img src={calls.sheet} alt="Tracking sheet: 37 calls booked, 47% close rate, 25% paid in full" className="mt-5 block w-full rounded-md ring-1 ring-slate-100" loading="lazy" />
      </div>
      <figcaption className="mt-3 text-xs font-medium text-white/35">{calls.caption}</figcaption>
    </figure>
  )
}

export function LpResults() {
  const { results } = LP

  return (
    <section id="results" className="bg-navy-950 py-16 md:py-28">
      <div className={shell}>
        <SectionHead
          dark
          title={<>Don&apos;t take <Em>our word</Em> for it</>}
          sub="Numbers from the clients' own messages, dashboards and tracking sheets."
        />

        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:p-6 md:p-8">
              <CardHeader {...results.cash} />
              <p className="mt-6 font-archivo text-[3.4rem] font-extrabold leading-none tracking-tight text-white sm:mt-7 md:text-7xl">
                <CountUp value={results.cash.metric} />
              </p>
              <p className="mt-2.5 text-base text-white/50">{results.cash.metricLabel}</p>
              <div className="mt-6">
                <Points items={results.cash.points} />
              </div>
              <div className="mt-auto pt-8">
                <CashScreenshot />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:p-6 md:p-8">
              <CardHeader {...results.calls} />
              <p className="mt-6 font-archivo text-[3.4rem] font-extrabold leading-none tracking-tight text-white sm:mt-7 md:text-7xl">
                <CountUp value={results.calls.metric} />
                <span className="ml-2.5 align-middle font-sans text-lg font-semibold text-white/40 sm:text-xl">{results.calls.metricSuffix}</span>
              </p>
              <p className="mt-2.5 text-base text-white/50">{results.calls.metricLabel}</p>
              <div className="mt-6">
                <Points items={results.calls.points} />
              </div>
              <div className="mt-auto pt-8">
                <CallsPanel />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
