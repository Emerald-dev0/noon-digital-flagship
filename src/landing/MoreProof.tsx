import { Maximize2 } from 'lucide-react'
import { LP } from '../data/landing'
import { Reveal, SectionHead, shell } from './LpUi'
import { cn } from '../utils/cn'

export function MoreProof() {
  const { moreProof } = LP

  return (
    <section id="proof" className="bg-navy-950 py-16 md:py-28">
      <div className={shell}>
        <SectionHead dark label="The receipts" title="More proof" sub={moreProof.sub} />

        {/* Masonry wall. On mobile the wide shots span both columns so they
            stay readable, and every shot can be tapped open full size. */}
        <div className="mt-10 columns-2 gap-3 md:mt-12 lg:columns-3 lg:gap-5 [&>*]:mb-3.5 lg:[&>*]:mb-5">
          {moreProof.items.map((item, i) => (
            <Reveal
              key={item.image}
              delay={(i % 3) * 0.05}
              className={cn('break-inside-avoid', item.wide && 'max-lg:[column-span:all]')}
            >
              <figure>
                <a
                  href={item.image}
                  target="_blank"
                  rel="noreferrer"
                  title="Open full size"
                  className="group relative block cursor-zoom-in"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="block w-full rounded-xl ring-1 ring-white/10"
                  />
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/55 p-1.5 text-white/85 lg:hidden">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </a>
                <figcaption className="mt-2 flex items-start gap-1.5 text-xs font-medium leading-snug text-white/50 sm:text-[13px] lg:mt-2.5 lg:gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-xs font-medium text-white/35 lg:hidden">Tap any screenshot to see it full size.</p>
      </div>
    </section>
  )
}
