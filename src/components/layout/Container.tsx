import { forwardRef } from 'react';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`w-full max-w-content mx-auto px-5 md:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = 'Container';
