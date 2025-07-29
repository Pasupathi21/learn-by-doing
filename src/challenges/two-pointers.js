const arr = [ 1,  2,  5,  5, 6, 34, 34, 87 ]
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
        sumVal = input[left] + input[right]
        if(sumVal === target){
            loopEnd = true
            output.push(left, right)
        }else if(sumVal < target){
            left++
        }else{
            right++
        }
    }
    return output

}

console.log("output: ", twoSum(arr, target))
