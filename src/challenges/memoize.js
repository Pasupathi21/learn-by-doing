// obj
// fn
// array 
let cache = new Set()
function memoize(...values) {
    let isExist = false
    let calcVal = null
    let flag = false
    for (let item of cache) {
        console.log(Array.isArray(item))
        flag = values.filter(v => item.includes(v)).length === values.length
        if (flag) {
            console.log("flag block")
            isExist = true; calcVal = item[item.length - 1][0]
        }
    }
    if (!isExist) {
        console.log('IF BLOCK >>>>>>')
        calcVal = values.reduce((a, c) => a + c, 0)
        cache.add([
            ...values,
            [
                calcVal
            ]
        ])
    }
    return calcVal
}

// console.log(memoize(2, 2, 4))
// console.log(memoize(4, 2, 2))
// console.log(memoize(1, 1, 4, 2))
// console.log(memoize(1, 1, 4, 2))
console.log(cache)

// const map = new Map()
// const val
// map.set((JSON.stringify([1, 2]), 2))
// map.set((JSON.stringify([2, 1]), 2))
// console.log("map >>>", map)
// map.has()
