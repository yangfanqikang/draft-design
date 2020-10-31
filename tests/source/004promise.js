Promise.myAll = function(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      return resolve([])
    } else {
      const res = []; let count = 0
      for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] instanceof Promise)) {
          res[i] = arr[i]
          if (++count === arr.length) resolve(res)
        } else {
          arr[i].then(data => {
            res[i] = data
            if (++count === arr.length) resolve(res)
          }, err => {
            reject(err)
          })
        }
      }
    }
  })
}
Promise.myRace = function(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] instanceof Promise)) {
        Promise.resolve(arr[i].then(resolve, reject))
      } else {
        arr[i].then(resolve, reject)
      }
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11)
  }, 2 * 1000)
})
const p2 = new Promise((resolve, reject) => {
  reject('p2>>>>>>>')
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3>>>>>>>>')
  }, 4)
})

Promise.myAll([p1, p2, 3, 4]).then(data => {
  console.log('>>>>myAll', data)
}, err => {
  console.log(err)
})

Promise.myRace([p1, p2, p3]).then(data => {
  console.log('>>>myRace', data)
}, err => {
  console.log(err)
})
