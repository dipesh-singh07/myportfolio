// src/components/Footer.jsx
import '../styles/contact-footer.css';

const currentYear = new Date().getFullYear();

const NAV_SECTIONS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const QUICK_LINKS = [
  { label: 'GitHub', href: 'https://github.com/dipeshsingh' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dipeshsingh' },
  { label: 'Email', href: 'mailto:dipesh@example.com' },
];

const scrollTo = (e, href) => {
  e.preventDefault();
  if (href.startsWith('#')) {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  } else {
    window.open(href, '_blank', 'noopener,noreferrer');
  }
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => scrollTo(e, '#home')} aria-label="Back to top">
              <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
              <span className="gradient-text">DS</span>
              <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
            </a>
            <p className="footer-tagline">
              B.Tech CSE student building meaningful software, one commit at a time.
              Open to internships, collaborations, and exciting opportunities.
            </p>
            <div className="footer-social-links" aria-label="Social media links">
              <a href="https://github.com/dipeshsingh" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/dipeshsingh" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:dipesh@example.com" className="footer-social" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link grid */}
          <div className="footer-links-grid">
            <nav className="footer-link-group" aria-label="Site sections">
              <h4>Navigate</h4>
              <ul role="list">
                {NAV_SECTIONS.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="footer-link-group" aria-label="External links">
              <h4>Connect</h4>
              <ul role="list">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <span>Dipesh Singh</span>. All rights reserved.
          </p>
          <p className="footer-made-with">
            Built with <span className="heart" aria-label="love">♥</span> using React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
