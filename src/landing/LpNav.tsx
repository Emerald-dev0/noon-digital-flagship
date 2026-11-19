import { useEffect, useState } from 'react'
import { ArrowUpRight01Icon } from 'hugeicons-react'
import { cn } from '../utils/cn'
import { LP } from '../data/landing'
import { shell } from './LpUi'

export function Wordmark() {
  return (
    <a href="#top" aria-label="Noon Digital — back to top" className="block shrink-0">
      <img src="/logo-dark.png" alt="Noon Digital" className="h-7 w-auto sm:h-8" />
    </a>
  )
}

const LINKS = [
  { label: 'Clients', href: '#clients' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Our work', href: '#work' },
]

export function LpNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink-900/10 bg-cream/90 shadow-[0_12px_32px_-20px_rgba(10,8,16,0.35)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className={`${shell} flex h-16 items-center justify-between gap-4 md:h-[72px]`}>
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex" aria-label="Main">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-brand-500 after:transition-all after:duration-300 hover:text-ink-900 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={LP.hero.cta.href}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-brand-600 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Book a call
          <ArrowUpRight01Icon size={16} strokeWidth={2.2} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  )
}
