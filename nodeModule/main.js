console.log('Now main.js is starting');

//调出计算器模块
var calculate = require('./calculate.js');
//console.log( 'The area of a circle of radius 4 is '
//           + calculate.area(4));

//调出计算器的构造器
var constructor = require('./constructor.js');
var ca2 = constructor(4);
//console.log('The area of a direct is '+ ca2.area());


//循环引用模块的机制
var b = require('./b.js');
console.log(b.parent);
var a = require('./a.js');

//模块的直接赋值export,添加事件回调函数数组
//var ex = require('./assign_export.js');
//ex.on("ready",function(){
//    console.log("exported eventEmitter emited a event.");
//})
//
//ex.on("ready",function(){
//    console.log("exported eventEmitter emited a event3.");
//})
//
//var ex2 = require('./assign_export');
//ex.on("ready",function(){
//    console.log("exported eventEmitter emited a event2.");
//})

//模块的延迟赋值将不会起作用，官网的api上的例子是直接赋值了exports.我的理解是require()方法返回的是module下的exports所指的对象。所以，在原模块中任何延迟的赋值本质上改变了exports的对象。所以修改是无意义的。而我的版本则给exports所指的对象创建新的属性ob并且给ob赋值。可以发现ob被成功的被main.js中的delay调用出来了。当回调喊出持有正确的exports对象的时候应该是可以异步修改exports对象的值的。

//应该这样理解原版的话，修改module下的exports的实例的过程，在require()方法结束之后就不会再有效果了。加上module对象的缓存，会导致所有指向同一个module文件的只会执行一次
//var delay = require('./assign_delay');
//setTimeout(function(){
//               console.log(delay.ob.a);
//           },1000);



console.log('Now main.js is closing');