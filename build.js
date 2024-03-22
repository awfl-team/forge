import { build } from 'esbuild'
import copy from 'esbuild-plugin-copy'

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  tsconfig: 'tsconfig.json',
}

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'build/index.js',
})

build({
  ...sharedConfig,
  outfile: 'build/index.esm.js',
  platform: 'neutral', // for ESM
  format: 'esm',
  plugins: [
    copy({
      resolveFrom: 'cwd',
      assets: {
        from: ['./package.json'],
        to: ['./build/package.json'],
      },
    }),
  ],
})
