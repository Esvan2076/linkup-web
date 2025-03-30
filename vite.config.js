import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      tailwindcss(),
   ],

   server: {
      proxy: {
         '/api': 'http://apiproduccion-env.eba-cprgqr42.us-east-1.elasticbeanstalk.com:8080',
      },
   },
})
