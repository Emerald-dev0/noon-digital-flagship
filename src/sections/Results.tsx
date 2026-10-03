import { RESULTS } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { CountUp } from '../components/ui/CountUp'

function Frame({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="thumb-frame glow-ring surface relative overflow-hidden p-2.5">
      <div className="flex items-center gap-1.5 px-2 pb-2.5 pt-1">
        <span className="h-2 w-2 rounded-full bg-ember-400/70" />
        <span className="h-2 w-2 rounded-full bg-violet-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 truncate font-sans text-[10.5px] text-white/[0.45]">{caption}</span>
        <span className="ml-auto shrink-0 rounded-full bg-emerald-400/15 px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
          Real screenshot
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/20 bg-white">
        <img src={src} alt={caption} loading="lazy" decoding="async" className="img-proof block w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[70px]"
      />
    </figure>
  )
}

function Compare({ c }: { c: (typeof RESULTS.cases)[number] }) {
  const rows = c.before.items.map((row, i) => ({
    metric: row[0],
    before: row[1],
    after: c.after.items[i]?.[1] ?? '',
  }))

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
      <div className="grid grid-cols-[1.25fr_0.9fr_1fr] items-center gap-3 border-b border-white/[0.08] px-5 py-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/25">Metric</span>
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/25">{c.before.label}</span>
        <span className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-violet-200">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden>
            <path d="M2 6h7M6.5 3 9.5 6l-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          {c.after.label}
        </span>
      </div>

      {rows.map((r, i) => (
        <div
          key={r.metric}
          className={`grid grid-cols-[1.25fr_0.9fr_1fr] items-center gap-3 px-5 py-3.5 ${
            i < rows.length - 1 ? 'border-b border-white/[0.05]' : ''
          }`}
        >
          <span className="text-[12.5px] leading-tight text-white/40">{r.metric}</span>
          <span className="num text-[13px] leading-tight text-white/35 line-through decoration-white/20">
            {r.before}
          </span>
          <span className="num text-[14px] font-medium leading-tight text-white">{r.after}</span>
        </div>
      ))}
    </div>
  )
}

export function Results() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="shell">
        <Reveal className="max-w-[42rem]">
          <span className="eyebrow">{RESULTS.eyebrow}</span>
          <h2 className="fluid-h2 mt-6 font-display text-white">{RESULTS.title}</h2>
          <p className="mt-6 max-w-[32rem] text-[15px] leading-relaxed text-white/45">{RESULTS.sub}</p>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {RESULTS.cases.map((c, i) => {
            const flip = i % 2 === 1
            return (
              <div key={c.client} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                {/* stat column */}
                <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/35">
                    {c.client} <span className="text-white/[0.18]">·</span> {c.niche}
                  </p>

                  <p
                    className={`num mt-5 flex flex-wrap items-baseline gap-x-3 font-display text-[clamp(2.9rem,7.6vw,4.9rem)] font-semibold leading-[0.9] tracking-[-0.055em] ${
                      c.hero.tone === 'ember' ? 'text-ember-400' : 'text-white'
                    }`}
                    style={
                      c.hero.tone === 'ember'
                        ? { textShadow: '0 0 60px rgba(255,138,61,0.35)' }
                        : { textShadow: '0 0 60px rgba(139,92,246,0.35)' }
                    }
                  >
                    <CountUp value={c.hero.value} />
                    {c.hero.unit && (
                      <span className="font-display text-[0.26em] font-medium tracking-[-0.01em] text-white/35">
                        {c.hero.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 max-w-[22rem] text-[14px] text-white/50">{c.hero.label}</p>

                  <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
                    <span className="num font-display text-[15px] font-semibold text-violet-200">
                      {c.secondary.value}
                    </span>
                    <span className="text-[12px] text-white/[0.42]">{c.secondary.label}</span>
                  </p>

                  <div className="mt-8">
                    <Compare c={c} />
                  </div>
                </Reveal>

                {/* evidence column */}
                <Reveal delay={0.1} className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Frame src={c.image} caption={c.caption} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
