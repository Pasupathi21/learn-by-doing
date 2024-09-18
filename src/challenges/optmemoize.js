const cache = new Map()
function memoize(...values){
    const key = JSON.stringify(values.sort())
    if(cache.has(key)) return cache.get(key)
    console.log("not cached")
    cache.set(key,values.reduce((a, c) => a+c, 0))
    return cache.get(key)
}

console.log(memoize(1, 2, 4, 5))
console.log(memoize(5, 4, 2, 1))
