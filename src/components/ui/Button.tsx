import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
  pulse?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
  glow = false,
  pulse = false,
  fullWidth = false,
  loading = false,
  external = false,
}) => {
  // Combine all the classes
  const buttonClasses = `
    btn 
    btn-${variant} 
    ${size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : ''} 
    ${icon ? 'btn-icon' : ''}
    ${glow ? 'btn-glow' : ''}
    ${pulse ? 'btn-pulse' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${loading ? 'opacity-80 pointer-events-none' : ''}
    ${disabled ? 'opacity-60 pointer-events-none' : ''}
    ${className}
  `;

  // Content with loading state
  const content = (
    <>
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </>
      )}
    </>
  );

  // If a href is provided, use Link component
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  // Otherwise, use a regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default Button;
