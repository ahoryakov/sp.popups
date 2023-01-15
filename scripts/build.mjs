import * as esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'

await esbuild.build({
  entryPoints: ['./src/index.js'],
  outfile: './dist/popups.min.js',
  bundle: true,
  minify: true,
  format: 'esm',
  plugins: [sassPlugin()],
})