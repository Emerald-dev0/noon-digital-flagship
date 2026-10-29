import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'

export function MoreProof() {
  const { moreProof } = LP

  return (
    <section id="proof" className="bg-navy-950 py-16 md:py-28">
      <div className={shell}>
        <SectionHead dark title="More proof" sub={moreProof.sub} />

        <div className="mt-10 columns-2 gap-3 md:mt-12 lg:columns-3 lg:gap-5 [&>*]:mb-3 lg:[&>*]:mb-5">
          {moreProof.items.map((item, i) => (
            <Reveal key={item.image} delay={(i % 3) * 0.05} className="break-inside-avoid">
              <figure>
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="block w-full rounded-lg ring-1 ring-white/10 lg:rounded-xl"
                />
                <figcaption className="mt-2 flex items-start gap-1.5 text-[11px] font-medium leading-snug text-white/50 sm:text-[13px] lg:mt-2.5 lg:gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
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
