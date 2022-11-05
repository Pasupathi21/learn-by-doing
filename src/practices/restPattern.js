// rest pattern in using function argument
// Rest patter combine the rest of aruguments to Array
// REST PATTERN should be define the last parameter of the function

function restPtn(argOne, ...restArg){
    console.log(restArg)
    console.log(`Position: ${argOne}, Skills: ${restArg}`);
}

restPtn('Software engineer', 'Node js ', 'Angular', 'MySQL', 'Mongo DB')

// process.argv -> To access the terminal commads
// console.log(process.argv)