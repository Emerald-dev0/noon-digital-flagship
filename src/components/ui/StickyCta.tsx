import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 560
      const nearBook = (() => {
        const el = document.getElementById('book')
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top < window.innerHeight * 0.7
      })()
      setShow(past && !nearBook)
    }
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
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <a
            href="#book"
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-ink-900/90 p-2.5 pl-3 shadow-[0_20px_60px_-16px_rgba(0,0,0,0.9),0_0_40px_-12px_rgba(139,92,246,0.6)] backdrop-blur-xl"
          >
            <span className="relative flex -space-x-2">
              {['/people/face-image11-0.png', '/people/face-image19-0.png'].map((a) => (
                <img key={a} src={a} alt="" loading="lazy" decoding="async" className="h-9 w-9 rounded-full border-2 border-ink-900 object-cover object-top" />
              ))}
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate font-display text-[13.5px] font-semibold text-white">
                Book a free strategy call
              </span>
              <span className="block text-[11px] text-white/50">35 calls/mo from YouTube</span>
            </span>
            <span className="flex h-11 shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-500 to-ember-500 px-4 font-sans text-[13px] font-semibold text-white">
              Book →
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
