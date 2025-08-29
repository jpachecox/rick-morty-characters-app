import { clsx } from 'clsx';
import { type CardProps } from './Card.types';

export const getCardClasses = ({ variant = 'default', hover = false, padding = true, className }: CardProps) => {
  const baseClasses = [
    'bg-white rounded-lg overflow-hidden',
    'transition-all duration-200'
  ];

  const variantClasses = {
    default: 'shadow-md',
    elevated: 'shadow-lg',
    outlined: 'border border-gray-200 shadow-sm'
  };

  const hoverClasses = hover ? [
    'hover:shadow-lg transform hover:scale-[1.02]',
    'cursor-pointer'
  ] : [];

  const paddingClasses = padding ? 'p-6' : '';

  return clsx(
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    paddingClasses,
    className
  );
};

export const getCardHeaderClasses = (className?: string) => {
  return clsx(
    'px-6 py-4 border-b border-gray-100',
    className
  );
};

export const getCardBodyClasses = (className?: string) => {
  return clsx(
    'px-6 py-4',
    className
  );
};

export const getCardFooterClasses = (className?: string) => {
  return clsx(
    'px-6 py-4 border-t border-gray-100 bg-gray-50',
    className
  );
};
