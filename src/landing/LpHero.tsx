import { LP } from '../data/landing'
import { CtaButton, Em, shell } from './LpUi'
import { PlayButton, YouTubeLite } from './VideoBits'

// All 24 real client thumbnails (the doc's "Client Channels" block),
// run as two raw full-bleed rows — no tilt, no fades, no chips.
const sm = (n: number) => `/images/thumbnails/sm/image${n}.webp`
const ROW_A = [8, 1, 15, 20, 6, 13, 22, 4, 2, 17, 10, 23]
const ROW_B = [5, 19, 12, 21, 9, 3, 24, 11, 16, 7, 14, 18]

function RiverRow({ images, reverse = false, duration }: { images: number[]; reverse?: boolean; duration: string }) {
  const row = [...images, ...images]
  return (
    <div
      className="flex w-max animate-marquee gap-2 pr-2 hover:[animation-play-state:paused]"
      style={{ '--marquee-duration': duration, animationDirection: reverse ? 'reverse' : undefined } as React.CSSProperties}
    >
      {row.map((n, i) => (
        <img
          key={`${n}-${i}`}
          src={sm(n)}
          alt=""
          loading="lazy"
          className="aspect-video w-[228px] shrink-0 rounded-md object-cover ring-1 ring-black/10 sm:w-[284px]"
        />
      ))}
    </div>
  )
}

function Vsl() {
  const { vsl } = LP
  return (
    <div className="mt-12 max-w-4xl md:mt-16">
      <p className="mb-3.5 flex flex-wrap items-baseline gap-x-2 text-[15px] font-bold text-navy-900">
        {vsl.label}
        <span className="text-sm font-medium text-slate-400">— how the whole system works, in 9 minutes</span>
      </p>
      {vsl.youtubeId ? (
        <YouTubeLite id={vsl.youtubeId} title="Watch this first" className="ring-1 ring-black/10" />
      ) : (
        <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-navy-950 ring-1 ring-black/10">
          <img src={vsl.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-0 bg-black/45" />
          <button type="button" className="absolute inset-0 grid w-full cursor-pointer place-items-center" aria-label="Play the video">
            <PlayButton size="lg" />
          </button>
          <span className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 pb-4">
            <span className="relative h-1 flex-1 rounded-full bg-white/25">
              <span className="absolute inset-y-0 left-0 w-[4%] rounded-full bg-brand-500" />
            </span>
            <span className="text-xs font-semibold tabular-nums text-white/90">{vsl.duration}</span>
          </span>
        </div>
      )}
    </div>
  )
}

export function LpHero() {
  const { hero } = LP

  return (
    <section id="top" className="overflow-hidden bg-white">
      <div className={shell}>
        <div className="pt-[122px] lg:pt-[160px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-navy-900">{hero.kicker}:</p>

          <h1 className="mt-4 max-w-4xl font-helv text-[clamp(2.7rem,7.5vw,5.3rem)] font-bold leading-[0.98] tracking-[-0.035em] text-navy-900">
            {hero.titleTop} <Em>{hero.titleAccent}</Em>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{hero.sub}</p>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaButton href={hero.cta.href} className="w-full px-8 py-4 text-base sm:w-auto">
              {hero.cta.label}
            </CtaButton>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {hero.avatars.map((src) => (
                  <img key={src} src={src} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
                ))}
              </div>
              <p className="max-w-[210px] text-[13px] font-medium leading-tight text-slate-500">
                Zakariya, Shaf, Aqib, Yaseen — four of the nine channels below
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-slate-200 py-4">
            {hero.stats.map((s) => (
              <p key={s.label} className="text-[15px] text-slate-500">
                <span className="font-helv text-xl font-bold tracking-tight text-navy-900">{s.value}</span> {s.label}
              </p>
            ))}
          </div>
        </div>

        <Vsl />
      </div>

      <div className="mt-14 md:mt-20">
        <div className={shell}>
          <p className="mb-4 text-sm font-bold text-navy-900">
            Thumbnails from the channels — every one researched, scripted and designed by us:
          </p>
        </div>
        <div className="space-y-2 overflow-hidden" aria-hidden="true">
          <RiverRow images={ROW_A} duration="70s" />
          <RiverRow images={ROW_B} duration="84s" reverse />
        </div>
      </div>
    </section>
  )
}
