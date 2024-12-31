// JS default Map Data 
// map is a object with set of key-value pairs, Map can be store any type of data (primitive and reference)

const map_one = new Map()


// add keys
map_one.set("lang", "Java Script")

// find size
console.log("Size of map_one object", map_one.size)

// read values
console.log("Get value", map_one.get("lang"))


// storing reference types

const map_two = new Map()

map_two.set("info", {"created_at": new Date().toISOString(), "updated_at": new Date().toISOString()})
map_two.set("meta", "No value")
console.log("map_two", map_two)
// check key is exist or not
console.log("Is 'info' there in map_tow", map_two.has("info"))

console.log("Remove key from Map")
map_two.delete("meta")
console.log("map_two", map_two)

console.log("keys of map_two", map_two.keys())
console.log("values of map_two", map_two.values())
console.log("entries of map_two", map_two.entries())

// clear map
map_two.clear()
console.log("value cleard from map_two", map_two)