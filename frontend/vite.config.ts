import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const cwd = process.cwd()
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, cwd)
  return defineConfig({
    plugins: [vue(), splitVendorChunkPlugin(), Unocss()],
    resolve: { alias: { '@': resolve('./src') } },
    define: { VITE_ENV: JSON.stringify(viteEnv) },
    esbuild: {
      drop: viteEnv.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : [],
    },
    build: { chunkSizeWarningLimit: 2000 },
    server: {
      host: true,
    },
  })
}
