let input_one = ['aba', 'cdc', 'eae']

let input_two = ['aaa', 'aaa', 'aaa']

function uncommonStrLength(input){
    let uncommon_arr = []
    let prev_letters = []
    for (let i =0; i < input?.length; i++) {
        let is_uncommon_subseq = true
        element = input[i]?.split("")
        for (let j = input?.length - 1; j != i; j--) {
            let split_el = input[j].split("")
            console.log("split_el >>>>>", split_el, element)
            if (element.some(s => split_el.includes(s)) || prev_letters.some(s => split_el.includes(s))) {
                is_uncommon_subseq = false
            }
        }
        prev_letters.push(...element)
        if (is_uncommon_subseq) uncommon_arr.push(...element) 
            
    }
    return uncommon_arr.length
}

console.log(uncommonStrLength(input_two))