function throttle(fn, delay) {
  let flag = true,
    timer = null
  return function(...args) {
    let context = this
    if(!flag) return

    flag = false
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context,args)
      flag = true
    },delay)
  }
}
throttle(()=>{
  console.log('>>>>>>>>>')
}, 2000)()
