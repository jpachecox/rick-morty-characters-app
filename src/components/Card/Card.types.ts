import { HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: boolean;
}
