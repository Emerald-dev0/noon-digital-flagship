import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

/* Shared building blocks for the light, dahus-style landing page. */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </span>
  )
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'center',
}: {
  eyebrow: string
  title: string
  sub?: string
  align?: 'center' | 'left'
}) {
  const centered = align === 'center'
  return (
    <Reveal className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-navy-900">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-slate-500 md:text-lg">{sub}</p>}
    </Reveal>
  )
}

export function CtaButton({
  href,
  children,
  className,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'ghost'
}) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300',
        variant === 'primary'
          ? 'bg-brand-600 text-white shadow-[0_14px_34px_-12px_rgba(47,107,255,0.65)] hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_20px_40px_-12px_rgba(47,107,255,0.7)]'
          : 'border border-slate-200 bg-white text-navy-900 hover:border-brand-200 hover:text-brand-700',
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

export const shell = 'mx-auto w-full max-w-shell px-5 md:px-8'
