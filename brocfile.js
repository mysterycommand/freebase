const Freebase = require('./lib/freebase');
module.exports = (new Freebase(__dirname)).toTree();