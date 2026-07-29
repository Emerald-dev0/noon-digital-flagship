import { motion } from 'framer-motion';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'purple' | 'amber' | 'default';
};

export function Badge({ children, variant = 'purple' }: BadgeProps) {
  const variants = {
    purple: 'label-badge',
    amber: 'label-badge',
    default: 'label-badge',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
