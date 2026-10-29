import { LP } from '../data/landing'
import { CtaButton, Em, Reveal, SectionHead, shell } from './LpUi'

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="border-y border-slate-200/80 bg-white py-20 md:py-28">
      <div className={shell}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            title={<>You record. We handle <Em>everything else.</Em></>}
            sub="The full rundown, step by step. Your only job is step 04."
          />
          <Reveal delay={0.1}>
            <CtaButton href="#book">Start with a free call</CtaButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={(i % 3) * 0.07}>
              <div className="border-t-2 border-navy-900 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-archivo text-5xl font-extrabold leading-none text-brand-600">{step.n}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                    Step {i + 1} / {process.steps.length}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
