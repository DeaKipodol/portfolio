import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // './'에서 '/'로 변경
  plugins: [react()],
  assetsInclude:['**/*.jpg'],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@lib', replacement: '/src/lib' },
      { find: '@assets', replacement: '/src/assets' },
    ],
  },
})
