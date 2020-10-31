const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, {
  name: 'name1',
  id: 1
}, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }]
const result = []
// arr.forEach(item => {
//   !result.some(v => JSON.stringify(v) === JSON.stringify(item)) && result.push(item)
// })
// [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]

arr.forEach(item => {
  result.every(v => JSON.stringify(v) !== JSON.stringify(item)) && result.push(item)
  // !result.some(v => JSON.stringify(v) === JSON.stringify(item)) && result.push(item)
})

console.log('', result)
