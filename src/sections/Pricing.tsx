import { PRICING } from '../data/content'
import { Reveal } from '../components/ui/Reveal'
import { MagneticButton, ArrowGlyph } from '../components/ui/MagneticButton'

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/[0.08] py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[40rem] w-[52rem] -translate-x-1/2 rounded-full bg-violet-700/[0.12] blur-[150px]"
      />
      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">{PRICING.eyebrow}</span>
            <h2 className="fluid-h2 mt-6 font-display text-white">{PRICING.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[14.5px] leading-relaxed text-white/45">{PRICING.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {PRICING.tiers.map((tier, i) => {
            const hot = tier.emphasised
            return (
              <Reveal
                key={tier.key}
                delay={0.07 * i}
                className={`h-full ${hot ? 'lg:-my-5 lg:z-10' : ''}`}
              >
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[24px] border p-6 md:p-8 ${
                    hot
                      ? 'border-violet-400/35 bg-gradient-to-b from-violet-600/[0.18] via-ink-850 to-ink-900 shadow-[0_40px_120px_-50px_rgba(139,92,246,0.9)]'
                      : 'border-white/[0.09] bg-ink-900/80'
                  }`}
                >
                  {hot && (
                    <>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/25 blur-[80px]"
                      />
                      <span className="absolute right-5 top-6 rounded-full border border-violet-300/35 bg-violet-500/20 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-violet-100">
                        {tier.badge}
                      </span>
                    </>
                  )}

                  <h3 className="relative font-display text-[19px] font-semibold tracking-[-0.03em] text-white">
                    {tier.name}
                  </h3>

                  <div className="relative mt-5 flex items-baseline gap-2">
                    <span
                      className={`num font-display text-[clamp(2.4rem,5vw,3.1rem)] font-semibold tracking-[-0.05em] ${
                        hot ? 'text-white' : 'text-white/90'
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-[12.5px] text-white/40">{tier.cadence}</span>
                  </div>
                  <p className="relative mt-1 text-[11.5px] text-white/30">{tier.note}</p>

                  <p className="relative mt-5 text-[13.5px] leading-relaxed text-white/55">{tier.pitch}</p>

                  <div className="relative my-6 h-px w-full bg-gradient-to-r from-white/[0.14] to-transparent" />

                  <ul className="relative space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/[0.62]">
                        <svg viewBox="0 0 14 14" className="mt-[3px] h-3.5 w-3.5 shrink-0" aria-hidden>
                          <circle cx="7" cy="7" r="6.4" fill={hot ? 'rgba(139,92,246,0.22)' : 'rgba(255,255,255,0.06)'} />
                          <path
                            d="m4.3 7.2 1.9 1.9 3.6-4"
                            stroke={hot ? '#bda2ff' : 'rgba(255,255,255,0.45)'}
                            strokeWidth="1.3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8 pt-2 lg:mt-auto">
                    <MagneticButton
                      href="#book"
                      variant={hot ? 'primary' : 'ghost'}
                      strength={0.2}
                      className="w-full"
                    >
                      {tier.cta} <ArrowGlyph />
                    </MagneticButton>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-[13.5px] leading-relaxed text-white/45">
            <span className="mt-[2px] text-ember-400">※</span>
            {PRICING.aside}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
