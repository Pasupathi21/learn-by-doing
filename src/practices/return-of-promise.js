async function One() {
    return Promise.resolve("Resolved")
}

async function Two() {
    return await One()
}

async function mainFn() {
    return Two()
}

console.log(await mainFn())