import { Scene0 } from '../scenes/Scene0';
import { Scene2 } from '../scenes/Scene2';
import { Scene7 } from '../scenes/Scene7'; // Contact/CTA
import { motion } from 'framer-motion';

export function Home() {
  return (
    <>
      <Scene0 />

      {/* Visual Manifesto Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">The Manifesto</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
              Straight Talk.<br />Zero Fluff.
            </h2>
            <p className="font-body text-xl text-white/60 leading-relaxed mb-8">
              Nobody has ever bought because of a transition. They buy because of the idea. We focus on the driver and the vehicle, not the paint job.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#f0531c] group-hover:border-[#f0531c] transition-all">
                  <span className="font-mono text-sm">01</span>
                </div>
                <span className="font-display text-2xl uppercase tracking-tight">Idea {'>'} Editing</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#f0531c] group-hover:border-[#f0531c] transition-all">
                  <span className="font-mono text-sm Balance">02</span>
                </div>
                <span className="font-display text-2xl uppercase tracking-tight">Search {'>'} Algorithm</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Anchor: Massive Thumbnail Grid Preview */}
          <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <img
               src="/images/thumbnails/image1.png"
               className="absolute inset-0 w-full h-full object-cover opacity-80"
               alt="Thumbnail Proof"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Featured Result</span>
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-white italic">"How to Make Miro Boards for Instagram"</p>
                <p className="text-[#f0531c] font-mono text-sm">#1 Search Result (15K+ Views)</p>
             </div>
          </div>
        </div>
      </section>

      <Scene2 />
      <Scene7 />
    </>
  );
}
