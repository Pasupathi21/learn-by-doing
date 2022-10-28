// Reduce method
const data = require('../practices/data/dummy-data.json')

// Using Reduce method Array
let total = 0
const finalResult = data.products.reduce((acc, cur, index, arr) => {
    total += (cur.stock * cur.price)
    if(data.products.length -1  == index){
        data.products[0].stkMul = total;
        return arr
    }
    
});
console.log("Ans: ", finalResult);