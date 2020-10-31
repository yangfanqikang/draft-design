const obj = {
  a: 1,
  b: {
    c: {
      x: 2,
      y: 3
    },
    d: {
      z: 4
    }
  },
  e: [1, 3, 4],
  d: new RegExp(/^\s+|\s$/g)
}

console.log(obj.b.constructor(), obj.constructor())

// console.log(obj.constructor.hasOwnProperty(obj.b.constructor()))
// console.log(obj.b.constructor() instanceof obj.constructor())
// console.log(obj.constructor().includes(obj.b.constructor()))
