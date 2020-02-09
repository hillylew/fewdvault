import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/js/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/main.js"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**"
      }),

      // Minify if we're on prod.
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  }
];
