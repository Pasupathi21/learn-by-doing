/**
 * Use ES6 and functional coding
 */

let input = [
    {
        name: 'John', age: 21, city: 'New York'
    },
    {
        name: 'Mike', age: 28, city: 'Mascow'
    },
    {
        name: 'Danny', age: 21, city: 'London'
    },
    {
        name: 'Lisa', age: 21, city: 'Paris'
    },
    {
        name: 'Sophie', age: 21, city: 'New York'
    }
];


function extractProps (array, prop) {
    const extractValue = array.map(item => item[prop]);
    return extractValue;
}

console.log("Output: ", extractProps(input, 'name'));