let value = 0;
const interVal = setInterval(function () {
    console.log(`${value += 1}`)
    if( value === 4) clearInterval(interVal)
    
}, 2000)
setTimeout(function () {
    interVal
}, 2000)
console.log()