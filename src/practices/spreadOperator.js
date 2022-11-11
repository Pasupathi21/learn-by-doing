/**
 * @description
 * JavaScript 'Object.assign' or ES6 'SPREAD OPERATOR' working as same
 * Only first level of the objects are coping deeply
 * Nested level objects are shallow copies only it affects, when we overwrite the value of the objects
 */



const originalObj = {
    level: 1,
    bookName: 'Heart of the sea',
    rating: '7/10',
    avalableCities: {
        level: 2,
        cities: [
            {
                name: 'LA',
                price: '$99'
            },
            {
                name: 'UK',
                price: '$99'
            }
        ]
    }
    // Duplicate key add
}

const copyObj = Object.assign({}, originalObj);
// cosnst copyObj = { ...originalObj };

copyObj.bookName = 'Balck water'
copyObj.avalableCities.cities[1].name = 'NY'
console.log("Original LEVEL 1: ", originalObj);
// console.log("Original LEVEL 1: ", copyObj);

// console.log("Copy DEEP: ", copyObj.avalableCities.cities)
// console.log("Original DEEP: ", originalObj.avalableCities.cities);

/********************************DUPLICATE KEYS********************************************/

/**
 * @description
 * Duplicate key add
 * If duplicate key added, then only last key it takes
 */

 const duplicateKeyObj = { ...originalObj, bookName : 'Warriors sound' };
 console.log("duplicateKeyObj LEVEL 1: ", duplicateKeyObj);
