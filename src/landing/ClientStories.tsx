import { ArrowDown01Icon } from 'hugeicons-react'
import { LP } from '../data/landing'
import { CountUp } from '../components/ui/CountUp'
import { Em, Reveal, SectionHead, shell } from './LpUi'
import { DriveVideo, YouTubeLite } from './VideoBits'

export function ClientStories() {
  const { clientVideos, results } = LP
  const [Shaf, Aqib, Yaseen] = clientVideos.items

  return (
    <section id="clients" className="border-y border-ink-900/5 bg-brand-50 py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          label="Testimonials"
          title={<>Hear from <Em>our clients.</Em></>}
          sub={clientVideos.sub}
        />

        {/* Shaf — featured, with his numbers beside the video */}
        <Reveal className="mt-10 md:mt-12">
          <div className="relative rounded-[28px] border border-ink-900/10 bg-paper p-4 shadow-[0_30px_60px_-30px_rgba(122,62,238,0.4)] sm:p-6">
            <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
              <div className="relative">
                <YouTubeLite id={Shaf.youtubeId} title={Shaf.title} rounded="rounded-2xl" className="ring-1 ring-ink-900/10" />
                <p className="relative z-10 -mt-5 ml-4 inline-flex items-baseline gap-2 rounded-lg bg-ink-900 px-3.5 py-2 shadow-lg">
                  <span className="text-sm font-bold text-white">{Shaf.name}</span>
                  <span className="text-xs text-white/55">{Shaf.role}</span>
                </p>
              </div>
              <div>
                <p className="font-helv text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink-900">
                  {Shaf.result}
                </p>
                <div className="mt-7 flex flex-wrap gap-x-9 gap-y-5 border-t border-ink-900/10 pt-6">
                  {results.calls.stats.map((s) => (
                    <p key={s.l}>
                      <span className="block font-helv text-[1.9rem] font-bold leading-none tracking-tight text-brand-600">
                        <CountUp value={s.v} />
                      </span>
                      <span className="mt-1.5 block text-xs text-slate-500">{s.l}</span>
                    </p>
                  ))}
                </div>
                <a href="#results" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink-900 underline decoration-blush-500 decoration-2 underline-offset-4 hover:text-brand-600">
                  Full breakdown in Case Study 02
                  <ArrowDown01Icon size={16} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[Aqib, Yaseen].map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <article className="h-full rounded-[28px] border border-ink-900/10 bg-paper p-4 shadow-[0_24px_48px_-28px_rgba(10,8,16,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="overflow-hidden rounded-2xl">
                  <DriveVideo driveId={item.driveId} name={item.name} role={item.role} />
                </div>
                <div className="px-1.5 pb-1.5 pt-4">
                  <div className="flex flex-wrap items-baseline gap-x-2.5">
                    <h3 className="text-base font-bold text-ink-900">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                  <p className="mt-1.5 text-[15px] font-bold text-brand-600">{item.result}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
