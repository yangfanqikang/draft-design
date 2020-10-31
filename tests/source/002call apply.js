/**
 * 改变this指向，唯一区别就是传递参数不同👇
 * @returns {*}
 */
Function.prototype.myCall = function() {
  // 1.解构第一个参数,为指向作用域, 第二个参数为剩余部分,这里需要组合成数组,不加展开运算符,拿不到剩下的参数,
  let [thisArg, ...args] = [...arguments]
  // 2.转换为对象,如果不行,就指向全局作用域
  thisArg = Object(thisArg) || window
  // 3.取出唯一symbol值,作为对象键值,将整个函数的this赋值给它,然后调用后的结果为result,删除之后返回
  const fn = Symbol()
  // 把当前函数给对象
  thisArg[fn] = this
  let result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}

Function.prototype.myApply = function(){
  // 这里拿参数的区别是,第二是数组,这里本来就两个参数
  let [firstObj, args] = [...arguments]
  firstObj = Object(firstObj)|| window
  const fn = Symbol()
  firstObj[fn] = this
  let result = firstObj[fn](...args)
  delete firstObj[fn]
  return result
}

// 测试用例
const cc = {
  a: 1
}

function demo(x1, x2) {
  console.log(typeof this, this.a, this)
  console.log(x1, x2)
}
demo.myCall(cc, 33, 44)
demo.call(cc,33,44)

demo.myApply(cc, [55, 66])

