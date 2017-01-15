const ßmerge = require('broccoli-merge-trees');
const ßrollup = require('broccoli-rollup');
const ßstew = require('broccoli-stew');
const ßtslinter = require('broccoli-tslinter');
const ßtypescript = require('broccoli-typescript-compiler').TypeScript;

const PUBLIC_PATH = 'public';
const SOURCE_PATH = 'source';

const htmlNode = ßstew.find(PUBLIC_PATH, {
    include: ['*.html'],
});

const typeNode = ßstew.find(SOURCE_PATH, {
    include: ['**/*.ts'],
});
// const lintNode = new ßtslinter(typeNode);
const ecmaNode = new ßtypescript(typeNode);
const scriptNode = new ßrollup(ecmaNode, {
    rollup: {
        entry: 'main.js',
        sourceMap: 'inline',
        targets: [{
            format: 'iife',
            dest: 'main.js',
        }],
    }
});

module.exports = ßmerge([
    htmlNode,
    scriptNode,
]);
