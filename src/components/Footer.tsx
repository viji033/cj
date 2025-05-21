import React from 'react';
import GlitchText from './GlitchText';
import './Footer.css';

interface FooterNavProps {
  navItems: string[];
}

interface SocialIconType {
  icon: string;
  color: string;
}

interface FooterSocialsProps {
  socialIcons: SocialIconType[];
}

const Footer: React.FC = () => {
  const navItems = ["Home",  "About", "Education", "Skills", "Portfolio", "Contact"];
  const socialIcons: SocialIconType[] = [
    { icon: "fab fa-github", color: "text-cyan-400" },
    { icon: "fab fa-instagram", color: "text-pink-500" },
    // Add more social icons here if needed...
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
    <GlitchText text="WEB-DEVELOPER" />
  </div>
);

const FooterNav: React.FC<FooterNavProps> = ({ navItems }) => (
  <div className="footer-nav">
    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="footer-nav-link"
      >
        {item}
      </a>
    ))}
  </div>
);

const FooterSocials: React.FC<FooterSocialsProps> = ({ socialIcons }) => (
  <div className="social-icons">
    {socialIcons.map((social, index) => (
      <a
        key={index}
        href={
          social.icon === "fab fa-github"
            ? "https://github.com/viji033"
            : "#"
        }
        className="social-icon"
        target={social.icon === "fab fa-github" ? "_blank" : undefined}
        rel={social.icon === "fab fa-github" ? "noopener noreferrer" : undefined}
      >
        <i className={`${social.icon} ${social.color}`}></i>
      </a>
    ))}
  </div>
);

const FooterCopyright: React.FC = () => (
  <div className="copyright">
    <p>© 2025 CYBER.PORFOLIO. All rights reserved. Designed in Vijay.</p>
  </div>
);

export default Footer;
