async function API(input){
    // console.log("API Response:", input)
    return input
}

function debounce(cb, timeout = 100){
    let canSkipTimeout;
    let response = null;
    return async (...args) => {
        return new Promise((rs, rj) => {
            if (canSkipTimeout) {
                clearTimeout(canSkipTimeout)
                rs(response)
            }
            canSkipTimeout = setTimeout(() => response = rs(cb(...args)), timeout)
        })
        
    }
}
(async function () {
    const DebounceApi = debounce(API, 100)
    const result = await Promise.all(Array(10).fill({}).map((_, i) =>  DebounceApi(i)))
    console.log(result)
})()