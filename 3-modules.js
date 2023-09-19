// CommonJS, every file is a module by default
// Modules - Encapsulated code (only share minimum)

const names = require('./4-modules1');
const sayHi = require('./5-modules2');
const data = require('./6-alt-modules');

require('./7-mindGrenade');
console.log(data);
console.log(names);

sayHi(names.aryan);
sayHi(names.anchut);