import { LP } from '../data/landing'
import { shell } from './LpUi'
import { DriveVideo, YouTubeLite } from './VideoBits'

export function ClientStories() {
  const { clientVideos, results } = LP
  const [Shaf, Aqib, Yaseen] = clientVideos.items

  return (
    <section id="clients" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className={shell}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Testimonials</p>
        <h2 className="mt-3 font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em] text-navy-900">
          Hear from our clients
        </h2>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-slate-500 md:text-lg">{clientVideos.sub}</p>

        {/* Shaf — featured, with his numbers next to the video */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          <YouTubeLite id={Shaf.youtubeId} title={Shaf.title} className="ring-1 ring-black/10" />
          <div>
            <p className="font-helv text-2xl font-bold tracking-tight text-navy-900">{Shaf.name}</p>
            <p className="mt-1 text-sm text-slate-400">{Shaf.role}</p>
            <p className="mt-5 font-helv text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight tracking-[-0.02em] text-navy-900">
              {Shaf.result}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-5">
              {results.calls.stats.map((s) => (
                <p key={s.l}>
                  <span className="block font-helv text-2xl font-bold leading-none tracking-tight text-navy-900">{s.v}</span>
                  <span className="mt-1.5 block text-xs text-slate-400">{s.l}</span>
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500">Full breakdown in Case Study 02, just below.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {[Aqib, Yaseen].map((item) => (
            <article key={item.name}>
              <DriveVideo driveId={item.driveId} name={item.name} role={item.role} />
              <div className="mt-4 flex flex-wrap items-baseline gap-x-2.5">
                <h3 className="text-base font-bold text-navy-900">{item.name}</h3>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
              <p className="mt-1.5 text-[15px] font-bold text-navy-900">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
