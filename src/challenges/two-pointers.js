const arr = [ 1,  2,  999,  5, 99, 34, 34, 87 ]
const target = 1000

function twoSum(input, target) {
    // input = input.sort((a, b) => a - b)
    // console.log("input >>>>", input)
    let left = 0
    let right = input?.length - 1
    let loopEnd = false
    let output = []
    let sumVal = 0
    while ((left != right) && !loopEnd) {
        if(right === 0) loopEnd = true
        console.log(left, right)
        sumVal = input[left] + input[right]
        if(sumVal === target){
            loopEnd = true
            output.push(left, right)
        }else if(sumVal < target){
            left++
        }else{
            right--
            left = 0
        }
    }
    return output

}

console.log("output: ", twoSum(arr, target))
