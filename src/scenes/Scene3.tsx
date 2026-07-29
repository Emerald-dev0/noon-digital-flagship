import { motion } from 'framer-motion';
import { useRef, useState, MouseEvent } from 'react';

const PROOF_DATA = [
  {
    id: 'arabic',
    client: 'Shaf',
    niche: 'Arabic Coach',
    thumbnail: '/images/11-shaf-arabic-coach/image14.png',
    analytics: '/images/11-shaf-arabic-coach/image22.png',
    headline: '16K in 10 Days from One Course',
    body: 'We didn\'t build a massive funnel. We simply positioned the right content where high-intent buyers were already looking. The result? Pure inbound conversion.',
    avatar: '/people/avatar-image11.png'
  },
  {
    id: 'techsales',
    client: 'Tech Sales Mentor',
    niche: 'Tech Sales Course',
    thumbnail: '/images/03-how-does-the-youtube-garden-work/image1.jpg',
    analytics: '/images/03-how-does-the-youtube-garden-work/image4.jpg',
    headline: 'Dominated The Search Engine',
    body: 'By building out the "YouTube Garden," we captured the exact queries their ideal clients were searching for. Now they rank top-3 for their most profitable keywords.',
    avatar: '/people/avatar-image12.png'
  },
  {
    id: 'appointment',
    client: 'B2B Founder',
    niche: 'Appointment Setting',
    thumbnail: '/images/thumbnails/image14.png',
    analytics: '/images/thumbnails/image1.png',
    headline: 'Zero Outbound. Pure Inbound.',
    body: 'When your content system dismantles objections before the call, you stop having to sell. They show up asking "how do we start?".',
    avatar: '/people/avatar-image7.png'
  }
];

export function Scene3() {
  return (
    <section className="relative w-full bg-[#050505] py-20 md:py-32 px-6 md:px-16 lg:px-24" id="evidence">
      
      {/* Header Block */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff69c5] block mb-4">
          The Evidence
        </span>
        <h2 className="font-display font-bold text-5xl md:text-8xl leading-none uppercase text-white">
          Real results.
        </h2>
      </div>

      {/* Staggered Vertical Stack */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-48">
        {PROOF_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              
              {/* Image Side with 3D Tilt Hover */}
              <div className="w-full md:w-1/2 perspective-1000">
                <TiltCard>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img 
                      src={item.thumbnail} 
                      alt={item.client} 
                      className="w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-80 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700" 
                    />
                    
                    {/* Analytics floating overlay */}
                    <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-3/5 md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-floating border border-white/20 transform md:group-hover:-translate-y-4 transition-transform duration-500 block">
                      <img src={item.analytics} className="w-full h-full object-cover" alt="Analytics" />
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-accent italic text-3xl text-[#8f56ff]">0{index + 1}</span>
                  <div className="h-[1px] w-12 bg-white/20" />
                  {item.avatar && (
                    <img src={item.avatar} alt={item.client} className="w-8 h-8 rounded-full border border-white/20 object-cover" />
                  )}
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">{item.client}</span>
                </div>
                <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-white mb-6">
                  {item.headline}
                </h3>
                <p className="font-body text-lg text-white/70 leading-relaxed max-w-md">
                  {item.body}
                </p>
              </div>

            </motion.div>
          )
        })}
      </div>
    </section>
  );
}

// Reusable 3D Tilt Card Component
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Tilt limits
    setRotateX(yPct * -15);
    setRotateY(xPct * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="w-full cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
