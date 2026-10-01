import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'ghost' | 'ember'

export function MagneticButton({
  children,
  href = '#book',
  variant = 'primary',
  className,
  strength = 0.35,
  onClick,
}: {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  strength?: number
  onClick?: () => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[14px] font-medium tracking-[-0.01em] transition-colors duration-300 will-change-transform'

  const styles: Record<Variant, string> = {
    primary:
      'bg-violet-500 text-white shadow-[0_18px_50px_-18px_rgba(139,92,246,0.9)] hover:bg-violet-400',
    ember:
      'bg-ember-500 text-ink-950 font-semibold shadow-[0_18px_50px_-18px_rgba(255,138,61,0.9)] hover:bg-ember-400',
    ghost:
      'border border-white/[0.14] bg-white/[0.03] text-white/80 hover:border-white/30 hover:text-white backdrop-blur-sm',
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(base, styles[variant], className)}
    >
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -inset-y-6 -left-1/3 w-1/3 rotate-12 bg-white/25 blur-md opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
        </span>
      )}
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </motion.a>
  )
}

export function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn('h-[14px] w-[14px]', className)} aria-hidden>
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-[2px]"
      />
    </svg>
  )
}
