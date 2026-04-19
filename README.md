# 🚀 MERN Stack Developer Portfolio

A premium, fully responsive developer portfolio built with **React + Vite + JavaScript + CSS Modules**.

## ✨ Features

- 🎨 **3 Themes** — Dark, Light, Midnight (persisted via localStorage)
- 📱 **Fully Responsive** — Mobile-first design
- ⚡ **Vite** — Lightning-fast dev server & builds
- 🧩 **CSS Modules** — Scoped, maintainable styles
- 🎭 **Smooth Animations** — CSS keyframe animations throughout
- 🌈 **Premium Gradients** — Glassmorphism cards, gradient text, glowing accents
- 📋 **Sections** — Hero, About, Skills, Projects, Experience, Contact, Footer

---

## 🛠️ Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React 18, JavaScript (ES6+)   |
| Bundler  | Vite 5                        |
| Styling  | CSS Modules + CSS Variables   |
| Icons    | Lucide React                  |
| Fonts    | Syne + DM Sans (Google Fonts) |

---

## 📦 Getting Started

### Prerequisites
- **Node.js** v18+ — [Download here](https://nodejs.org)
- **npm** v9+ (comes with Node.js)
- **VS Code** — [Download here](https://code.visualstudio.com)

---

### 1️⃣ Open in VS Code

```bash
# Open the portfolio folder directly
code portfolio
```

Or open VS Code → **File → Open Folder** → select the `portfolio` folder.

---

### 2️⃣ Install Dependencies

Open the **VS Code integrated terminal** (`Ctrl + `` ` `` ` or `View → Terminal`) and run:

```bash
npm install
```

---

### 3️⃣ Start the Dev Server

```bash
npm run dev
```

The app will open automatically at **http://localhost:3000** 🎉

---

### 4️⃣ Build for Production

```bash
npm run build
```

Output is in the `/dist` folder — ready to deploy to Vercel, Netlify, or any static host.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component
    ├── index.css               # Global styles + CSS variables
    ├── context/
    │   └── ThemeContext.jsx    # Theme state + CSS variable injection
    ├── data/
    │   └── portfolioData.js    # ✏️ Edit YOUR info here
    └── components/
        ├── Navbar.jsx / .module.css
        ├── ThemeToggle.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Skills.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Experience.jsx / .module.css
        ├── Contact.jsx / .module.css
        └── Footer.jsx / .module.css
```

---

## ✏️ Customization

### Update Your Personal Info
Edit **`src/data/portfolioData.js`** — this single file controls:
- Your name, title, bio, location, email, social links
- Skills with proficiency levels
- Projects (title, description, tags, GitHub/live links)
- Work experience

### Change Theme Colors
Edit the CSS variable values in **`src/context/ThemeContext.jsx`** inside the `THEMES` object.

### Add a New Theme
In `ThemeContext.jsx`, add a new entry to the `THEMES` object following the same structure, then add a matching icon entry in `ThemeToggle.jsx`.

---

## 🚀 Deploy in One Click

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the /dist folder to netlify.com/drop
```

---

## 📝 Recommended VS Code Extensions

- **ES7+ React/Redux/React-Native Snippets** — `dsznajder.es7-react-js-snippets`
- **CSS Modules** — `clinyong.vscode-css-modules`
- **Prettier** — `esbenp.prettier-vscode`
- **Auto Rename Tag** — `formulahendry.auto-rename-tag`

---

Made with ❤️ using React + Vite
