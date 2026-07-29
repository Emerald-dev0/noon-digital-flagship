import { motion } from 'framer-motion';

const OBJECTIONS = [
  {
    question: 'Is this halal?',
    answer: 'Absolutely. Mubarak speaks about his Islam openly. Content is transparent, honest, and rooted in real values. No manipulation, no hype.',
  },
  {
    question: "I don't want to be a creator.",
    answer: "You won't be. You're a business owner using YouTube as a lever. We handle strategy, research, scripting, editing, and packaging. You just record.",
  },
  {
    question: "I can't show my face.",
    answer: "We build high-converting faceless channels using screen recordings, motion graphics, and voiceover. Dense, valuable content — not a face.",
  },
  {
    question: "What if it doesn't work?",
    answer: "Start with the YouTube Test Video. It validates the approach and proves the concept before committing to a larger retainer. Zero risk.",
  },
  {
    question: "I don't have a studio.",
    answer: "A client films in his bedroom with an iPhone and out-converts the studio guys. Setup is not your problem — the blank page is. We solve the blank page.",
  }
];

export function Scene5() {
  return (
    <section className="relative w-full px-6 md:px-16 lg:px-24 py-32 bg-[#8f56ff] text-white" id="realtalk">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Massive pull quote style header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 block mb-6 font-bold">
            The Real Talk
          </span>
          <h2 className="font-accent italic text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto">
            "We took the exact objections from 13 sales calls and put them right here."
          </h2>
        </motion.div>

        {/* Minimalist Grid of Objections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {OBJECTIONS.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/20 pt-8"
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tighter mb-4">
                {item.question}
              </h3>
              <p className="font-body text-lg text-white/80 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
