// Reduce method
const data = require('../practices/data/dummy-data.json')

// console.log("Data", data)

const finalResult = data.products.reduce((acc, cur) => {
    console.log(`Accumulator ${acc}, Current ${cur}`);
}, {});