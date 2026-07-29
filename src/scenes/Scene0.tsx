import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Create a staggered array of all 18 thumbnails for the background collage
const THUMBNAILS = Array.from({ length: 18 }, (_, i) => `/images/thumbnail${i + 1}.png`);

export function Scene0() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax rates for different columns to create depth
  const yCol1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ['-15%', '-50%']);
  const yCol3 = useTransform(scrollYProgress, [0, 1], ['-5%', '-25%']);
  const yCol4 = useTransform(scrollYProgress, [0, 1], ['-20%', '-60%']);

  // Typography parallax
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full bg-black overflow-hidden" id="hero">
      
      {/* Immersive Thumbnail Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden mask-image-b pointer-events-none">
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/95 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px]" />

        {/* Thumbnail Columns Grid */}
        <div className="absolute inset-0 w-full h-[200vh] grid grid-cols-2 md:grid-cols-4 gap-4 p-4 opacity-50 transform rotate-[-2deg] scale-110 -translate-y-[10%]">
          
          <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4">
            {THUMBNAILS.slice(0, 5).map((src, i) => (
              <img key={i} src={src} alt="" className="w-full h-auto rounded-lg object-cover grayscale opacity-70" />
            ))}
          </motion.div>

          <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4">
            {THUMBNAILS.slice(5, 10).map((src, i) => (
              <img key={i} src={src} alt="" className="w-full h-auto rounded-lg object-cover grayscale opacity-50" />
            ))}
          </motion.div>

          <motion.div style={{ y: yCol3 }} className="hidden md:flex flex-col gap-4">
            {THUMBNAILS.slice(10, 15).map((src, i) => (
              <img key={i} src={src} alt="" className="w-full h-auto rounded-lg object-cover grayscale opacity-80" />
            ))}
          </motion.div>

          <motion.div style={{ y: yCol4 }} className="hidden md:flex flex-col gap-4">
            {THUMBNAILS.slice(15, 18).concat(THUMBNAILS.slice(0, 2)).map((src, i) => (
              <img key={i} src={src} alt="" className="w-full h-auto rounded-lg object-cover grayscale opacity-60" />
            ))}
          </motion.div>

        </div>
      </div>

      {/* Hero Typography */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 z-20 pointer-events-none">
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="max-w-6xl w-full flex flex-col items-center text-center pointer-events-auto mt-24 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-bold text-[18vw] sm:text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter text-white uppercase mix-blend-difference mb-4 md:mb-6">
              Stop renting<br />attention.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-accent italic text-4xl md:text-5xl text-[#ff69c5] mb-8 md:mb-12 mix-blend-screen">
              Own your audience.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-body font-medium text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12"
          >
            We transform stagnant channels into automated client acquisition engines. 
            No gimmicks. No viral chasing. Just search-first ecosystems that rank, nurture, and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a 
              href="#garden" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-display font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#8f56ff] hover:text-white transition-colors duration-300"
            >
              Enter The Garden
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
