import { SceneGallery } from '../scenes/SceneGallery';
import { Scene5 } from '../scenes/Scene5';
import { motion } from 'framer-motion';

export function Work() {
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Proof of Concept</span>
          <h1 className="font-display font-bold text-[10vw] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            The Wall of<br />Evidence.
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed">
            Real search rankings. Real channels. Real client revenue. No hype, just data.
          </p>
        </motion.div>
      </section>

      {/* The Draggable Gallery (Interactive Visual) */}
      <SceneGallery />

      {/* The Ranking Proof (Structured Visual) */}
      <Scene5 />

      {/* Unorthodox Visual: The "Search Result" Mockup */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl uppercase italic mb-4">"Search it yourself."</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Client videos hold top-3 for these queries:</p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { query: 'Appointment Setting', position: '1st', color: '#f0531c' },
              { query: 'Tech Sales Course', position: '2nd', color: '#8f56ff' },
              { query: 'Arabic Grammar For Beginners', position: '3rd', color: '#ff69c5' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-between hover:bg-white/[0.05] transition-all overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="font-mono text-4xl md:text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">#{item.position}</span>
                  <span className="font-display text-2xl md:text-4xl uppercase tracking-tight">{item.query}</span>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[#f0531c]">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">Live Link</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
