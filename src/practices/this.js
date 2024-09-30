// in node js 'this' context

// manually set the property into the current context for this (module.exports)
module.exports.testVar = "1000000"

console.log(this) // return empty object -> {}

// fn expression
const fnExpression = () => {
    console.log('Function expression context', this) // return empty object -> {}
}
fnExpression.apply(this)

// declaration
function fnDeclaration () {
    console.log('Function declaration', this)  //return global object form Node
}
fnDeclaration()

function ConstructorFn() {
    /**
     * In constructor function returns object with some set of pros(if you defined in that function) or otherwise returns empty object
     *  */ 
    console.log("Constructor function", this) 
}
new ConstructorFn()

console.log(this)
const testVar = 10
