import { useEffect, useState } from 'react'
import { cn } from '../utils/cn'
import { LP } from '../data/landing'

export function Wordmark() {
  return (
    <a href="#top" aria-label="Noon Digital — back to top" className="block shrink-0">
      <img src="/logo-dark.png" alt="Noon Digital" className="h-7 w-auto sm:h-8" />
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-200',
        scrolled ? 'border-b border-slate-200/80 bg-white/90 backdrop-blur' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-shell items-center justify-between px-5 md:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          <a href="#clients" className="transition-colors hover:text-navy-900">Clients</a>
          <a href="#results" className="transition-colors hover:text-navy-900">Results</a>
          <a href="#process" className="transition-colors hover:text-navy-900">Process</a>
          <a href="#work" className="transition-colors hover:text-navy-900">Our work</a>
        </nav>
        <a
          href={LP.hero.cta.href}
          className="rounded-full bg-navy-900 px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-brand-700 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Book a call
        </a>
      </div>
    </header>
  )
}
