import React from 'react';
import './CtaButton.css';

interface CtaButtonProps {
  href?: string;
  onClick?: () => void;
  color: 'pink' | 'cyan';
  children: React.ReactNode;
  download?: boolean;
  downloadFilename?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  href, 
  onClick, 
  color, 
  children,
  download = false,
  downloadFilename
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={`cta-button ${color}`}
        download={download ? downloadFilename : undefined}
        onClick={handleClick}
      >
        <span className="button-text">{children}</span>
        <span className={`gradient gradient-${color}`}></span>
      </a>
    );
  }

  return (
    <button 
      className={`cta-button ${color}`}
      onClick={onClick}
      type="button"
    >
      <span className="button-text">{children}</span>
      <span className={`gradient gradient-${color}`}></span>
    </button>
  );
};

export default CtaButton;