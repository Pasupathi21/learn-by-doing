console.log('----------Number-----------------')

console.log(1 === true) // false
console.log(1 == true) // true -> typecast

console.log('----------Null-----------------')

console.log(null === null) // true
console.log(null == undefined) // true -> typecast

console.log('-----------Undefined----------------')

console.log(undefined === null) // false - strict checking
console.log(undefined == null) // true -> typecast

console.log('-----------Ref Array----------------')

// Referene check
const arr = [1, 2, { key: "value"}, { key: "value"}]
console.log(arr[0] == 1) // true -> Primitive
console.log(arr[0] === 1) // true -> Primitive

console.log(arr[2] === arr[3]) // false -> checking with refernce