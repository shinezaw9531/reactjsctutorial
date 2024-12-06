import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { execSync } from 'child_process';

const version = execSync("sh ./scripts/get-version.sh").toString().trim();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __VERSION_CHECK_INTERVAL__: 1000 * 10,
  },
  build: {
    target: 'esnext',
  },
  server: {
    open: true,
  },
})
