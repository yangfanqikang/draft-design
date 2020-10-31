// function add() {
//   // 第一次执行时，定义一个数组专门用来存储所有的参数
//   var _args = Array.prototype.slice.call(arguments);
//
//   // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//   var _adder = function() {
//     _args.push(...arguments);
//     return _adder;
//   };
//
//   // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//   _adder.toString = function () {
//     return _args.reduce(function (a, b) {
//       return a + b;
//     });
//   }
//   return _adder;
// }
//
// console.log(add(1)(2).toString())

function add(a,b){
  return a+b
}
// 变为
function curry(fn){
  var firstArgs=Array.prototype.slice.call(arguments,1)  //这里，arguments的第一个参数是fn,所以从1开始
  var _cur=function(){
    var nextArgs=[...arguments]
    var allArgs=firstArgs.concat(nextArgs)
    return fn.apply(this,allArgs)
  }

  return _cur
}
var add1=curry(add,10)
console.log(add1(10)(20)) //20
// add1(20) //30
