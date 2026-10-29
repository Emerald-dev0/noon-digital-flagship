import { LP } from '../data/landing'
import { Em, Reveal, SectionHead, shell } from './LpUi'

export function MoreProof() {
  const { moreProof } = LP

  return (
    <section id="proof" className="py-20 md:py-28">
      <div className={shell}>
        <SectionHead title={<>More <Em>proof</Em></>} sub={moreProof.sub} />

        <div className="mt-12 columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
          {moreProof.items.map((item, i) => (
            <Reveal key={item.image} delay={(i % 2) * 0.06} className="break-inside-avoid">
              <figure>
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="block w-full rounded-xl border border-slate-200"
                />
                <figcaption className="mt-2.5 text-[13px] font-medium text-slate-500">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
