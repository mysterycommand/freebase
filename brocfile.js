const ßmerge = require('broccoli-merge-trees');
const ßrollup = require('broccoli-rollup');
const ßstew = require('broccoli-stew');

const ƒconditional = require('rollup-plugin-conditional');
const ƒtypescript = require('rollup-plugin-typescript');
const ƒuglify = require('rollup-plugin-uglify');

const tsc = require('typescript');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PUBLIC_PATH = 'public';
const SOURCE_PATH = 'source';

const publicNode = ßstew.find(PUBLIC_PATH, { include: ['*.{html,ico,txt}'] });
const scriptNode = new ßrollup(SOURCE_PATH, {
    rollup: {
        entry: 'main.ts',
        plugins: [
            ƒtypescript({ typescript: tsc }),
            ƒconditional({
                condition: NODE_ENV === 'production',
                plugin: ƒuglify(),
            }),
        ],
        sourceMap: 'inline',
        targets: [{
            format: 'iife',
            dest: 'main.js',
        }],
    },
});

module.exports = ßmerge([
    publicNode,
    scriptNode,
]);