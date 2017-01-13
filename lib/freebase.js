const path = require('path');

const ßmerge = require('broccoli-merge-trees');
const ßrollup = require('broccoli-rollup');
const ßstew = require('broccoli-stew');

const typescript = require('rollup-plugin-typescript');
const tsc = require('typescript');

module.exports = class Freebase {
    constructor(root, options) {
        this.root = root;
        this.options = options;
        this._setup();
    }

    _setup() {
        this.trees = {
            source: path.join(this.root, 'source'),
            static: path.join(this.root, 'static'),
        };
    }

    toTree() {
        const files = ßstew.find(this.trees.static, { include: [
            '*.{html,txt}',
        ]});

        const scripts = new ßrollup(this.trees.source, {
            rollup: {
                entry: 'main.ts',
                plugins: [
                    typescript({ typescript: tsc }),
                ],
                targets: [{
                    dest: 'main.js',
                    format: 'iife',
                }],
            },
        });

        return ßmerge([
            files,
            scripts,
        ]);
    }
};