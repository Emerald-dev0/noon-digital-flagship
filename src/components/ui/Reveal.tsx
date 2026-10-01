import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  blur?: boolean
  once?: boolean
  className?: string
} & Omit<HTMLMotionProps<'div'>, 'children'>

export function Reveal({ children, delay = 0, y = 26, blur = true, once = true, className, ...rest }: Props) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-12% 0px -10% 0px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Staggered word/line reveal for headings. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  accentIndex,
}: {
  lines: readonly string[]
  className?: string
  lineClassName?: string
  delay?: number
  accentIndex?: number
}) {
  const reduced = useReducedMotion()

  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ''} ${
              accentIndex === i
                ? 'bg-gradient-to-r from-violet-300 via-violet-400 to-ember-400 bg-clip-text text-transparent'
                : ''
            }`}
            initial={reduced ? false : { y: '110%', opacity: 0 }}
            animate={reduced ? undefined : { y: '0%', opacity: 1 }}
            transition={{ duration: 1.05, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
