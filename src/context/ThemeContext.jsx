import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  dark: {
    id: 'dark',
    label: 'Dark',
    vars: {
      '--bg':           '#080c14',
      '--bg2':          '#0d1422',
      '--bg3':          '#111827',
      '--card':         'rgba(255,255,255,0.04)',
      '--card-hover':   'rgba(255,255,255,0.07)',
      '--border':       'rgba(255,255,255,0.08)',
      '--border-hover': 'rgba(0,229,190,0.45)',
      '--text':         '#eef2ff',
      '--text-muted':   '#8892aa',
      '--text-subtle':  '#3d4a63',
      '--accent':       '#00e5be',
      '--accent2':      '#7c3aed',
      '--accent3':      '#f59e0b',
      '--grad':         'linear-gradient(135deg,#00e5be 0%,#7c3aed 100%)',
      '--grad-hero':    'radial-gradient(ellipse 80% 55% at 50% -5%,rgba(0,229,190,.18) 0%,transparent 70%),radial-gradient(ellipse 55% 40% at 82% 62%,rgba(124,58,237,.14) 0%,transparent 60%)',
      '--glow':         '0 0 40px rgba(0,229,190,.25)',
      '--shadow':       '0 8px 40px rgba(0,0,0,.5)',
      '--noise':        'rgba(255,255,255,.015)',
    }
  },
  light: {
    id: 'light',
    label: 'Light',
    vars: {
      '--bg':           '#f0f4ff',
      '--bg2':          '#e8eeff',
      '--bg3':          '#ffffff',
      '--card':         'rgba(255,255,255,0.75)',
      '--card-hover':   'rgba(255,255,255,0.98)',
      '--border':       'rgba(0,0,0,0.07)',
      '--border-hover': 'rgba(6,148,162,.55)',
      '--text':         '#0c1a2e',
      '--text-muted':   '#475569',
      '--text-subtle':  '#94a3b8',
      '--accent':       '#0891b2',
      '--accent2':      '#7c3aed',
      '--accent3':      '#f59e0b',
      '--grad':         'linear-gradient(135deg,#0891b2 0%,#7c3aed 100%)',
      '--grad-hero':    'radial-gradient(ellipse 80% 55% at 50% -5%,rgba(8,145,178,.12) 0%,transparent 70%),radial-gradient(ellipse 55% 40% at 82% 62%,rgba(124,58,237,.1) 0%,transparent 60%)',
      '--glow':         '0 0 40px rgba(8,145,178,.2)',
      '--shadow':       '0 8px 40px rgba(0,0,0,.1)',
      '--noise':        'rgba(0,0,0,.012)',
    }
  },
  midnight: {
    id: 'midnight',
    label: 'Midnight',
    vars: {
      '--bg':           '#04050d',
      '--bg2':          '#080a18',
      '--bg3':          '#0d1025',
      '--card':         'rgba(255,255,255,0.03)',
      '--card-hover':   'rgba(255,255,255,0.06)',
      '--border':       'rgba(255,255,255,0.06)',
      '--border-hover': 'rgba(248,113,113,.45)',
      '--text':         '#f0eeff',
      '--text-muted':   '#7c748a',
      '--text-subtle':  '#3a3250',
      '--accent':       '#f87171',
      '--accent2':      '#818cf8',
      '--accent3':      '#34d399',
      '--grad':         'linear-gradient(135deg,#f87171 0%,#818cf8 100%)',
      '--grad-hero':    'radial-gradient(ellipse 80% 55% at 50% -5%,rgba(248,113,113,.15) 0%,transparent 70%),radial-gradient(ellipse 55% 40% at 82% 62%,rgba(129,140,248,.12) 0%,transparent 60%)',
      '--glow':         '0 0 40px rgba(248,113,113,.2)',
      '--shadow':       '0 8px 40px rgba(0,0,0,.6)',
      '--noise':        'rgba(255,255,255,.012)',
    }
  },
};

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  const theme = THEMES[themeId];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    localStorage.setItem('portfolio-theme', themeId);
  }, [themeId, theme]);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, theme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
