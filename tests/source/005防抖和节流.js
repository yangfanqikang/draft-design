/**
 * 节流 throttle,规定在一定时间内,只能触发一次函数,如果这个单位时间触发多次函数,只有一个生效
 * 1.scroll滚动事件,每隔
 * 2.input输入框
 * 节流重在加锁,
 * 一开始就延迟2s后执行,2s内
 */
const _ = require('lodash')
function throttle(fn, delay) {
  // fn(delay)
  let flag = true; let timer = null
  // return function(){
  //   fn(delay)
  // }
  return function(...args) {
    const ctx = this
    // flag = need , 如果不需要,打断
    if (!flag) return
    flag = false
    // 存在就清除
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(ctx, arguments)
      // fn()
      flag = true
    }, delay)
  }
}
throttle(handle, 2000)()

// _.times(10, throttle(x(), 2000)())
// throttle(() => {
//   console.log('>>>>>')
// }, 2000)()
// function x(){
//   console.log('XXXXXXXX')
// }
// 给函数名没有用,得给执行函数
// throttle(x(), 1000)
function throttle2(func, delay) {
  var prev = Date.now()
  console.log('>>>>>>', prev)
  return function() {
    var context = this
    var args = arguments
    var now = Date.now()
    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
      console.log('>>>>if', prev)
    }
  }
}
function handle() {
  console.log('>>>>>>>handle')
}
throttle2(handle, 2000)()
// 用时间戳的关键理解在于, return function

// _.times(10, throttle2(handle(), 2000))
// let x = throttle2(handle, 2000)

// function debounce(fn, delay){
//   let timer = null
//   return function(...args){
//     let ctx = this
//     timer && clearTimeout(timer)
//     timer = setTimeout(()=>{
//       fn.apply(ctx, args)
//     },delay)
//   }
// }
// let de = debounce(handle, 2000)
// de()
// _.times(100, de())
// 防抖的概念相当于电梯,每次点击都重新计算
