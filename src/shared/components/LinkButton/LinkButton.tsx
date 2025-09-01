import { forwardRef } from 'react';
import Link from 'next/link';
import { getLinkButtonClasses } from './LinkButton.styles';
import { LinkButtonProps } from './LinkButton.types';

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}, ref) => {
  const linkButtonClasses = getLinkButtonClasses({
    variant,
    size,
    fullWidth,
    className,
  });

  return (
    <Link 
      {...props}
      className={linkButtonClasses}
      ref={ref}
    >
      {children}
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
