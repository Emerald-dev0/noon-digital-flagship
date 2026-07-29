import { motion } from 'framer-motion';

const PRICING_TIERS = [
  {
    name: 'Test Video',
    price: '$597',
    subtitle: 'One-Time Project',
    description: 'Validate the YouTube ecosystem with minimal risk. We produce one high-converting piece of architecture.',
    features: [
      'Market Research & Topic Selection',
      'Full Script Writing',
      'Professional Editing',
      'Custom Thumbnail',
    ],
    theme: 'dark'
  },
  {
    name: 'Growth Consulting',
    price: '$3,000',
    subtitle: '6-Month Partnership',
    description: 'Ideal for businesses executing internally but needing high-level strategic direction and feedback.',
    features: [
      'Weekly 1-on-1 Strategy Calls',
      'Content Roadmap & Reviews',
      'Talent Placement Guidance',
      'Direct Access via Slack',
    ],
    theme: 'dark'
  },
  {
    name: 'Done-With-You',
    price: '$4k',
    subtitle: '+ 10% Rev Share (3-Month Minimum)',
    description: 'Lower upfront costs. You cover editor costs, we plug in the entire strategic machine.',
    features: [
      'Access to systems and expertise',
      'We train your internal team',
      'Significantly lower barrier to entry',
      'Shared incentive structure',
    ],
    theme: 'light'
  },
  {
    name: 'Full Service',
    price: '$7,000',
    subtitle: 'Paid In Full (3-Month Minimum)',
    description: 'We handle everything. You just hit record. A complete overhaul of your acquisition architecture.',
    features: [
      'Strategy & Ideation',
      'Research & Scripting',
      'Editing & Packaging',
      'Posting & SEO',
      'Custom Analytics Tracker',
    ],
    theme: 'brand'
  },
];

export function Scene6() {
  return (
    <section className="relative w-full px-6 md:px-16 lg:px-24 py-40 bg-[#050505] text-white" id="invest">
      <div className="w-full max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col items-center text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff69c5] block mb-6 font-bold">
            The Investment
          </span>
          <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[10vw] uppercase tracking-tighter leading-[0.85] mb-8">
            Select<br/>Your Scale.
          </h2>
        </motion.div>

        {/* Imposing Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PRICING_TIERS.map((tier, index) => {
            
            // Define styling based on theme
            let cardClasses = "border border-white/10 bg-white/[0.02]";
            let textClasses = "text-white";
            let accentClasses = "text-[#ff69c5]";
            
            if (tier.theme === 'light') {
              cardClasses = "bg-white border-none";
              textClasses = "text-black";
              accentClasses = "text-[#8f56ff]";
            } else if (tier.theme === 'brand') {
              cardClasses = "bg-[#8f56ff] border-none";
              textClasses = "text-white";
              accentClasses = "text-black";
            }

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col p-10 lg:p-14 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ${cardClasses}`}
              >
                <div className="flex-grow">
                  <h3 className={`font-display font-bold text-4xl uppercase tracking-tighter mb-2 ${textClasses}`}>
                    {tier.name}
                  </h3>
                  <p className={`font-mono text-[10px] uppercase tracking-widest mb-12 opacity-50 ${textClasses}`}>
                    {tier.subtitle}
                  </p>
                  
                  <div className="mb-12">
                    <span className={`font-accent italic text-6xl md:text-7xl block ${accentClasses}`}>
                      {tier.price}
                    </span>
                  </div>

                  <p className={`font-body text-lg leading-relaxed mb-12 opacity-80 ${textClasses}`}>
                    {tier.description}
                  </p>

                  <ul className="space-y-4 mb-16">
                    {tier.features.map((feature, i) => (
                      <li key={i} className={`font-body flex items-start gap-4 ${textClasses}`}>
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${tier.theme === 'brand' ? 'bg-black' : 'bg-[#ff69c5]'}`} />
                        <span className="opacity-70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm transition-colors duration-300
                  ${tier.theme === 'light' ? 'bg-black text-white hover:bg-[#ff69c5]' : 
                    tier.theme === 'brand' ? 'bg-black text-white hover:bg-white hover:text-black' : 
                    'bg-white text-black hover:bg-[#8f56ff] hover:text-white'}`}
                >
                  Apply for partnership
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
