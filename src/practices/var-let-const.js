/**
 * @description Difference let, var and const
 * There are three keywords are used to declare the variables in JS
 *            |      Scope      |    Support Hoisting  |  Support Re-Declare 
 * var          Function            YES                     YES
 * let           Block               NO                      YES
 * const         Block               NO                       NO     
 */

try {
    scopeOfVariable = () => {
        {
            // Block One

            let initialIncrementValue = 10;
            const initialDecrementValue = 1;
            {
                //Block Two

                var finalVal =  0 + initialIncrementValue; 
                
            }
            finalVal -= initialDecrementValue;
        }

        console.log('var value', finalVal);
        // console.log('let value', initialIncrementValue);
        // console.log('const value', initialDecrementValue);
    }

    scopeOfVariable()

    var scopeOfVariable    

} catch (error) {
    console.log('💥: ', new Error(error).message)
}
