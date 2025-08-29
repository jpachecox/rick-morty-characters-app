import { HTMLAttributes, forwardRef } from 'react';
import {
  getCardClasses,
  getCardHeaderClasses,
  getCardBodyClasses,
  getCardFooterClasses
} from './Card.styles';
import {
  type CardProps,
} from './Card.types';

const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant = 'default',
  hover = false,
  padding = true,
  className,
  children,
  ...props
}, ref) => {
  const cardClasses = getCardClasses({
    variant,
    hover,
    padding,
    className,
  });

  return (
    <div ref={ref} className={cardClasses} {...props}>
      {children}
    </div>
  );
});

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
  className,
  children,
  ...props
}, ref) => {
  const headerClasses = getCardHeaderClasses(className);

  return (
    <div ref={ref} className={headerClasses} {...props}>
      {children}
    </div>
  );
});

// Usar HTMLAttributes<HTMLDivElement> directamente
const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
  className,
  children,
  ...props
}, ref) => {
  const bodyClasses = getCardBodyClasses(className);

  return (
    <div ref={ref} className={bodyClasses} {...props}>
      {children}
    </div>
  );
});

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({
  className,
  children,
  ...props
}, ref) => {
  const footerClasses = getCardFooterClasses(className);

  return (
    <div ref={ref} className={footerClasses} {...props}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';

export default Card;
export { CardHeader, CardBody, CardFooter };
