//Closure
/*
A 'Function' can access the outside the scope of the variable is called a 'closure'
*/

const isClosure = true;

const fistLevelFunction = (funNAme) => {
    let closureCount = 0; 
    if(isClosure){
        console.log(`FROM ${funNAme} : Closure works ✌😀 -> ${ closureCount += 1}`)
    }else{
        console.log(`FROM ${funNAme} : Closure not worked 🙄🙁 -> ${closureCount}`)   
    }
    return function(funNAme){
        if(isClosure){
            console.log(`FROM ${funNAme} : Closure works ✌😀 -> ${closureCount++}`)
        }else{
            console.log(`FROM ${funNAme} : Closure not worked 🙄🙁 -> ${closureCount}`)   
        }
    }
}


fistLevelFunction('First Level')('Second Level');
