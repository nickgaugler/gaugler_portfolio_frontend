import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use the React plugin for Vite.
  // This enables Fast Refresh for React components.
  plugins: [react()],
});