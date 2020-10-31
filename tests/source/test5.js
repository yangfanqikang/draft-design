// const date = ()=> this.time = new Date().getTime()
// console.log(date())
let time = null
window.setInterval(()=> time = new Date().getTime(), 1000)

console.log(time)
