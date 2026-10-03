import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { VIDEO_TESTIMONIALS } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

export function VideoTestimonials() {
  const [hover, setHover] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section className="relative border-y border-white/[0.08] bg-ink-900/40 py-20 md:py-28">
      <div className="shell">
        <Reveal className="max-w-[40rem]">
          <span className="eyebrow">{VIDEO_TESTIMONIALS.eyebrow}</span>
          <h2 className="fluid-h2 mt-6 font-display text-white">{VIDEO_TESTIMONIALS.title}</h2>
          <p className="mt-6 max-w-[32rem] text-[15px] leading-relaxed text-white/45">{VIDEO_TESTIMONIALS.sub}</p>
        </Reveal>

        <div className="no-bar snap-dope snap-peek -mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:mt-14 lg:grid lg:grid-cols-12 lg:overflow-visible">
          {VIDEO_TESTIMONIALS.items.map((item, i) => {
            const featured = i === 0
            return (
              <Reveal
                key={item.name}
                delay={0.07 * i}
                className={`h-full w-[86%] shrink-0 sm:w-auto ${featured ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}`}
              >
                <motion.article
                  onHoverStart={() => setHover(i)}
                  onHoverEnd={() => setHover(null)}
                  className="glow-ring surface group relative flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={item.poster}
                      alt={`${item.name} testimonial`}
                      loading="lazy"
                      decoding="async"
                      animate={reduced ? {} : { scale: hover === i ? 1.05 : 1 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      className="img-bright h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />

                    {/* play affordance */}
                    <button
                      aria-label={`Play ${item.name} testimonial`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.span
                        animate={reduced ? {} : { scale: hover === i ? 1.08 : 1 }}
                        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
                      >
                        <span className="absolute inset-0 rounded-full bg-violet-500/25 blur-xl" />
                        <svg viewBox="0 0 24 24" className="relative ml-1 h-5 w-5 fill-white" aria-hidden>
                          <path d="M7 4.5 20 12 7 19.5v-15Z" />
                        </svg>
                      </motion.span>
                    </button>

                    <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 font-sans text-[11px] text-white/85 backdrop-blur-sm">
                      {item.duration}
                    </span>
                    <span className="absolute left-3 top-3 rounded-full border border-ember-400/30 bg-ember-500/15 px-2.5 py-1 font-sans text-[10.5px] tracking-wide text-ember-200 backdrop-blur-sm">
                      {item.stat}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col justify-center p-5 md:p-6">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-violet-400/50" aria-hidden>
                      <path d="M10 6v6H6.5c0 2.5 1.2 4 3.5 4.5V18C6 17.6 3.5 15 3.5 11V6H10Zm10.5 0v6H17c0 2.5 1.2 4 3.5 4.5V18c-4-.4-6.5-3-6.5-7V6h6.5Z" />
                    </svg>
                    <p
                      className={`mt-3 font-display font-medium leading-[1.25] tracking-[-0.03em] text-white/[0.92] ${
                        featured ? 'text-[clamp(1.2rem,2.4vw,1.65rem)]' : 'text-[1.02rem]'
                      }`}
                    >
                      {item.quote}
                    </p>
                    <footer className="mt-5 flex items-center gap-2.5 text-[12.5px]">
                      <span className="font-medium text-white">{item.name}</span>
                      <span className="h-1 w-1 rounded-full bg-white/25" />
                      <span className="text-white/40">{item.role}</span>
                    </footer>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
