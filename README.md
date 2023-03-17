# Two Column Layout with resizable sidebar

- React + TS + Vite
- No libs
- Vanilla CSS
- Props for initial, min and max sidebar size
- Saves / loads preferred size automatically to LocalStorage
- Reset on double-click
- Most likely [still has some bugs](https://github.com/pachoclo/resizable-two-column-layout/issues/new) 🤷‍♂️



https://user-images.githubusercontent.com/3608140/225780795-4a9a9fa8-3969-443e-8fef-f18d271e1756.mov



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

### 🗂️ Structure

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
