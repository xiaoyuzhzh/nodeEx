console.log('a starting');
exports.done = false;
var b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
console.log('in a , a\'s parent is ' + module.parent.filename)//父模块是第一次调用该模块的模块，可以用来检测代码