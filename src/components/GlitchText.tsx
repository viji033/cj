import React from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`glitch-container ${className}`}>
      <span className="glitch-text">{text}</span>
      <span className="glitch glitch-1">{text}</span>
      <span className="glitch glitch-2">{text}</span>
    </div>
  );
};

export default GlitchText;