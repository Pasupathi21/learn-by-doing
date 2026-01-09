const newSet = new Set()
const input = { lang: "JS", detail: { framework: ["Angular", "Vue", "NextJS"]} }
newSet.add(input)
newSet.add(input)  // Adding duplication with same object (same reference)

console.log("Set", newSet)

// Weak Set
const newWeakSet = new WeakSet()
const wkInput = { lang: "Type script" }
newWeakSet.add(wkInput)
newWeakSet.add(wkInput)

console.log("newWeakSet", newWeakSet)

