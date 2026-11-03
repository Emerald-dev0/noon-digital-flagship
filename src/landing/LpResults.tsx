import { LP } from '../data/landing'
import { CtaButton, shell } from './LpUi'
import { cn } from '../utils/cn'

// Case studies, written the way the client talks about them in his own
// doc: headline number, full breakdown, his screenshot, CTA. No cards.

function Points({ items }: { items: readonly (readonly string[])[] }) {
  return (
    <ul className="space-y-3">
      {items.map(([lead, rest]) => (
        <li key={lead} className="flex gap-2.5 text-base leading-relaxed text-slate-600">
          <span aria-hidden className="font-bold text-navy-900">—</span>
          <p>
            <strong className="font-bold text-navy-900">{lead}</strong>
            {rest}
          </p>
        </li>
      ))}
    </ul>
  )
}

function Who({ avatar, name, meta }: { avatar: string; name: string; meta: string }) {
  return (
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
      <div>
        <p className="text-lg font-bold leading-tight text-navy-900">{name}</p>
        <p className="text-sm text-slate-400">{meta}</p>
      </div>
    </div>
  )
}

function CtaRow() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">
      <CtaButton href="#book">Book a call</CtaButton>
      <p className="text-sm text-slate-500">Takes 30 seconds. We&apos;ll tell you straight if we can do this for you.</p>
    </div>
  )
}

// Shaf's July tracking sheet, as a table (numbers from his sheet in the doc).
const JULY: [string, string][] = [
  ['YouTube', '35'],
  ['Skool', '5'],
  ['Referral', '1'],
  ['Instagram', '0'],
  ['TikTok', '0'],
  ['Dialling', '0'],
  ['Email', '0'],
  ['Upsell', '0'],
]

export function LpResults() {
  const { cash, calls } = LP.results

  return (
    <section id="results" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className={shell}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Client results</p>
        <h2 className="mt-3 font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
          Results
        </h2>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-slate-500 md:text-lg">
          Two clients, broken down properly. Every screenshot below is the client&apos;s own — no mockups, no stock dashboards.
        </p>

        {/* ---------------- Case study 01 — Zakariya ---------------- */}
        <article className="mt-14 border-t-2 border-navy-900 pt-8 md:mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Case study 01</p>
          <div className="mt-5">
            <Who avatar={cash.avatar} name={cash.name} meta={cash.meta} />
          </div>
          <h3 className="mt-6 max-w-3xl font-helv text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-navy-900">
            {cash.name}: {cash.metric} {cash.metricLabel}.
          </h3>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">The breakdown</p>
          <div className="mt-4 max-w-2xl">
            <Points items={cash.points} />
          </div>

          <figure className="mt-8 max-w-2xl">
            <img src={cash.image} alt="Client confirming cash collected from the content" loading="lazy" className="block w-full rounded-xl ring-1 ring-slate-200" />
            <figcaption className="mt-2.5 text-xs font-medium text-slate-400">{cash.caption} — his words, his numbers.</figcaption>
          </figure>

          <CtaRow />
        </article>

        {/* ---------------- Case study 02 — Shaf ---------------- */}
        <article className="mt-16 border-t-2 border-navy-900 pt-8 md:mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Case study 02</p>
          <div className="mt-5">
            <Who avatar={calls.avatar} name={calls.name} meta={calls.meta} />
          </div>
          <h3 className="mt-6 max-w-3xl font-helv text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-navy-900">
            {calls.name}: {calls.metric} calls a month booked from YouTube.
          </h3>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">The breakdown</p>
          <div className="mt-4 max-w-2xl">
            <Points items={calls.points} />
          </div>

          <div className="mt-9 grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
            <figure>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left text-[15px]">
                  <thead>
                    <tr className="bg-slate-50 text-xs uppercase tracking-[0.1em] text-slate-400">
                      <th className="px-4 py-3 font-bold">Source</th>
                      <th className="px-4 py-3 text-right font-bold">Calls booked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JULY.map(([source, v], i) => (
                      <tr key={source} className={cn('border-t border-slate-100', i === 0 ? 'font-bold text-navy-900' : 'text-slate-500')}>
                        <td className="px-4 py-2.5">{source}</td>
                        <td className="px-4 py-2.5 text-right tabular-nums">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption className="mt-2.5 text-xs font-medium leading-relaxed text-slate-400">
                His July tracking sheet, typed out. YouTube booked 35 of his 41 calls. Instagram and TikTok combined: zero.
              </figcaption>
            </figure>

            <figure>
              <img src={calls.sheet} alt="Tracking sheet: 37 calls booked, 47% close rate, 25% paid in full" loading="lazy" className="block w-full rounded-xl ring-1 ring-slate-200" />
              <figcaption className="mt-2.5 text-xs font-medium text-slate-400">
                {calls.caption} — {calls.metric} calls, {calls.stats[1].v} close rate, {calls.stats[2].v} paid in full.
              </figcaption>
            </figure>
          </div>

          <CtaRow />
        </article>
      </div>
    </section>
  )
}
