import React, { useEffect, useState } from 'react';
import GlitchText from './GlitchText';
import './Navbar.css';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  activeSection?: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu, activeSection = '' }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo">
        <GlitchText text="FULLSTACK DEVELOPER" />
      </a>

      <nav className="desktop-nav">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id} className="nav-link">
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
              >
                <span>{item.label}</span>
                <span className="nav-underline"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleMenu}
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line middle"></span>
        <span className="hamburger-line"></span>
      </button>

      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-nav-link">
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;