import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig }         from 'vite'
import tsconfigPaths            from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  server: {
    port: 3000
  }
})
