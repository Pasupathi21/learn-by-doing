/**
 * @description
 * Function Expression returning methods test
 * If you want to RETURN the value from the Function Expression syntax with using of 
 *    curly barces '{}', then tells to explicitly RETURN KEYWORD in the FUNCTION EXPRESSION SYNTAX (or)
 *    otherwise it return the UNDEFINED value.  
 */

const thisExpReturn = value => value 
const thisExpNoReturn = value => { value }
const thisExpAlsoReturn = value => { return value }


console.log(thisExpReturn('Yes retun'))
console.log(thisExpNoReturn('No retun'))
console.log(thisExpAlsoReturn('Yes retun'))