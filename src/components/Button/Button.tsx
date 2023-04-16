import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

function Button({ children, color = 'blue', size = 'medium', onClick }: ButtonProps) {
  const styles = {
    backgroundColor: color,
    color: 'white',
    padding: size === 'small' ? '0.5rem 1rem' : size === 'medium' ? '1rem 2rem' : '1.5rem 3rem',
  };

  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;
