import { clsx } from 'clsx';
import { type InputProps } from './Input.types';

export const getInputClasses = (props: InputProps, isFocused: boolean) => {
  const { variant = 'default', fullWidth = false, leftIcon, rightIcon, error, className } = props;

  const baseInputClasses = [
    'block w-full px-3 py-2.5',
    'border rounded-lg',
    'transition-all duration-200',
    'placeholder:text-gray-400',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ];

  const variantClasses = {
    default: [
      'bg-white border-gray-300',
      'focus:border-blue-500 focus:ring-blue-500'
    ],
    filled: [
      'bg-gray-50 border-gray-200',
      'focus:bg-white focus:border-blue-500 focus:ring-blue-500'
    ]
  };

  const errorClasses = error ? [
    'border-red-300 focus:border-red-500 focus:ring-red-500'
  ] : [];

  const paddingClasses = [
    leftIcon && 'pl-10',
    rightIcon && 'pr-10'
  ].filter(Boolean);

  const inputClasses = clsx(
    baseInputClasses,
    variantClasses[variant],
    errorClasses,
    paddingClasses,
    fullWidth ? 'w-full' : '',
    className
  );

  return inputClasses;
};

export const getLabelClasses = (props: InputProps, isFocused: boolean) => {
  const { error } = props;
  return clsx(
    'block text-sm font-medium mb-1.5 transition-colors',
    error ? 'text-red-700' : 'text-gray-700',
    isFocused && !error && 'text-green-600'
  );
};

export const getIconClasses = (props: InputProps, isFocused: boolean) => {
  const { error } = props;
  return clsx(
    'text-sm transition-colors',
    error ? 'text-red-400' : 'text-gray-400',
    isFocused && !error && 'text-blue-500'
  );
};
