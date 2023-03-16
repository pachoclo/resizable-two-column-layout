# Two Column Layout with resizable sidebar

- React + TS + Vite
- No libs
- Vanilla CSS
- Saves size to LocalStorage
- Most likely some bugs

### 🕹️ Commands

```
npm i
```

```
npm run dev
```

```
npm run build
```

```
npm run preview
```

---

### Structure

```zsh
.
├── public/
├── src/
│   ├── components/
│   │   ├── App.tsx
│   │   ├── Layout.tsx              <- ⚠️
│   │   ├── MainContent.tsx
│   │   └── SidebarContent.tsx
│   ├── hooks/
│   │   └── use-resize-sidebar.tsx  <- ⚠️
│   ├── styles/
│   │   ├── Layout.css              <- ⚠️
│   │   └── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── vite.config.ts
```
