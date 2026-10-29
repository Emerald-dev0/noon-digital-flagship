import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../utils/cn'
import { LP } from '../data/landing'

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-base font-black text-white shadow-[0_10px_24px_-8px_rgba(47,107,255,0.8)]">
        N
      </span>
      <span className={cn('text-lg font-extrabold tracking-tight', dark ? 'text-white' : 'text-navy-900')}>
        Noon<span className="text-brand-600">Digital</span>
      </span>
    </a>
  )
}

export function LpNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-slate-200/70 bg-white/85 shadow-[0_8px_30px_-18px_rgba(10,21,48,0.35)] backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-shell items-center justify-between px-5 md:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-500 lg:flex">
          <a href="#clients" className="transition-colors hover:text-brand-700">Clients</a>
          <a href="#results" className="transition-colors hover:text-brand-700">Results</a>
          <a href="#process" className="transition-colors hover:text-brand-700">Process</a>
          <a href="#work" className="transition-colors hover:text-brand-700">Our Work</a>
        </nav>
        <a
          href={LP.hero.cta.href}
          className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgba(47,107,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-700"
        >
          Book a call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  )
}
