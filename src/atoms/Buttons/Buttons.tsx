import React from 'react';
import './Button.css'
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string; 
  className?: string;
  as?: 'button' | 'link'; 
  primary?:boolean;
  secondary?:boolean;
  disabled?:boolean;
  loading?:boolean;
}

export const Buttons = ({ label, onClick, href, className = '', as = 'button',primary=true,secondary=false, disabled=false,loading=false }:ButtonProps) => {
  if (as === 'link') {
    return (
      <a
        href={href}
        className={`btn ${primary&&'btn-primary'} ${secondary&&'btn-secondary'} ${disabled&&'btn-disabled'} ${className} ` }
      >
        {label}
      </a>
    );
  }

  return (
  
    <button
      className={`btn ${primary&&'btn-primary'} ${secondary&&'btn-secondary'} ${disabled&&'btn-disabled'} ${className} ` }
      onClick={onClick}
      disabled={disabled || loading}
    >
        {loading&&<div className='btn-loading loader'>
        </div>}
      {label}
    </button>
  );
};

