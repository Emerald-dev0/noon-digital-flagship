import { motion } from 'framer-motion';

export function Scene7() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#050505] overflow-hidden">
      {/* Big bold text background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
        <h2 className="font-display font-black text-[20vw] leading-none whitespace-nowrap text-white/50">
          NOON DIGITAL
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-6 lg:col-span-5">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-display-lg md:text-display-xl text-white mb-6 leading-[0.95]"
            >
              Ready to plant<br/>the seeds?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-body-lg text-white/50 max-w-md mb-10"
            >
              Stop renting attention. Build an ecosystem that ranks, nurtures, and converts long after you hit publish.
            </motion.p>
            <motion.a
              href="#invest"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors"
            >
              Book a Strategy Call
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </div>

          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 flex flex-col sm:flex-row justify-between gap-12 md:gap-8 pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">Navigation</p>
              <ul className="space-y-4">
                {['Challenge', 'Origin', 'System', 'Evidence', 'Shift', 'Investment'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="font-body text-body-md text-white/60 hover:text-white hover:underline decoration-brand-500 underline-offset-4 transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">Socials</p>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.youtube.com/@mubexpr" target="_blank" rel="noopener noreferrer" className="font-body text-body-md text-white/60 hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mubexpr/" target="_blank" rel="noopener noreferrer" className="font-body text-body-md text-white/60 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-body-md text-white/60 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} Noon Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Taking new clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
