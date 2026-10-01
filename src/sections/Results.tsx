import { RESULTS } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

function Frame({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="glow-ring surface relative overflow-hidden p-2.5">
      <div className="flex items-center gap-1.5 px-2 pb-2.5 pt-1">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate font-sans text-[10.5px] text-white/[0.32]">{caption}</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <img src={src} alt={caption} loading="lazy" className="block w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[70px]"
      />
    </figure>
  )
}

function Compare({ c }: { c: (typeof RESULTS.cases)[number] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
      {[c.before, c.after].map((col, idx) => (
        <div key={col.label} className={`bg-ink-900 p-5 ${idx === 1 ? 'relative' : ''}`}>
          <p
            className={`font-sans text-[10.5px] uppercase tracking-[0.18em] ${
              idx === 1 ? 'text-violet-200' : 'text-white/30'
            }`}
          >
            {col.label}
          </p>
          <dl className="mt-4 space-y-3">
            {col.items.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3">
                <dt className="text-[12px] text-white/[0.38]">{k}</dt>
                <dd
                  className={`num text-[14px] font-medium ${
                    idx === 1 ? 'text-white' : 'text-white/45 line-through decoration-white/20'
                  }`}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
          {idx === 1 && (
            <span
              aria-hidden
              className="absolute -left-[13px] top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-ink-850 sm:flex"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3 text-violet-300" fill="none" aria-hidden>
                <path d="M2 6h7M6.5 3 9.5 6l-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export function Results() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="shell">
        <Reveal className="max-w-[42rem]">
          <span className="eyebrow">{RESULTS.eyebrow}</span>
          <h2 className="fluid-h2 mt-6 font-display text-white">{RESULTS.title}</h2>
          <p className="mt-6 max-w-[32rem] text-[15px] leading-relaxed text-white/45">{RESULTS.sub}</p>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
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
                    className={`num mt-5 font-display text-[clamp(3.2rem,9vw,5.6rem)] font-semibold leading-[0.85] tracking-[-0.055em] ${
                      c.hero.tone === 'ember' ? 'text-ember-400' : 'text-white'
                    }`}
                    style={
                      c.hero.tone === 'ember'
                        ? { textShadow: '0 0 60px rgba(255,138,61,0.35)' }
                        : { textShadow: '0 0 60px rgba(139,92,246,0.35)' }
                    }
                  >
                    {c.hero.value}
                    {c.hero.unit && (
                      <span className="ml-2 align-baseline font-display text-[0.3em] font-medium tracking-[-0.02em] text-white/35">
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
