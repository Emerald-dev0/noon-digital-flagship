import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'

export function MoreProof() {
  const { moreProof } = LP

  return (
    <section id="proof" className="relative py-24 md:py-32">
      <div className={shell}>
        <SectionHead eyebrow={moreProof.eyebrow} title={moreProof.title} sub={moreProof.sub} />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
          {moreProof.items.map((item, i) => (
            <Reveal key={item.image} delay={(i % 2) * 0.1} className="break-inside-avoid">
              <figure className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2.5 shadow-[0_20px_50px_-30px_rgba(23,51,127,0.45)] transition-all duration-300 hover:-translate-y-1">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="block w-full rounded-2xl"
                />
                <figcaption className="flex items-center gap-2 px-3 py-3.5 text-sm font-semibold text-navy-900">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
