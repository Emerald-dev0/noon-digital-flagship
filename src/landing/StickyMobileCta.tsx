import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LP } from '../data/landing'

// Mobile-only sticky booking bar — slides in once you're past the hero.
export function StickyMobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-3 bottom-3 z-50 lg:hidden"
          style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-center gap-3 rounded-2xl bg-navy-950/95 p-3 shadow-[0_20px_44px_-14px_rgba(6,13,38,0.65)] ring-1 ring-white/10 backdrop-blur">
            <div className="flex -space-x-2 pl-1">
              {LP.hero.avatars.slice(0, 3).map((src) => (
                <img key={src} src={src} alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-navy-950" />
              ))}
            </div>
            <p className="min-w-0 flex-1 text-[12px] font-semibold leading-tight text-white/85">
              37 calls booked
              <span className="block font-medium text-white/45">from YouTube last month</span>
            </p>
            <a
              href="#book"
              className="shrink-0 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white transition-colors active:bg-brand-600"
            >
              Book a call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
