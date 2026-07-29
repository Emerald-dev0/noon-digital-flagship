import { motion } from 'framer-motion';

const STAGES = [
  {
    num: '01',
    title: 'Fertilizer',
    time: '04:12',
    subtitle: 'Find the demand before you make anything.',
    desc: 'We work out what your buyers are already typing into YouTube, then build around those searches. Not what worked for a channel in your niche. What your specific buyers are looking for, right now.',
    image: '/images/03-how-does-the-youtube-garden-work/image2.jpg',
    color: '#8f56ff'
  },
  {
    num: '02',
    title: 'Seeds',
    time: '08:31',
    subtitle: 'Give people a reason to stay.',
    desc: 'Case studies, teardowns, frameworks. Videos built to hold attention and earn the next click, so the channel compounds instead of spiking once and flattening.',
    image: '/images/03-how-does-the-youtube-garden-work/image3.jpg',
    color: '#ff69c5'
  },
  {
    num: '03',
    title: 'Roots',
    time: '12:06',
    subtitle: 'Sell the vehicle and the driver.',
    desc: 'Before anyone buys, they need to believe two things: that the model works, and that you are the person to run it with. Content that does both is what turns a subscriber into a booked call.',
    image: '/images/03-how-does-the-youtube-garden-work/image4.jpg',
    color: '#ffffff'
  }
];

export function Garden() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">The Method</span>
          <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            The YouTube<br /><span className="text-[#8f56ff]">Garden.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            Most agencies make content and hope it gets discovered. We start by finding demand that already exists. Three stages, run in order.
          </p>
        </motion.div>
      </section>

      {/* The Stages - Side-by-Side Visuals */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
          {STAGES.map((stage, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-16 md:gap-32 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-6 mb-10">
                  <span className="font-display text-7xl md:text-9xl font-bold opacity-10" style={{ color: stage.color }}>{stage.num}</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-sm uppercase tracking-widest text-white/40">{stage.time}</span>
                </div>
                <h2 className="font-display text-3xl md:text-6xl font-bold uppercase tracking-tight mb-4">{stage.title}</h2>
                <h3 className="font-display text-lg md:text-2xl uppercase italic text-[#ff69c5] mb-10 leading-tight">{stage.subtitle}</h3>
                <p className="font-body text-base md:text-xl text-white/60 leading-relaxed italic">
                  “{stage.desc}”
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-glow group">
                   <img src={stage.image} alt={stage.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <span className="font-mono text-xs font-bold" style={{ color: stage.color }}>Phase {stage.num}</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: 'The Fertilizer', items: ['Market identification', 'Intent search research', 'Keyword mapping', 'Search-first scripting'] },
             { title: 'The Seeds', items: ['Case studies', 'How-to tutorials', 'Framework breakdowns', 'Teardowns'] },
             { title: 'The Roots', items: ['Vehicle belief', 'Driver authority', 'Conversion architecture', 'Lead nurture'] }
           ].map((col, i) => (
             <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-3xl">
                <h4 className="font-display text-3xl uppercase tracking-tight mb-10 text-[#8f56ff]">{col.title}</h4>
                <ul className="space-y-4">
                   {col.items.map((item, idx) => (
                     <li key={idx} className="font-body text-lg text-white/60 flex gap-3">
                        <span className="text-[#ff69c5]">→</span>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* Final Call */}
      <section className="py-40 px-6 md:px-16 lg:px-24 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter italic mb-12 italic underline decoration-[#8f56ff] decoration-2 underline-offset-8">Research first, then cameras.</h2>
            <p className="font-body text-base md:text-xl text-white/40 mb-12">Stop guessing at ideas and start building a predictable system.</p>
            <a href="#book" className="inline-flex px-12 py-6 bg-white text-black font-display font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-[#8f56ff] hover:text-white transition-all transform hover:scale-105 shadow-glow">
              Book a call
            </a>
         </div>
      </section>
    </div>
  );
}
