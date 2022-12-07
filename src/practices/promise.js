/**
 * @description 'Promise' constructor
 * Using class based promise
 */
const util = require('util')
const fs = require('fs');

class TestPromise {
    constructor() {
        //
    }

    promiseWithThreeStatus(checkStatus) {
        switch (checkStatus) {
            case 'pending':
                return new Promise((resolve, reject) => {
                    // We are not reject or resolve the promise
                })
            case 'fullfilled':
                return new Promise((resolve, reject) => {
                    // This time promise completed
                    resolve({ message: 'resolved' })
                })
            case 'rejected':
                return new Promise((resolve, reject) => {
                    //When promise is rejected certain scenario we will definately use 'catch' block
                    reject({ message: 'Promise rejected ' })
                })
        }
    }

    convertCallBackToPromise(cb) {
        // Node util package is helps to convert the normal callback function to promise
        return util.promisify(cb)
    }
}

/**
 * CASE 1: Promise have a three status
 *  1) pending
 *  2) fullfilled
 *  3) rejected
 * 
 * CASE 2: Promsie chain
 *  1) What will happen if promise is not fullfilled, then we will use promise chain method
 *      1)pending     -> this state then and catch block not executed 
 *      2)fullfilled  -> First then block only called, other chaining then block not execuetd 
*                        If we want to execute the all then block we need to RETURN the value from each then block end 
 *      3)rejected    -> In rejected state chaining catch block not working only one catch block executed.
 * 
 * CASE 3: Async and Await
 *      1) pending -> if promise is not completed, await is not executed the next line of the code. 
*       2) fullfilled -> await helps to avoid the nested then block or chaining then block
        3) rejected -> Use function level try-catch block to catch the error

   CASE 4: Promisify normal  callback to promise


 * // NOTE
 *  1) Whole 'try-catch' block not work for the individual 'promise', 
 *     We can only use the separate 'then - catch' block (or) function scope try-catch block
 */

const promisSatus = ['pending', 'fullfilled', 'rejected']


const testPromise = new TestPromise();
// 1) CASE 1
// const testPromOne = testPromise.promiseWithThreeStatus(promisSatus[2]);
// console.log(testPromOne)
// testPromOne.then((data) => {
//     console.log('THEN: ', data);
// })
// .catch((error) => {
//     console.log('CATCH: ', error);
// })

//2) CASE 2:
// const testPromTwo = testPromise.promiseWithThreeStatus(promisSatus[1])
// testPromTwo.then((one) => {
//     console.log('THEN ONE: ', one)
//     return one
// })
// .then((two) => {
//     console.log('THEN TWO: ', two)
// })
// .then((three) => {
//     console.log('THEN THREE: ', three)
// })
// .catch((errOne) => {
//     console.log('CATCH ONE: ', errOne)
//     return errOne
// })
// .catch((errTwo) => {
//     console.log('CATCH ONE: ', errTwo)
// })

//3) CASE 3:
// Using IIFE 
// (async function () {
//     try {

//         const promcallOne = await testPromise.promiseWithThreeStatus(promisSatus[0])
//         console.log('PROMISE fullfilled')
//         // console.log(promcallOne);
//     } catch (err) {
//         console.log('ASYCN CATCH: ', err)
//     }
// })()

//4) CASE 4: 

// 1) Call back 
function simpleFunction(paramOne) {
    paramOne.map(el => el * 2)
    return cbFunc(paramOne.map(el => el * 2))

}

// const cbValue = simpleFunction([1, 2, 3, 4], function(param) {
//     return param.map(el => el - 1)
// })

// console.log('cbValue: ', cbValue);

// 2) Promisify

function simpleFunctionTwo(paramOne) {
    paramOne.map(el => el * 2)
}
const promisified = util.promisify(simpleFunctionTwo)
const result = async (arr) => {
    try{
        console.log(Promise.allSettled([promisified(arr)]))
        // const resValue = await promisified(arr).then(d => console.log("d, d"))
        // return resValue.map(el => el -1)
    } catch(e) {
        console.log(e)
    }
}

console.log('result', result([1, 2, 3, 4]))



// function print(p) {
//     console.log(p)
// }
// const convertProm = util.promisify(print)
// console.log(convertProm)
// convertProm([1, 2, 3, 4]).then(d => console.log('convertProm', d))

