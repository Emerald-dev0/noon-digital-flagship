import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({
  title,
  sub,
  align = 'left',
  dark = false,
}: {
  title: ReactNode
  sub?: string
  align?: 'left' | 'center'
  dark?: boolean
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <h2
        className={cn(
          'text-[clamp(2.05rem,4.6vw,3.7rem)] font-extrabold leading-[1.02] tracking-[-0.03em]',
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

// Playfair italic accent word — the type signature across the reference sites
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serifit text-[1.05em] font-semibold italic tracking-[-0.01em] text-brand-500">{children}</em>
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
