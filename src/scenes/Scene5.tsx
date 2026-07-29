import { motion } from 'framer-motion';

const OBJECTIONS = [
  {
    question: 'I don\'t have ideas to film.',
    answer: '"I can\'t go out and just film, because I don\'t have the ideas there." We hear this on every call. Ideation is the bottleneck, not filming. We build the pipeline, you just hit record.',
  },
  {
    question: 'If I give it all away free, why would anyone pay me?',
    answer: 'People don\'t buy information — they buy speed, systems, and a hand to hold. A client gave away a 1-hour course and did 16k in 10 days.',
  },
  {
    question: "I can't show lifestyle from a bedroom.",
    answer: '"I\'m in my room, bro." You don\'t need a skyline. You need a camera pointed at what you already do all day. A client\'s best content is literally his Zoom calls.',
  },
  {
    question: "More videos equals more growth, right?",
    answer: "Wrong. A client wanted 3 videos a week. We told him no — and then signed a $12k client from video #2. Four bangers a month beats 12 mediocre uploads.",
  },
  {
    question: "I don't have a studio setup.",
    answer: "Stop buying green screens. A client films in his bedroom with a window and an iPhone and out-converts the studio guys. Setup is not your problem.",
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
