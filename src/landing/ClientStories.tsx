import { TrendingUp } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { DriveVideo, YouTubeLite } from './VideoBits'

export function ClientStories() {
  const { clientVideos } = LP

  return (
    <section id="clients" className="relative bg-[#f6f8fe] py-24 md:py-32">
      <div className={shell}>
        <SectionHead eyebrow={clientVideos.eyebrow} title={clientVideos.title} sub={clientVideos.sub} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {clientVideos.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.12}>
              <article className="group h-full rounded-3xl border border-slate-200/80 bg-white p-3 shadow-[0_20px_50px_-28px_rgba(23,51,127,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(47,107,255,0.55)]">
                {item.source === 'youtube' ? (
                  <YouTubeLite id={item.youtubeId!} title={item.title} />
                ) : (
                  <DriveVideo driveId={item.driveId!} name={item.name} role={item.role} />
                )}
                <div className="px-3 pb-3 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-navy-900">{item.name}</h3>
                      <p className="text-sm text-slate-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[13px] font-bold text-emerald-600 ring-1 ring-emerald-100">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {item.result}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
