import { Atom, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <button className={styles.logo} onClick={scrollTop}>
              <span className={styles.logoIcon}><Atom size={20} /></span>
              <span className={styles.logoText}><span className="grad-text">naresh</span><span className={styles.logoAccent}>.jogu</span></span>
            </button>
            <p className={styles.tagline}>
              {personalInfo.title}
            </p>
            <p className={styles.availability}>
              <span className={styles.statusDot} /> Available for new opportunities
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <div className={styles.links}>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
            </div>
          </div>

          <div className={styles.socialCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <div className={styles.socials}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Naresh Jogu. All rights reserved.
          </p>
          <button onClick={scrollTop} className={styles.topBtn} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
