import { LP } from '../data/landing'
import { SectionHead, shell } from './LpUi'
import { YouTubeLite } from './VideoBits'

function ThumbStrip() {
  const row = [...LP.work.strip, ...LP.work.strip]
  return (
    <div className="relative -mx-4 -rotate-1 overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-3 [--marquee-duration:70s] hover:[animation-play-state:paused]">
        {row.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="h-24 w-auto shrink-0 rounded-lg object-cover ring-1 ring-black/10 md:h-32"
          />
        ))}
      </div>
    </div>
  )
}

export function OurWork() {
  const { work } = LP

  return (
    <section id="work" className="overflow-hidden py-20 md:py-28">
      <ThumbStrip />
      <div className={`${shell} mt-16 md:mt-20`}>
        <SectionHead title={work.title} sub={work.sub} />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {work.videos.map((id, i) => (
            <YouTubeLite key={id} id={id} title={`Client video ${i + 1}`} rounded="rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}
