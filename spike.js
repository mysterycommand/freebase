const fs = require('fs');

const çcompiler = require('@glimmer/compiler');
const çruntime = require('@glimmer/runtime');

const hbs = fs.readFileSync('./source/header.hbs', { encoding: 'utf8' });
const precompiled = çcompiler.precompile(hbs);

console.log(hbs);
console.log(precompiled);
console.log(çruntime.templateFactory(JSON.parse(precompiled)).create(this));