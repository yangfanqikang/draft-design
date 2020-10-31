class MyPromise {
  constructor(fn) {
    this.status = 'pending'
    this.value = ''
    this.resovedArr = []
    this.rejectyedArr = []
    try {
      fn(this.resolved.bind(this), this.rejected.bind(this))
    } catch (e) {
      this.rejected(e)
    }
  }
  resolved(r) {
    if (this.status === 'pending') {
      this.status = 'fulfilled'
      this.value = r
      this.resovedArr.map((cb) => cb(this.value))
    }
  }
  rejected(r) {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.value = r
      this.rejectyedArr.map((cb) => cb(this.value))
    }
  }
  then(fulfilled, rejected) {
    if (this.status === 'pending') {
      this.resovedArr.push(() => {
        fulfilled(this.value)
      })
      this.rejectyedArr.push(() => {
        rejected(this.value)
      })
    }
    if (this.status === 'fulfilled') {
      fulfilled(this.value)
    }
    if (this.status === 'rejected') {
      rejected(this.value)
    }
  }
}
const a = () => {
  throw new Error('99')
}
const res = new Promise((resolved, rejected) => {
  console.log('45')
  setTimeout(() => {
    console.log('47')
  }, 0)
  a()
  resolved(50)
  console.log(53)
})
// const res1 = new Promise((resolved, rejected) => {
//   rejected(23455)
// })
// const res2 = new Promise((resolved, rejected) => {
//   rejected(3)
// })
// Promise.all([res, res1, res2]).then((r) => {
//   console.log('.....', r)
// }).catch((r) => {
//   console.log('>>>>>>', r)
// })
// Promise.race([res, res1, res2]).then((r) => {
//   console.log('59', r)
// }).catch((r) => {
//   console.log('61', r)
// })
res.then((r) => {
  console.log('......', r)
}, (we) => {
  console.log(',,,,,', we)
})
// res2.catch((r) => {
//   console.log(r)
// })

// const res3 = new MyPromise((resolved, rejected) => {
//   console.log(567)
//   resolved(345)
// })
// res3.then((r) => {
//   console.log('jireshu', r)
// })
// console.log(res3.resolved())
