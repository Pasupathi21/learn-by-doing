/**
 * @description Hoisting
 * Hoisting is the process in javascript move the declaration or definition part of function 
 * variable or classes to the top of the scope
 * Three types in Hoisting
 * 1) Variable
 * 2) Function
 * 3) Class
*/

/*

 Sample of Interpreter declare the code
 =========================================================================================

 //---------------------------  Variable Hoist--------------------
 var a ;
 var b ;
 var c ;
 var varHoist =  {
    console.log('Var: ', a) // Var deosn't throw errors
    console.log('Let: ', b) // This trows Uncaught Reference Error
    console.log('Const: ', c); // This trows Uncaught Reference Error
}

varHoist()

a;
b;
c = 10

//------------------------- Function Hoisting ---------------------

var fun;  ---------------> Undefined
var fun1 = {
    console.log('Function Declaration');
};
 fun(); ----------------> Invoking throws ERROR
 fun1();


 =========================================================================================

*/



//---------------------------  Variable Hoist--------------------
function varHoist() {
    console.log('Var: ', a) // Var deosn't throw errors
    console.log('Let: ', b) // This trows Uncaught Reference Error
    console.log('Const: ', c); // This trows Uncaught Reference Error
}

// varHoist();

var a; // Only declaration
let b; // Declare
const c = 10; // Declare and Initialize


//------------------------- Function Hoisting ---------------------

// 1) Function Expression (Throws Error)
fun();// This throws Uncaught Reference Error, Because of we invoke the function before initializing

const fun = () => {
    console.log('Function Expression')
}

//2) Function Declaration 
fun1();

function fun1() {
    console.log('Function Declaration');
}
 

