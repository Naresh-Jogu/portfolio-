import {
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowRight,
  MapPin,
  Circle,
} from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";
import profile from "../assets/profile.png";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.grid} />

      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.content}>
            <div className={`animate-fade-up animate-delay-1 ${styles.badge}`}>
              <Circle
                size={8}
                fill="currentColor"
                style={{ color: "#22c55e" }}
              />
              Available for Full Stack Developer Roles
            </div>

            <h1 className={`animate-fade-up animate-delay-2 ${styles.heading}`}>
              Hi, I'm <span className={`${styles.name} grad-text`}>{personalInfo.name}</span>
              <br />
              <span className="grad-text">I turn ideas into fast, scalable web applications</span>
            </h1>

            <p className={`animate-fade-up animate-delay-3 ${styles.bio}`}>
              {personalInfo.bio}
            </p>

            <div
              className={`animate-fade-up animate-delay-4 ${styles.location}`}
            >
              <MapPin size={14} />
              {personalInfo.location}
            </div>

            <div
              className={`animate-fade-up animate-delay-4 ${styles.actions}`}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href={personalInfo.resume}
                download="Naresh_Jogu_mern_resume.pdf"
                className="btn btn-ghost"
              >
                Download Resume <Download size={16} />
              </a>
            </div>

            <div
              className={`animate-fade-up animate-delay-5 ${styles.socials}`}
            >
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                {
                  icon: Linkedin,
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                },
                { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.social}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Avatar Card */}
          <div className={`animate-fade-up animate-delay-3 ${styles.rightCol}`}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>
                <div className={styles.avatarInner}>
                  <img
                    src={profile}
                    alt="Profile"
                    className={styles.avatarImg}
                  />
                </div>
              </div>
              {/* floating badges */}
              <div className={`${styles.floatBadge} ${styles.fb1}`}>
                <span>⚛️</span> React
              </div>
              <div className={`${styles.floatBadge} ${styles.fb2}`}>
                <span>🟢</span> Node.js
              </div>
              <div className={`${styles.floatBadge} ${styles.fb3}`}>
                <span>🍃</span> MongoDB
              </div>
              <div className={`${styles.floatBadge} ${styles.fb4}`}>
                <span>⚡</span> Express Js
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`animate-fade-up animate-delay-5 ${styles.stats}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
