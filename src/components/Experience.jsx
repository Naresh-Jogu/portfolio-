import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag"><Briefcase size={12} /> Career</span>
          <h2 className="section-title">
            Experience & <span className="grad-text">Learning</span>
          </h2>
          <p className={styles.subtitle}>
            My journey as a developer through projects, learning, and consistent practice
          </p>
        </div>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.item}>
              {/* Spine */}
              <div className={styles.spine}>
                <div className={styles.dot} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <div className={styles.roleBadge}>{job.type}</div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>{job.company}</p>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </div>

                <p className={styles.desc}>{job.description}</p>

                <ul className={styles.highlights}>
                  {job.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <CheckCircle2 size={14} className={styles.checkIcon} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.techRow}>
                  {job.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
