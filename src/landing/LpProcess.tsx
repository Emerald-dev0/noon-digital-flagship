import { LP } from '../data/landing'
import { CtaButton, Em, Reveal, shell } from './LpUi'

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="border-y border-slate-200/80 bg-white py-16 md:py-28">
      <div className={shell}>
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">The process</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
            Completely done-for-you. Here&apos;s the <Em>rundown.</Em>
          </h2>
        </Reveal>

        {/* mobile + tablet: vertical timeline */}
        <div className="relative mx-auto mt-12 max-w-xl lg:hidden">
          <div className="absolute bottom-4 left-6 top-4 border-l-2 border-brand-100" />
          <ol className="space-y-9">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <li className="relative flex gap-5 pl-0">
                  <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 font-helv text-lg font-bold text-white ring-4 ring-white">
                    {step.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-base font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* desktop: horizontal timeline, like tikscale */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-6 border-t-2 border-brand-100" />
          <div className="grid grid-cols-6 gap-6">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-brand-500 font-helv text-lg font-bold text-white shadow-[0_10px_24px_-8px_rgba(143,86,255,0.65)] ring-4 ring-white">
                    {step.n}
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold leading-snug text-navy-900">{step.title}</h3>
                  <p className="mt-2 max-w-[190px] text-[13px] leading-relaxed text-slate-500">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 text-center md:mt-16" delay={0.1}>
          <CtaButton href="#book" className="w-full sm:w-auto">Start with a free call</CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
