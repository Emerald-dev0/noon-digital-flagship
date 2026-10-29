import { useState } from 'react'
import { Loader2, Play } from 'lucide-react'
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
  if (p === 'youtube')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const PLATFORM_META: Record<LpPlatform, { label: string; color: string }> = {
  youtube: { label: 'YouTube', color: 'text-[#ff0033]' },
  instagram: { label: 'Instagram', color: 'text-[#d62976]' },
  tiktok: { label: 'TikTok', color: 'text-slate-900' },
}

// Click-to-play: the iframe only loads once someone actually presses play.

export function PlayButton({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span
      className={cn(
        'grid place-items-center rounded-full bg-white text-navy-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-105',
        size === 'lg' ? 'h-[76px] w-[76px]' : 'h-14 w-14',
      )}
    >
      <Play className={cn('fill-current', size === 'lg' ? 'ml-1 h-8 w-8' : 'ml-0.5 h-6 w-6')} />
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
  const [playing, setPlaying] = useState(false)
  return (
    <div className={cn('group relative aspect-video w-full overflow-hidden bg-navy-950', rounded, className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
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
            <Loader2 className="h-8 w-8 animate-spin text-white/40" />
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
              <span className="absolute inset-0 bg-[linear-gradient(140deg,rgba(143,86,255,0.35),transparent_55%)]" />
              <span className="absolute left-6 top-6">
                <span className="block font-helv text-3xl font-bold tracking-tight text-white">{name}</span>
                <span className="mt-1 block text-sm text-white/60">{role}</span>
              </span>
              <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
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
