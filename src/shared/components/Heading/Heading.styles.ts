export const headingStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-medium',
  h4: 'text-lg font-normal',
  h5: 'text-base font-light',
  h6: 'text-sm font-extralight'
} as const;

export const colorVariants = {
  primary: 'text-gray-900',
  secondary: 'text-gray-800',
  muted: 'text-gray-600',
  light: 'text-gray-500'
} as const;

export const marginOptions = {
  none: '',
  sm: 'mb-2',
  md: 'mb-4',
  lg: 'mb-6',
  xl: 'mb-8'
} as const;
