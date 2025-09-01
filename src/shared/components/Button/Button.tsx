import { forwardRef } from 'react';
import { getButtonClasses } from './Button.styles';
import { type ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}, ref) => {
  const buttonClasses = getButtonClasses({
    variant,
    size,
    fullWidth,
    className,
  });

  const isDisabled = disabled || isLoading;

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-25"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!isLoading && leftIcon && (
        <span className="flex-shrink-0">
          {leftIcon}
        </span>
      )}

      {children && (
        <span className={isLoading ? 'opacity-70' : ''}>
          {children}
        </span>
      )}

      {!isLoading && rightIcon && (
        <span className="flex-shrink-0">
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
