// SocialIcon.tsx
import React from 'react';
import './SocialIcon.css';

interface SocialIconProps {
  icon: string;
  color: string;
  link?: string; // optional link
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, color, link }) => {
  return (
    <a
      href={link || '#'}
      className={`social-icon ${color}`}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
    >
      <i className={icon}></i>
    </a>
  );
};

export default SocialIcon;
