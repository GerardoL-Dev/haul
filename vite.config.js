import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/haul/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notFound: 'public/404.html', // Copia el 404.html al build final
      },
    },
  },
});
