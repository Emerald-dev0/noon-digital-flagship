import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STAGES = [
  {
    num: '01',
    title: 'The Fertilizer (Discovery)',
    desc: 'Most agencies create content and hope it gets discovered. We start by finding the high-intent queries your ideal clients are actively typing into search engines. We target intent before we shoot a single frame.'
  },
  {
    num: '02',
    title: 'The Seeds (Nurture)',
    desc: 'Getting found is only step one. Once prospects discover you, we strategically guide them deeper into your content ecosystem. Interlocking case studies, tutorials, and framework breakdowns build trust automatically.'
  },
  {
    num: '03',
    title: 'The Roots (Conversion)',
    desc: 'Before someone buys, they need to believe the vehicle works and that you are the driver to get them there. Every piece of content dismantles these objections so prospects arrive on sales calls completely sold.'
  }
];

export function Scene2() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] w-full bg-black px-6 md:px-16 lg:px-24 py-16 md:py-32" id="methodology">
      
      {/* Intro Typographic statement */}
      <div className="max-w-4xl mx-auto mb-20 md:mb-40 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-accent italic text-3xl md:text-5xl lg:text-6xl text-white leading-tight"
        >
          A predictable system that moves high-ticket prospects from zero-awareness to completely sold before they ever book a call.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32 relative z-10">
        {STAGES.map((stage) => (
          <StageBlock key={stage.num} stage={stage} />
        ))}
      </div>
      
    </section>
  );
}

function StageBlock({ stage }: { stage: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className="relative flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
    >
      {/* Giant Background Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5">
        <span className="font-accent italic text-[30vw] md:text-[20vw] leading-none text-white tracking-tighter">
          {stage.num}
        </span>
      </div>

      {/* Left side: Heading */}
      <motion.div style={{ y }} className="w-full md:w-1/2 relative z-10">
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#8f56ff] block mb-4">Phase {stage.num}</span>
        <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight uppercase">
          {stage.title}
        </h2>
      </motion.div>

      {/* Right side: Body */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 relative z-10"
      >
        <p className="font-body text-xl md:text-2xl text-white/70 leading-relaxed">
          {stage.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}
