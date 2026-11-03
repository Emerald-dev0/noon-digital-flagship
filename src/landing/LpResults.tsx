import { motion } from 'framer-motion'
import { CheckmarkCircle01Icon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { CountUp } from '../components/ui/CountUp'
import { CtaButton, Em, Mark, Reveal, SectionHead, shell } from './LpUi'
import { cn } from '../utils/cn'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Case studies, written the way the client talks about them in his own
// doc: headline number, full breakdown, his screenshot, CTA.

function Points({ items, dark = false }: { items: readonly (readonly string[])[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map(([lead, rest]) => (
        <li key={lead} className={cn('flex gap-2.5 text-base leading-relaxed', dark ? 'text-white/65' : 'text-slate-600')}>
          <span className={cn('mt-0.5 shrink-0', dark ? 'text-blush-400' : 'text-brand-500')}>
            <CheckmarkCircle01Icon size={20} strokeWidth={1.9} />
          </span>
          <p>
            <strong className={cn('font-bold', dark ? 'text-white' : 'text-ink-900')}>{lead}</strong>
            {rest}
          </p>
        </li>
      ))}
    </ul>
  )
}

function Who({ avatar, name, meta, dark = false }: { avatar: string; name: string; meta: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} loading="lazy" className={cn('h-12 w-12 rounded-full object-cover ring-2', dark ? 'ring-white/15' : 'ring-ink-900/10')} />
      <div>
        <p className={cn('text-lg font-bold leading-tight', dark ? 'text-white' : 'text-ink-900')}>{name}</p>
        <p className={cn('text-sm', dark ? 'text-white/45' : 'text-slate-400')}>{meta}</p>
      </div>
    </div>
  )
}

function CaseTag({ n, dark = false }: { n: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]',
        dark ? 'bg-white/10 text-white' : 'bg-brand-50 text-brand-700',
      )}
    >
      <span className="h-1.5 w-1.5 rounded-[2px] bg-blush-500" aria-hidden="true" />
      Case study {n}
    </span>
  )
}

function CtaRow({ light = false }: { light?: boolean }) {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">
      <CtaButton href="#book" light={light}>Book a call</CtaButton>
      <p className={cn('text-sm', light ? 'text-white/50' : 'text-slate-500')}>
        Takes 30 seconds. We&apos;ll tell you straight if we can do this for you.
      </p>
    </div>
  )
}

// Shaf's July tracking sheet, as bars (numbers from his sheet in the doc).
const JULY: [string, number][] = [
  ['YouTube', 35],
  ['Skool', 5],
  ['Referral', 1],
  ['Instagram', 0],
  ['TikTok', 0],
  ['Dialling', 0],
  ['Email', 0],
  ['Upsell', 0],
]

function JulyBars() {
  return (
    <div>
      <div className="space-y-2.5">
        {JULY.map(([source, v], i) => (
          <div key={source} className="grid grid-cols-[88px_1fr_26px] items-center gap-3 text-sm">
            <span className={cn(i === 0 ? 'font-bold text-white' : 'text-white/50')}>{source}</span>
            <span className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className={cn('block h-full rounded-full', i === 0 ? 'bg-blush-500' : 'bg-white/30')}
                initial={{ width: 0 }}
                whileInView={{ width: `${(v / 35) * 100}%` }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
              />
            </span>
            <span className={cn('text-right tabular-nums', i === 0 ? 'font-bold text-white' : 'text-white/50')}>{v}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-medium leading-relaxed text-white/40">
        His July tracking sheet. YouTube booked 35 of his 41 calls. Instagram and TikTok combined: zero.
      </p>
    </div>
  )
}

export function LpResults() {
  const { cash, calls } = LP.results

  return (
    <section id="results" className="py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          label="Client results"
          title={<>Results, <Em>broken down.</Em></>}
          sub="Two clients, broken down properly. Every screenshot below is the client's own — no mockups, no stock dashboards."
        />

        {/* ---------------- Case study 01 — Zakariya ---------------- */}
        <Reveal className="mt-10 md:mt-14">
          <article className="rounded-[28px] border border-ink-900/10 bg-paper p-5 shadow-[0_30px_60px_-32px_rgba(10,8,16,0.4)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Who avatar={cash.avatar} name={cash.name} meta={cash.meta} />
              <CaseTag n="01" />
            </div>

            <h3 className="mt-6 max-w-3xl font-helv text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-900">
              {cash.name}: <Mark>{cash.metric}</Mark> {cash.metricLabel}.
            </h3>

            <div className="mt-8 grid items-start gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">The breakdown</p>
                <div className="mt-4">
                  <Points items={cash.points} />
                </div>
                <CtaRow />
              </div>

              <figure>
                <motion.div
                  initial={{ rotate: -1.6 }}
                  whileHover={{ rotate: 0, scale: 1.012 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="rounded-2xl border border-ink-900/10 bg-white p-2 shadow-[0_26px_50px_-24px_rgba(10,8,16,0.45)]"
                >
                  <img src={cash.image} alt="Client confirming cash collected from the content" loading="lazy" className="block w-full rounded-xl" />
                </motion.div>
                <figcaption className="mt-3 px-1 text-xs font-medium text-slate-400">{cash.caption} — his words, his numbers.</figcaption>
              </figure>
            </div>
          </article>
        </Reveal>

        {/* ---------------- Case study 02 — Shaf ---------------- */}
        <Reveal className="mt-6 md:mt-8">
          <article className="rounded-[28px] bg-ink-900 p-5 text-white shadow-[0_36px_72px_-34px_rgba(10,8,16,0.7)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Who avatar={calls.avatar} name={calls.name} meta={calls.meta} dark />
              <CaseTag n="02" dark />
            </div>

            <h3 className="mt-6 max-w-3xl font-helv text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              {calls.name}: <span className="text-blush-400"><CountUp value={calls.metric} /></span> calls a month booked from YouTube.
            </h3>

            <div className="mt-8 grid items-start gap-9 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">The breakdown</p>
                <div className="mt-4">
                  <Points items={calls.points} dark />
                </div>

                <div className="mt-8 flex flex-wrap gap-x-9 gap-y-5 border-t border-white/10 pt-6">
                  {calls.stats.map((s) => (
                    <p key={s.l}>
                      <span className="block font-helv text-[2rem] font-bold leading-none tracking-tight text-white">
                        <CountUp value={s.v} />
                      </span>
                      <span className="mt-1.5 block text-xs text-white/45">{s.l}</span>
                    </p>
                  ))}
                </div>

                <CtaRow light />
              </div>

              <div className="space-y-6">
                <figure>
                  <motion.div
                    initial={{ rotate: 1.4 }}
                    whileHover={{ rotate: 0, scale: 1.012 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="rounded-2xl bg-white p-2 shadow-[0_26px_50px_-24px_rgba(0,0,0,0.8)]"
                  >
                    <img src={calls.sheet} alt="Tracking sheet: 37 calls booked, 47% close rate, 25% paid in full" loading="lazy" className="block w-full rounded-xl" />
                  </motion.div>
                  <figcaption className="mt-3 px-1 text-xs font-medium text-white/40">
                    {calls.caption} — {calls.metric} calls, {calls.stats[1].v} close rate, {calls.stats[2].v} paid in full.
                  </figcaption>
                </figure>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/40">Where July&apos;s calls came from</p>
                  <JulyBars />
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
