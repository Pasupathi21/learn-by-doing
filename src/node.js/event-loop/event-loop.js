/**
 * @EventLoop
 * 
 * Event loop callback queue execution order
 *  TIMER CB --> I/O POLLING CB --> SET-IMMEDIATE CB --> CLOSE CB
 *  - above mentione order will execute one after another,
 *  - process.nextTick and Micro Task Queue will execute immediately right afhter the current callback execution 
 *    event loop will give the high priorty for this queue util handlng async verison of function, if we are using andy sync type 
 *    it will block the actual order execution.
 *   */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')


setTimeout(() => console.log("setTimeout 1"), 0) // --> (2)

setImmediate(() => console.log("setImmediate 1")) // --> (6)

const file_path = path.resolve(__dirname, "..", "data", "event-looop.txt")
// fs and https network call are comes under the I/O callback

fs.readFile(file_path, async (err, data) => { // --> (3) 
    console.log("I/O finished 1")

    // callback inside the callback, basically event-loop make one more iteration for execute this CB

    setTimeout(() => console.log("setTimeout 2"), 0) // --> (8)
    setTimeout(() => console.log("setTimeout 3"), 1000) // --> (9)
    setImmediate(() => console.log("setImmediate 2")) // --> (7)



    // This is high priority process, execute right afther the once I/O completion
   
    process.nextTick(() => console.log("process.nextTick"))  // --> (4) 
    console.log(await Promise.resolve("Promise value"))  // --> (5)

    /**
     * Adding some CRYPTO functin EVENT-LOOP automatically move this function to THREAD_POOL
     * In Node have 4 THREAD POOL by default, so EventLoop allocate the crypto finction to based on the availability,
     * If using Sycn verison of crypto function it will affect block the entire  order in this callback
     */ 

    // Sync 
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512",)
    console.log("pbkdf2Sync crypto function 1")
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512")
    console.log("pbkdf2Sync crypto function 1")
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512")
    console.log("pbkdf2Sync crypto function 1")
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512")
    console.log("pbkdf2Sync crypto function 1")
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512")
    console.log("pbkdf2Sync crypto function 1")
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512")
    console.log("pbkdf2Sync crypto function 1")


    // Async 

    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => console.log("crypto function 1"))

    
})

console.log("Top level code: without inside any callback") //--> (1)
