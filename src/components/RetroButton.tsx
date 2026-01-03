import React from 'react';

interface RetroButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

const RetroButton: React.FC<RetroButtonProps> = ({ 
  href, 
  variant = 'primary', 
  className = '', 
  children 
}) => {
  const baseStyles = "font-pixel text-xs px-4 py-2 border-4 border-[#2f2f2f] shadow-[4px_4px_0_0_#2f2f2f] transition-all duration-75 hover:-translate-y-1 hover:shadow-[4px_8px_0_0_#2f2f2f] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none inline-block decoration-none";

  const variants = {
    primary: "bg-[#ff6b6b] text-white",
    secondary: "bg-white text-[#2f2f2f]"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`.trim();

  return (
    <a href={href} className={combinedClasses}>
      {children}
    </a>
  );
};

export default RetroButton;
