import { clsx } from 'clsx';
import { type ButtonProps } from './Button.types';

export const getButtonClasses = (props: ButtonProps) => {
    const { 
        variant = 'primary', 
        size = 'md', 
        fullWidth = false, 
        className 
    } = props;

    const baseClasses = [
        'inline-flex items-center justify-center',
        'font-medium rounded-lg',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'select-none'
    ];

    const variantClasses = {
        primary: [
            'bg-sky text-text-dark-500',
            'hover:bg-sky-blue-600 active:bg-sky-blue-700',
            'focus:ring-sky-blue-500'
        ],
        secondary: [
            'bg-neutral-gray-200 text-text-dark-800',
            'hover:bg-neutral-gray-300 active:bg-neutral-gray-400',
            'focus:ring-neutral-gray-500'
        ],
        danger: [
            'bg-red-600 text-white',
            'hover:bg-red-700 active:bg-red-800',
            'focus:ring-red-500'
        ],
        ghost: [
            'bg-transparent text-text-dark-700',
            'hover:bg-neutral-gray-100 active:bg-neutral-gray-200',
            'focus:ring-neutral-gray-500'
        ]
    };

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm gap-1.5',
        md: 'px-4 py-2.5 text-base gap-2',
        lg: 'px-6 py-3 text-lg gap-2.5'
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        className
    );
};
