# Stress Relief & Habit Builder App

Main Features:
1. Login SignUp
2. Daily Journal
3. Gratitude Journal
4. Breathing Exercises





# Dockerizeing a React App

1. Create a new React app using `npm init vite@latest stress-relief-app -- --template react`
2. `cd stress-relief-app`
3. `npm install`
4. `npm run dev`
5. Do changes in vite.config.js to add the following code:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://localhost:3000",
  },
  plugins: [react()],
});
```

6. `npm run dev`
7. `npm run build`
8. `npm run preview` or `npm install -g serve` and `serve -s dist`


[]: # Path: stress-relief-app/README.md

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
