import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon = null,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c8963e] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-[#4a2e1d] hover:bg-[#3b2315] text-[#fdfbf7] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-[#f4ece1] hover:bg-[#e7d7c1] text-[#26160d] border border-[#dbcaa8]',
    gold: 'bg-[#c8963e] hover:bg-[#b5832e] text-[#190f09] shadow-md hover:shadow-lg hover:-translate-y-0.5 font-semibold',
    outline: 'border-2 border-[#4a2e1d] text-[#4a2e1d] hover:bg-[#4a2e1d] hover:text-[#fdfbf7]',
    outlineLight: 'border-2 border-[#fdfbf7]/80 text-[#fdfbf7] hover:bg-[#fdfbf7] hover:text-[#26160d]',
    ghost: 'text-[#4a2e1d] hover:bg-[#f3ebd9]/50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide font-medium'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
