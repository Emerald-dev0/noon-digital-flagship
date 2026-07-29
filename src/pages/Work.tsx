import { motion } from 'framer-motion';

const VIDEOS = [
  { title: 'Arabic Vocabulary Is Hard Until You See This', client: 'Markaz Shafi\'ee', url: 'https://youtu.be/H2_V-pG7P7Y', thumb: '/images/thumbnails/image1.png' },
  { title: 'How to Craft a Killer Loom Application Video', client: 'Sales with Aqib', url: 'https://youtu.be/GWExSZNT5Ys', thumb: '/images/thumbnails/image2.png' },
  { title: 'If You Don\'t Understand Psychology, You Don\'t Understand Cold Calling', client: 'Zakariya', url: 'https://youtu.be/m9rU-Q7K6Zc', thumb: '/images/thumbnails/image3.png' },
  { title: 'Report My Channel If This Method Doesn\'t Sign You A Client', client: 'Client Channel', url: 'https://youtu.be/example', thumb: '/images/thumbnails/image4.png' },
];

export function Work() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Proof of Concept</span>
          <h1 className="font-display font-bold text-[10vw] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            Everything here<br />is checkable.
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed">
            Channels you can watch, searches you can run, videos you can play. We would rather show you less and have all of it hold up.
          </p>
        </motion.div>
      </section>

      {/* Ranking on search (Visual Receipts) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 italic underline decoration-[#f0531c] decoration-2 underline-offset-8">Search it yourself.</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Four client videos in the top three.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {[
               { q: "appointment setting", client: "Sales with Aqib", img: "/images/thumbnails/image9.png" },
               { q: "tech sales course", client: "Zakariya", img: "/images/thumbnails/image10.png" },
               { q: "how to make miro boards", client: "Noon Digital", img: "/images/thumbnails/image11.png" },
               { q: "arabic grammar for beginners", client: "Markaz Shafi'ee", img: "/images/thumbnails/image12.png" }
             ].map((item, i) => (
               <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/50">
                  <img src={item.img} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                     <span className="font-mono text-[10px] text-[#f0531c] uppercase tracking-widest mb-2">Query</span>
                     <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-4 italic">“{item.q}”</h3>
                     <p className="font-body text-sm text-white/40 uppercase tracking-widest">{item.client}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Highlight Edits (Visual Archive) */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-6">Highlight edits.</h2>
              <p className="font-body text-lg text-white/50">Not showreels cut for this page. Whole videos, published by the clients, doing the job they were made for.</p>
            </div>
            <a href="https://youtube.com/@mubexpr" className="font-mono text-sm uppercase tracking-widest text-[#f0531c] hover:text-white transition-colors">See all channels →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((vid, i) => (
              <a
                key={i}
                href={vid.url}
                target="_blank"
                className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl block"
              >
                 <img src={vid.thumb} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <span className="font-mono text-[10px] text-[#f0531c] uppercase tracking-widest mb-2">{vid.client}</span>
                    <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight group-hover:text-white transition-colors leading-none">{vid.title}</h3>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#f0531c] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The Receipts (Case Study) */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-white/5 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Case Study</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-8">
              He gave the whole course away free. Then did $16k in ten days.
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed mb-8">
              This is the objection we hear most, answered by the person it happened to, on his own channel rather than ours.
            </p>
            <a href="https://youtu.be/-DjhO3maGVA" target="_blank" className="inline-flex px-8 py-4 bg-[#f0531c] text-white font-display font-bold uppercase tracking-widest rounded-xl hover:bg-[#ff6c3a] transition-all">Watch Case Study</a>
          </div>
          <div className="relative aspect-[9/16] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
             <img src="/images/11-shaf-arabic-coach/image14.png" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </section>

      {/* Branding / Packaging */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 italic">Packaging we’ve shipped.</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Titles and thumbnails are where a search-led video wins or dies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                 <img src={`/images/thumbnails/image${i + 1}.png`} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
