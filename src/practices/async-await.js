async function normalFunction() {
    return new Promise((resolve) => {
     setTimeout(() => {
            resolve('Hello')
        }, 1000)
    })
}

function noPromise() {
    setTimeout(() => {
        return 'Hello'
    }, 1000)
    
}

(async function() {
    console.log('Start')
    const returnValue = await normalFunction()
    let testProm = await Promise.all([noPromise()])
    console.log('Value testProm: ', testProm)
    console.log('Value: ', returnValue)
    console.log('End')
})()