// src/components/Navbar.jsx
import { useState, useEffect, useCallback } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Dipesh Singh - Home"
          >
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">DS</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar-link${activeSection === href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={activeSection === href.slice(1) ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume CTA */}
          <a
            href="#contact"
            className="navbar-resume"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Resume</span>
            <span aria-hidden="true">↗</span>
          </a>

          {/* Hamburger */}
          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        className={`navbar-mobile${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="mobile-link"
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: '16px', justifyContent: 'center' }}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Get Resume ↗
        </a>
      </nav>
    </>
  );
}
