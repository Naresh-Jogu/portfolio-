import { Code2 } from 'lucide-react';
import { skills } from '../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag"><Code2 size={12} /> Tech Stack</span>
          <h2 className="section-title">
            Skills & <span className="grad-text">Technologies</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies I use to build responsive web applications and improve my problem-solving skills
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={`card ${styles.card}`}>
              <div className={styles.catHeader}>
                <span className={styles.emoji}>{group.icon}</span>
                <h3 className={styles.catName}>{group.category}</h3>
              </div>
              <div className={styles.items}>
                {group.items.map((skill) => (
                  <div key={skill.name} className={styles.skillRow}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.barBg}>
                      <div
                        className={styles.barFill}
                        style={{ '--w': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
