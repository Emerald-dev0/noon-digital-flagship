import { motion } from 'framer-motion';

export function Scene1() {
  return (
    <section className="relative w-full bg-black py-40 px-6 md:px-16 lg:px-24" id="origin">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff69c5] block mb-12">
            The Origin
          </span>

          <h2 className="font-accent italic text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white max-w-5xl mb-12">
            "358 subscribers. 0 booked calls. Editing for a sales coach. Begged for a shot. Closed 3 months. Then an accident took it all."
          </h2>

          <div className="w-24 h-[1px] bg-white/20 mb-12" />

          <p className="font-body text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed mb-12">
            Went back to editing. Built content strategy. Then YouTube strategy. 
            That’s when I realized: most agencies just post videos. 
            We build predictable client acquisition systems. Everything changed.
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8f56ff] to-[#ff69c5] flex items-center justify-center opacity-80">
              <span className="font-display font-bold text-white text-xl">MJ</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              Mubarak Jimoh — Founder
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
