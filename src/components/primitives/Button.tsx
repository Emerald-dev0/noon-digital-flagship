import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, type = 'button', onClick, fullWidth }, ref) => {
    const base = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-subtle hover:shadow-card',
      secondary: 'bg-white text-text-primary border border-surface-border hover:border-brand-200 hover:bg-brand-50 shadow-subtle',
      accent: 'bg-accent-pink text-white hover:bg-accent-pink-dark shadow-subtle hover:shadow-card',
      ghost: 'text-text-secondary hover:text-brand-600 hover:bg-brand-50',
    };

    const sizes = {
      sm: 'h-9 px-4 text-body-sm',
      md: 'h-11 px-6 text-body-md',
      lg: 'h-13 px-8 text-body-md',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
