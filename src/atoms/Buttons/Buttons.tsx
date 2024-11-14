import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
