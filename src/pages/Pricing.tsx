import { motion } from 'framer-motion';

const OFFERS = [
  {
    name: 'YouTube Test Video',
    price: '$597',
    period: 'One-time',
    tagline: 'Validate YouTube as a client acquisition channel with minimal risk.',
    includes: ['Market research', 'Topic selection & positioning', 'Full script writing', 'Professional video editing', 'Custom thumbnail design', 'YouTube SEO optimisation'],
    cta: 'Start with a test video',
    popular: true
  },
  {
    name: 'Growth Consulting',
    price: '$3,000',
    period: '6-month contract',
    tagline: 'You want to execute internally while getting direct guidance. You execute, we consult.',
    includes: ['Weekly 1-on-1 strategy calls', 'Content roadmap', 'Channel reviews', 'Packaging feedback', 'Content strategy', 'Access to all training modules & AI templates'],
    cta: 'Talk about Consulting',
    popular: false
  },
  {
    name: 'Done With You',
    price: '$4,000',
    period: '3-month min + 10% rev share',
    tagline: 'Lower upfront cost + our systems and team running behind it.',
    includes: ['Our systems & expertise applied', 'We source, train & manage the team', 'Quality-control on all edits', '10% of cash collected via YouTube'],
    cta: 'Talk about DWY',
    popular: false
  },
  {
    name: 'Full Service',
    price: '$7,000',
    period: '3-month min contract',
    tagline: 'You want to show up, talk, and have everything else handled.',
    includes: ['Strategy & ideation', 'Research & scripting', 'Slides & presentation prep', 'Full production (Editing/Design)', 'Channel management', 'Monthly analytics & Weekly calls'],
    cta: 'Talk about Full Service',
    popular: false
  }
];

export function Pricing() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Working together</span>
          <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
            Four ways in.<br />Prices on the page.
          </h1>
          <p className="font-body text-base md:text-xl text-white/60 leading-relaxed">
            Every engagement runs on the same method. What changes is how much of it we do and how much you do.
          </p>
        </motion.div>
      </section>

      {/* The Tiers */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OFFERS.map((offer, i) => (
            <div key={i} className={`p-8 rounded-3xl border flex flex-col h-full ${offer.popular ? 'bg-white/10 border-[#f0531c] shadow-[0_0_40px_rgba(240,83,28,0.2)]' : 'bg-white/5 border-white/10'}`}>
              <div className="mb-8">
                <h3 className="font-display text-2xl uppercase tracking-tight mb-2">{offer.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold">{offer.price}</span>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{offer.period}</span>
                </div>
              </div>
              <p className="font-body text-sm text-white/50 mb-8 leading-relaxed italic">“{offer.tagline}”</p>
              <div className="space-y-4 mb-12 flex-1">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">What's included</p>
                {offer.includes.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-sm font-body text-white/70">
                    <span className="text-[#f0531c]">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-xl font-display font-bold uppercase tracking-widest transition-all ${offer.popular ? 'bg-[#f0531c] text-white hover:bg-[#ff6c3a]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {offer.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Before you ask */}
      <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#f0531c] mb-6 block">Before you ask</span>
            <h2 className="font-display text-3xl md:text-6xl font-bold uppercase tracking-tighter mb-4">The things people<br />push back on.</h2>
          </div>

          <div className="space-y-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { q: "If I give the good stuff away free, why would anyone pay me?", a: "This assumes people buy information. They don't. They buy speed, a system, and someone to hold the thing steady while they do it. Giving away the what is what proves you can be trusted with the how." },
              { q: "I'm not a natural at coming up with ideas.", a: "Good, because that is the part we take off you. Ideation is not a personality trait, it is a research job, and it is the specific reason most people who know they should be on YouTube still aren't." },
              { q: "I need a better setup first. Studio, lighting, etc.", a: "Every version of 'once I have a proper setup' is a reason to not start. Your room is fine. A search-led video that answers a real question beats a studio-shot video that doesn't." },
              { q: "How long until this actually books calls?", a: "Longer than paid ads and shorter than SEO. The first quarter is mostly building the foundation. If you need pipeline this month, buy ads instead." }
            ].map((item, i) => (
              <details key={i} className="group bg-black">
                <summary className="p-8 flex items-center justify-between cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
                  <span className="font-display text-xl md:text-2xl uppercase tracking-tight pr-8">{item.q}</span>
                  <span className="font-mono text-2xl text-[#f0531c] transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-8 pb-8 font-body text-lg text-white/50 leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter italic mb-12 italic underline decoration-[#f0531c] decoration-2 underline-offset-8">Research first, then cameras.</h2>
            <p className="font-body text-lg md:text-xl text-white/40 mb-12">YouTube strategy for businesses that already know how to sell.</p>
            <button className="px-12 py-6 bg-white text-black font-display font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-[#f0531c] hover:text-white transition-all transform hover:scale-105 shadow-2xl">
              Book a call
            </button>
         </div>
      </section>
    </div>
  );
}
