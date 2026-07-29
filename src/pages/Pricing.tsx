import { Scene6 } from '../scenes/Scene6';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Pricing() {
  const [fitScore, setFitScore] = useState(0);
  const [step, setStep] = useState(0);

  const questions = [
    { q: "Do you have a validated high-ticket offer?", weight: 40 },
    { q: "Can someone on your team be on camera?", weight: 30 },
    { q: "Are you willing to commit to 3 months of consistency?", weight: 30 }
  ];

  const handleAnswer = (answer: boolean) => {
    if (answer) setFitScore(prev => prev + questions[step].weight);
    if (step < questions.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setStep(prev => prev + 1); // Go to results
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">The Entry Points</span>
          <h1 className="font-display font-bold text-[10vw] md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            Invest in the<br />Ecosystem.
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed">
            Transparent pricing. No long-term contracts. Just results.
          </p>
        </motion.div>
      </section>

      {/* The Fit Check Terminal (Unorthodox Interaction) */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
             <span className="ml-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">fit_check.sh</span>
          </div>
          <div className="p-8 md:p-12 font-mono">
             {step < questions.length ? (
               <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="text-[#f0531c]">root:~$</span>
                    <span className="text-white/80">{questions[step].q}</span>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="px-6 py-2 border border-white/20 rounded hover:bg-white/10 transition-colors uppercase text-sm"
                    >
                      [ YES ]
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="px-6 py-2 border border-white/20 rounded hover:bg-white/10 transition-colors uppercase text-sm"
                    >
                      [ NO ]
                    </button>
                  </div>
               </div>
             ) : (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="space-y-6"
               >
                  <div className="flex gap-4">
                    <span className="text-[#f0531c]">root:~$</span>
                    <span className="text-white">Calculating compatibility...</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${fitScore}%` }}
                      className="h-full bg-[#f0531c]"
                    />
                  </div>
                  <div className="text-2xl text-white uppercase font-display italic">
                    {fitScore >= 70 ? "RESULT: HIGH COMPATIBILITY. PROCEED TO BOOKING." : "RESULT: LOW COMPATIBILITY. WATCH MORE CONTENT."}
                  </div>
                  {fitScore >= 70 && (
                    <a href="#contact" className="inline-block mt-4 text-[#f0531c] underline underline-offset-8 decoration-2 hover:text-white transition-colors">
                      {'>'} INITIATE CONTACT
                    </a>
                  )}
               </motion.div>
             )}
          </div>
        </div>
      </section>

      {/* The Tiers (Scene 6) */}
      <Scene6 />

      {/* Visual Anchor: The Deliverables */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl uppercase tracking-tighter mb-4">What you actually get.</h2>
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">The Visual Output</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[16/10] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end group hover:border-[#f0531c] transition-all">
               <img src="/images/thumbnails/image10.png" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
               <span className="relative z-10 font-mono text-[10px] text-[#f0531c] uppercase mb-2">Deliverable 01</span>
               <h3 className="relative z-10 font-display text-2xl uppercase italic">Market-Validated Topic Selection</h3>
            </div>
            <div className="aspect-[16/10] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end group hover:border-[#f0531c] transition-all">
               <img src="/images/thumbnails/image11.png" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
               <span className="relative z-10 font-mono text-[10px] text-[#f0531c] uppercase mb-2">Deliverable 02</span>
               <h3 className="relative z-10 font-display text-2xl uppercase italic">Conversion-First Scripting</h3>
            </div>
            <div className="aspect-[16/10] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end group hover:border-[#f0531c] transition-all">
               <img src="/images/thumbnails/image12.png" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
               <span className="relative z-10 font-mono text-[10px] text-[#f0531c] uppercase mb-2">Deliverable 03</span>
               <h3 className="relative z-10 font-display text-2xl uppercase italic">High-CTR Packaging (Design)</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
