import { User, Coffee, Zap, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import styles from './About.module.css';

const highlights = [
  {
    icon: Zap,
    label: 'Consistent Learner',
    desc: 'Practicing coding daily and continuously improving development skills'
  },
  {
    icon: Coffee,
    label: 'Problem Solving',
    desc: 'Actively solving Data Structures & Algorithms problems to strengthen logic'
  },
  {
    icon: Heart,
    label: 'Project Focused',
    desc: 'Building real-world projects to gain practical development experience'
  },
  {
    icon: User,
    label: 'Career Driven',
    desc: 'Focused on becoming a high-level developer and cracking top tech roles'
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div>
            <span className="section-tag">
              <User size={12} /> About Me
            </span>
            <h2 className="section-title">
              Building My Path<br />
              <span className="grad-text">as a Developer</span>
            </h2>
            <p className={styles.bio}>
              {personalInfo.bio}
            </p>

            <div className={styles.techList}>
              {[
                'MongoDB',
                'Express',
                'React',
                'Node.js',
                'JavaScript',
                'SQL',
                'Git',
                'DSA'
              ].map(t => (
                <span key={t} className={styles.techChip}>{t}</span>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={styles.cards}>
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className={`card ${styles.card}`}>
                <div className={styles.cardIcon}>
                  <Icon size={20} />
                </div>
                <h4 className={styles.cardTitle}>{label}</h4>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
