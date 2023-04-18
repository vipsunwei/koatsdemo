import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import swc from '@rollup/plugin-swc'
import typescript from '@rollup/plugin-typescript'
import autoExternal from 'rollup-plugin-auto-external'

export default defineConfig({
  watch: { include: 'src/**' },
  input: 'src/index.ts', // 入口文件路径
  output: {
    dir: 'dist',
    format: 'esm', // 输出文件格式
  },
  plugins: [
    // typescript({ tsconfig: './tsconfig.json' }),
    autoExternal(),
    nodeResolve(),
    commonjs(),
    json(),
    swc({ swc: { jsc: { parser: { dynamicImport: true, syntax: 'typescript' } } } }),
    terser(),
  ],
})
