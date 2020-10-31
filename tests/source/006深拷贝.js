// console.log(new Map())
// const n = 0
function deepClone(obj) {
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  // 非对象就返回obj
  if (obj == null || typeof obj !== 'object') return obj
  const t = new obj.constructor()
  for (const key in obj) {
    // if (obj.hasOwnProperty(key)) {
    t[key] = deepClone(obj[key])
    // }
  }
  return t
}
// /测试用例
const obj = {
  a: 1,
  // b: 2
  b: {
    c: 2,
  },
  // d: new RegExp(/^\s+|\s$/g)
}
let i = 0
for (const objKey in obj) {
  i++
  console.log('>>>>>iiiiiii'+ i)
}
const clone_obj = deepClone(obj)
obj.d = /^\s|[0-9]+$/g
console.log(clone_obj)
console.log(obj)
