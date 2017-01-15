const ßmerge = require('broccoli-merge-trees');
const ßrollup = require('broccoli-rollup');
const ßstew = require('broccoli-stew');
const ßtslinter = require('broccoli-tslinter');
const ßtypescript = require('broccoli-typescript-compiler');

const PUBLIC_PATH = 'public';
const SOURCE_PATH = 'source';

const htmlNode = ßstew.find(PUBLIC_PATH, '**/*.html');

module.exports = ßmerge([
    htmlNode,
]);
