import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

export default defineConfig([
  {
    plugins: [typescript()],
    input: './src/index.ts',
    output: {
      dir: 'lib',
    },
  },
  {
    plugins: [dts()],
    input: './src/index.ts',
    output: {
      dir: 'lib',
    },
  },
])
