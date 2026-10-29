import { LP } from '../data/landing'
import { CtaButton, Reveal, SectionHead, shell } from './LpUi'

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="border-y border-slate-200/80 bg-white py-20 md:py-28">
      <div className={shell}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead title={process.title} sub={process.sub} />
          <Reveal delay={0.1}>
            <CtaButton href="#book">Start with a free call</CtaButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.07}>
              <div className="border-t-2 border-navy-900 pt-6">
                <span
                  className="font-archivo text-6xl font-extrabold leading-none text-transparent"
                  style={{ WebkitTextStroke: '1.5px #bcd2ff' }}
                >
                  {step.n}
                </span>
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
