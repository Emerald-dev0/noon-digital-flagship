import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FAQ } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">{FAQ.eyebrow}</span>
              <h2 className="fluid-h2 mt-6 font-display text-white">{FAQ.title}</h2>
              <p className="mt-6 max-w-[22rem] text-[14.5px] text-white/[0.42]">
                Still stuck on something? Reply to any email and Mubarak answers it himself. Usually within a day,
                occasionally at an unreasonable hour.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            {FAQ.items.map((item, i) => {
              const isOpen = open === i
              return (
                <Reveal key={item.q} delay={0.04 * i}>
                  <div className="border-t border-white/10 last:border-b">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start gap-5 py-6 text-left"
                    >
                      <span className="num mt-[6px] font-sans text-[11px] tracking-[0.14em] text-white/[0.22]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`flex-1 font-display text-[clamp(1.05rem,2vw,1.35rem)] font-medium tracking-[-0.03em] transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-white/[0.72] group-hover:text-white'
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen ? 'border-violet-400/40 bg-violet-500/15' : 'border-white/[0.12] group-hover:border-white/25'
                        }`}
                      >
                        <span className="absolute h-[1.4px] w-3 rounded bg-white/70" />
                        <motion.span
                          animate={{ rotate: isOpen ? 0 : 90, opacity: isOpen ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute h-[1.4px] w-3 rounded bg-white/70"
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[44rem] pb-7 pl-[42px] pr-10 text-[14.5px] leading-relaxed text-white/[0.52]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
