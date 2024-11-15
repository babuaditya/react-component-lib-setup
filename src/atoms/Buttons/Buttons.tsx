import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string; 
  className?: string;
  as?: 'button' | 'link'; 

}

export const Buttons: React.FC<ButtonProps> = ({ label, onClick, href, className = '', as = 'button' }) => {
  if (as === 'link') {
    return (
      <a
        href={href}
        className={`px-4 py-2 bg-primary-500 text-white rounded ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={`px-4 py-2 bg-primary-500 text-white rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Buttons;
