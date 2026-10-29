import { LP } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'
import { DriveVideo, YouTubeLite } from './VideoBits'

export function ClientStories() {
  const { clientVideos } = LP

  return (
    <section id="clients" className="bg-[#f6f8fc] py-20 md:py-28">
      <div className={shell}>
        <SectionHead title={<>Hear it from our <Em>clients</Em></>} sub={clientVideos.sub} />

        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {clientVideos.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <article>
                <div className="relative">
                  {item.source === 'youtube' ? (
                    <YouTubeLite id={item.youtubeId!} title={item.title} />
                  ) : (
                    <DriveVideo driveId={item.driveId!} name={item.name} role={item.role} />
                  )}
                  <span className="pointer-events-none absolute -bottom-3 left-4 z-10 rounded-full bg-navy-900 px-3.5 py-1.5 text-[13px] font-bold text-white shadow-lg">
                    {item.result}
                  </span>
                </div>
                <div className="mt-6 flex items-baseline gap-2 px-1">
                  <h3 className="text-base font-bold text-navy-900">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
