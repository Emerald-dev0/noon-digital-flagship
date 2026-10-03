import { TRUST } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { CountUp } from '../components/ui/CountUp'

export function TrustStats() {
  return (
    <section id="proof" className="relative overflow-hidden py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ---- asymmetric left: headline + the single hero number ------- */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">{TRUST.eyebrow}</span>
              <h2 className="fluid-h2 mt-6 font-display text-white">{TRUST.title}</h2>
              <p className="mt-6 max-w-[30rem] text-[15.5px] leading-relaxed text-white/50">{TRUST.body}</p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10">
              <div className="glow-ring surface relative overflow-hidden p-7 md:p-9">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-violet-600/25 blur-[70px]"
                />
                <p className="num font-display text-[clamp(3rem,8vw,4.75rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
                  <CountUp value={TRUST.big.value} />
                </p>
                <p className="mt-3 text-[14px] text-white/60">{TRUST.big.label}</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-[11px] tracking-wide text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
                  {TRUST.big.note}
                </p>
              </div>
            </Reveal>
          </div>

          {/* ---- right: irregular stat mosaic ---------------------------- */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.06] md:grid-cols-3">
              {TRUST.cells.map((c, i) => (
                <Reveal
                  key={c.label}
                  delay={0.05 * i}
                  className={`group relative bg-ink-900 p-6 md:p-7 ${
                    i === 0 ? 'col-span-2' : ''
                  } ${i === TRUST.cells.length - 1 ? 'md:col-span-2' : ''}`}
                >
                  <div className="relative z-10">
                    <p
                      className={`num font-display font-semibold tracking-[-0.045em] ${
                        i === 0 ? 'text-[clamp(2.2rem,5vw,3.4rem)]' : 'text-[clamp(1.5rem,3vw,2.1rem)]'
                      } ${c.tone === 'ember' ? 'text-ember-400' : c.tone === 'violet' ? 'text-violet-200' : 'text-white'}`}
                    >
                      <CountUp value={c.value} />
                    </p>
                    <p className="mt-2 text-[12.5px] leading-snug text-white/[0.42]">{c.label}</p>
                  </div>
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-500/10 group-hover:opacity-100" />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="mt-5 flex items-center gap-2.5 text-[12px] text-white/30">
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 shrink-0 text-violet-400" fill="none" aria-hidden>
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 4v3.4L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                {TRUST.footnote}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ---- proof screenshots: bright, swipeable on mobile ---- */}
        <Reveal delay={0.1} className="mt-12 md:mt-16">
          <div className="no-bar snap-dope snap-peek -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {[
              { src: '/assets/proof/views-454k.png', caption: 'Channel overview · 454K views', tag: 'Studio' },
              { src: '/assets/proof/analytics-insight.png', caption: '34.1K views · +1.3K subs', tag: 'Analytics' },
              { src: '/assets/proof/analytics-appt.png', caption: 'Evergreen course · 17.2K views', tag: 'Evergreen' },
              { src: '/assets/proof/analytics-arabic.png', caption: 'Arabic series · breakout video', tag: 'Breakout' },
            ].map((p) => (
              <figure key={p.src} className="thumb-frame w-[240px] shrink-0 overflow-hidden rounded-xl bg-white sm:w-auto">
                <div className="flex items-center gap-1.5 bg-ink-950 px-3 py-2">
                  <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                    {p.tag}
                  </span>
                  <span className="truncate font-sans text-[10px] text-white/45">{p.caption}</span>
                </div>
                <img src={p.src} alt={p.caption} loading="lazy" className="img-proof block w-full object-cover object-top" style={{ height: 150 }} />
              </figure>
            ))}
          </div>
          <p className="mt-3 text-center font-sans text-[10.5px] uppercase tracking-[0.2em] text-white/25 sm:hidden">
            Swipe → real dashboards
          </p>
        </Reveal>
      </div>
    </section>
  )
}
