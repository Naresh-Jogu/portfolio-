import { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';

const filters = ['All', 'Full Stack', 'Learning Projects'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag"><Layers size={12} /> Portfolio</span>
          <h2 className="section-title">
            My<span className="grad-text"> Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Projects I built while mastering the MERN stack and improving problem-solving skills
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filter} ${filter === f ? styles.active : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <div key={project.id} className={`card ${styles.card} ${project.featured ? styles.featured : ''}`}>
              {/* Header */}
              <div className={styles.cardHead}>
                <div className={styles.projectIcon}>
                  {project.type === 'Full Stack' ? '⚛️' : '📚'}
                </div>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                     className={styles.iconLink} title="GitHub">
                    <Github size={17} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                       className={styles.iconLink} title="Live Demo">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {project.featured && (
                <span className={styles.featuredBadge}>★ Featured</span>
              )}

              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.meta}>
                <span>📅 {project.year}</span>
                <span>⚡ {project.status}</span>
              </div>
              <p className={styles.desc}>{project.description}</p>
              
              <ul className={styles.points}>
                {project.highlights?.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              {/* Stats */}
              <div className={styles.stats}>
                <span className={styles.stat}><Star size={13} /> {project.stats.stars}</span>
                <span className={styles.stat}><GitFork size={13} /> {project.stats.forks}</span>
                <span className={`${styles.stat} ${styles.users}`}>👥 {project.stats.users}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
