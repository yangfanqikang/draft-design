// bind它并不是立马执行函数，而是有一个延迟执行的操作，就是生成了一个新的函数，需要你去执行它👇

Function.prototype.myBind = function() {
  let [one, ...args] = [...arguments]
  one = Object(one) || window
  let fn = Symbol()
  one[fn] = this
  return () => {
    return one[fn](...args)
  }
}

// 测试用例
let cc = {
  name : 'TianTian'
}
function say(something,other){
  console.log(`I want to tell ${this.name} ${something}`);
  console.log('This is some'+other)
}

say.myBind(cc, 'zzz', 'cz')()

function learn(){
  // console.log('>>>>>>>')
  return function(){
    console.log('>>>>>>')
  }
}
// learn()()
