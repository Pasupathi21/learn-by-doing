//Closure
/*
A 'Function' can access the outside the scope of the variable is called a 'closure'
*/

const isClosure = true;

const fistLevelFunction = (funNAme) => {
    if(isClosure){
        console.log(`FROM ${funNAme} : Closure works ✌😀`)
    }else{
        console.log(`FROM ${funNAme} : Closure not worked 🙄🙁`)   
    }
    return function(funNAme){
        if(isClosure){
            console.log(`FROM ${funNAme} : Closure works ✌😀`)
        }else{
            console.log(`FROM ${funNAme} : Closure not worked 🙄🙁`)   
        }
    }
}


fistLevelFunction('First Level')('Second Level');
