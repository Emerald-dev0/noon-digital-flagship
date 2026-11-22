import { motion, useReducedMotion } from 'framer-motion'
import { TESTIMONIAL_WALL, type ChatCard } from '../data/content'
import { InstagramIcon, Mail01Icon, Message01Icon, SlackIcon, TelegramIcon, WhatsappIcon } from 'hugeicons-react'
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
      <SlackIcon size={14} strokeWidth={2} className="text-[#36C5F0]" />
    ),
  },
  whatsapp: {
    name: 'WhatsApp',
    dot: '#25D366',
    bubble: 'bg-[#0f2d22]/80',
    badge: (
      <WhatsappIcon size={14} strokeWidth={2} className="text-[#25D366]" />
    ),
  },
  telegram: {
    name: 'Telegram',
    dot: '#2AABEE',
    bubble: 'bg-[#102636]/80',
    badge: (
      <TelegramIcon size={14} strokeWidth={2} className="text-[#2AABEE]" />
    ),
  },
  imessage: {
    name: 'iMessage',
    dot: '#0A84FF',
    bubble: 'bg-[#13203a]/80',
    badge: (
      <Message01Icon size={14} strokeWidth={2} className="text-[#0A84FF]" />
    ),
  },
  instagram: {
    name: 'Instagram DM',
    dot: '#E1306C',
    bubble: 'bg-[#2a1326]/80',
    badge: (
      <InstagramIcon size={14} strokeWidth={2} className="text-[#D62976]" />
    ),
  },
  email: {
    name: 'Email',
    dot: '#a279ff',
    bubble: 'bg-white/[0.045]',
    badge: (
      <Mail01Icon size={14} strokeWidth={2} className="text-[#a279ff]" />
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
            decoding="async"
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
          <img src={card.image} alt="Client message screenshot" loading="lazy" decoding="async" className="block w-full" />
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
