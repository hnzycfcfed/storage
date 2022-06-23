import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const pkgName = `storage`;

const plugins = [
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    eslint()
];

const iifeConfig = (file, _plugins = plugins) => {
    return {
        input: 'src/storage.js',
        output: [
            { file, format: 'iife', name: pkgName }
        ],
        plugins: _plugins
    }
}

export default [
    {
        input: 'src/storage.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins,
    },
    iifeConfig(`dist/${pkgName}.js`),
    iifeConfig(
        `dist/${pkgName}.min.js`,
        [
            ...plugins,
            terser(),
        ]
    )
]
