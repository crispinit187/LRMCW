import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the build works on any GitHub Pages
// URL (user site, project site or custom domain) without knowing the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
});
