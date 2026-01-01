import React from 'react';
import GlitchText from './GlitchText';  // Make sure this component exists and works
import './Footer.css';

interface FooterNavProps {
  navItems: string[];
}

interface SocialIconType {
  icon: string;
  color: string;
  url: string;  // add url here to avoid hardcoding
}

interface FooterSocialsProps {
  socialIcons: SocialIconType[];
}

const Footer: React.FC = () => {
  const navItems = ["Home", "About", "Education", "Skills", "Projects", "Contact"];
  const socialIcons: SocialIconType[] = [
    { icon: "fab fa-github", color: "text-cyan-400", url: "https://github.com/viji033" },
    { icon: "fab fa-instagram", color: "text-pink-500", url: "https://instagram.com/yourprofile" },
    // Add more social icons here with URLs if needed...
  ];

  return (
    <footer className="footer">
      <div className="background-layer"></div>

      <div className="container">
        <div className="footer-content">
          <FooterLogo />
          <FooterNav navItems={navItems} />
          <FooterSocials socialIcons={socialIcons} />
        </div>

        <div className="divider"></div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

const FooterLogo: React.FC = () => (
  <div className="logo">
    <GlitchText text="FULLSTACK DEVELOPER" />
  </div>
);

const FooterNav: React.FC<FooterNavProps> = ({ navItems }) => (
  <nav className="footer-nav" aria-label="Footer Navigation">
    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="footer-nav-link"
      >
        {item}
      </a>
    ))}
  </nav>
);

const FooterSocials: React.FC<FooterSocialsProps> = ({ socialIcons }) => (
  <div className="social-icons" role="list" aria-label="Social media links">
    {socialIcons.map((social, index) => (
      <a
        key={index}
        href={social.url}
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${social.icon.split(' ')[1].replace('fa-', '')}`}
        role="listitem"
      >
        <i className={`${social.icon} ${social.color}`}></i>
      </a>
    ))}
  </div>
);

const FooterCopyright: React.FC = () => (
  <div className="copyright">
    <p>© 2025 CYBER.PORTFOLIO. All rights reserved. Designed in Vijay.</p>
  </div>
);

export default Footer;
