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
            'bg-blue-600 text-white',
            'hover:bg-blue-700 active:bg-blue-800',
            'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
        ],
        secondary: [
            'bg-gray-200 text-gray-800',
            'hover:bg-gray-300 active:bg-gray-400',
            'focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
        ],
        danger: [
            'bg-red-600 text-white',
            'hover:bg-red-700 active:bg-red-800',
            'focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
        ],
        ghost: [
            'bg-transparent text-gray-700',
            'hover:bg-gray-100 active:bg-gray-200',
            'focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
        ],
        info: [
            'bg-sky-500 text-white',
            'hover:bg-sky-600 active:bg-sky-700',
            'focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2'
        ],
        warning: [
            'bg-amber-500 text-white',
            'hover:bg-amber-600 active:bg-amber-700',
            'focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2'
        ],
        success: [
            'bg-emerald-500 text-white',
            'hover:bg-emerald-600 active:bg-emerald-700',
            'focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2'
        ],
        outline: [
            'bg-transparent border border-gray-300 text-gray-800',
            'hover:bg-gray-100 active:bg-gray-200',
            'focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
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
