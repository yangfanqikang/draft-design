const arr = [1, [2, [3, [4, 5]]], 6];
console.log(arr.flat(Infinity))
console.log(JSON.stringify(arr).replace(/\[|\]/g, '').split(','))
console.log(JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']'))
