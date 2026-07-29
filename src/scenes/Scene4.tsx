import { motion } from 'framer-motion';

const SHIFT_REASONS = [
  {
    number: 'I',
    headline: 'Your ads convert better.',
    body: 'When someone sees your ad and searches your name, they find a channel full of content that builds trust instantly. The ad gets the click. YouTube closes the deal.',
  },
  {
    number: 'II',
    headline: 'Referrals close faster.',
    body: 'When someone gets referred to you and watches 30 minutes of your content before the call, they show up already sold. Your network becomes exponentially more powerful.',
  },
  {
    number: 'III',
    headline: 'Your prices go up.',
    body: 'When you are the most visible, most trusted authority in your space, raising your prices stops being a conversation. It becomes obvious.',
  },
  {
    number: 'IV',
    headline: 'Recruiting gets easier.',
    body: 'New team members, contractors, and partners can watch your content and understand exactly who you are before they ever speak to you.',
  },
  {
    number: 'V',
    headline: 'It never expires.',
    body: 'A post on Instagram is dead in 48 hours. A video on YouTube is still generating leads two years after you filmed it. The work compounds.',
  },
];

export function Scene4() {
  return (
    <section className="relative min-h-[150vh] w-full px-6 md:px-16 lg:px-24 py-32 bg-[#ffffff] text-black" id="shift">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-24">
        
        {/* Left: Sticky Massive Typography */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-40 self-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#8f56ff] block mb-6 font-bold">
              The Paradigm Shift
            </span>
            <h2 className="font-display font-bold text-6xl md:text-8xl leading-[0.85] tracking-tighter uppercase mb-8">
              Why <br/>YouTube <br/>
              <span className="font-accent italic text-[#8f56ff] lowercase">changes everything.</span>
            </h2>
            <p className="font-body text-xl text-black/60 leading-relaxed max-w-md">
              Five reasons the Garden outperforms every other channel. It’s the difference between renting attention and owning it.
            </p>
          </motion.div>
        </div>

        {/* Right: Stark, minimal list */}
        <div className="w-full lg:w-1/2 flex flex-col gap-16 pt-24 lg:pt-0">
          {SHIFT_REASONS.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <span className="font-accent italic text-4xl text-[#ff69c5] mb-4">{reason.number}.</span>
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter mb-4 group-hover:text-[#8f56ff] transition-colors duration-500">
                {reason.headline}
              </h3>
              <p className="font-body text-lg text-black/70 leading-relaxed max-w-md">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
