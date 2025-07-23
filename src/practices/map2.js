const map = new Map()
let obj = { test_key: 'test value'}
map.set(obj, () => console.log('this is from Map'))
console.log(map.size)
console.log(map.get(obj)())

const wm = new WeakMap()
let newObj = {"dummy_key": [] }
wm.set(newObj, () => console.log("this is from WeakMap"))

console.log(wm.get(newObj)())

const arr = [{obj: 'object'}, null, undefined, '']
