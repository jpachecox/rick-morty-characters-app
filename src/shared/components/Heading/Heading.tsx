import React from 'react';
import { HeadingProps } from './Heading.types';
import { headingStyles, colorVariants, marginOptions } from './Heading.styles';

const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  children,
  className = '',
  color = 'secondary',
  margin = 'md',
  ...props
}) => {
  // Validar que el level sea válido
  const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
  const HeadingTag = validLevels.includes(level) ? level : 'h2';
  
  // Construir clases CSS
  const baseClasses = headingStyles[HeadingTag];
  const colorClasses = colorVariants[color];
  const marginClasses = marginOptions[margin];
  
  const finalClassName = [
    baseClasses,
    colorClasses,
    marginClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <HeadingTag className={finalClassName} {...props}>
      {children}
    </HeadingTag>
  );
};

// Export default para consistencia con otros componentes
export default Heading;
