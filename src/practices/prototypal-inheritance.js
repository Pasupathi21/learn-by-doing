/**
 * @description Prototypal Inheritance
 * Works on Browser
 * 
 */

/** Root level 'prototype' access 
 * These are Default own properties
*/
// Function 
Function.prototype

// Object
Object.prototype

//Array
Array.prototype


/**
 * When we create new 'Object' or 'Array' 
 * Then we will access methods through the '__proto__'
 * JavaScript Engine add '__proto__' property for Each Objects and Array
 */

// Two types, We can access the 'prototype' methods

let jsArray = ['JS', 'TS'];

// Prototype method Indirect
jsArray.prototype.map(e => console.log(e));

// Direct method
jsArray.map(e => console.log(e))

/** Prototypal Inheritance not same as Classical Inheritance 
 * Array -> __proto__ -> __proto__ -> No prototype connection ('null')
 * step (1):  Array is user Defined Data type
 * step (2):  __proto__ is property added for the JS Engine that contains all required Array Methods
 * step (3):  __proto__ this is last or root level 'proto' it containe 'Object' property (JS is an "Object based prototype Scripting language") 
 * step (4): When reached the root level "proto" then no connection are there , You access the __proto then only return 'null'
 */ 

/**
 * We will add the new Function or Value to the 'proto'
 */

let newObj = {
    name: 'No Name',
    age: 0
};

newObj.__proto__.newProp = 'We will add the Functions or Normal values'

/**
 * newProp not directly available in the newObj
 * JS finds first 'newObj (Not exist, then go to the deeper) -> __proto__ (exist) 
*/

console.log(newObj.newProp)