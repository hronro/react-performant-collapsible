import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [reactRefresh()],
})
