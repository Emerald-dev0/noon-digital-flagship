import { motion } from 'framer-motion';

const SEARCH_PROOFS = [
  { q: 'appointment setting', client: 'Sales with Aqib', img: '/images/thumbnails/image9.png', color: '#8f56ff' },
  { q: 'tech sales course', client: 'Zakariya', img: '/images/thumbnails/image10.png', color: '#ff69c5' },
  { q: 'how to make miro boards', client: 'Noon Digital', img: '/images/thumbnails/image11.png', color: '#ffffff' },
  { q: 'arabic grammar for beginners', client: 'Markaz Shafi\'ee', img: '/images/thumbnails/image12.png', color: '#8f56ff' }
];

const VIDEOS = [
  {
    title: 'How This Arabic Coach Made $16K in 10 Days',
    client: 'Markaz Shafi\'ee',
    embedId: '-DjhO3maGVA',
    desc: 'The whole course given away free. A case study in building radical trust.'
  },
  {
    title: 'How to Craft a Killer Loom Application Video',
    client: 'Sales with Aqib',
    embedId: 'GWExSZNT5Ys',
    desc: 'Strategic content built to rank and convert in the appointment setting niche.'
  },
  {
    title: 'Arabic Vocabulary Is Hard Until You See This',
    client: 'Markaz Shafi\'ee',
    embedId: 'H2_V-pG7P7Y',
    desc: 'High-value educational content designed to solve a specific pain point.'
  },
  {
    title: 'If You Don\'t Understand Psychology, You Don\'t Understand Cold Calling',
    client: 'Zakariya',
    embedId: 'm9rU-Q7K6Zc',
    desc: 'Positioning a founder as a leading authority through deep-dive analysis.'
  }
];

export function Work() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">The Work</span>
          <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            Everything here<br />is <span className="text-[#8f56ff]">checkable.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            Channels you can watch, searches you can run, videos you can play. We would rather show you less and have all of it hold up.
          </p>
        </motion.div>
      </section>

      {/* Side-by-Side Search Proof */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-32 items-center mb-32">
             <div className="w-full lg:w-1/2">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">Proof of Ranking</span>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-10 italic">
                  Run the searches<br />yourself.
                </h2>
                <div className="space-y-6 font-body text-base md:text-lg text-white/60 leading-relaxed">
                   <p>Open YouTube and run these yourself. If one has slipped since we last checked, tell us and we will take it down rather than argue.</p>
                   <p className="text-[#8f56ff]">Search rankings are re-checked monthly.</p>
                </div>
             </div>
             <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SEARCH_PROOFS.map((item, i) => (
                  <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#8f56ff] transition-all duration-500">
                     <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest block mb-4 italic">Query</span>
                     <h3 className="font-display text-2xl uppercase tracking-tight mb-4">“{item.q}”</h3>
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">{item.client}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Visual Wall of Proof Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEARCH_PROOFS.map((item, i) => (
              <div key={i} className="aspect-[4/5] bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                 <img src={item.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Edits - Video Embeds Side-by-Side */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
           {VIDEOS.map((vid, i) => (
             <div key={i} className={`flex flex-col lg:flex-row gap-16 md:gap-32 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                   <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] mb-6 block">{vid.client}</span>
                   <h3 className="font-display text-2xl md:text-4xl lg:text-6xl uppercase tracking-tight mb-8 italic leading-none">{vid.title}</h3>
                   <p className="font-body text-base md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">{vid.desc}</p>
                   <a
                    href={`https://youtube.com/watch?v=${vid.embedId}`}
                    target="_blank"
                    className="inline-flex items-center gap-4 text-white hover:text-[#8f56ff] transition-colors group"
                   >
                    <span className="font-mono text-sm uppercase tracking-widest">Watch on YouTube</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#8f56ff] group-hover:border-[#8f56ff] transition-all">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </div>
                  </a>
                </div>
                <div className="w-full lg:w-1/2">
                   <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-glow group">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${vid.embedId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Packaging Archive */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter italic mb-4">Packaging we’ve shipped.</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Titles and thumbnails are where a search-led video wins or dies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {Array.from({ length: 18 }, (_, i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-lg border border-white/5 overflow-hidden group">
                 <img src={`/images/thumbnails/image${i + 1}.png`} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
