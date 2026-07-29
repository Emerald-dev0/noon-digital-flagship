import { motion } from 'framer-motion';

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <motion.img
        src="/images/logo1.png"
        alt="Noon Digital Logo"
        whileHover={{ scale: 1.05 }}
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
