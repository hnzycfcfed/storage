import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const pkgName = `storage`;

const plugins = [
    babel(),
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
        external: ['whatwg-fetch']
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
