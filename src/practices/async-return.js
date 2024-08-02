'use strict' 

const testAsync = async () => {
    try{

        // throw new Error("error...")
        return {
            message: 'success'
        }
    }catch(e){
        return Promise.reject({
            message: 'error'
        })
    }
    
}
testAsync().then(r => console.log("response", r)).catch(e => console.log("error", e))
// console.log(testAsync())
// console.log())