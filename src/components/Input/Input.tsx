import { useId, forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { getInputClasses, getLabelClasses, getIconClasses } from './Input.styles';
import { type InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  variant = 'default',
  className,
  type = 'text',
  id,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();
 
  const inputClasses = getInputClasses({ ...props, leftIcon, rightIcon, variant, fullWidth, className, error }, isFocused);
  const labelClasses = getLabelClasses({ ...props, error }, isFocused);
  const iconClasses = getIconClasses({ ...props, error }, isFocused);

  const containerClasses = clsx(
    'relative',
    fullWidth ? 'w-full' : ''
  );

  return (
    <div className={containerClasses}>
      {label && (
        <label
          htmlFor={inputId}
          className={labelClasses}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className={iconClasses}>
              {leftIcon}
            </span>
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClasses}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className={iconClasses}>
              {rightIcon}
            </span>
          </div>
        )}
      </div>

      {(error || helperText) && (
        <div className="mt-1.5">
          {error && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}
          {!error && helperText && (
            <p className="text-sm text-gray-500">
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
