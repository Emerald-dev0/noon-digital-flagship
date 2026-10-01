import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { PROBLEMS } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

export function Problems() {
  const [active, setActive] = useState<number | null>(0)
  const reduced = useReducedMotion()

  return (
    <section className="relative border-t border-white/[0.08] bg-ink-900/40 py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-14rem] top-1/3 h-[34rem] w-[34rem] rounded-full bg-ember-600/[0.08] blur-[150px]"
      />
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="eyebrow">{PROBLEMS.eyebrow}</span>
                <h2 className="fluid-h2 mt-6 font-display text-white">
                  {PROBLEMS.title}
                  <span className="mt-2 block bg-gradient-to-r from-ember-300 to-ember-500 bg-clip-text text-transparent">
                    {PROBLEMS.titleAccent}
                  </span>
                </h2>
                <p className="mt-6 max-w-[26rem] text-[15px] leading-relaxed text-white/45">{PROBLEMS.intro}</p>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {PROBLEMS.items.map((item, i) => {
              const open = active === i
              return (
                <Reveal key={item.n} delay={0.06 * i}>
                  <li
                    onMouseEnter={() => !reduced && setActive(i)}
                    onClick={() => setActive(open ? null : i)}
                    className="group relative cursor-pointer border-t border-white/10 py-7 transition-colors last:border-b md:py-8"
                  >
                    <span
                      className="pointer-events-none absolute inset-y-0 left-[-24px] right-[-24px] -z-10 rounded-2xl bg-gradient-to-r from-violet-500/[0.07] to-transparent opacity-0 transition-opacity duration-500"
                      style={{ opacity: open ? 1 : 0 }}
                    />
                    <div className="flex items-start gap-5 md:gap-8">
                      <span
                        className={`num mt-1 font-display text-[13px] tracking-[0.12em] transition-colors duration-300 ${
                          open ? 'text-ember-400' : 'text-white/25'
                        }`}
                      >
                        {item.n}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                          <h3
                            className={`fluid-h3 font-display transition-all duration-500 ${
                              open ? 'text-white md:translate-x-1.5' : 'text-white/55'
                            }`}
                          >
                            {item.title}
                          </h3>
                          <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 font-sans text-[10.5px] uppercase tracking-[0.14em] text-white/35">
                            {item.kicker}
                          </span>
                        </div>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={reduced ? false : { height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="max-w-[40rem] pt-4 text-[15px] leading-relaxed text-white/55">
                                {item.body}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </li>
                </Reveal>
              )
            })}
            <Reveal delay={0.2}>
              <p className="pt-8 text-[14px] text-white/40">
                All four have the same root cause:{' '}
                <span className="text-white">you are making content before you know what anyone is looking for.</span>{' '}
                That is what the Garden fixes.
              </p>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  )
}
