import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  plugins: [devtoolsJson(), reactRouter(), tailwindcss(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: ['react-spinners'],
  },
});
