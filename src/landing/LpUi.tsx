import { motion } from 'framer-motion'
import { ArrowRight01Icon } from 'hugeicons-react'
import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

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
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({
  title,
  sub,
  dark = false,
}: {
  title: ReactNode
  sub?: string
  dark?: boolean
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
      <Reveal className="max-w-2xl">
        <h2
          className={cn(
            'font-helv text-[clamp(2.1rem,4.8vw,3.9rem)] font-bold leading-[1.0] tracking-[-0.03em]',
            dark ? 'text-white' : 'text-ink-900',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.08} className="max-w-[300px]">
          <p className={cn('text-sm leading-relaxed', dark ? 'text-white/55' : 'text-slate-500')}>{sub}</p>
        </Reveal>
      )}
    </div>
  )
}

// Accent word / line in brand purple
export function Em({ children }: { children: ReactNode }) {
  return <em className="not-italic text-brand-500">{children}</em>
}

// Pink marker swipe behind a word
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap px-0.5">
      <span aria-hidden="true" className="absolute inset-x-0 bottom-[0.06em] top-[0.55em] -rotate-1 rounded-[3px] bg-blush-400/60" />
      <span className="relative">{children}</span>
    </span>
  )
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
        'group inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5',
        light
          ? 'bg-white text-ink-900 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)] hover:bg-brand-50'
          : 'bg-brand-600 text-white shadow-[0_14px_30px_-10px_rgba(122,62,238,0.55)] hover:bg-brand-500',
        className,
      )}
    >
      {children}
      <ArrowRight01Icon size={18} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

export const shell = 'mx-auto w-full max-w-shell px-5 md:px-8'
