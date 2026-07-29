import { motion } from 'framer-motion';

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <motion.span
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-3xl md:text-4xl font-display text-white group-hover:text-[#8f56ff] transition-colors"
      >
        ن
      </motion.span>
    </div>
  );
}
