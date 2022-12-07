/**
 * @description Return value checking
 */

try{

    function normaFunction(expression) {
        switch (expression) {
            case 'primitive':
    
                return 'String'
            case 'reference':
                return {}
            case 'async':
                //ASYC function always return the 'Promise' object 
                return (async function() { return })()    
            case 'promise':
                //Promise constructor return 'Promise' object
                return new Promise((resolve, reject) => {
                    resolve()
                })
            default:
                return
    
        }
    }
    
    async function asyncTest() {
        return 10
    }
    
    console.log('Return type: ', normaFunction('promise'));

}catch(error) {
    console.error('ERROR :', error)
}


