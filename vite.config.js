import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/vite-deploy/',
  }

  if (command !== 'serve') {
    config.base = '/black-point/'
  }

  return config
})
