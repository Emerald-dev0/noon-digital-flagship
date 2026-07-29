import { motion } from 'framer-motion';

export function YouTubeMock({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const isCompact = variant === 'compact';

  return (
    <div>
      <div className="flex items-center gap-2.5 mb-3 px-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 h-7 bg-white/10 rounded-lg flex items-center px-3">
          <svg className="w-3 h-3 text-white/40 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span className="text-[10px] font-mono text-white/30">youtube.com</span>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden mb-3">
        <div className="h-28 bg-gradient-to-r from-white/10 via-white/5 to-white/10 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-[0.03]">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
          <div className="text-center text-white relative z-10">
            <p className="font-display font-bold text-lg text-white/60">Your Brand</p>
            <p className="text-xs text-white/30">YouTube Channel</p>
          </div>
        </div>
        <div className="absolute -bottom-5 left-4">
          <div className="w-12 h-12 rounded-full bg-white border-2 border-white/10 shadow-sm flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white font-bold text-sm">
              YB
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 px-1 mb-3 text-[11px] text-white/30">
        <span className="font-semibold text-white/50">@yourbrand</span>
        <span>12.4K subscribers</span>
        <span>248 videos</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { title: 'How We Grew This SaaS 340%', views: '45K views', time: '2 days ago' },
          { title: 'YouTube Growth Masterclass', views: '23K views', time: '5 days ago' },
          { title: 'Client Results Pipeline', views: '18K views', time: '1 week ago' },
          { title: 'The YouTube Framework', views: '31K views', time: '2 weeks ago' },
        ].slice(0, isCompact ? 2 : 4).map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-video rounded-lg bg-white/[0.03] relative overflow-hidden mb-1.5 border border-white/5`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-4 h-4 text-white/80 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </motion.div>
              </div>
              <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] text-white/60 font-mono">
                {['12:34', '8:21', '15:07', '10:45'][idx]}
              </div>
            </div>
            <p className="text-[11px] font-semibold text-white/60 line-clamp-2 group-hover:text-white/80 transition-colors">{video.title}</p>
            <p className="text-[10px] text-white/25">{video.views} · {video.time}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
