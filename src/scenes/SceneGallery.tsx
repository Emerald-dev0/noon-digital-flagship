import { motion } from 'framer-motion';
import { useRef } from 'react';

// Grab a slice of our massive image dump for the gallery
const GALLERY_IMAGES = Array.from({ length: 16 }, (_, i) => `/images/thumbnails/image${i + 1}.png`);
const ANALYTICS_IMAGES = Array.from({ length: 6 }, (_, i) => `/images/11-shaf-arabic-coach/image${i + 1}.png`);

const VIDEOS = [
  {
    title: "How This Arabic Coach Made $16K in 10 Days",
    url: "https://youtu.be/-DjhO3maGVA",
    thumbnail: "/images/11-shaf-arabic-coach/image14.png",
    label: "Case Study Breakdown"
  },
  {
    title: "How to Craft a Killer Loom Application Video",
    url: "https://www.youtube.com/watch?v=GWExSZNT5Ys",
    thumbnail: "/images/thumbnails/image3.png",
    label: "Client Content Example"
  }
];

export function SceneGallery() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  // We scatter the items randomly but predictably using fixed positions
  // to create the "canvas" feel.
  
  return (
    <section className="relative w-full h-[120vh] bg-[#050505] overflow-hidden cursor-grab active:cursor-grabbing flex flex-col" id="gallery">
      
      {/* Section Header (Fixed) */}
      <div className="absolute top-24 left-6 md:left-16 lg:left-24 z-50 pointer-events-none">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] block mb-4 font-bold drop-shadow-xl">
          The Archive (Drag to explore)
        </span>
        <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter text-white drop-shadow-2xl">
          Volume of Proof.
        </h2>
      </div>

      {/* The Draggable Boundary */}
      <div ref={constraintsRef} className="absolute inset-0 z-0">
        
        {/* The Massive Canvas that gets dragged */}
        <motion.div 
          drag 
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          initial={{ x: -200, y: -200 }}
          className="absolute top-0 left-0 w-[250vw] h-[250vh] md:w-[200vw] md:h-[200vh] bg-black/50"
        >
          {/* Background Grid Lines for the 'canvas' feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Group 1: Real YouTube Videos (Positioned prominently in the center-ish) */}
          {VIDEOS.map((vid, i) => (
            <a 
              key={`vid-${i}`} 
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: `${40 + i * 15}%`,
                left: `${30 + i * 20}%`,
              }}
              className="w-[300px] md:w-[450px] aspect-[9/16] rounded-2xl overflow-hidden group border border-white/20 bg-white/5 block shadow-2xl z-20 hover:z-50 hover:scale-105 transition-all duration-300"
            >
              <img 
                src={vid.thumbnail} 
                alt={vid.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-[#f0531c] flex items-center justify-center shadow-[0_0_40px_rgba(240,83,28,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f0531c] bg-black/80 px-3 py-1 rounded-full mb-3 inline-block">
                  {vid.label}
                </span>
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tighter leading-none drop-shadow-md">
                  {vid.title}
                </h3>
              </div>
            </a>
          ))}

          {/* Group 2: Scattered Thumbnails */}
          {GALLERY_IMAGES.map((src, i) => {
            // Predictable scatter logic
            const top = 10 + (i * 27) % 80;
            const left = 5 + (i * 31) % 85;
            
            return (
              <div 
                key={`img-${i}`} 
                style={{ top: `${top}%`, left: `${left}%` }}
                className="absolute w-[350px] md:w-[500px] aspect-video rounded-xl overflow-hidden border border-white/10 group shadow-xl z-10 hover:z-50 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <img 
                  src={src} 
                  alt="Thumbnail Proof" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                />
              </div>
            );
          })}

          {/* Group 3: Analytics Graphs */}
          {ANALYTICS_IMAGES.map((src, i) => {
            const top = 15 + (i * 47) % 75;
            const left = 15 + (i * 53) % 75;

            return (
              <div 
                key={`analytics-${i}`} 
                style={{ top: `${top}%`, left: `${left}%` }}
                className="absolute w-[250px] md:w-[350px] aspect-square rounded-xl overflow-hidden border border-white/10 p-4 bg-[#0a0a0a] flex items-center justify-center hover:bg-[#111] shadow-2xl z-10 hover:z-50 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <img 
                  src={src} 
                  alt="Analytics Proof" 
                  className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>
            );
          })}

        </motion.div>
      </div>

      {/* Decorative Gradient Overlay (so the edges fade out nicely) */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_100px_#050505]" />
      
    </section>
  );
}
