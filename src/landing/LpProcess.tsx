import { LP } from '../data/landing'
import { CtaButton, Reveal, SectionHead, shell } from './LpUi'

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" />
      </div>

      <div className={`${shell} relative`}>
        <div className="[&_h2]:!text-white [&_p]:!text-white/60">
          <SectionHead eyebrow={process.eyebrow} title={process.title} sub={process.sub} />
        </div>

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-white/10 lg:block" />
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <article className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.06]">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-lg font-black text-white shadow-[0_16px_36px_-12px_rgba(47,107,255,0.9)]">
                  {step.n}
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <CtaButton href={process.cta.href}>{process.cta.label}</CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
