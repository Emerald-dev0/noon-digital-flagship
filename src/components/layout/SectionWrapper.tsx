import { motion } from 'framer-motion';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  );
}
