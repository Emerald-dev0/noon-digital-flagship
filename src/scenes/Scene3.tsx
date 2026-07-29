import { motion } from 'framer-motion';
import { useRef, useState, MouseEvent } from 'react';

const PROOF_DATA = [
  {
    id: 'appointment',
    client: 'Appointment Clicks',
    niche: 'Appointment Setting',
    thumbnail: '/images/appointmentsetting.jpg',
    analytics: '/images/analytics1.png',
    headline: 'From Zero to #1 in Search',
    body: 'Targeting high-intent B2B buyers searching for appointment setters led to dominating the top spot and a 340% increase in qualified pipeline over 90 days.',
  },
  {
    id: 'techsales',
    client: 'Tech Sales Mentor',
    niche: 'Tech Sales Course',
    thumbnail: '/images/techsalecourse.jpg',
    analytics: '/images/analytics2.png',
    headline: '$120K Pipeline from ONE Video',
    body: 'Built an educational funnel for career switchers. By ranking for specific pain points, a single video generated six figures without spending a dime on ads.',
  },
  {
    id: 'miro',
    client: 'Miro Boards',
    niche: 'Instagram Strategy',
    thumbnail: '/images/miroboards.jpg',
    analytics: '/images/analytics3.png',
    headline: '15K Subs & Top-3 Domination',
    body: 'Template-driven tutorials completely captured tool-specific queries, securing top-3 rankings across 8 different high-volume search terms.',
  },
  {
    id: 'arabic',
    client: 'Arabic Grammar',
    niche: 'Language Education',
    thumbnail: '/images/arabicgrammar.jpg',
    analytics: '/images/analytics1.png',
    headline: '$40K Revenue on Autopilot',
    body: 'Implemented a progressive curriculum series. The channel grew a highly engaged 6K subscriber base that translated directly to massive course sales.',
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
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    />
                    
                    {/* Analytics floating overlay */}
                    <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-3/5 md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-floating border border-white/20 transform md:group-hover:-translate-y-4 transition-transform duration-500">
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
