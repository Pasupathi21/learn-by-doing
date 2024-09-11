const logFn = (value) => {
    console.log(`Printed value:  ${value}, at ${Date.now()}`)
}

const delay = function (cb, duration = 200, ...argument) {
    let timeout;
    return () => {
        clearTimeout(timeout)
        // execution function context
        const ctx = this
        timeout = setTimeout(() => cb?.apply(ctx, argument), duration)
        console.log("timeout", timeout)

    }
}
Array(10).fill({}).forEach((e, i) => delay(logFn, 1000, i)())
// delay(logFn, 400, "fsdcdsc")
// delay(logFn, 400, "JNJNJIB")
// delay(logFn, 400, "9ioe9j")
// delay(logFn, 400, "fsdcdsc")