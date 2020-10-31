// 柯里化就是把接受「多个参数」的函数变换成接受一个「单一参数」的函数，并且返回接受「余下参数」返回结果的一种应用。
//
// 思路：
//
// 判断传递的参数是否达到执行函数的fn个数
// 没有达到的话，继续返回新的函数，并且返回curry函数传递剩余参数
// 柯里化就是把接收多个参数的函数变换成接收一个单一参数的函数,并且返回接收余下参数 返回结果的一种应用
//
// let currying = (fn, ...args) =>
//   fn.length > args.length ?
//     (...arguments) => currying(fn, ...args, ...arguments) :
//     fn(...args)

// let currying = (fun, ...args) => fn.length > args.length ? (...arguments) = currying(fn, ...args, ...arguments) : fn(...args)

// let currying = (fn, ...args) =>
//   fn.length > args.length ?
//     (...arguments) => currying(fn, ...args, ...arguments) :
//     fn(...args)
//
// let addSum = (a, b, c) => a+b+c
// let add = currying(addSum)
// console.log(add(1)(2)(3))
// // console.log(add(1, 2)(3))
// // console.log(add(1,2,3))
// console.log(add(1)(2))

// 这是一个直接实现
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function() {
    // 参数在这里 操作
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    // 真正的方法在这里写, 最终拿到所有的参数
    return _args.reduce(function (a, b) {
      return a + b;
    });
  }
  return _adder;
}

console.log(add(1)(2).toString())
