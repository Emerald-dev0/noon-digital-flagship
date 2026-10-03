import { motion, useReducedMotion } from 'framer-motion'
import { TESTIMONIAL_WALL, type ChatCard } from '../data/content'
import { Reveal } from '../components/ui/Reveal'

/* ---------------------------------------------------------- platform chrome */
const PLATFORM: Record<
  ChatCard['platform'],
  { name: string; dot: string; bubble: string; badge: JSX.Element }
> = {
  slack: {
    name: 'Slack',
    dot: '#36C5F0',
    bubble: 'bg-white/[0.045]',
    badge: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <path fill="#E01E5A" d="M5 15a2 2 0 1 1-2-2h2v2Zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z" />
        <path fill="#36C5F0" d="M9 5a2 2 0 1 1 2-2v2H9Zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5Z" />
        <path fill="#2EB67D" d="M19 9a2 2 0 1 1 2 2h-2V9Zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5Z" />
        <path fill="#ECB22E" d="M15 19a2 2 0 1 1-2 2v-2h2Zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5Z" />
      </svg>
    ),
  },
  whatsapp: {
    name: 'WhatsApp',
    dot: '#25D366',
    bubble: 'bg-[#0f2d22]/80',
    badge: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <path
          fill="#25D366"
          d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-6.4-5.6c-.5-.9-.8-1.8-.3-2.6.2-.4.6-.8 1-.9.2 0 .5 0 .7.5l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6a8.6 8.6 0 0 0 3.5 3c.3.1.4.1.6-.1l.7-.8c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.3.4.4 0 .2 0 .6-.1 1Z"
        />
      </svg>
    ),
  },
  telegram: {
    name: 'Telegram',
    dot: '#2AABEE',
    bubble: 'bg-[#102636]/80',
    badge: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#2AABEE" />
        <path fill="#fff" d="m6.5 12.2 10-3.9c.5-.2.9.1.7.8l-1.7 8c-.1.5-.5.7-1 .4l-2.7-2-1.3 1.3c-.2.2-.4.3-.7.2l.3-2.8 5-4.5c.2-.2 0-.3-.3-.1l-6.2 3.9-2.7-.8c-.6-.2-.6-.6.6-.9Z" />
      </svg>
    ),
  },
  imessage: {
    name: 'iMessage',
    dot: '#0A84FF',
    bubble: 'bg-[#13203a]/80',
    badge: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#0A84FF" />
        <path
          fill="#fff"
          d="M12 6.5c-3.3 0-6 2.1-6 4.8 0 1.5.9 2.9 2.3 3.8-.1.9-.6 1.7-.6 1.7s1.7-.3 2.7-1a7.6 7.6 0 0 0 1.6.2c3.3 0 6-2.1 6-4.7s-2.7-4.8-6-4.8Z"
        />
      </svg>
    ),
  },
  instagram: {
    name: 'Instagram DM',
    dot: '#E1306C',
    bubble: 'bg-[#2a1326]/80',
    badge: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <defs>
          <linearGradient id="igg" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FEDA75" />
            <stop offset="40%" stopColor="#D62976" />
            <stop offset="100%" stopColor="#962FBF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igg)" />
        <circle cx="12" cy="12" r="4.4" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
      </svg>
    ),
  },
  email: {
    name: 'Email',
    dot: '#a279ff',
    bubble: 'bg-white/[0.045]',
    badge: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <rect x="2.5" y="5" width="19" height="14" rx="3" fill="#8b5cf6" />
        <path d="m4.5 8 7.5 5 7.5-5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
}

function Bubble({ from, text, platform }: { from: 'them' | 'us'; text: string; platform: ChatCard['platform'] }) {
  const p = PLATFORM[platform]
  const mine = from === 'us'
  return (
    <div className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
      <p
        className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.5] ${
          mine
            ? 'rounded-br-md bg-violet-500/[0.22] text-violet-50'
            : `rounded-bl-md ${p.bubble} text-white/[0.82] border border-white/[0.06]`
        }`}
      >
        {text}
      </p>
    </div>
  )
}

function Card({ card, index }: { card: ChatCard; index: number }) {
  const reduced = useReducedMotion()
  const p = PLATFORM[card.platform]

  return (
    <motion.figure
      initial={reduced ? false : { opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="glow-ring surface group mb-5 break-inside-avoid p-4 transition-transform duration-500 hover:-translate-y-1.5 md:p-5"
    >
      {/* floating platform badge */}
      <span className="absolute -right-2 -top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-ink-850 shadow-[0_8px_24px_-8px_rgba(0,0,0,1)]">
        {p.badge}
        <span
          className="absolute inset-0 rounded-full opacity-0 blur-[10px] transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: p.dot }}
        />
      </span>

      <header className="flex items-center gap-3">
        {card.avatar ? (
          <img
            src={card.avatar}
            alt=""
            loading="lazy"
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-white/[0.12]"
          />
        ) : (
          <span className="h-9 w-9 shrink-0 rounded-full bg-violet-500/20" />
        )}
        <div className="min-w-0">
          <p className="truncate font-sans text-[13px] font-medium text-white">{card.name}</p>
          <p className="truncate text-[11.5px] text-white/40">{card.meta}</p>
        </div>
        <span className="ml-auto shrink-0 pr-7 font-sans text-[10.5px] text-white/[0.28]">{card.time}</span>
      </header>

      <div className="mt-3.5 space-y-2">
        {card.messages.map((m, i) => (
          <Bubble key={i} {...m} platform={card.platform} />
        ))}
      </div>

      {card.image && (
        <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#1a1d21]">
          <img src={card.image} alt="Client message screenshot" loading="lazy" className="block w-full" />
        </div>
      )}

      {card.real && (
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> unedited screenshot
        </p>
      )}
    </motion.figure>
  )
}

export function TestimonialWall() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden border-t border-white/[0.08] bg-ink-900/40 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-700/[0.14] blur-[160px]"
      />
      <div className="shell relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-[32rem]">
            <span className="eyebrow">{TESTIMONIAL_WALL.eyebrow}</span>
            <h2 className="fluid-h2 mt-6 font-display text-white">{TESTIMONIAL_WALL.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[24rem]">
            <p className="text-[14.5px] leading-relaxed text-white/45">{TESTIMONIAL_WALL.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIAL_WALL.cards.map((c, i) => (
            <Card key={c.id} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
