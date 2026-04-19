import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const icons = { dark: Moon, light: Sun, midnight: Sparkles };

export default function ThemeToggle() {
  const { themeId, setThemeId, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const Icon = icons[themeId];

  return (
    <div className={styles.wrap} ref={ref}>
      <button className={styles.trigger} onClick={() => setOpen(o => !o)} title="Toggle theme">
        <Icon size={16} />
      </button>
      {open && (
        <div className={styles.dropdown}>
          <p className={styles.label}>Theme</p>
          {Object.values(themes).map(t => {
            const TIcon = icons[t.id];
            return (
              <button
                key={t.id}
                className={`${styles.option} ${themeId === t.id ? styles.active : ''}`}
                onClick={() => { setThemeId(t.id); setOpen(false); }}
              >
                <TIcon size={15} />
                {t.label}
                {themeId === t.id && <span className={styles.dot} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
