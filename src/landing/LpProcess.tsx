import { LP } from '../data/landing'
import { CtaButton, shell } from './LpUi'

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className={shell}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">The process</p>
        <h2 className="mt-3 max-w-3xl font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
          Completely done-for-you. Here&apos;s the rundown.
        </h2>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-slate-500 md:text-lg">
          1–2 videos a week. You record — we handle everything before and after that:
        </p>

        <ol className="mt-8 grid gap-x-12 lg:grid-cols-2">
          {process.steps.map((step) => (
            <li key={step.n} className="flex gap-5 border-t border-slate-200 py-6">
              <span className="font-helv text-4xl font-bold leading-none tracking-tight text-slate-300 md:text-5xl">{step.n}</span>
              <div>
                <h3 className="text-base font-bold text-navy-900 md:text-lg">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-500">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <CtaButton href="#book">Book a call</CtaButton>
          <p className="text-[15px] text-slate-500">
            Your total time: <strong className="font-bold text-navy-900">about an hour a week</strong>, recording.
          </p>
        </div>
      </div>
    </section>
  )
}
