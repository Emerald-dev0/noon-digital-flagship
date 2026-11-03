import { motion } from 'framer-motion'
import {
  ArrowRight01Icon,
  ChartIncreaseIcon,
  Image01Icon,
  NoteEditIcon,
  Scissor01Icon,
  Search01Icon,
  Video01Icon,
} from 'hugeicons-react'
import { LP } from '../data/landing'
import { CtaButton, Em, Reveal, SectionHead, shell } from './LpUi'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const STEP_ICONS = [Search01Icon, NoteEditIcon, Video01Icon, Scissor01Icon, Image01Icon, ChartIncreaseIcon]

export function LpProcess() {
  const { process } = LP

  return (
    <section id="process" className="border-y border-ink-900/10 bg-paper py-16 md:py-24">
      <div className={shell}>
        <SectionHead
          label="Our process"
          title={<>Completely done-for-you. <Em>Here&apos;s the rundown.</Em></>}
          sub="1–2 videos a week. You record — we handle everything before and after that."
        />

        <ol className="mt-10 border-t border-ink-900/10 md:mt-14">
          {process.steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Search01Icon
            return (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                className="group grid gap-3.5 border-b border-ink-900/10 py-6 md:grid-cols-[64px_56px_minmax(0,0.9fr)_minmax(0,1.3fr)_28px] md:items-center md:gap-6 md:py-7"
              >
                <div className="flex items-center gap-4 md:contents">
                  <span className="font-helv text-lg font-bold tabular-nums text-brand-500">{step.n.padStart(2, '0')}</span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink-900 transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                  {step.title}
                </h3>
                <p className="max-w-none text-[15px] leading-relaxed text-slate-500">{step.body}</p>
                <ArrowRight01Icon
                  size={20}
                  strokeWidth={2.2}
                  className="hidden justify-self-end text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block"
                />
              </motion.li>
            )
          })}
        </ol>

        <Reveal className="mt-9 flex flex-wrap items-center gap-5">
          <CtaButton href="#book">Book a call</CtaButton>
          <p className="text-[15px] text-slate-500">
            Your total time: <strong className="font-bold text-ink-900">about an hour a week</strong>, recording.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
