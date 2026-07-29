import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Run by Mubarak Jimoh.</span>
          <h1 className="font-display font-bold text-[10vw] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            The Driver behind<br />the Garden.
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed">
            You are going to hand someone your channel, your face and a quarter of your marketing budget. It is fair to want to know who that is first.
          </p>
        </motion.div>
      </section>

      {/* The Story & Visual Anchor */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl uppercase mb-6 tracking-tight">The Name</h2>
              <p className="font-body text-lg text-white/60 leading-relaxed">
                Noon is the Arabic letter ن. It is the mark at the top of this page, and it is the whole branding budget, which felt about right.
              </p>
            </div>
            <div>
              <h2 className="font-display text-4xl uppercase mb-6 tracking-tight">How this started</h2>
              <div className="space-y-4 font-body text-lg text-white/60 leading-relaxed">
                <p>I started out editing. My first client was a sales coach, so I bought his course, went through it, and asked him for a shot. He put me on a content agency offer and I closed for three months.</p>
                <p>Then I had an accident and stopped. Went back to editing. Then Instagram content strategy. Then YouTube strategy, which is where I have been since.</p>
                <p>The reason I started at all was not a calling. I was sick of not having money to do anything.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            {/* Placeholder for Mubarak's Portrait if available, otherwise a strong visual anchor */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img
              src="/images/thumbnails/image20.png"
              alt="Mubarak Jimoh"
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute bottom-10 left-10 z-20">
               <span className="font-mono text-xs uppercase tracking-widest text-[#f0531c] mb-2 block">Founder</span>
               <h3 className="font-display text-3xl font-bold uppercase tracking-tight">Mubarak Jimoh</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl uppercase tracking-tighter mb-4">How I work</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Honesty, transparency, work no matter what.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="font-display text-2xl uppercase mb-4 text-[#f0531c]">No Larping</h3>
              <p className="font-body text-white/60 leading-relaxed italic">
                "I don’t manifest. I don’t larp. If a channel is not working I will say so, and if the research says the demand is not there I will tell you before you have paid for a quarter of videos."
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="font-display text-2xl uppercase mb-4 text-[#f0531c]">The Moat</h3>
              <p className="font-body text-white/60 leading-relaxed italic">
                "What I am actually good at is research. Understanding what people are searching for, why, and what a video has to do to be the one they pick. That is the whole moat."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Obvious Question */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-8">
            “How is your own channel doing, then?”
          </h2>
          <p className="font-body text-xl text-white/60 leading-relaxed mb-12">
            Fair question to ask someone selling YouTube strategy, and the honest answer is: early. I ran the method for clients before running it properly for myself. Common mistake. Still a mistake. It is being fixed in public rather than quietly.
          </p>
          <div className="flex justify-center gap-8">
            <a href="https://youtube.com/@mubexpr" target="_blank" className="font-mono text-sm uppercase tracking-widest text-[#f0531c] hover:text-white transition-colors underline decoration-2 underline-offset-8">YouTube</a>
            <a href="https://instagram.com/mubexpr" target="_blank" className="font-mono text-sm uppercase tracking-widest text-[#f0531c] hover:text-white transition-colors underline decoration-2 underline-offset-8">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  );
}
