import { motion } from 'framer-motion';

const STAGES = [
  {
    num: '01',
    title: 'Fertilizer',
    time: '04:12',
    subtitle: 'Find the demand before you make anything.',
    desc: 'Before we create a single video, we identify what your ideal clients are actively searching for on YouTube, and build around those searches. These aren’t people scrolling. They are people looking for a solution right now. Instead of chasing prospects, we put your content where buyers are already looking.',
    image: '/images/thumbnails/image6.png'
  },
  {
    num: '02',
    title: 'Seeds',
    time: '08:31',
    subtitle: 'Getting found is only half of it.',
    desc: 'Someone finding your video does not make them a client. Once they arrive through a ranking video, we guide them deeper into the rest of your content on purpose. The longer someone stays in your world, the more they trust you. Trust is what converts.',
    image: '/images/thumbnails/image7.png'
  },
  {
    num: '03',
    title: 'Roots',
    time: '12:06',
    subtitle: 'This is the part that converts.',
    desc: 'Fertilizer gets you discovered. Seeds get people interested. Roots turn them into clients. Before someone buys, they only need to believe two things: that the method works, and that the person teaching it can help them.',
    image: '/images/thumbnails/image8.png'
  }
];

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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">The method</span>
          <h1 className="font-display font-bold text-[10vw] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            The YouTube<br />Garden<span className="text-[#f0531c]">™</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed">
            Most agencies make content and hope it gets discovered. We start by finding demand that already exists. Three stages, run in order.
          </p>
        </motion.div>
      </section>

      {/* The Stages */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
          {STAGES.map((stage, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-16 md:gap-32 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-display text-5xl md:text-7xl font-bold text-[#f0531c]/20">{stage.num}</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-sm text-[#f0531c]">{stage.time}</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">{stage.title}</h2>
                <h3 className="font-display text-xl md:text-2xl uppercase italic text-white/40 mb-8">{stage.subtitle}</h3>
                <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                   <img src={stage.image} alt={stage.title} className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Challenge, rather than a claim */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
              A challenge,<br />rather than a claim.
            </h2>
            <p className="font-body text-xl text-white/60">
              Search these four on YouTube. Our clients hold top-3 positions for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', query: 'appointment setting', niche: 'Appointment setting' },
              { num: '02', query: 'tech sales course', niche: 'Tech sales' },
              { num: '03', query: 'how to make miro boards', niche: 'Agency operations' },
              { num: '04', query: 'arabic grammar for beginners', niche: 'Arabic teaching' }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-black border border-white/10 rounded-2xl hover:border-[#f0531c] transition-all">
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest block mb-4">{item.num}</span>
                <h3 className="font-display text-xl uppercase tracking-tight mb-2 italic">“{item.query}”</h3>
                <p className="font-mono text-[10px] text-[#f0531c] uppercase tracking-widest">{item.niche}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roots Deep Dive */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-tighter mb-12">The Vehicle</h2>
              <p className="font-body text-white/40 mb-8 uppercase tracking-widest text-xs">The business model itself works.</p>
              <ul className="space-y-6">
                 {[
                   'How appointment setting works',
                   'Why organic content beats paid ads',
                   'How to land your first tech sales job',
                   'The exact system we use to generate leads'
                 ].map((li, i) => (
                   <li key={i} className="font-display text-2xl uppercase border-b border-white/5 pb-4 opacity-70">{li}</li>
                 ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-4xl uppercase tracking-tighter mb-12">The Driver</h2>
              <p className="font-body text-white/40 mb-8 uppercase tracking-widest text-xs">The person behind it can actually help me.</p>
              <ul className="space-y-6">
                 {[
                   'How I built a six-figure tutoring business',
                   'How this Arabic coach scaled to $16k/mo',
                   'Watch me book 5 meetings in 30 minutes'
                 ].map((li, i) => (
                   <li key={i} className="font-display text-2xl uppercase border-b border-white/5 pb-4 opacity-70">{li}</li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
