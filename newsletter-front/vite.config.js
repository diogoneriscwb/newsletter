import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        port: 3000, // ou qualquer outra porta que preferir
        host: true,  // permite acesso via IP local (essencial pro celular)
    }
})
