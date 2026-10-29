import { LP } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'

export function MoreProof() {
  const { moreProof } = LP

  return (
    <section id="proof" className="bg-navy-950 py-20 md:py-28">
      <div className={shell}>
        <SectionHead dark title={<>More <Em>proof</Em></>} sub={moreProof.sub} />

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {moreProof.items.map((item, i) => (
            <Reveal key={item.image} delay={(i % 3) * 0.06} className="break-inside-avoid">
              <figure>
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="block w-full rounded-xl ring-1 ring-white/10"
                />
                <figcaption className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-white/50">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
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
