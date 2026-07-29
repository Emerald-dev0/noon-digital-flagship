import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const percent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const percentText = useTransform(percent, (v) => `${Math.round(v)}%`);

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-white/20 via-white/40 to-white/20 origin-left z-[60]"
    >
      <div className="absolute top-1 right-4 transform translate-y-[-50%] font-mono text-[10px] text-white/40 tracking-wider">
        <motion.span>{percentText}</motion.span>
      </div>
    </motion.div>
  );
}
