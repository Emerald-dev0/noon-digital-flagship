import { motion } from 'framer-motion';
import { Scene3 } from '../scenes/Scene3';
import { Scene4 } from '../scenes/Scene4';

export function Garden() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">The Methodology</span>
          <h1 className="font-display font-bold text-[10vw] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            The YouTube<br />Garden<span className="text-[#f0531c]">™</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed">
            A three-stage ecosystem designed to turn search intent into high-ticket client acquisition.
          </p>
        </motion.div>
      </section>

      {/* The Visual Chapters */}
      <Scene3 />

      {/* Why YouTube Visuals */}
      <Scene4 />

      {/* Visual Anchor: The Tools of the Trade */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-white/5 rounded-2xl border border-white/10 overflow-hidden group relative"
              >
                <img
                  src={`/images/thumbnails/image${i + 5}.png`}
                  alt=""
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
             <p className="font-mono text-xs text-white/30 uppercase tracking-[0.2em]">Visual Evidence Archive 0{'>'}8</p>
          </div>
        </div>
      </section>
    </div>
  );
}
