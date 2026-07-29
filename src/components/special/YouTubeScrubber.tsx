import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const CHAPTERS = [
  { time: 0, label: 'Hero', thumb: '/images/thumbnails/image1.png' },
  { time: 0.25, label: 'Manifesto', thumb: '/images/thumbnails/image2.png' },
  { time: 0.5, label: 'Methodology', thumb: '/images/thumbnails/image3.png' },
  { time: 0.75, label: 'Proof', thumb: '/images/thumbnails/image4.png' },
  { time: 1, label: 'CTA', thumb: '/images/thumbnails/image5.png' },
];

export function YouTubeScrubber() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration] = useState('04:20'); // The "Garden" duration
  const [hoverProgress, setHoverProgress] = useState<number | null>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const totalSeconds = 260; // 4:20 in seconds
      const currentSeconds = Math.floor(latest * totalSeconds);
      const mins = Math.floor(currentSeconds / 60);
      const secs = currentSeconds % 60;
      setCurrentTime(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrubberRef.current) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(1, x / rect.width));
    setHoverProgress(progress);
  };

  const activeChapter = CHAPTERS.reduce((prev, curr) => {
    return (Math.abs(curr.time - (hoverProgress || 0)) < Math.abs(prev.time - (hoverProgress || 0)) ? curr : prev);
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] h-12 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center px-4 md:px-8 group transition-all duration-300 hover:h-16">

      {/* Chapter Preview Popup */}
      <AnimatePresence>
        {hoverProgress !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -80, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{ left: `${hoverProgress * 100}%` }}
            className="absolute bottom-20 -translate-x-1/2 w-40 aspect-video bg-[#0a0a0a] border border-white/20 rounded-lg overflow-hidden shadow-2xl pointer-events-none"
          >
            <img src={activeChapter.thumb} className="w-full h-full object-cover opacity-80" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
              <span className="font-mono text-[10px] text-white uppercase tracking-widest">{activeChapter.label}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrubber Container */}
      <div
        ref={scrubberRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverProgress(null)}
        className="relative flex-1 h-1 bg-white/20 rounded-full overflow-visible cursor-pointer"
      >
        {/* Buffered (fake for effect) */}
        <div className="absolute top-0 left-0 h-full bg-white/10 w-[80%] rounded-full" />

        {/* Progress */}
        <motion.div
          style={{ scaleX }}
          className="absolute top-0 left-0 h-full bg-[#f0531c] w-full origin-left rounded-full shadow-[0_0_15px_rgba(240,83,28,0.5)]"
        />

        {/* Playhead Handle (visible on hover) */}
        <motion.div
          style={{ left: `${scrollYProgress.get() * 100}%` }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#f0531c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Time Display */}
      <div className="ml-6 font-mono text-xs text-white/50 flex items-center gap-2 select-none">
        <span className="text-white">{currentTime}</span>
        <span>/</span>
        <span>{duration}</span>
      </div>

      {/* Play/Settings Icons (Visual only) */}
      <div className="ml-auto hidden md:flex items-center gap-4 text-white/40">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 6v12l10-6z"/></svg>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M11 9H8v6h3m5-6h-3v6h3"/></svg>
      </div>

    </div>
  );
}
