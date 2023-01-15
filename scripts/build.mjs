import * as esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'

await esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/popups.min.js',
  plugins: [sassPlugin()],
  minify: true,
})