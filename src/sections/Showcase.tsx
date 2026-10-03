import { Reveal } from '../components/ui/Reveal'

const ROW_A = [
  '/images/thumbnails/image1.png',
  '/images/thumbnails/image2.png',
  '/images/thumbnails/image3.png',
  '/images/thumbnails/image4.png',
  '/images/thumbnails/image5.png',
  '/images/thumbnails/image6.png',
  '/images/thumbnails/image7.png',
  '/images/thumbnails/image8.png',
  '/images/thumbnails/image9.png',
  '/images/thumbnails/image10.png',
  '/images/thumbnails/image11.png',
  '/images/thumbnails/image12.png',
]

const ROW_B = [
  '/images/thumbnails/image13.png',
  '/images/thumbnails/image14.png',
  '/images/thumbnails/image15.png',
  '/images/thumbnails/image16.png',
  '/images/thumbnails/image17.png',
  '/images/thumbnails/image18.png',
  '/images/thumbnails/image19.png',
  '/images/thumbnails/image20.png',
  '/images/thumbnails/image21.png',
  '/images/thumbnails/image22.png',
  '/images/thumbnails/image23.png',
  '/images/thumbnails/image24.png',
]

const VIEWS_A = ['120K', '34K', '17K', '88K', '42K', '65K', '29K', '51K', '73K', '38K', '96K', '24K']
const VIEWS_B = ['57K', '44K', '31K', '68K', '22K', '91K', '18K', '76K', '33K', '49K', '61K', '27K']

function MarqueeRow({
  images,
  views,
  reverse = false,
  duration = '46s',
}: {
  images: string[]
  views: string[]
  reverse?: boolean
  duration?: string
}) {
  const doubled = [...images, ...images]
  const doubledViews = [...views, ...views]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 animate-marquee items-stretch gap-3 pr-3 will-change-transform md:gap-4 md:pr-4"
        style={{ '--marquee-duration': duration, animationDirection: reverse ? 'reverse' : 'normal' } as React.CSSProperties}
      >
        {doubled.map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className="thumb-frame group relative w-[210px] shrink-0 overflow-hidden rounded-xl bg-ink-800 sm:w-[260px] md:w-[300px]"
          >
            <img
              src={src}
              alt={`Client YouTube thumbnail ${i % images.length + 1}`}
              loading="lazy"
              decoding="async"
              className="img-bright block aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2.5 pb-2 pt-8">
              <span className="flex items-center gap-1 rounded-full bg-violet-500/90 px-1.5 py-0.5 font-sans text-[9px] font-semibold text-white">
                <span className="h-1 w-1 rounded-full bg-white" />
                ranked
              </span>
              <span className="rounded bg-black/70 px-1.5 py-0.5 font-sans text-[9.5px] font-medium text-white/85">
                {doubledViews[i]} views
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export function Showcase() {
  return (
    <section aria-label="Thumbnail work showcase" className="relative overflow-hidden border-y border-white/[0.08] bg-ink-900/50 py-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-700/[0.16] blur-[140px]"
      />
      <div className="shell relative">
        <Reveal className="mx-auto max-w-[40rem] text-center">
          <span className="eyebrow mx-auto">Packaging is the product</span>
          <h2 className="fluid-h2 mt-5 font-display text-white">
            Thumbnails that{' '}
            <span className="bg-gradient-to-r from-violet-300 to-ember-400 bg-clip-text text-transparent">
              stop the scroll.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[32rem] text-[14.5px] leading-relaxed text-white/50">
            Every tile below shipped on a real client channel. Same faces, same offers — repackaged to win the click before the video wins the call.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-10 space-y-3 md:mt-12 md:space-y-4">
        <MarqueeRow images={ROW_A} views={VIEWS_A} duration="48s" />
        <MarqueeRow images={ROW_B} views={VIEWS_B} reverse duration="62s" />
      </Reveal>

      <div className="shell relative">
        <Reveal delay={0.15}>
          <p className="mt-8 text-center font-sans text-[11px] uppercase tracking-[0.22em] text-white/30">
            24 live thumbnails · 6 channels · 0 stock photos
          </p>
        </Reveal>
      </div>
    </section>
  )
}
