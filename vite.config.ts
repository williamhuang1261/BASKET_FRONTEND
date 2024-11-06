import { defineConfig } from 'vite'
import fs from 'fs'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https:{
      key: fs.readFileSync('./config/SSL_perms/thebasket.test.key'),
      cert: fs.readFileSync('./config/SSL_perms/thebasket.test.crt')
    }
  }
})
