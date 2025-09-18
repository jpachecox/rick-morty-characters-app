import { HTMLAttributes } from 'react';
import { headingStyles, colorVariants, marginOptions } from './Heading.styles';

export type HeadingLevel = keyof typeof headingStyles;
export type HeadingColor = keyof typeof colorVariants;
export type HeadingMargin = keyof typeof marginOptions;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Nivel del encabezado (h1, h2, h3, h4, h5, h6)
   * @default 'h2'
   */
  level?: HeadingLevel;
  
  /**
   * Variante de color del texto
   * @default 'secondary'
   */
  color?: HeadingColor;
  
  /**
   * Margen inferior del encabezado
   * @default 'md'
   */
  margin?: HeadingMargin;
  
  /**
   * Contenido del encabezado
   */
  children: React.ReactNode;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
}
