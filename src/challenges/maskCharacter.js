/**
 * This function should mask all character except First and Last letter of the string and accepts string only
 * @param input string
 * @returns string
 */
// fssdffds sfsdg
// fsdfdffdgfg
function maskLetters(input) {
    if (input && typeof input !== 'string') return input
    const split_char = input.split('')
    return split_char.map((c, i) => (i !==0 && i+1 !== split_char.length && /^[A-Za-z]+$/.test(c)) ? '*' : c ).join('')

}

console.log(maskLetters('fss@#%^ ()&) &(( dffd^^s sfsdg'))
