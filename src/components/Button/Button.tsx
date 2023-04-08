import React from 'react';

interface ButtonProps {
  label: string;
  color: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => (
  <button style={{ backgroundColor: color }} onClick={onClick}>
    {label}
  </button>
);

export default Button;
