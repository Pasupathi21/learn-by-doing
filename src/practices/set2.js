
const newSet = new Set()
let input = { lang: "JS", detail: { framework: ["Angular", "Vue", "NextJS"]} }
newSet.add(input)
newSet.add(input)  // Adding duplication with same object (same reference)
// assign value as null
input = null

console.log("Set", newSet)

// Weak Set
const newWeakSet = new WeakSet()
let wkInput = { lang: "Type script" }
newWeakSet.add(wkInput)

let copywkInput = wkInput
copywkInput = undefined
console.log("newWeakSet", newWeakSet)

