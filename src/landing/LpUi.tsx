import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

// Static wrapper — the rebuild drops scroll-reveal animation entirely.
// Kept the signature so existing sections don't need touching.
export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return <div className={className}>{children}</div>
}

export function SectionHead({
  title,
  sub,
  label,
  align = 'left',
  dark = false,
}: {
  title: ReactNode
  sub?: string
  label?: string
  align?: 'left' | 'center'
  dark?: boolean
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {label && (
        <span
          className={cn(
            'mb-4 inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]',
            dark ? 'border-white/15 bg-white/5 text-white/60' : 'border-slate-200 bg-white text-slate-500',
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-helv text-[clamp(2.05rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.03em]',
          dark ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn('mt-3.5 text-[15px] leading-relaxed md:mt-4 md:text-lg', dark ? 'text-white/60' : 'text-slate-500')}>{sub}</p>
      )}
    </Reveal>
  )
}

// accent word in brand purple
export function Em({ children }: { children: ReactNode }) {
  return <em className="not-italic text-brand-500">{children}</em>
}

export function CtaButton({
  href,
  children,
  className,
  light = false,
}: {
  href: string
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition-colors',
        light
          ? 'bg-white text-navy-900 hover:bg-brand-50'
          : 'bg-brand-600 text-white hover:bg-brand-700',
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}

export const shell = 'mx-auto w-full max-w-shell px-5 md:px-8'
