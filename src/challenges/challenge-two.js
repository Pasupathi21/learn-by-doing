function rotateString(inputStr, number) {
    if (inputStr.length > number) {
        const splittoArray = inputStr.split('');
        return [
            ...splittoArray.splice(number),
            ...splittoArray].join('');
    }else{
        return console.warn('Rotate number exceed...')
    }
}
console.log('Output: ', rotateString('JavaScript', 16))
