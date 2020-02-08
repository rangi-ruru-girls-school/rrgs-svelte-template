import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

// create a Boolean true-or-false variable saying whether this is a development or production build.
const production = !process.env.ROLLUP_WATCH;

export default {

  // the file where rollup should start reading your JavaScript.
  input: 'app.js',

  // the file that rollup should put all your project's JavaScript together into.
  output: {
    file: 'public/bundle.js',
    name: 'app',
    format: 'iife',
  },

  // options for how rollup should put your JavaScript together.
  plugins: [

    // Svelte-specific settings.
    svelte({
      // allow dev checking if not in production mode.
      dev: !production,

      // create a separate file for all the CSS (makes your app faster).
      css: css => {
        css.write('public/bundle.css')
      }
    }),

    // locate third party modules in the node_modules folder.
    resolve(),

    // if not in production then serve the files in the public folder as a web app on http://localhost:5000
    !production && serve({
      open: true,
      contentBase: 'public',
      port: 5000,
    }),

    // if not in production then watch the files and reload the app whenever there are any changes.
    !production && livereload('public'),

    // if in production then minify the JavaScript (makes your app faster).
    production && terser()
  ]
}
