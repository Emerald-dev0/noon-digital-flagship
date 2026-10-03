import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { NAV } from '../data/content'
import { Wordmark } from '../components/ui/Logo'
import { MagneticButton, ArrowGlyph } from '../components/ui/MagneticButton'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(7,6,11,0.72)' : 'rgba(7,6,11,0)',
            borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
            backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4 }}
          className="border-b"
        >
          <nav className="shell flex h-[74px] items-center justify-between gap-6">
            <a href="#top" className="shrink-0" aria-label="Noon Digital, back to top">
              <Wordmark />
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-[13.5px] text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-ember-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton
                href="#book"
                className="hidden px-5 py-2.5 text-[13px] sm:inline-flex"
                strength={0.25}
              >
                Book a call <ArrowGlyph />
              </MagneticButton>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] lg:hidden"
              >
                <span className="relative block h-[10px] w-[18px]">
                  <motion.span
                    animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                    className="absolute left-0 top-0 block h-[1.5px] w-full bg-white"
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                    className="absolute bottom-0 left-0 block h-[1.5px] w-full bg-white"
                  />
                </span>
              </button>
            </div>
          </nav>
        </motion.div>

        {/* scroll progress hairline */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-violet-500 via-violet-300 to-ember-400"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink-950/[0.97] backdrop-blur-2xl lg:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 top-0 h-[24rem] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(139,92,246,0.25),transparent_70%)]"
            />
            <div className="shell relative flex min-h-full flex-col justify-center gap-1 pb-10 pt-24">
              <p className="mb-2 font-sans text-[10.5px] uppercase tracking-[0.28em] text-white/35">
                Menu · Noon Digital
              </p>
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                  className="group flex items-baseline gap-3 border-b border-white/[0.08] py-4"
                >
                  <span className="num font-sans text-[11px] text-violet-300/60">0{i + 1}</span>
                  <span className="font-display text-[clamp(1.9rem,9vw,2.8rem)] font-semibold tracking-[-0.04em] text-white transition-colors group-active:text-violet-200">
                    {item.label}
                  </span>
                  <span className="ml-auto text-white/25 transition-transform duration-300 group-active:translate-x-1 group-active:text-white/60">→</span>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="pt-6"
              >
                <MagneticButton href="#book" onClick={() => setOpen(false)} className="w-full py-4 text-[15px]">
                  Book a strategy call <ArrowGlyph />
                </MagneticButton>
                <p className="mt-3 text-center text-[12px] text-white/40">Free 20 min · no deck, no pressure</p>
              </motion.div>

              {/* visual proof strip inside menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 }}
                className="mt-6"
              >
                <div className="no-bar flex gap-2.5 overflow-x-auto pb-1">
                  {['/images/thumbnails/image2.png', '/images/thumbnails/image11.png', '/images/thumbnails/image19.png', '/images/thumbnails/image23.png'].map((src) => (
                    <img key={src} src={src} alt="Client work" loading="lazy" decoding="async" className="img-bright thumb-frame h-[56px] w-[100px] shrink-0 rounded-lg object-cover" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['/people/face-image11-0.png', '/people/face-image8-0.png', '/people/face-image19-0.png'].map((a) => (
                      <img key={a} src={a} alt="" loading="lazy" decoding="async" className="h-7 w-7 rounded-full object-cover object-top ring-2 ring-ink-950" />
                    ))}
                  </div>
                  <p className="text-[11.5px] text-white/45">Trusted by 6 channels · 454K views banked</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
