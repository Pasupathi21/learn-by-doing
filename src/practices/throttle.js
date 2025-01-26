function throttel(cb, timeLimit){
    let inThrottle = false
    return function (...args) {
        if (!inThrottle) {
            inThrottle = true
            cb.apply(this, args)
            setTimeout(() => inThrottle = false, timeLimit)
        }
    }
}

const call_th = throttel((time) => console.log(time), 100)

call_th(Date.now())
call_th(Date.now())
call_th(Date.now())
call_th(Date.now())

setTimeout(() => call_th(Date.now()) ,200)
setTimeout(() => call_th(Date.now()) ,1300)
setTimeout(() => call_th(Date.now()) ,1400)
setTimeout(() => call_th(Date.now()) ,2500)