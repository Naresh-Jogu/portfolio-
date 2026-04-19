import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: personalInfo.resume, isExternal: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => navigate('#home')}>
          <span className={styles.logoIcon}>
            <svg width="20" height="20" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#61dafb' }}>
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          </span>
          <span className={styles.logoText}><span className="grad-text">naresh</span><span className={styles.logoAccent}>.jogu</span></span>
        </button>

        {/* Desktop Links */}
        <nav className={styles.links}>
          {links.map(l => (
            l.isExternal ? (
              <a
                key={l.href}
                href={l.href}
                download={l.label === 'Resume' ? "Naresh_Jogu_mern_resume.pdf" : undefined}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ) : (
              <button
                key={l.href}
                className={`${styles.link} ${active === l.href ? styles.active : ''}`}
                onClick={() => navigate(l.href)}
              >
                {l.label}
              </button>
            )
          ))}
        </nav>

        {/* Right */}
        <div className={styles.right}>
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
            Hire Me
          </a>
          <button className={styles.burger} onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            l.isExternal ? (
              <a
                key={l.href}
                href={l.href}
                download={l.label === 'Resume' ? "Naresh_Jogu_mern_resume.pdf" : undefined}
                className={styles.mobileLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ) : (
              <button key={l.href} className={styles.mobileLink} onClick={() => navigate(l.href)}>
                {l.label}
              </button>
            )
          ))}
          <div style={{ paddingTop: '8px' }}>
            <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', alignItems: "center" }}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
