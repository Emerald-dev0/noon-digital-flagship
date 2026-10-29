import { LP } from '../data/landing'
import { CtaButton, Em, Reveal, shell } from './LpUi'

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="border-y border-slate-200/80 bg-white py-20 md:py-28">
      <div className={shell}>
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">The process</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2.4rem,4.6vw,3.7rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-navy-900">
            Completely done-for-you. Here&apos;s the <Em>rundown.</Em>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-6 hidden border-t-2 border-brand-100 lg:block" />
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-brand-500 font-archivo text-lg font-extrabold text-white shadow-[0_10px_24px_-8px_rgba(47,107,255,0.6)] ring-4 ring-white">
                    {step.n}
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold leading-snug text-navy-900">{step.title}</h3>
                  <p className="mt-2 max-w-[190px] text-[13px] leading-relaxed text-slate-500">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 text-center" delay={0.1}>
          <CtaButton href="#book">Start with a free call</CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
