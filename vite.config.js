import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
    include: /\.jsx$/,
    exclude: []
  },
  server: { port: 3000, host: true }
});
