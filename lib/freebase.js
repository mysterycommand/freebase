const path = require('path');

const ßmerge = require('broccoli-merge-trees');
const ßrollup = require('broccoli-rollup');
const ßstew = require('broccoli-stew');

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
        return ßmerge([
            files,
        ]);
    }
};