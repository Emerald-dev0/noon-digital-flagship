import { useEffect, useRef, useState } from 'react'
import { InstagramIcon, Loading01Icon, PlayIcon, YoutubeIcon } from 'hugeicons-react'
import { cn } from '../utils/cn'
import type { LpPlatform } from '../data/landing'

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function PlatformIcon({ p, className }: { p: LpPlatform; className?: string }) {
  if (p === 'tiktok') return <TikTokIcon className={className} />
  if (p === 'youtube') return <YoutubeIcon className={className} strokeWidth={1.8} aria-hidden="true" />
  return <InstagramIcon className={className} strokeWidth={1.8} aria-hidden="true" />
}

export const PLATFORM_META: Record<LpPlatform, { label: string; color: string }> = {
  youtube: { label: 'YouTube', color: 'text-[#ff0033]' },
  instagram: { label: 'Instagram', color: 'text-[#d62976]' },
  tiktok: { label: 'TikTok', color: 'text-slate-900' },
}

// Click-to-play. The YouTube player is only mounted on press, and if the
// owner has embedding switched off YouTube reports it (101/150) — we then swap
// to a poster that sends people to the video on YouTube instead of leaving a
// dead black player on the page.
type YTPlayer = {
  destroy: () => void
}
declare global {
  interface Window {
    YT?: { Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer }
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiPromise: Promise<void> | null = null
function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve()
  if (apiPromise) return apiPromise
  apiPromise = new Promise<void>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
  })
  return apiPromise
}

export function PlayButton({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span
      className={cn(
        'grid place-items-center rounded-full bg-white text-navy-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-105',
        size === 'lg' ? 'h-[76px] w-[76px]' : 'h-14 w-14',
      )}
    >
      <PlayIcon strokeWidth={2.4} className={cn(size === 'lg' ? 'ml-1 h-8 w-8' : 'ml-0.5 h-6 w-6')} />
    </span>
  )
}

export function YouTubeLite({
  id,
  title,
  className,
  rounded = 'rounded-2xl',
}: {
  id: string
  title: string
  className?: string
  rounded?: string
}) {
  const [state, setState] = useState<'idle' | 'playing' | 'blocked'>('idle')
  const holder = useRef<HTMLDivElement | null>(null)
  const watchUrl = `https://www.youtube.com/watch?v=${id}`

  useEffect(() => {
    if (state !== 'playing') return
    let player: YTPlayer | null = null
    let cancelled = false
    loadYouTubeApi().then(() => {
      if (cancelled || !holder.current) return
      player = new window.YT!.Player(holder.current, {
        videoId: id,
        host: 'https://www.youtube-nocookie.com',
        playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
        events: { onError: () => setState('blocked') },
      })
    })
    return () => {
      cancelled = true
      player?.destroy()
    }
  }, [state, id])

  return (
    <div className={cn('group relative aspect-video w-full overflow-hidden bg-navy-950', rounded, className)}>
      {state === 'playing' ? (
        <div ref={(el) => { holder.current = el }} className="absolute inset-0 h-full w-full [&>iframe]:h-full [&>iframe]:w-full" />
      ) : state === 'blocked' ? (
        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
          title="This video plays on YouTube"
        >
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-0 bg-black/45" />
          <span className="relative flex items-center gap-2 bg-white px-4 py-2.5 text-sm font-bold text-ink-900 shadow-lg">
            <YoutubeIcon size={17} strokeWidth={2.2} className="text-[#ff0033]" />
            Watch on YouTube
          </span>
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setState('playing')}
          className="absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
          <span className="absolute inset-0 grid place-items-center">
            <PlayButton />
          </span>
        </button>
      )}
    </div>
  )
}

export function DriveVideo({
  driveId,
  name,
  role,
  className,
}: {
  driveId: string
  name: string
  role: string
  className?: string
}) {
  const [playing, setPlaying] = useState(false)
  // Drive's own video thumbnail. If the file ever stops being link-shared
  // the thumbnail 404s and we fall back to the branded name panel.
  const [posterOk, setPosterOk] = useState(true)
  return (
    <div className={cn('group relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-950', className)}>
      {playing ? (
        <>
          <span className="absolute inset-0 grid place-items-center">
            <Loading01Icon className="h-8 w-8 animate-spin text-white/40" />
          </span>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://drive.google.com/file/d/${driveId}/preview`}
            title={`${name} testimonial`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 h-full w-full cursor-pointer text-left"
          aria-label={`Play ${name}'s testimonial`}
        >
          {posterOk ? (
            <>
              <img
                src={`https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`}
                alt={`${name} testimonial`}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setPosterOk(false)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
            </>
          ) : (
            <>
              <span className="absolute inset-0 bg-navy-950" />
              <span className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.07),transparent_55%)]" />
              <span className="absolute left-6 top-6">
                <span className="block font-helv text-3xl font-bold tracking-tight text-white">{name}</span>
                <span className="mt-1 block text-sm text-white/60">{role}</span>
              </span>
              <span className="absolute bottom-5 left-6 text-[13px] font-semibold text-white/50">
                Client testimonial
              </span>
            </>
          )}
          <span className="absolute inset-0 grid place-items-center">
            <PlayButton />
          </span>
        </button>
      )}
    </div>
  )
}
