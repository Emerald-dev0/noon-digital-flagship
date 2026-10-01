import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Counts a formatted figure up on first scroll-in, preserving any prefix,
 * suffix or thousands separators in the source string ("£29,078", "+5.8K",
 * "35 / 41", "454,684"). Static for reduced-motion users.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const match = value.match(/([^\d]*)([\d][\d,.]*)(.*)/)
    if (!match) return
    const [, prefix, numStr, suffix] = match
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
    const target = parseFloat(numStr.replace(/,/g, ''))
    if (!isFinite(target)) return

    const grouped = numStr.includes(',')
    const obj = { n: 0 }

    const format = (n: number) => {
      const fixed = n.toFixed(decimals)
      return grouped ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed
    }

    const tween = gsap.to(obj, {
      n: target,
      duration: 1.6,
      ease: 'power3.out',
      paused: true,
      onUpdate: () => {
        el.textContent = `${prefix}${format(obj.n)}${suffix}`
      },
    })

    el.textContent = `${prefix}${format(0)}${suffix}`

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => tween.play(),
    })

    return () => {
      st.kill()
      tween.kill()
    }
  }, [value])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
