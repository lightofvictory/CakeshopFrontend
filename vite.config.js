import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const port = Number(env.VITE_PORT)

  return {
    plugins: [react()],
    server: { port },
    preview: { port },
  }
})
