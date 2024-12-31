// Set is a object collection of values, set don't allow any duplicate values
/**
 * Note:
 * Duplicates are checked by strict equality (===).
 * Only identical references are treated as duplicates; two distinct objects are always considered unique, even if their contents are identical.
 */

const set_one = new Set([20, "20", 20])


// adding values to set
set_one.add({"key": 12})
// add duplicates
set_one.add({"key": 12})
console.log("set_one", set_one)

const set_dup = new Set()
// duplication in set
// two distinct object (same value with different reference)
const obj_one = {"foo": "bar"}
const obj_two = {"foo": "bar"}
set_dup.add(obj_one)
set_dup.add(obj_two)

// single object (means one reference)
const obj_three = {"bar": "foo"}

// same reference adding two times
set_dup.add(obj_three)
set_dup.add(obj_three)
console.log(set_dup)

console.log(set_dup.size)
console.log(set_dup.has({"bar": "foo"}))