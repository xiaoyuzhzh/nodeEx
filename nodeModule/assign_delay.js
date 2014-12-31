//原版的延迟赋值代码
//setTimeout(function() {
//  module.exports = { a: "hello" };
//    console.log('I said hello !!!');
//}, 10);

setTimeout(function() {
  module.exports.ob = { a: "hello" };
    console.log('I said hello !!!');
}, 10);